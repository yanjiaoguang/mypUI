# 跨平台兼容日志

## 跨平台一套代码输出的方式

我们一直在追求两个方面：

- 一套代码输出多端，而且是要保证良好的性能，利用各端的编译优势，比如app端选择weex；
- 一套代码，尽可能少些条件编译，不需要为了各端而写一堆条件编译；

很显然，这很难兼并。

在使用uni开发的过程中，主要有三种页面的处理方式：

- 使用页面的滚动能力（MP/H5端为page scroll，APP端nvue下其实就是scroll-view；
- 不使用页面的滚动能力，自己加scroll-view来管理；
- 条件使用，MP/H5下使用page scroll，而APP端自己管理（禁用uni自己包裹的scroll-view）；

### 页面滚动

对于大多数页面来说，满足了要求，而且搭配uni自带的一些配置项，实现刷新/加载等。开发起来也能够快速与统一。

但是页面的滚动能力以及刷新与加载能力，毕竟只是在页面上可以设置。而涉及到自定义组件的时候，或者swiper组件下的时候，滚动与刷新/加载的能力，依然需要scroll-view来支撑。

而且页面的滚动能力，在自定义导航栏下，不同的系统下拉的距离表现可能有所差异。自定义导航栏又是非常常见的设计。

页面滚动的重点就在于，对于一些独特的设计来说，最终的是处理z-index来处理层级。不过这个在app-nvue下并不支持，所以某些特殊设计，依然需要条件处理。不同的端采用不同的写法。

页面滚动实际上在MP端性能上存在优势，而且H5端也更加灵活。

### 自己管理scroll

自己管理scroll其实是开发方式最统一的一种方式，因为什么内容都是自己管理，基本上没有什么需要差异化处理的。

唯一的不同就是，MP，自定义组件之下，这个scroll-view的高度很难一路通过布局来解决，而是需要自己手动设置scroll-view的高度。APP-NVUE端不需要这样，APP-NVUE端能够完美的弹性布局下处理高度，几乎不需要手动设置list的高度。

那么，这就带来了开发的差异，MP端需要手动设置scroll-view的高度就显得开发很不友好。

不过，这个仅仅只是一个设置上的差异，好在其它元素的处理方式都是统一的。

scroll-view在MP端会有一定的性能影响，好在他可控能力强，可以搭配实现各种能力。损失一些性能也是可以接受。关键是在多端一套代码输出的前提下，个人觉得这些牺牲很值得。不需要各种配置，也不需要写一堆条件代码，纯粹的一套代码，效率上提高了很多。

不过这在H5上的效果显然是不太友好的。不过说实话，我没有使用uniapp上线过H5产品。

### 条件管理

实际上在使用页面滚动的时候，很多时候我们也不可避免的需要自己管理scroll来做滚动。

不过，我们这里说的条件管理是编译目标平台层面的条件。

MP/H5端可以使用页面滚动，而APP-NVUE端则自己处理滚动能力，不使用默认的scroll-view。

不过，这就造成了数据的刷新和加载不是同一套配置或者接口，需要分开来写。但是对于各端来说，的确是性能最佳的选择。

### 我的选择

因为我所涉及到的产品，不需要输出H5，需要兼容处理各大MP和APP平台，为了快速开发和统一调试，减少独立配置，我全部使用了自己管理scroll-view。禁用掉了所有的外层scroll。我选择的代码的统一，这样能给我带来调试的便利性和开发的效率。

目前各端产品运行良好，MP端也没有什么性能上的不足。

### 你的选择

如果你不需要H5的话，我是建议你也像我一样的，毕竟scroll-view在MP端的影响没有那么大。

而如果需要同时编译到H5，那么，还是条件编译吧，甚至不做条件编译，牺牲下APP端的性能，统一使用外层的滚动能力（这样开发统一了一些，写起来效率会提高）。

当然，条件编译实际上也没有那么繁琐。只不过就是每次都要写两套条件，个别页面可能是真的需要写两套代码。但是如果你接受来这个设定，这都不是事儿。

## 那么，如何处理mypUI

我一直在思考性能和效率的问题，也一直在试图区别谁更好，谁更重要。

后来，我也想明白了，性能还不错的情况下，保证快速开发是可取的。

毕竟，在MP端，我们也没有那么必要纠结性能，而且实际上，性能也不差。

不过，到底你选择什么方案，我们都能够为你提供支持。

mypUI 主要通过以下操作来兼容各种页面的写法。

### 页面级的滚动能力

这个时候，你不需要list类组件，因为你的滚动能力不是list给予的，是page scroll给予的。

而使用其它的组件，自然都是支持的。

当然，你也可以使用list类组件。就是滚动能力重叠了，没有必要。不过估计部分页面，你还不得不使用list类组件。比如一个popup，里面支持刷新和加载，很显然，还是离不开。

### 自己管理滚动

我们的list为您提供了非常健全的页面管理能力，各种示范都有，而且写法非常统一。

### 条件编译

既然选择了条件编译，那么条件一下list组件就可以都通用了。只需要在list的组件的前后都加上条件（指的是他的内容公用，但是list却不能在MP端显示）就OK。

比如：

```html
<!-- #ifdef APP-NVUE
<myp-list>
#endif -->
...这里是公共的内容，不需要条件
<!-- #ifdef APP-NVUE
</myp-list>
#endif -->
```

## 页面的disableScroll

在 APP-NVUE下，该操作在APP端，会禁用掉最外层uni自己包裹的scroll-view。这样我们需要自己管理页面的滚动能力。

在其它端，不会对页面元素有什么影响，不过也会在相应支持的平台禁用掉页面的滚动能力。
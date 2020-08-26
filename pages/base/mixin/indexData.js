export default {
	data() {
		return {
			items: [{
				name: '按钮',
				avatar: 'https://cdn.img.wenhairu.com/images/2020/05/23/YTafR.jpg',
				desc: '26.6万粉丝',
				content: '背景、边框、状态、图标、loading、文字等都可以快速配置。当然，包括交互效果',
				cover: 'https://cdn.img.wenhairu.com/images/2020/05/23/YOS9D.jpg',
				badge: 4,
				identity: '演奏家',
				page: 'base_button'
			}, {
				name: '输入框',
				avatar: 'https://cdn.img.wenhairu.com/images/2020/05/23/YT9eB.jpg',
				desc: '38.6万粉丝',
				content: '满足基本样式(图标/输入/提示)，提供样式定制入口。还可以格式化输入内容，验证码/密码等输入',
				cover: 'https://cdn.img.wenhairu.com/images/2020/05/23/YO76P.jpg',
				badge: 0,
				identity: '诗人',
				page: 'base_input'
			}, {
				name: '图标',
				avatar: 'https://cdn.img.wenhairu.com/images/2020/05/23/YTuQN.jpg',
				desc: '126.6万粉丝',
				content: '支持图片/字体，并且提供Python脚本工具，快速从css中提取出icons',
				cover: 'https://cdn.img.wenhairu.com/images/2020/05/23/YOcZt.jpg',
				badge: 6,
				identity: '画家',
				page: 'base_icon'
			}, {
				name: '单元',
				avatar: 'https://cdn.img.wenhairu.com/images/2020/05/23/YT1An.jpg',
				desc: '66.8万粉丝',
				content: '快速实现各种cell，四段式设计，满足大都数需求。特别复杂的cell应该考虑重新设计，而不是去修改适配。',
				cover: 'https://cdn.img.wenhairu.com/images/2020/05/23/YOgjS.jpg',
				badge: 9,
				identity: '建筑师',
				page: 'base_cell'
			}, {
				name: '宫格',
				avatar: 'https://cdn.img.wenhairu.com/images/2020/05/23/YT54T.jpg',
				desc: '76.2万粉丝',
				content: '不仅仅只是规矩的宫格，您可以利用grid快速实现各种排版。越用越灵活',
				cover: 'https://cdn.img.wenhairu.com/images/2020/05/23/YOPWC.jpg',
				badge: 7,
				identity: '灵魂画手',
				page: 'base_grid'
			}, {
				name: '标签',
				avatar: 'https://cdn.img.wenhairu.com/images/2020/05/23/YTnhG.jpg',
				desc: '166.8万粉丝',
				content: '带各种状态的标签，还提供单多选模式的示范',
				cover: 'https://cdn.img.wenhairu.com/images/2020/05/23/YOZ7s.jpg',
				badge: 2,
				identity: '厨师',
				page: 'base_tag'
			}, {
				name: '标题',
				avatar: 'https://cdn.img.wenhairu.com/images/2020/05/23/YTHDv.jpg',
				desc: '16.2万粉丝',
				content: '各种快速标题。基本满足大都数样式',
				cover: 'https://cdn.img.wenhairu.com/images/2020/05/23/YO0sR.jpg',
				badge: 3,
				identity: '歌手',
				page: 'base_title'
			}, {
				name: 'tabs',
				avatar: 'https://cdn.img.wenhairu.com/images/2020/05/23/YTQc0.jpg',
				desc: '76.3万粉丝',
				content: 'tabs，可切换当前，可自动居中。支持多种排版样式',
				cover: 'https://cdn.img.wenhairu.com/images/2020/05/23/YOIYN.jpg',
				badge: 9,
				identity: '演员',
				page: 'base_tabs'
			}, {
				name: '开关',
				avatar: 'https://cdn.img.wenhairu.com/images/2020/05/23/YTR3U.jpg',
				desc: '66.5万粉丝',
				content: '状态的切换，所有的内容都可以直接配置',
				cover: 'https://cdn.img.wenhairu.com/images/2020/05/23/YOOyB.jpg',
				badge: 3,
				identity: '说唱大师',
				page: 'base_switch'
			}, {
				name: '步进器',
				avatar: 'https://cdn.img.wenhairu.com/images/2020/05/23/YTofj.jpg',
				desc: '16.2万粉丝',
				content: 'stepper',
				cover: 'https://cdn.img.wenhairu.com/images/2020/05/23/YOTXn.jpg',
				badge: 5,
				identity: '鬼畜大叔',
				page: 'base_stepper'
			}, {
				name: '搜索框',
				avatar: 'https://cdn.img.wenhairu.com/images/2020/05/23/YT54T.jpg',
				desc: '36.9万粉丝',
				content: '大都数搜索框的样子，可以带icon，可以固定icon',
				cover: 'https://cdn.img.wenhairu.com/images/2020/05/23/YOe9T.jpg',
				badge: 3,
				identity: '歌剧演员',
				page: 'base_search'
			}, {
				name: '进度条',
				avatar: 'https://cdn.img.wenhairu.com/images/2020/05/23/YTnhG.jpg',
				desc: '116.4万粉丝',
				content: 'progress',
				cover: 'https://cdn.img.wenhairu.com/images/2020/05/23/YOOyB.jpg',
				badge: 6,
				identity: '厨师',
				page: 'base_progress'
			}, {
				name: '单/多选',
				avatar: 'https://cdn.img.wenhairu.com/images/2020/05/23/YTQc0.jpg',
				desc: '66.6万粉丝',
				content: 'radio/check',
				cover: 'https://cdn.img.wenhairu.com/images/2020/05/23/YTHDv.jpg',
				badge: 6,
				identity: '京剧大师',
				page: 'base_radio'
			}, {
				name: '倒计时',
				avatar: 'https://cdn.img.wenhairu.com/images/2020/05/23/YTuQN.jpg',
				desc: '45.3万粉丝',
				content: 'countdown。倒计时',
				cover: 'https://cdn.img.wenhairu.com/images/2020/05/23/YOIYN.jpg',
				badge: 16,
				identity: '钟点工',
				page: 'base_countdown'
			}, {
				name: 'indexList',
				avatar: 'https://cdn.img.wenhairu.com/images/2020/05/23/YTafR.jpg',
				desc: '26.6万粉丝',
				content: '右侧出现index的list',
				cover: 'https://cdn.img.wenhairu.com/images/2020/05/23/YOS9D.jpg',
				badge: 4,
				identity: '风水师',
				page: 'base_indexlist'
			}]
		}
	}
}

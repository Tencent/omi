App({
  onLaunch: function () {
  },
  onShow: function () {
  },
  onHide: function () {
  },
  globalData: {
  }
})

// "tabBar": {
// 	"color": "#666",
// 	"selectedColor": "#268dcd",
// 	"borderStyle": "white",
// 	"backgroundColor": "#fafafa",
// 	"list": [{
// 		"pagePath": "pages/index/index",
// 		"iconPath": "image/ing.png",
// 		"selectedIconPath": "image/ing-active.png",
// 		"text": "正在热映"
// 	},{
// 		"pagePath": "pages/coming_soon/coming_soon",
// 		"iconPath": "image/coming.png",
// 		"selectedIconPath": "image/coming-active.png",
// 		"text": "即将上映"
// 	}]
// },
require('./pages/coming_soon/coming_soon')
require('./pages/detail/detail')
require('./pages/index/index')
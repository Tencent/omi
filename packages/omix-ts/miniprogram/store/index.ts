export default {
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    logs: []
  },
  //无脑全部更新，组件或页面不需要声明 use
  //updateAll: true,
  debug: true
}
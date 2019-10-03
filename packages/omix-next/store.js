export default {
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    logs: [],
		reverseMotto() {
      return this.motto.split('').reverse().join('')
    }
  }
}
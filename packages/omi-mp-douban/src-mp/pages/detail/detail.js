import mockData from './mock-data'

Page({
  data: {
    film: {},
    showLoading: true,
    options: null
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title
		})
		mockData.title = options.title
		this.setData({
			film: mockData,
			showLoading: false
		})
  }
})

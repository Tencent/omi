var mockData = require('./mock-data')

Page({
  data: {
    films: [],
    hasMore: true,
    showLoading: true,
    start: 0
  },

  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
  },

  onPageScroll:function(){
    console.log('onPageScroll')
  },

  onLoad: function () {
		setTimeout(()=>{
			this.setData({
				films: mockData.subjects,
				showLoading: false
			})
		},500)
  },

  onReachBottom: function () {
    setTimeout(()=>{
			this.setData({
				films: this.data.films.concat(mockData.subjects)
			})
		},500)
  },

  viewDetail: function (e) {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../detail/detail?id=' + ds.id + '&title=' + ds.title + '&type=ing'
    })
  }
})

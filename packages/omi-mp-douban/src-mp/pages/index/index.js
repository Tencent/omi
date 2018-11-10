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
  scroll: function (e) {
    //console.log(e)
  },
  onLoad: function () {
		console.log(mockData)
		setTimeout(()=>{
			this.setData({
				films: mockData.subjects,
				showLoading: false
			})
		},500)
		
    
  },
  scrolltolower: function () {
	
    setTimeout(()=>{
			this.setData({
				films: this.data.films.concat(mockData.subjects)
			})
			console.log(this.data.films.concat(mockData.subjects))
		},500)
  },
  viewDetail: function (e) {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../detail/detail?id=' + ds.id + '&title=' + ds.title + '&type=ing'
    })
  }
})
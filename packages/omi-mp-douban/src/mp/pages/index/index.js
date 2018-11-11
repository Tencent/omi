
import appCss from '../../app.wxss'
import pageCss from './index.wxss'
import { h, WeElement } from 'omi'
import { setData } from '../../../utils/set-data'

  var mockData = require('./mock-data')

const mpOption = Page({
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
class Element extends WeElement {
  data = mpOption.data

  render = render

  css = css

  beforeRender() {}

  beforeUpdate() {}

  afterUpdate() {}

  install() {}

  uninstall = mpOption.onUnload || function() {}

  installed = function(){
    mpOption.onLoad && mpOption.onLoad.call(this, route.query)
    mpOption.onReady && mpOption.onReady.call(this, route.query)
  }

  setData = setData
}

Object.keys(mpOption).forEach(key => {
  Element.prototype[key] = mpOption[key]
})

function css() {
  return rpx2px(appCss + pageCss)
}

function render() {
  const { showLoading,films,hasMore } = Object.assign({}, this.data, this.props)
  return showLoading? [h('div',{'class': `page-loading`},[h('span',{'class': `weui-loading`},[]),h('span',{'class': `loading-text`},[`玩命加载中`])])]: [h('scroll-view',{'style': `height: 100%; `,'scroll-y': `true`,'class': `container film-list `,'onscroll': this.scroll,'onscrolltolower': this.scrolltolower},[ [films.map((film,index)=>{
        return h('div',{'class': `film-item`,'ontap': this.viewDetail,'data-id': film.id,'data-title': film.title},[h('div',{'class': `film-image`},[h('img',{'src': film.images.medium},[])]),h('div',{'class': `film-info`},[h('div',null,[h('span',{'class': `film-title`},[`${film.title}`]),h('span',{'class': `film-year`},[`${film.year}`])]),h('div',{'class': `film-rating`},[film.rating.average>0? [h('span',{'class': `label`},[`评分`]),h('span',{'class': `rating`},[`${film.rating.average}`])]: [h('span',{'class': `label`},[`暂无评分`])]]),h('div',{'class': `directors`},[h('span',{'class': `label`},[`导演`]), [film.directors.map((director,index)=>{
        return h('span',{'class': `person`},[`${director.name}`])
      })]]),h('div',{'class': `casts`},[h('span',{'class': `label`},[`主演`]), [film.casts.map((cast,index)=>{
        return h('span',{'class': `person`},[`${cast.name}`])
      })]])])])
      })],h('div',{'class': `load-more-wrap`},[hasMore? [h('div',{'class': `load-content`},[h('span',{'class': `weui-loading`},[]),h('span',{'class': `loading-text`},[`玩命加载中`])])]: [h('div',{'class': `load-content`},[h('span',null,[`没有更多内容了`])])]])])]

}

customElements.define('we-index', Element)
          
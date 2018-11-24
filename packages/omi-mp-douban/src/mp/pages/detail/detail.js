
import appCss from '../../app.wxss'
import pageCss from './detail.wxss'
import { h, WeElement, rpx } from 'omi'
import { setData } from '../../../utils/set-data'

  import mockData from './mock-data'

const mpOption = Page({
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

    mpOption.onReachBottom && wx._bindReachBottom(mpOption.onReachBottom, this)
  }

  setData = setData
}

Object.keys(mpOption).forEach(key => {
  Element.prototype[key] = mpOption[key]
})

function css() {
  return rpx(appCss + pageCss)
}

function render() {
  const { showLoading,film } = Object.assign({}, this.data, this.props)
  return showLoading? [h('div',{'class': `page-loading`},[h('span',{'class': `weui-loading`},[]),h('span',{'class': `loading-text`},[`玩命加载中`])])]: [h('div',{'class': `container film-detail `},[h('div',{'class': `film-item`},[h('div',{'class': `film-image`},[h('img',{'src': film.images.medium},[])]),h('div',{'class': `film-info`},[h('div',null,[h('span',{'class': `film-title`},[`${film.title}`]),h('span',{'class': `film-year`},[`${film.year}`])]),h('div',{'class': `film-rating`},[film.rating.average>0? [h('span',{'class': `label`},[`评分：`]),h('span',{'class': `rating`},[`${film.rating.average}`])]: [h('span',{'class': `label`},[`暂无评分`])]]),h('div',{'class': `directors`},[h('span',{'class': `label`},[`导演：`]), [film.directors.map((director,index)=>{
        return h('span',{'class': `person`},[`${director.name}`])
      })]]),h('div',{'class': `casts`},[h('span',{'class': `label`},[`主演：`]), [film.casts.map((cast,index)=>{
        return h('span',{'class': `person`},[`${cast.name}`])
      })]]),h('div',{'class': `genres`},[h('span',{'class': `label`},[`类型：`]), [film.genres.map((genre,index)=>{
        return h('span',{'class': `person`},[`${genre}`])
      })]]),h('div',{'class': `genres`},[h('span',{'class': `label`},[`国家/地区：`]), [film.countries.map((country,index)=>{
        return h('span',{'class': `person`},[`${country}`])
      })]]),h('div',{'class': `collect-wish`},[h('div',null,[`看过(`,h('span',null,[`${film.collect_count}`]),`)`]),h('div',null,[`想看(`,h('span',null,[`${film.wish_count}`]),`)`])])])]),h('div',{'class': `summary`},[h('span',{'class': `title`},[`剧情简介`]),h('div',{'class': `content`},[`${film.summary}`])])])]

}

customElements.define('we-detail', Element)
          
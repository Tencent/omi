import { WeElement, define } from 'omi'

import './index.css'

import mockData from './mock-data'


define('page-list', class extends WeElement {
  
  config = {
    navigationBarTitleText: '热门电影'
  }

  data = {
    films: [],
    hasMore: true,
    showLoading: true,
    start: 0
  }

  onPullDownRefresh() {
    console.log('onPullDownRefresh', new Date())
  }

  onPageScroll() {
    console.log('onPageScroll')
  }

  install() {
    //setTimeout 模拟服务端请求耗时
    setTimeout(() => {
      this.data.films = mockData.subjects
      this.data.showLoading = false
      this.update()
    }, 500)
  }

  onReachBottom() {
    setTimeout(() => {
      this.data.films = this.data.films.concat(mockData.subjects)
      this.update()
    }, 100)
  }

  viewDetail = (e)=> {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../detail/index?id=' + ds.id + '&title=' + ds.title + '&type=ing'
    })
  }

  render() {
    const { showLoading, films, hasMore } = this.data

    if (showLoading) {
      return (
        <view class="page-loading">
          <text class="weui-loading" /><text class="loading-text">玩命加载中</text>
        </view>
      )
    }

    return (
      <view scroll-y="true" class="film-list" >
        {films.map(film => (
          <view class="film-item" bindtap={this.viewDetail} data-id={film.id} data-title={film.title}>
            <view class="film-image">
              <image src={film.images.medium}></image>
            </view>
            <view class="film-info">
              <view>
                <text class="film-title">{film.title}</text>
                <text class="film-year">{film.year}</text>
              </view>
              <view class="film-rating">
                {
                  film.rating.average > 0 ? (
                    <block>
                      <text class="label">评分</text>
                      <text class="rating">{film.rating.average}</text>
                    </block>
                  ) : <text class="label">暂无评分</text>
                }
              </view>
              <view class="directors">
                <text class="label">导演</text>
                {film.directors.map(director => (
                  <text class="person">{director.name}</text>
                ))}
              </view>
              <view class="casts">
                <text class="label">主演</text>
                {film.casts.map(cast => (
                  <text class="person">{cast.name}</text>
                ))}
              </view>
            </view>
          </view>
        ))}

        <view class="load-more-wrap">
          {hasMore ? (
            <view class="load-content">
              <text class="weui-loading" /><text class="loading-text">玩命加载中</text>
            </view>
          ) : (
              <view class="load-content">
                <text>没有更多内容了</text>
              </view>
            )}
        </view>
      </view>
    )
  }
})
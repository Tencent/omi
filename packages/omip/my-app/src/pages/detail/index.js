import { WeElement, define } from 'omi'

import './index.css'

import mockData from './mock-data'



define('page-detail', class extends WeElement {
  data = {
    film: {},
    showLoading: true,
    options: null
  }

  install(options) {
    // wx.setNavigationBarTitle({
    //   title: options.title
    // })
    //mockData.title = options.title
    this.data.film = mockData
    this.data.showLoading = false
    this.update()
  }

  render() {
    const { showLoading, film } = data
    if (showLoading) {
      return (
        <view class="page-loading">
          <text class="weui-loading" />
          <text class="loading-text">玩命加载中</text>
        </view>
      )
    }

    return (
      <view class="film-detail">
        <view class="film-item">
          <view class="film-image">
            <image src="{{film.images.medium}}"></image>
          </view>
          <view class="film-info">
            <view>
              <text class="film-title">{film.title}</text>
              <text class="film-year">{film.year}</text>
            </view>
            <view class="film-rating">
              {film.rating.average > 0 ? (
                <block>
                  <text class="label">评分：</text>
                  <text class="rating">{film.rating.average}</text>
                </block>
              ) : (
                  <text class="label">暂无评分</text>
                )}
            </view>
            <view class="directors">
              <text class="label">导演：</text>
              {film.directors.map(director => (
                <text class="person">{director.name}</text>
              ))}

            </view>
            <view class="casts">
              <text class="label">主演：</text>
              {film.casts.map(cast => (
                <text class="person">{cast.name}</text>
              ))}


            </view>
            <view class="genres">
              <text class="label">类型：</text>
              {film.genres.map(genre => (
                <text class="person">{genre}</text>
              ))}
            </view>
            <view class="genres">
              <text class="label">国家/地区：</text>
              {film.countries.map(country => (
                <text class="person">{country}</text>
              ))}


            </view >
            <view class="collect-wish">
              <view>
                看过(
            <text>{film.collect_count}</text>)
          </view>
              <view>
                想看(
            <text>{film.wish_count}</text>)
          </view>
            </view>
          </view >
        </view >
        <view class="summary">
          <text class="title">剧情简介</text>
          <view class="content">
            {film.summary}
          </view>
        </view>
      </view >
    )
  }
})
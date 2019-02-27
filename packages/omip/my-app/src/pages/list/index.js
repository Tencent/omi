import util from '../../utils/util'
import { WeElement, define } from 'omi'
import '../../components/my-counter'

import './index.css'

define('page-list', class extends WeElement {
  render() {
    if (showLoading) {
      return (
        <view class="page-loading">
          <text class="weui-loading" /><text class="loading-text">玩命加载中</text>
        </view>
      )
    }

    return (
      <view scroll-y="true" class="container film-list" >
        {this.data.films.map(film => (
          <view class="film-item" bindtap="viewDetail" data-id={film.id} data-title={film.title}>
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
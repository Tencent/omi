import { h } from 'omis'
import css from './_index.css'
import Game from '../game'

const Snake = (props, store, _, $) => {
  return (
    <div class="container">
      <Game></Game>

      <div class="ctrl" style="margin-top: 20rpx;">
        <div class="btn cm-btn cm-btn-dir" onClick={$.turnUp} style="top: 0rpx; left: 374rpx;"><i class=""></i><em style="transform: translate(0rpx, 63rpx) scale(1, 2);"></em><span class="_1zCL">Up</span></div>
        <div class="btn cm-btn cm-btn-dir" onClick={$.turnDown} style="top: 180rpx; left: 374rpx;"><i class=""></i><em style="transform: translate(0rpx, -71rpx) rotate(180deg) scale(1, 2);"></em><span class="">Down</span></div>
        <div class="btn cm-btn cm-btn-dir" onClick={$.turnLeft} style="top: 90rpx; left: 284rpx;"><i class=""></i><em style="transform: translate(60rpx, -12rpx) rotate(270deg) scale(1, 2);"></em><span class="">Left</span></div>
        <div class="btn cm-btn cm-btn-dir" onClick={$.turnRight} style="top: 90rpx; left: 464rpx;"><i class=""></i><em style="transform: translate(-60rpx, -12rpx) rotate(90deg) scale(1, 2);"></em><span class="">Right</span></div>
        <div class="btn cm-btn space" style="top: 100rpx; left: 52rpx;"><i class=""></i><span class="">Drop (SPACE)</span></div>
        <div class="btn dg small" style="top: 0rpx; left: 196rpx;"><i class=""></i><span class="">Reset(R)</span></div>
        <div class="btn RBZg small" style="top: 0rpx; left: 106rpx;"><i class=""></i><span class="">Sound(S)</span></div>
        <div class="btn RBZg small" style="top: 0rpx; left: 16rpx;"><i class=""></i><span class="">Pause(P)</span></div>
      </div>
    </div>
  )
}

Snake.store = _ => {
  return {

  }
}

Snake.css = css

export default Snake

import * as css from './index.css'
import '../game'
import { WeElement, rpx, h, tag } from 'omi'


@tag('my-index')
export default class extends WeElement {

  static css = rpx(css.default)

  store

  install() {
    this.store.ui.index = this
  }

  render() {
    const { store } = this

    return (
      <div class="container">
        <h1>OMI SNAKE</h1>

        <my-game></my-game>

        <div class="ctrl">
          <div class="btn cm-btn cm-btn-dir up" onClick={store.turnUp}><i></i><em></em><span>Up</span></div>
          <div class="btn cm-btn cm-btn-dir down" onClick={store.turnDown}><i></i><em></em><span>Down</span></div>
          <div class="btn cm-btn cm-btn-dir left" onClick={store.turnLeft}><i></i><em></em><span >Left</span></div>
          <div class="btn cm-btn cm-btn-dir right" onClick={store.turnRight}><i></i><em></em><span >Right</span></div>
          <div class="btn cm-btn space" onClick={store.toggleSpeed}><i></i><span >加速/减速</span></div>
          <div class="btn reset small" onClick={store.reset}><i ></i><span >Reset</span></div>
          <div class="btn pp small" onClick={store.pauseOrPlay}><i></i><span >{store.data.paused ? 'Play' : 'Pause'}</span></div>
        </div>
      </div>
    )
  }
}


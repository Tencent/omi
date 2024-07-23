import * as css from './index.css'
import '../screen'
import { Component, h, tag } from 'omi'
import { rpx } from '../rpx'
import { Store } from 'src/stores'

@tag('snake-game')
export default class extends Component {

  static css = rpx(css.default)

  store: Store

  render() {
    const { store } = this
    return (
      <div class="container">
        <h2>OMI SIGNAL DEMO</h2>

        <game-screen></game-screen>

        <div class="ctrl">
          <div class="btn cm-btn cm-btn-dir up" onClick={store.turnUp}><i></i><em></em><span>Up</span></div>
          <div class="btn cm-btn cm-btn-dir down" onClick={store.turnDown}><i></i><em></em><span>Down</span></div>
          <div class="btn cm-btn cm-btn-dir left" onClick={store.turnLeft}><i></i><em></em><span >Left</span></div>
          <div class="btn cm-btn cm-btn-dir right" onClick={store.turnRight}><i></i><em></em><span >Right</span></div>
          <div class="btn cm-btn space" onClick={store.toggleSpeed}><i></i><span >Speed+/-</span></div>
          <div class="btn reset small" onClick={store.reset}><i ></i><span >Reset</span></div>
          <div class="btn pp small" onClick={store.pauseOrPlay}><i></i><span >{store.state.value.paused ? 'Play' : 'Pause'}</span></div>
        </div>
      </div>
    )
  }
}


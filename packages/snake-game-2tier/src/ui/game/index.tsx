import * as css from './index.css'
import '../screen'
import { WeElement, h, tag } from 'omi'
import { rpx } from '../rpx'
import Game from 'src/model/game'

@tag('snake-game')
export default class extends WeElement {

  static css = rpx(css.default)

  game: Game
  
  render() {
    const { game } = this
    return (
      <div class="container">
        <h2>OMI SIGNAL DEMO</h2>

        <game-screen></game-screen>

        <div class="ctrl">
          <div class="btn cm-btn cm-btn-dir up" onClick={game.snake.turnUp}><i></i><em></em><span>Up</span></div>
          <div class="btn cm-btn cm-btn-dir down" onClick={game.snake.turnDown}><i></i><em></em><span>Down</span></div>
          <div class="btn cm-btn cm-btn-dir left" onClick={game.snake.turnLeft}><i></i><em></em><span >Left</span></div>
          <div class="btn cm-btn cm-btn-dir right" onClick={game.snake.turnRight}><i></i><em></em><span >Right</span></div>
          <div class="btn cm-btn space" onClick={game.toggleSpeed}><i></i><span >Speed+/-</span></div>
          <div class="btn reset small" onClick={game.reset}><i ></i><span >Reset</span></div>
          <div class="btn pp small" onClick={game.pauseOrPlay}><i></i><span >{game.value.paused ? 'Play' : 'Pause'}</span></div>
        </div>
      </div>
    )
  }
}


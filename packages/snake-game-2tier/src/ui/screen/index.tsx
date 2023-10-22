import * as css from './index.css'
import { Component, h, tag } from 'omi'
import { rpx } from '../rpx'
import Game from 'src/model/game'

@tag('game-screen')
export default class extends Component {

  static css = rpx(css.default)
  game: Game

  render() {
    return (
      <div class="screen">
        {this.game.value.map.map(row => {
          return <p>
            {row.map(col => {
              if (col) {
                return <b class='s'></b>
              }
              return <b></b>
            })}
          </p>
        })}
      </div>
    )
  }
}


import * as css from './index.css'

import { WeElement, rpx, h, tag } from 'omi'

@tag('my-game')
export default class extends WeElement {

  static css = rpx(css.default)

  store

  install() {
    this.store.ui.game = this
  }

  render() {

    return (
      <div class="game">
        {this.store.data.map.map(row => {
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


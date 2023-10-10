import * as css from './index.css'
import { WeElement, h, tag } from 'omi'
import { rpx } from '../rpx'

@tag('game-screen')
export default class extends WeElement {

  static css = rpx(css.default)

  render(props, store) {
    return (
      <div class="screen">
        {store.value.map.map(row => {
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


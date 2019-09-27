import { define, h, rpx } from 'omio'
import './_index.css'

define('my-game', _ => (
  <div class="game">
    {_.store.data.map.map(row => {
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
), {
    use: ['map'],
    css: ("undefined" != typeof wx && wx.getSystemInfoSync) ? '' : rpx(require('./_index.css'))
  })
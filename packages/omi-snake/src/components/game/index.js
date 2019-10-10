import { define, rpx } from 'omi'

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
  css: rpx(require('./_index.css'))
})


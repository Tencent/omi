import * as Preact from 'preact'
import { $ } from 'omis'
import { rpx } from '../../utils/css'

export default $({
  render() {
    const { map } = $.store.data
    return <div className="game">
      {map.map(row => {
        return <p>
          {row.map(col => {
            if (col) {
              return <b className='s'></b>
            }
            return <b></b>
          })}
        </p>
      })}
    </div>
  },
  css: rpx(require('./_index.css')),
  use: ['map']
})



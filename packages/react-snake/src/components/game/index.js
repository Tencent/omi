import React from 'react'
import { $ } from 'omis'

require('../../utils/css').add(require('./_index.css'))

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
  use: ['map']
})



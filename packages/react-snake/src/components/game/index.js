import React from 'react'
import { $r } from '../../utils/omis'

require('../../utils/css').add(require('./_index.css'))

export default $r({
  render() {
    const { map } = $r.store.data
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



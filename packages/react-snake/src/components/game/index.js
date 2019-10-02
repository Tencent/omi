import React from 'react'

require('../../utils/css').add(require('./_index.css'))

export default ({ map }) => (
  <div class="game">
    {map.map(row => {
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



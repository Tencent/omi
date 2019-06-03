import '../../src/date-time-picker/index.tsx'

import { render, WeElement, define, h } from 'omi'



define('my-app', class extends WeElement {

  
  render(props, data) {
    return(
      <div>
        <m-date-time-picker></m-date-time-picker>
      </div>
    )
  }
})

render(<my-app />, 'body')

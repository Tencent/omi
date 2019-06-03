import '../../src/date-time-picker/index.tsx'

import { render, WeElement, define, h } from 'omi'



define('my-app', class extends WeElement {


  render(props, data) {
    return (
      <div>
        {/* <m-date-time-picker type="time" show></m-date-time-picker> */}

        <m-date-time-picker type="date" past="20180101" future="20200101" lan="zh-cn" show></m-date-time-picker>
      </div>
    )
  }
})

render(<my-app />, 'body')

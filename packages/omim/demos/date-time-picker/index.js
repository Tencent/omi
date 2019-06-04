import '../../src/date-time-picker/index.tsx'

import { render, WeElement, define, h } from 'omi'



define('my-app', class extends WeElement {

  onOk = (evt)=>{
    console.log(evt.detail)
  }

  render(props, data) {
    return (
      <div>
        <m-date-time-picker onOk={this.onOk} type="time" show></m-date-time-picker>

        {/* <m-date-time-picker onOk={this.onOk} type="date" past="20180101" future="20200101" lan="zh-cn" show></m-date-time-picker> */}
      </div>
    )
  }
})

render(<my-app />, 'body')

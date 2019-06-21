import '../../src/date-time-picker/index.tsx'

import { render, WeElement, define, h } from 'omi'



define('my-app', class extends WeElement {

  onOk = (evt) => {
    console.log(evt.detail)
  }

  onClick = () => {
    this.show = !this.show
    this.update()
  }

  show = true

  render(props, data) {
    return (
      <div>
        <button onClick={this.onClick}></button>
        {/* <m-date-time-picker onOk={this.onOk} type="time" show={this.show}></m-date-time-picker> */}

        <m-date-time-picker onOk={this.onOk} type="date" show={this.show} past="20180101" future="20200101" lan="zh-cn" ></m-date-time-picker>
      </div>
    )
  }
})

render(<my-app />, 'body')

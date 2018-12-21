import { define, render, WeElement } from 'omi'
import './omiu/pagination'
import './omiu/adjustment'
import './omiu/progress'

define('my-app', class extends WeElement {
  onChange = v => {
    console.log('page' + v)
  }

  onAdjustmentChange = v => {
    console.log(v)
  }

  render() {
    return (
      <div>
        <o-pagination
          total={125}
          currentPage={2}
          pageSize={10}
          onChange={this.onChange}
        />
        <br />
        <o-adjustment
          onChange={this.onAdjustmentChange}
          min={1}
          max={10}
          step={1}
          value={2}
          label="描述文字"
        />
        <br />
        <o-progress
        bgColor='#ccc'
        innerColor='green'
          value={50}
        />
      </div>
    )
  }
})

render(<my-app />, 'body')

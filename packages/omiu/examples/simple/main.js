import { define, render, WeElement } from 'omi'
import '../../src/pagination'
import '../../src/adjustment'

define('my-app', class extends WeElement {
  onChange = evt => {
    console.log('page' + evt.detail.index)
  }

  onAdjustmentChange = evt => {
    console.log(evt.detail.value)
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
      </div>
    )
  }
})

render(<my-app />, 'body')

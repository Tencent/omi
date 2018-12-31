import { WeElement, define, render } from 'omi'
import '../../src/input-number'

define('my-app', class extends WeElement {

  onInputNumberChange = (num) => {
    console.log(num)
  }

  render() {
    return (
      <o-equal-space>
        <o-input-number
          onChange={this.onInputNumberChange}
          min={1}
          max={10}
          step={1}
          value={2}
          label="描述文字"
        />
      </o-equal-space>
    )
  }
})

render(<my-app />, 'body')

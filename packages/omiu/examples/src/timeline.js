import { WeElement, define, render } from 'omi'
import '../../src/rate'

define('my-app', class extends WeElement {

  valueA = 0
  valueB = 2
  valueC = 3.5

  onSelect = (value) => {
    this.valueA = value
    this.update()
  }

  render() {
    return (
      <div>
        <o-rate total={5} value={this.valueA} color='#07C160' onSelect={this.onSelect} />
        <br />
        <o-rate total={5} value={this.valueB} color='#07C160' />
        <br />
        <o-rate total={5} value={this.valueC} />
      </div>
    )
  }
})

render(<my-app />, 'body')

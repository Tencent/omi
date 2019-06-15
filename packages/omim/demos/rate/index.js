import '../../src/rate/index.tsx'
import { define, render, WeElement, h } from 'omi'

define('my-app', class extends WeElement {

  valueA = 0
  valueB = 2
  valueC = 3.5

  onSelected = (evt) => {
    this.valueA = evt.detail
  }

  render() {
    return (
      <div>
        <m-rate total={5} value={this.valueA} color='#f57c00' onSelected={this.onSelected} />
        <br />
        <m-rate total={5} value={this.valueB} color='#0072d9' />
        <br />
        <m-rate total={5} half value={this.valueC} color='red' />
      </div>
    )
  }
})

render(<my-app />, 'body')
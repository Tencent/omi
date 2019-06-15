import '../../src/rate/index.tsx'
import { define, render, WeElement, h } from 'omi'

define('my-app', class extends WeElement {

  valueA = 0
  valueB = 2
  valueC = 3.5

  onSelected = (evt) => {
    this.valueA = evt.detail
    this.update()
  }

  render() {
    return (
      <div>
        <m-rate total={5} value={this.valueA} color='#f57c00' onSelected={this.onSelected} />
        <br />
        <m-rate total={5} value={this.valueB} color='#07C160' />
        <br />
        <m-rate total={5} half value={this.valueC} />
      </div>
    )
  }
})

render(<my-app />, 'body')
import { render, WeElement, define } from '../../src/omi'
import To from 'to2to'

define('my-timer', class extends WeElement {
  number = 10
  animatedNumber = 10
  to = null

  onInput = (e) => {
    const target = Number(e.target.value)
    this.to && this.to.stop()
    this.to = To.get({ number: this.number })
      .to({ number: target }, 1000)
      .begin(() => {
        this.number = target
      })
      .progress((obj) => {
        this.animatedNumber = obj.number.toFixed(0)
        this.update()
      })
      .start()
  }

  render() {
    return (
      <div>
        <input type='number' onInput={this.onInput} value={this.number} step={20}></input>
        <div>{this.animatedNumber}</div>
      </div>
    )
  }
})

render(<my-timer />, 'body')

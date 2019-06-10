import { define, WeElement, render, h } from 'omi'
import '../../src/to/index.tsx'

define('my-app', class extends WeElement {

  number = 2

  from = this.number
  to = this.number
  out = {
    number: this.number
  }


  onInput = (e) => {
    this.to = Number(e.target.value)
    this.from = this.out.number
    this.number = this.to
    this.update()
  }

  onProgress = () => {
    this.update()
  }

  render() {
    return (
      <div>
        <input type='number' onInput={this.onInput} value={this.number} step={2}></input>
        <div>{this.out.number.toFixed(0)}</div>
        <div style={{ height: this.out.number + 'px', background: 'red' }}></div>
        <div>{this.out.number.toFixed(0)}*{this.out.number.toFixed(0)}={(this.out.number * this.out.number).toFixed(0)}</div>
        <m-to from={{ number: this.from }} easing='bounce-in' onProgress={this.onProgress} to={{ number: this.to }} out={this.out} duration={1000}>
        </m-to>
      </div>
    )
  }
})

render(<my-app />, 'body')

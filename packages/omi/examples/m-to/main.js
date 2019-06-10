import { render, WeElement, define } from '../../src/omi'
import To from 'to2to'


define('m-to', class extends WeElement {
  to = null

  receiveProps(props) {

    if (props.restart) {
      if (this.to) this.to.stop()
      this.to = To.get(props.from)
        .to(props.to, props.duration)
        .progress((obj) => {
          Object.assign(props.out, obj)
          this.fire('progress')
        })
        .start()
    }

  }

  render(props) {
    return (
      props.children
    )
  }
})


define('my-timer', class extends WeElement {

  number = 10

  from = this.number
  to = this.number
  out = {
    number: this.number
  }


  onInput = (e) => {
    this.restart = true
    this.to = Number(e.target.value)
    this.from = this.out.number
    this.number = this.to
    this.update()
  }

  onProgress = () => {
    this.restart = false
    this.update()
  }

  render() {
    return (
      <div>
        <input type='number' onInput={this.onInput} value={this.number} step={20}></input>
        <div>{this.out.number.toFixed(0)}</div>
        <m-to from={{ number: this.from }} restart={this.restart} onProgress={this.onProgress} to={{ number: this.to }} out={this.out} duration={1000}>
        </m-to>
      </div>
    )
  }
})

render(<my-timer />, 'body')

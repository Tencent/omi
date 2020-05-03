import { tag, WeElement, h } from 'omi'
import * as To2To from 'to2to'


interface Props {
  from: object,
  to: object,
  duration: number,
  out: object,
  delay: number,
  //easing graphs http://tweenjs.github.io/tween.js/examples/03_graphs.html
  easing: "quadratic-in" | "quadratic-out" | "quadratic-in-out" | "cubic-in" | "cubic-out" | "cubic-in-out" | "quartic-in" | "quartic-out" | "quartic-in-out" | "quintic-in" | "quintic-out" | "quintic-in-out" | "sinusoidal-in" | "sinusoidal-out" | "sinusoidal-in-out" | "exponential-in" | "exponential-out" | "exponential-in-out" | "circular-in" | "circular-out" | "circular-in-out" | "elastic-in" | "elastic-out" | "elastic-in-out" | "back-in" | "back-out" | "back-in-out" | "bounce-in" | "bounce-out" | "bounce-in-out",
  start: boolean
}

@tag('o-to')
export default class To extends WeElement<Props>{

  to = null

  receiveProps(props, preProps) {
    let restart = false
    for (let key in props.from) {
      if (props.from[key] !== preProps.from[key]) {
        restart = true
        break
      }
    }

    if (!restart) {
      for (let key in props.to) {
        if (props.to[key] !== preProps.to[key]) {
          restart = true
          break
        }
      }
    }

    if (restart || props.start && !preProps.start) {
      if (this.to) this.to.stop()
      const from = Object.assign({}, props.from)
      this.to = To2To.get(from)
        .wait(props.delay || 0)
        .to(props.to, props.duration, To2To.easing[npn(props.easing || 'linear')])
        .begin(() => {
          this.fire('begin')
        })
        .progress((obj) => {
          //@ts-ignore
          Object.assign(props.out, obj)
          this.fire('progress')
        })
        .end(() => {
          this.fire('end')
        })
        .start()
    }
  }

  installed() {
    if (this.props.start) {
      this.receiveProps(this.props, { from: {}, to: {} })
    }
  }

  render() {
    return (
      <slot></slot>
    )
  }
}

function npn(str) {
  return str.replace(/-(\w)/g, ($, $1) => {
    return $1.toUpperCase()
  })
}


@tag('my-app')
class MyApp extends WeElement {

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

  onClick = () => {
    this.start = true
    this.update()
  }

  start = false
  outs = [{ width: 10 }, { width: 10 }, { width: 10 }, { width: 10 }, { width: 10 }]

  render() {

    return (
      <div>
        <h3>Simple</h3>
        <input type='number' onInput={this.onInput} value={this.number} step={2}></input>
        <div>{this.out.number.toFixed(0)}</div>
        <div>{this.out.number.toFixed(0)}*{this.out.number.toFixed(0)}={(this.out.number * this.out.number).toFixed(0)}</div>
        <div style={{ width: this.out.number * 5 + 'px', background: 'red', height: '5px' }}></div>
        <o-to from={{ number: this.from }} easing='bounce-in' onProgress={this.onProgress} to={{ number: this.to }} out={this.out} duration={1000}>
        </o-to>

        <h3>Group</h3>

        {this.outs.map((item, index) =>
          <div style={{ marginTop: '5px', width: this.outs[index].width + 'px', background: 'red', height: '5px' }}></div>
        )}
        <button onClick={this.onClick}>Play</button>
        {this.outs.map((item, index) =>
          <o-to from={{ width: 10 }} start={this.start} easing="bounce-out" delay={100 * index} onProgress={this.onProgress} to={{ width: 200 }} out={this.outs[index]} duration={600}>
          </o-to>
        )}
      </div>
    )
  }
}

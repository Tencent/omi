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

// 加上 export default build umd 会报 export is not defined 所以去掉
@tag('o-to')
class To extends WeElement<Props>{

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

  stop() {
    this.to.stop()
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


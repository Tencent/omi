import { tag, WeElement, h, extractClass } from 'omi'
import * as To2To from 'to2to'


interface Props {
  easing: "quadratic-in" | "quadratic-out" | "quadratic-in-out" | "cubic-in" | "cubic-out" | "cubic-in-out" | "quartic-in" | "quartic-out" | "quartic-in-out" | "quintic-in" | "quintic-out" | "quintic-in-out" | "sinusoidal-in" | "sinusoidal-out" | "sinusoidal-in-out" | "exponential-in" | "exponential-out" | "exponential-in-out" | "circular-in" | "circular-out" | "circular-in-out" | "elastic-in" | "elastic-out" | "elastic-in-out" | "back-in" | "back-out" | "back-in-out" | "bounce-in" | "bounce-out" | "bounce-in-out" //easing graphs http://tweenjs.github.io/tween.js/examples/03_graphs.html
}

interface Data {

}




let arr = [];
['Quadratic',
  'Cubic',
  'Quartic',
  'Quintic',
  'Sinusoidal',
  'Exponential',
  'Circular',
  'Elastic',
  'Back',
  'Bounce'].forEach(item => {
      const itemLower = item.toLowerCase()
      arr.push( itemLower +'-'+ 'in',itemLower +'-'+ 'out',itemLower +'-'+ 'in-out')
  })


@tag('m-to')
export default class To extends WeElement<Props, Data>{

  static propTypes = {
    from: Object,
    to: Object,
    duration: Number,
    out: Object,
    easing: String
  }

  to = null

  receiveProps(props, data, preProps) {
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

    if (restart) {

      if (this.to) this.to.stop()
      this.to = To2To.get(props.from)
        .to(props.to, props.duration,To2To.easing[npn(props.easing)]||To2To.easing.linear)
        .begin(()=>{
          this.fire('begin')
        })
        .progress((obj) => {
          //@ts-ignore
          Object.assign(props.out, obj)
          this.fire('progress')
        })
        .end(()=>{
          this.fire('end')
        })
        .start()
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

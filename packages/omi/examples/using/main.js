import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
  static using = [
    'count'
  ]
  // using = {
  //   a: null,
  //   b: null,
  //   c: { d: [] },
  //   e: []
  // }

  // //this.using[0]
  // //this.using[1]

  // using = [
  //   { path: 'a.b', alias: 'ab' },
  //   'c[1]'
  // ]
  // //this.using.ab 或者 this.using[0]
  // //this.using[1]

  // using = [
  //   { path: 'a.b', alias: 'ab', computed:(target) ={} },
  //   'c[1]'
  // ]
  // //this.using.ab 或者 this.using[0]
  // //this.using[1]
  sub = () => this.store.sub()
  add = () => this.store.add()

  render() {
    console.log(this.using[0])
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{this.using[0]}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
})



render(<my-counter />, 'body', {
  data: { count: 0 },
  sub() {
    this.data.count--
  },
  add() {
    this.data.count++
  }
})



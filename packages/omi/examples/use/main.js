import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
  static use = [
    'count'
  ]
  // use = {
  //   a: null,
  //   b: null,
  //   c: { d: [] },
  //   e: []
  // }

  // //this.use[0]
  // //this.use[1]

  // use = [
  //   { path: 'a.b', alias: 'ab' },
  //   'c[1]'
  // ]
  // //this.use.ab 或者 this.use[0]
  // //this.use[1]

  // use = [
  //   { path: 'a.b', alias: 'ab', computed:(target) ={} },
  //   'c[1]'
  // ]
  // //this.use.ab 或者 this.use[0]
  // //this.use[1]
  sub = () => this.store.sub()
  add = () => this.store.add()

  render() {
    console.log(this.use[0])
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{this.use[0]}</span>
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



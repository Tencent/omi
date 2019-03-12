import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
  static use = [
    'count',
    'arr[0]'
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
  rename = () => this.store.rename('dnt')

  render() {
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{this.use[0]}</span>
        <button onClick={this.add}>+</button>
        <span>{this.use[1]}</span>
        <button onClick={this.rename}>rename</button>
      </div>
    )
  }
})



render(<my-counter />, 'body', {
  data: {
    count: 0,
    arr: ['dntzhang']
  },
  sub() {
    this.data.count--
  },
  add() {
    this.data.count++
  },
  rename(newName) {
    this.data.arr[0] = newName
  }
})



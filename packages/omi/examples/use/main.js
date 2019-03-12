import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
  static use = [
    'count',
    'arr[0]',
    {
      path: 'motto',
      computed(target) {
        return target.split('').reverse().join('')
      }
    }
  ]

  sub = () => this.store.sub()
  add = () => this.store.add()
  rename = () => this.store.rename('dnt')
  changeMotto = () => this.store.changeMotto('Hello omi!')

  render() {
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{this.use[0]}</span>
        <button onClick={this.add}>+</button>
        <span>{this.use[1]}</span>
        <button onClick={this.rename}>rename</button>
        <br />
        <div>{this.use[2]}</div><button onClick={this.changeMotto}>change motto</button>
      </div>
    )
  }
})

render(<my-counter />, 'body', {
  data: {
    count: 0,
    arr: ['dntzhang'],
    motto: 'I love omi.'
  },
  sub() {
    this.data.count--
  },
  add() {
    this.data.count++
  },
  rename(newName) {
    this.data.arr[0] = newName
  },
  changeMotto(motto) {
    this.data.motto = motto
  },
})
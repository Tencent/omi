import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
  use = ['count', 'adding']

  addIfOdd = () => {
    if (this.store.data.count % 2 !== 0) {
      this.store.add()
    }
  }

  addAsync = () => {
    this.store.data.adding = true
    setTimeout(() => {
      this.store.data.adding = false
      this.store.add()
    }, 1000)
  }

  render() {
    const store = this.store
    const { data, add, sub } = store
    return (
      <p>
        Clicked: {data.count} times
        {' '}
        <button onClick={add}>+</button>
        {' '}
        <button onClick={sub}>-</button>
        {' '}
        <button disabled={data.count % 2 === 0} onClick={this.addIfOdd}>
          Add if odd
        </button>
        {' '}
        <button disabled={data.adding} onClick={this.addAsync}>
          Add async
        </button>
      </p>
    )
  }
})

render(<my-counter />, 'body', new class Store {
  data = {
    count: 0,
    adding: false
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
})
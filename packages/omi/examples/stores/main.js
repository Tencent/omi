import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
  use = {
		storeA: ['count', 'adding']
	}

  addIfOdd = () => {
    if (this.storeA.data.count % 2 !== 0) {
      this.storeA.add()
    }
  }

  addAsync = () => {
    this.storeA.data.adding = true
    setTimeout(() => {
      this.storeA.data.adding = false
      this.storeA.add()
    }, 1000)
  }

  render() {
    const store = this.storeA
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

const storeA = new class Store {
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
}

const storeB = new class Store {
  data = {
    msg: 'abc'
  }
  changeMsg = () => {
    this.data.msg = 'bcd'
  }
}

render(<my-counter />, 'body', { storeA, storeB } )

import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
  useSelf = {
		storeA: ['count', 'adding']
	}

  addIfOdd = () => {
    if (this.store.storeA.data.count % 2 !== 0) {
      this.store.storeA.add()
    }
  }

  addAsync = () => {
    this.store.storeA.data.adding = true
    setTimeout(() => {
      this.store.storeA.data.adding = false
      this.store.storeA.add()
    }, 1000)
  }

  render() {
    const store = this.store.storeA
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

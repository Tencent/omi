import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
  static use = [
    { count: 'count' }
  ]

  add = () => this.store.add()
  sub = () => this.store.sub()

  addIfOdd = () => {
    if (this.use.count % 2 !== 0) {
      this.store.add()
    }
  }

  addAsync = () => {
    setTimeout(() => this.store.add(), 1000)
  }

  render() {
    return (
      <p>
        Clicked: {this.using.count} times
        {' '}
        <button onClick={this.add}>+</button>
        {' '}
        <button onClick={this.sub}>-</button>
        {' '}
        <button onClick={this.addIfOdd}>
          Add if odd
        </button>
        {' '}
        <button onClick={this.addAsync}>
          Add async
        </button>

        {Math.random()}
      </p>
    )
  }
})


define('my-app', ({store}) =>{
    return <div>
      <h1 onClick={store.random}>{store.data.msg}</h1>
      <my-counter></my-counter>
    </div>
  },{
    useSelf: ['msg']
  })

render(<my-app />, 'body',new class Store {
  data = {
    msg:  Math.random(),
    count: 0
  }
  random = ()=>{
    console.log(11)
    this.data.msg = Math.random()
  }
  sub() {
    this.data.count--
  }
  add() {
    this.data.count++
  }
})

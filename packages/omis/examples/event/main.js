import { render } from '../../src/omis'

const Counter = (props, store) => {
  return (
    <div>
      <button onClick={store.sub}>-</button>
      <span>{store.count}</span>
      <button onClick={store.add}>+</button>
    </div>
  )
}

Counter.store = _ => {
  return {
    count: 1,
    add(e) {
      this.count++
      this.update()
      _.props.onChange(this.count)
    },
    sub() {
      this.count--
      this.update()
      _.props.onChange(this.count)
    }
  }
}

const App = (props, store) => {
  return (
    <div>
      <div>Count from child event: {store.count}</div>
      <Counter onChange={store.changeHandle}></Counter>
    </div>
  )
}


App.store = _ => ({
  count: null,
  changeHandle(count) {
    _.store.count = count
    _.update()
  }
})

// App.store = _ => {
//   class Store {
//     count = null
//     changeHandle = (count) => {
//       this.count = count
//       this.update()
//     }
//   }

//   return new Store
// }

render(<App />, 'body')
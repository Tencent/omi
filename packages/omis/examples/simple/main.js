import { render } from '../../src/omi'

//逻辑store外置，UI只负责渲染
const Counter = (props, store) => {
  return <div>
    <button onClick={store.sub}>-</button>
    <text>{store.data.count}</text>
    <button onClick={store.add}>+</button>
  </div>
}

Counter.store = _ => {
  return {
    data: {
      count: 1
    },
    add(e) {
			this.data.count++
			this.update()
    },
    sub() {
			this.data.count--
			this.update()
    }
  }
}


const App = (props, store) => {
  return <div>
    <Counter></Counter>
  </div>
}

App.store = _ => {

}

render(<App />, 'body')

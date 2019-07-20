//逻辑store外置，UI只负责渲染
const Counter = (props, store) => {
  return <div>
    <button onClick={store.sub}>sub</button>
    <text>{store.data.count}</text>
    <button onClick={store.add}>add</button>
  </div>
}

Counter.store = _ => {
  return {
    data: {
      count: 1
    },
    add() {
      this.data.count++
    },
    sub() {
      this.data.count--
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

render(<App />)

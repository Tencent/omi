import { render } from '../../src/omi'

//逻辑store外置，UI只负责渲染
const Counter = (props, store) => {
  return (
    <div>
      <button onClick={store.sub}>-</button>
      <text>{store.count}</text>
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
    },
    sub() {
      this.count--
      this.update()
    }
  }
}

render(<Counter />, 'body')

//or
// const App = (props, store) => {
//   return <div>
// 		<div>Hello Omis</div>
//     <Counter></Counter>
//   </div>
// }

// App.store = _ => {

// }

// render(<App />, 'body')

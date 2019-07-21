import { render } from '../../src/omis'

//逻辑store外置，UI只负责渲染
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
      <div>Hello Omis</div>
      <Counter onChange={store.changeHandle}></Counter>
    </div>
  )
}

App.store = _ => {
  return {
    changeHandle(count) {
      console.log(count)
    }
  }
}

render(<App />, 'body')

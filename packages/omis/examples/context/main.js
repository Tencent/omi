import { render, h } from '../../src/omis'

const Counter = (props, store, context) => {
  console.log(context)
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
      <div>Count from child event: {store.context.a}</div>
      <Counter onChange={store.changeHandle}></Counter>
    </div>
  )
}


App.store = _ => ({
  count: null,
  context: { a: 111 },
  install(){
    _.getChildContext = ()=>{
      return this.context
    }
  },
  changeHandle(count) {
    _.store.count = count
    _.update()
  }
})

render(<App />, 'body')
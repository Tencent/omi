import { render, h } from '../../src/omis'

const Counter = function(props, store, context) {
  
  return (
    <div>
      <button onClick={store.sub}>-</button>
      <span>{this.$.data.a}</span>
      <button onClick={store.add}>+</button>
    </div>
  )
}
const Counter2 = function(props, store, context) {

  return (
    <div>
      <button onClick={store.sub}>-</button>
      <span>{this.$.data.a}</span>
      <button onClick={store.add}>+</button>
    </div>
  )
}


Counter2.store = _ => {
  return {
    count: 1,
    add(e) {
      this.count++
      this.update()
      _.props.onChange(this.count)
     
    },
    sub() {
      _.$.data.a = Math.random()
      this.count--
      // this.update()
      // _.props.onChange(this.count)
    }
  }
}



const App = function(props, store){
  return (
    <div>
      <div>Count from child event: {this.$.data.a}</div>
      <Counter onChange={store.changeHandle}></Counter>
      <Counter2 onChange={store.changeHandle}></Counter2>
    </div>
  )
}

Counter2.use = ['a']
Counter.use = ['a']
App.use = ['a']


App.store = _ => ({
  count: null,
  changeHandle(count) {
    _.store.count = count
    _.update()
  }
})

render(<App />, 'body', { data: {a:11} })
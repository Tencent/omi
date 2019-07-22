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
    },
    install(){
      console.log('install')
    },
    installed(){
      console.log('installed')
    },
    uninstall(){
      console.log('uninstall')
    },
    beforeUpdate(){
      console.log('beforeUpdate')
    },
    updated(){
      console.log('updated')
    },
    beforeRender(){
      console.log('beforeRender')
    },
    receiveProps(){
      console.log('receiveProps')
    }
  }
}

const App = (props, store) => {
  return (
    <div>
      <div onClick={store.toggle}>Count from child event: {store.count}</div>
      {store.show && <Counter onChange={store.changeHandle}></Counter>}
    </div>
  )
}

App.store = _ => {
  class Store {
    count = null
    show = true
    changeHandle = (count) => {
      this.count = count
      this.update()
    }
    toggle = ()=>{
      this.show =!this.show
      this.update()
    }
  }

  return new Store
}

render(<App />, 'body')
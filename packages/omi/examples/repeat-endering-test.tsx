import { render, signal, tag, Component, h } from '@/index'

const count = signal(0)

function add() {
  count.value++
}

function sub() {
  count.value--
}

@tag('grandson-el')
class GrandsonEl extends Component {
  render() {
    console.log('render grandson')
    return (
      <>
        <span>{count.value}</span>
      </>
    )
  }
}


@tag('counter-demo')
class CounterDemo extends Component {
  static css = 'span { color: red; }'

  render() {
    console.log('render child')
    return (
      <>
        <button onClick={sub}>-</button>
        <span>{count.value}</span>
        <button onClick={add}>+</button>
        <grandson-el />
      </>
    )
  }
}

@tag('my-app')
class MyApp extends Component {

  render() {
    console.log('render parent')
    return (
      <div>
        <div>{count.value}</div>
        <counter-demo />
      </div>

    )
  }
}

render(<my-app />, document.body)
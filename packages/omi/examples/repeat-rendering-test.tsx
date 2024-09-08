import { render, signal, tag, Component, h } from '@/index'

const count = signal(88)

function add() {
  count.value++
}

function sub() {
  count.value--
}

let times = 0

@tag('grandson-el')
class GrandsonEl extends Component {
  render() {
    console.log('render grandson')
    return (
      <>
        <span>{count.value}</span>
        <grandson-el2 count={count.value} />
      </>
    )
  }
}

@tag('grandson-el2')
class GrandsonEl2 extends Component {
  render(props) {
    console.log('render grandson2')
    times++
    return (
      <>
        <br />
        <span>{props.count}----times{times}</span>
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
       <grandson-el2 count={count.value} />
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


async function renderAsync() {

  console.log(times === 0, times)
  render(<my-app />, document.body)
  console.log(times === 2, times)
  count.value++
  count.value++
  count.value++
  count.value++
  console.log(times === 2, times)
  await Promise.resolve()
  await Promise.resolve()
  console.log(times === 4, times)
}


renderAsync()
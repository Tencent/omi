import { render, signal, tag, Component, h } from '@/index'

const count = signal(0)

function add() {
  count.value++
}

function sub() {
  count.value--
}

@tag('counter-demo')
class CounterDemo extends Component {
  static css = 'span { color: red; }'

  render() {
    return (
      <>
        <button onClick={sub}>-</button>
        <span>{count.value}</span>
        <button onClick={add}>+</button>
      </>
    )
  }
}

@tag('my-app')
class MyApp extends Component {
  cssProp: string = ''

  installed(): void {
    setInterval(() => {
      this.cssProp = `span{ font-size: ${Math.floor(Math.random() * 120)}px }`
      this.update()
    }, 500)
  }
  render() {
    return (
      <counter-demo css={this.cssProp || 'span{ color: green !important}'} />
    )
  }
}

render(<my-app />, document.body)

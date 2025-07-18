import { render, tag, Component, h, bind } from '@/index'

@tag('counter-demo')
class CounterDemo extends Component<{ count: number }> {
  static css = 'span { color: red; }'

  state = {
    count: 0,
  }

  @bind
  sub() {
    this.setState({ count: this.state.count - 1 })
  }
  @bind
  add() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <>
        <button onClick={this.sub}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.add}>+</button>
      </>
    )
  }
}

render(<counter-demo />, document.body)

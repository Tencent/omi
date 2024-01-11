import { render, tag, Component, h, bind } from '@/index'

@tag('counter-demo')
class CounterDemo extends Component {
  static props = {
    count: {
      count: Number,
      // count: [Number, String, Array],
      default: 20,
      reflect: true,
      // or reflect(value) {}
      changed(newValue, oldValue) {
        console.log('changed', newValue, oldValue)
      }
    }
  }

  state = {
    count: 0
  }

  install() {
    this.state.count = this.props.count
  }

  receiveProps(): void {
    if (this.props.count === this.state.count) {
      return false
    }

    this.state.count = this.props.count
  }

  @bind
  add() {
    this.state.count++
    this.update()
    this.fire('change', this.state.count)
  }

  render() {
    return (
      <>
        <span>{this.state.count}  <button onClick={this.add}>+</button></span>
      </>
    )
  }
}


@tag('my-app')
class MyApp extends Component {
  count = 10

  @bind
  onChange(evt) {
    this.count = evt.detail
    this.update()
  }

  render() {
    return (

      <counter-demo onChange={this.onChange} count={this.count}></counter-demo>

    )
  }
}
render(<my-app />, document.body)
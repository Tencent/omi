import { define, Component, h } from 'omi'

define('my-counter', class extends Component {

  static props = {
    count: {
      type: Number,
      default: 0,
      changed(newValue, oldValue) {
        this.state.count = newValue
        this.update()
      }
    }
  }

  state = {
    count: null
  }

  install() {
    this.state.count = this.props.count
  }

  sub = () => {
    this.state.count--
    this.update()
    this.fire('change', this.state.count)
  }

  add = () => {
    this.state.count++
    this.update()
    this.fire('change', this.state.count)
  }

  render(props) {
    return [
      h('button', { onClick: this.sub }, '-'),
      h('span', null, this.state.count),
      h('button', { onClick: this.add }, '+')
    ]
  }
})

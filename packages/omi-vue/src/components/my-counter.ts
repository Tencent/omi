import { define, Component, h } from 'omi'

define('my-counter', class extends Component {

  static propTypes = {
    count: Number
  }

  static observedAttributes = ['count']

  attributeChangedCallback(name, oldValue, newValue) {
    this.state[name] = newValue
    this.update()
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

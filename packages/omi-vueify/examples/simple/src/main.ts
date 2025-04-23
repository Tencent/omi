import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import { define, render, signal, tag, Component, h } from 'omi'

const count = signal(0)

function add() {
  count.value++
}

function sub() {
  count.value--
}

export class CounterDemo extends Component {
  static css = 'span { color: red; }'

  static propTypes = {
    name: String,
    obj: Object,
  }
  static defaultProps = {
    name: 'omi'
  }
  xxx = ()=> {
    this.fire('hello', { name: 'omi' })
  }

  render() {
    return h('div', null, [
      h('button', { onClick: add }, '+'),
      h('span', null, count.value),
      h('button', { onClick: sub }, '-'),
      h('br', null),
      h('span', null, this.props.name),
      h('button', { onClick: this.xxx }, 'random'),
      h('br', null),
      h('span', null, this.props.obj.age),
      h('slot', null),
    ])
  }
}

define('my-component', CounterDemo);

createApp(App).mount('#app')

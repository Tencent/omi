import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import { define, render, signal, tag, Component, h } from 'omi'
import { OTree } from './components/OTree.tsx'

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
  fireTest = ()=> {
    this.fire('hello', { name: 'omi' })
  }

  fireHelloTest = ()=> {
    this.fire('hello-test', { name: 'omi' })
  }

  log() {
    console.log(111)
  }

  render() {
    return h('div', null, [
      h('button', { onClick: add }, '+'),
      h('span', null, count.value),
      h('button', { onClick: sub }, '-'),
      h('br', null),
      h('span', null, this.props.name),
      h('button', { onClick: this.fireTest }, 'random'),
      h('br', null),
      h('span', null, this.props.obj?.age),
      h('button', { onClick: this.fireHelloTest }, 'fireHelloTest'),
      h('slot', null),
      h('slot', { name: 'bar' }, null),
    ])
  }
}

define('my-component', CounterDemo);
define('o-tree', OTree);

createApp(App).mount('#app')

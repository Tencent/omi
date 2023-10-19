import { render, signal, tag, Component, h } from '@/index'

import 'tdesign-icons-omi/add-rectangle'
import 'tdesign-icons-omi/minus-rectangle'

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
        <t-icon-minus-rectangle onClick={sub} />
        <span>{count.value}</span>
        <t-icon-add-rectangle onClick={add} />
      </>
    )
  }
}

render(<counter-demo />, document.body)
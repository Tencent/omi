import { tag, WeElement, h, render } from 'omi'
import './index.tsx'

@tag('table-demo')
export default class Table extends WeElement {


  render(props) {
    return < o-tip>
      <div> 提示！！</div>
    </o-tip>
  }
}


render(<table-demo></table-demo>, 'body')

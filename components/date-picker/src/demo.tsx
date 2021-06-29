import { tag, WeElement, h, render } from 'omi'
import './index.tsx'

@tag('table-demo')
export default class Table extends WeElement {

  render(props) {
    return <div>
      <o-date-picker locale="zh" >

      </o-date-picker>

    </div>
  }
}


render(<table-demo></table-demo>, 'body')

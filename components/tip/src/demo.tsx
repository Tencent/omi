import { tag, WeElement, h, render } from 'omi'
import './index.tsx'

@tag('table-demo')
export default class Table extends WeElement {

  render(props) {
    return <div>
      < o-tip style="margin-left:100px;margin-top:100px;" position="bottom" effect="dark" content="tip 123">
        <div> 提示！！</div>
      </o-tip>

    </div>
  }
}


render(<table-demo></table-demo>, 'body')

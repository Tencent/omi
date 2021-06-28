import { tag, WeElement, h, render } from 'omi'
import './index.tsx'

@tag('table-demo')
export default class Table extends WeElement {

  render(props) {
    return <div>
      < o-tooltip style="margin-left:110px;margin-top:100px;" position="left" effect="dark" content="tooltip 123">
        <div> 提示！！</div>
      </o-tooltip>
      <br></br>
      < o-tooltip style="margin-left:10px;margin-top:100px;" position="left" effect="dark" content="tooltip 123">
        <div> tooltip自动到右边去</div>
      </o-tooltip>
    </div>
  }
}


render(<table-demo></table-demo>, 'body')

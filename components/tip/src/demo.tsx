import { tag, WeElement, h, render } from 'omi'
import './index.tsx'

@tag('table-demo')
export default class Table extends WeElement {

  render(props) {
    return <div>
      < o-tip style="margin-left:110px;margin-top:100px;" position="left" effect="dark" content="tip 123">
        <div> 提示！！</div>
      </o-tip>
      <br></br>
      < o-tip style="margin-left:10px;margin-top:100px;" position="left" effect="dark" content="tip 123">
        <div> tip自动到右边去</div>
      </o-tip>
    </div>
  }
}


render(<table-demo></table-demo>, 'body')

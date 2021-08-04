import { tag, WeElement, h, render } from 'omi'
import './index.tsx'

@tag('table-demo')
export default class Table extends WeElement {

  render(props) {
    return <div>
      <o-popover style="margin-left:110px;margin-top:100px;" trigger="hover" position="left" >
        <div> 提示！！</div>
        <div slot="popover" tip="popover">
          <ul>
            <li>abc</li>
            <li>efg</li>
          </ul>

        </div>
      </o-popover>
      <br></br>
      <o-popover style="margin-left:10px;margin-top:100px;" position="left" >
        <div>popover自动到右边去</div>
        <div slot="popover" tip="popover">
          <ul>

            <li>abc</li>
            <li>efg</li>
          </ul>
        </div>
      </o-popover>
    </div>
  }
}


render(<table-demo></table-demo>, 'body')

import { tag, WeElement, h, render } from 'omi'
import './index.tsx'

@tag('table-demo')
export default class Table extends WeElement {

  render(props) {
    return <div>
      <o-image src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png">
      </o-image>


    </div>
  }
}


render(<table-demo></table-demo>, 'body')

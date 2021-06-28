import { tag, WeElement, h, render } from 'omi'
import './index.tsx'

@tag('table-demo')
export default class Table extends WeElement {

  render(props) {
    return <div>
      <o-date-picker style="margin-left:110px;margin-top:100px;" trigger="hover" position="left" >

      </o-date-picker>

    </div>
  }
}


render(<table-demo></table-demo>, 'body')

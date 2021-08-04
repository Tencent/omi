import { tag, WeElement, h, render } from 'omi'
import './index.tsx'

@tag('table-demo')
export default class Table extends WeElement {

  render(props) {
    return <div>
      <o-date-picker size="medium" locale="zh" >

      </o-date-picker>

      <br></br><br></br><br></br><br></br><br></br>
      <o-date-picker size="small" locale="zh" >

      </o-date-picker>
      <br></br><br></br><br></br><br></br><br></br>
      <o-date-picker size="mini"  >

      </o-date-picker>

      <br></br><br></br><br></br><br></br><br></br>
      <o-date-picker width="500px" size="mini" mode="range"  >
      </o-date-picker>
    </div>
  }
}


render(<table-demo></table-demo>, 'body')

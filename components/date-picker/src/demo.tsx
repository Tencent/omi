import { tag, WeElement, h, render } from 'omi'
import './index.tsx'

@tag('table-demo')
export default class Table extends WeElement {

  render(props) {
    return <div>
      <o-date-picker size="medium" locale="zh" onChange={e => console.log(e)} >
      </o-date-picker>

      <br></br><br></br><br></br><br></br><br></br>
      <o-date-picker size="small" locale="zh" onChange={e => console.log(e)}>
      </o-date-picker>

      <br></br><br></br><br></br><br></br><br></br>
      <o-date-picker size="mini" onChange={e => console.log(e)} >
      </o-date-picker>

      <br></br><br></br><br></br><br></br><br></br>
      <o-date-picker width="500px" size="mini" mode="range" onChange={e => console.log(e)} >
      </o-date-picker>
    </div>
  }
}


render(<table-demo></table-demo>, 'body')

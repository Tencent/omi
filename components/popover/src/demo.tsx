import { tag, WeElement, h, render } from 'omi'
import './index.tsx'

@tag('table-demo')
export default class Table extends WeElement {

  arr = ['test0']

  onClick = (evt) => {
    this.arr.push(`test${this.arr.length}`)
    this.update()
  }
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
      <o-popover style="margin-left:10px;margin-top:100px;" position="right" >
        <div>popover自动到右边去</div>
        <div slot="popover" tip="popover">
          <ul>
            {this.arr.map(item =>
              <li>{item}</li>
            )}
          </ul>
        </div>
      </o-popover>
      <br />
      <button onClick={this.onClick}>update slot</button>
    </div>
  }
}


render(<table-demo></table-demo>, 'body')

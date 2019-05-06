import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'


interface Props {
}

interface Data {

}

const parser = new DOMParser()

@tag('m-layout-grid')
export default class LayoutGrid extends WeElement<Props, Data>{
  static css = css

  static defaultProps = {
    scale: 2
  }

  static propTypes = {
    path: String,
    paths: Object,
    scale: Number
  }

  install() {

    document.addEventListener('DOMContentLoaded', () => {
      this.update()
    })
  }
  render(props) {

    if (!this.innerHTML.trim()) return <div></div>
    const doc = parser.parseFromString(`<div>${this.innerHTML}</div>`, "text/xml");
    let arr = Array.prototype.slice.call(doc.childNodes[0].childNodes, 0)
  
    arr = arr.filter((item) => {
      return item.nodeName === 'cell'
    })
 
    //dom -> vdom
    return (
      <div class="mdc-layout-grid">
        <div class="mdc-layout-grid__inner">
          {arr.map(item => {
            return <div class="mdc-layout-grid__cell">{item.innerHTML}</div>
          })}
          {/* <span class='slot-span' style="display:none;"><slot></slot></span>   */}
        </div>
      </div>
    )
  }
}

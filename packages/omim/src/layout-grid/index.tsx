import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'


interface Props {
}

interface Data {

}

const parser = new DOMParser()

@tag('m-layout-grid')
class LayoutGrid extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    alignLeft: Boolean,
    alignRight: Boolean
  }

  install() {
    document.addEventListener('DOMContentLoaded', () => {
      this.update()
    })
  }

  renderChild(child) {
    let arr = Array.prototype.slice.call(child.childNodes, 0)
    arr = arr.filter((item) => {
      return item.nodeName === 'cell'
    })

    if (arr.length > 0) {
      return <div class="mdc-layout-grid__cell">
        <div class="mdc-layout-grid__inner">
          {arr.map(item => {
            return this.renderChild(item)
          })}
        </div>
      </div>
    } else {
      
      const cell = <div class={classNames('mdc-layout-grid__cell',{
        "mdc-layout-grid__cell--align-top": child.hasAttribute('align-top'),
        "mdc-layout-grid__cell--align-middle": child.hasAttribute('align-middle'),
        "mdc-layout-grid__cell--align-bottom": child.hasAttribute('align-bottom')
      })}></div>
      for (let i = 0, len = child.childNodes.length; i < len; i++) {
        if (child.childNodes[i].nodeType === 3) {
          cell.children.push(child.childNodes[i].nodeValue)
        } else {
          cell.children.push(processNode(child.childNodes[i]))
        }

      }
      return cell
    }
  }

  render(props) {

    if (!this.innerHTML.trim()) return
    const doc = parser.parseFromString(`<div>${this.innerHTML}</div>`, "text/xml");
    let arr = Array.prototype.slice.call(doc.childNodes[0].childNodes, 0)

    arr = arr.filter((item) => {
      return item.nodeName === 'cell'
    })
  
    //dom -> vdom
    return (
      <div {...extractClass(props, 'mdc-layout-grid', {
        'mdc-layout-grid--align-right': props.alignRight,
        'mdc-layout-grid--align-left': props.alignLeft
      })}>
        <div class="mdc-layout-grid__inner">
          {arr.map(item => {
            return this.renderChild(item)
          })}
        </div>
      </div>
    )
  }
}

function processNode(node) {
  if (node.nodeType === 1) {
    var i, child, attributes = {}, children = [];
    for (i = 0; (child = node.attributes[i]); ++i) {
      attributes[child.nodeName] = child.nodeValue;
    }
    for (i = 0; (child = node.childNodes[i]); ++i) {
      children.push(processNode(child));
    }
    return {
      nodeName: node.tagName,
      attributes,
      children
    }
  }
  if (node.nodeType === 3) {
    return node.nodeValue;
  }
}

export { css }
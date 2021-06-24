import { WeElement, h, tag } from 'omi'
import { create, cssomSheet } from 'twind'
import '@omiu/tree'

const sheet = cssomSheet({ target: new CSSStyleSheet() })
const { tw } = create({ sheet })


interface Props {

}

const tagName = 'admin-left-panel'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = sheet.target
  treeData = [{
    label: '一级 1',
    sign: '●',
    expanded: true,
    selected: true,
    icon: 'ac-unit-outlined',
    children: [{
      sign: '1, M',
      label: '二级 1-1',
      children: [{
        sign: 'M',
        label: '三级 1-1-1',
        icon: 'accessible-rounded',
        color: 'red'
      }]
    }]
  }, {
    label: '一级 2',
    icon: 'accessible-rounded',
    children: [{
      label: '二级 2-1',
      children: [{
        label: '三级 2-1-1'
      }]
    }, {
      label: '二级 2-2',
      children: [{
        label: '三级 2-2-1'
      }]
    }]
  }, {
    label: '一级 3',
    icon: 'accessible-rounded',
    children: [{
      label: '二级 3-1',
      icon: 'accessible-rounded',
      children: [{
        label: '三级 3-1-1',
        icon: 'accessible-rounded'
      }]
    }, {
      label: '二级 3-2',
      children: [{
        label: '三级 3-2-1'
      }]
    }]
  }]


  render() {
    console.error(this.treeData)
    return (
      <div class={tw``}>
        <o-tree style="width:400px;" data={this.treeData}></o-tree>
      </div>
    )
  }
}




import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import '@omiu/tree'
import '@omiu/icon/ac-unit-outlined'
import '@omiu/icon/accessible-rounded'

import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'tree-component'
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

  install() { }

  render() {
    return (
      <code-demo-container>
        <code-demo
          title="树形控件"
          describe={'展示树形嵌套数据结构的组件。'}
          code={`
\`\`\`html
<o-tree style="width:400px;" 
data={[{
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
}]}>
</o-tree>
\`\`\`
          `}
        >
          <div slot="demo" class={tw`flex justify-around px-5 py-5`}>

          <o-tree style="width:400px;" data={[{
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
          }]}></o-tree>

          </div>
        </code-demo>

      </code-demo-container>
    )
  }
}

import { OmiProps, WeElement, h, tag, classNames, render } from 'omi'

import '../list-item-meta'
import '../list-item'
import '../list'
import '../../link/link'
import '../../space/space'

@tag('list-header-footer')
export default class ListHeaderFooter extends WeElement {

  listData = [
    { id: 1, content: '列表内容列表内容列表内容' },
    { id: 2, content: '列表内容列表内容列表内容' },
    { id: 3, content: '列表内容列表内容列表内容' },
    { id: 4, content: '列表内容列表内容列表内容' },
  ]

  render() {
    return (
      <h.f>
        <t-list header='这里是 Header' footer='这里是 Footer' >
          {this.listData.map((item) => (
          <t-list-item key={item.id}>{item.content}</t-list-item>
        ))}
        </t-list>

        <t-list header={<p>通过 TNode 插入的 Header</p>} 
        footer={<p>通过 TNode 插入的 Footer</p>} >
          {this.listData.map((item) => (
          <t-list-item key={item.id}>{item.content}</t-list-item>
        ))}
        </t-list>

      </h.f>
    )
  }
}



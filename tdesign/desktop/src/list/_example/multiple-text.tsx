import { OmiProps, WeElement, h, tag, classNames, render } from 'omi'

import '../list-item-meta'
import '../list-item'
import '../list'


@tag('list-multiple-text')
export default class ListMultipleText extends WeElement {

  listData = [
    { id: 1, content: '列表内容列表内容列表内容' },
    { id: 2, content: '列表内容列表内容列表内容' },
    { id: 3, content: '列表内容列表内容列表内容' },
    { id: 4, content: '列表内容列表内容列表内容' },
  ];

  render() {
    return (
      <h.f>
        <t-list>
          {this.listData.map((item) =>{
            return(<t-list-item key={item.id}>
              <t-list-item-meta title="列表主内容" description={item.content} />
            </t-list-item>)
          })}
        </t-list>
      </h.f>
    )
  }
}

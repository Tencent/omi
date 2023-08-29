import { OmiProps, WeElement, h, tag, classNames, render } from 'omi'

import '../list-item-meta'
import '../list-item'
import '../list'

@tag('list-base-image-text')
export default class ListBaseImageText extends WeElement {

  avatarUrl = 'https://tdesign.gtimg.com/list-icon.png'

  listData = [
    { id: 1, content: '列表内容列表内容列表内容' },
    { id: 2, content: '列表内容列表内容列表内容' },
    { id: 3, content: '列表内容列表内容列表内容' },
    { id: 4, content: '列表内容列表内容列表内容' },
    { id: 5, content: '列表内容列表内容列表内容' },
    { id: 6, content: '列表内容列表内容列表内容' },
    { id: 7, content: '列表内容列表内容列表内容' },
  ];


  render() {
    return (
      <h.f>
        <t-list>
          {this.listData.map((item) =>{
            return(<t-list-item key={item.id}>
              <t-list-item-meta image={this.avatarUrl} title="列表主内容" description={item.content} />
            </t-list-item>)
          })}
        </t-list>
      </h.f>
    )
  }
}

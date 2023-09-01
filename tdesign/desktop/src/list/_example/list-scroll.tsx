import { OmiProps, WeElement, h, tag, classNames, render } from 'omi'

import '../list-item-meta'
import '../list-item'
import '../list'

@tag('list-scroll')
export default class ListScroll extends WeElement {
  
  height = 300;

  scrollCss = `.t-list{
    height: ` + this.height + `px !important;
    overflow: auto,
  }`

  install() {
  }
  avatarUrl = 'https://tdesign.gtimg.com/list-icon.png'

  listData = [
    { id: 1, content: '列表内容列表内容列表内容' },
    { id: 2, content: '列表内容列表内容列表内容' },
    { id: 3, content: '列表内容列表内容列表内容' },
    { id: 4, content: '列表内容列表内容列表内容' },
    { id: 5, content: '列表内容列表内容列表内容' },
    { id: 6, content: '列表内容列表内容列表内容' },
  ];

  handleScroll = () =>{
    console.log(111)
  }
  render() {
    return (
      <h.f>
        <t-list css={this.scrollCss} onScroll={this.handleScroll}>
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

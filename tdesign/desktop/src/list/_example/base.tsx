import { OmiProps, WeElement, h, tag, classNames, render } from 'omi'

import '../list-item-meta'
import '../list-item'
import '../list'
import '../../link/link'
import '../../space/space'

@tag('list-base')
export default class ListBase extends WeElement {

  asyncLoading="load-more"

  listData = [
    { id: 1, content: '列表内容列表内容列表内容' },
    { id: 2, content: '列表内容列表内容列表内容' },
    { id: 3, content: '列表内容列表内容列表内容' },
    { id: 4, content: '列表内容列表内容列表内容' },
  ]

  handleAsyncLoading = (val : string) => {
    // if (val === 'loading-custom') {
    //   setAsyncLoading(<div style={{ textAlign: 'center', marginTop: 12, }}> 没有更多数据了 </div>);
    // } else {
    //   setAsyncLoading(val);
    // }
  };

  onLoadMore = (evt : Event) => {
    console.log(evt)
    this.asyncLoading='loading'
    this.update()
    console.log(this.asyncLoading)
    // this.handleAsyncLoading('loading')
  }

  render() {
    return (
      <h.f>
        <t-list 
        split={true}
        asyncLoading={this.asyncLoading}
        onLoadMore={({ e }) => this.onLoadMore(e)}>
          {this.listData.map((item) => (
          <t-list-item key={item.id}>{item.content}</t-list-item>
        ))}
        </t-list>
      </h.f>
    )
  }
}


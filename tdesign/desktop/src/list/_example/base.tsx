import { OmiProps, WeElement, h, tag, classNames, render } from 'omi'

import '../list-item-meta'
import '../list-item'
import '../list'
import '../../link/link'
import '../../space/space'

@tag('list-base')
export default class ListBase extends WeElement {
  render() {
    return (
      <h.f>
        <t-list header={<p>通过 TNode 插入的 Header</p>} 
        footer={<p>通过 TNode 插入的 Footer</p>} 
        split="true"
        stripe="true"
        size="small"
        asyncLoading="loading">
          <t-list-item
            action={
              <t-space>
                <t-link theme="primary" hover="color">
                  操作1
                </t-link>
                <t-link theme="primary" hover="color">
                  操作2
                </t-link>
                <t-link theme="primary" hover="color">
                  操作3
                </t-link>
              </t-space>
            }
          >
            <t-list-item-meta
              title="列表主内容"
              image="https://pic1.zhimg.com/v2-2c4ce68d86daa94c40e1c2ad858c221f_r.jpg?source=1940ef5c"
              description="列表内容列表内容"
            ></t-list-item-meta>
          </t-list-item>
          <t-list-item
            action={
              <t-space>
                <t-link theme="primary" hover="color">
                  操作1
                </t-link>
                <t-link theme="primary" hover="color">
                  操作2
                </t-link>
                <t-link theme="primary" hover="color">
                  操作3
                </t-link>
              </t-space>
            }
          >
            <t-list-item-meta
              title="列表主内容"
              image="https://pic1.zhimg.com/v2-2c4ce68d86daa94c40e1c2ad858c221f_r.jpg?source=1940ef5c"
              description="列表内容列表内容"
            ></t-list-item-meta>
          </t-list-item>
          <t-list-item
            action={
              <t-space>
                <t-link theme="primary" hover="color">
                  操作1
                </t-link>
                <t-link theme="primary" hover="color">
                  操作2
                </t-link>
                <t-link theme="primary" hover="color">
                  操作3
                </t-link>
              </t-space>
            }
          >
            <t-list-item-meta
              title="列表主内容"
              image="https://pic1.zhimg.com/v2-2c4ce68d86daa94c40e1c2ad858c221f_r.jpg?source=1940ef5c"
              description="列表内容列表内容"
            ></t-list-item-meta>
          </t-list-item>
        </t-list>
      </h.f>
    )
  }
}

render(<list-base></list-base>, '.baseList_wrapper', {})

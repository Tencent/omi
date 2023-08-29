import { OmiProps, WeElement, h, tag, classNames, render } from 'omi'

import '../list-item-meta'
import '../list-item'
import '../list'
import '../../link/link'
import '../../space/space'
import '../../icon/edit'
import '../../icon/download'

@tag('list-with-action')
export default class ListWithAction extends WeElement {
  avatarUrl = 'https://tdesign.gtimg.com/site/avatar.jpg'

  render() {
    return (
      <h.f>
        <t-list>
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
            <t-list-item-meta image={this.avatarUrl} title="列表主内容" description="列表内容列表内容" />
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
            <t-list-item-meta image={this.avatarUrl} title="列表主内容" description="列表内容列表内容" />
          </t-list-item>
        </t-list>
        
        <div style={{ marginTop: 10 }}></div>
        <t-list split={true}>
        <t-list-item
            action={
              <t-space>
                <t-icon-edit></t-icon-edit>
                <t-icon-download>
                </t-icon-download>
              </t-space>
            }
          >
            <t-list-item-meta image={this.avatarUrl} title="列表主内容" description="列表内容列表内容" />
          </t-list-item>
          <t-list-item
            action={
              <t-space>
                <t-icon-edit></t-icon-edit>
                <t-icon-download>
                </t-icon-download>
              </t-space>
            }
          >
            <t-list-item-meta image={this.avatarUrl} title="列表主内容" description="列表内容列表内容" />
          </t-list-item>
        </t-list>
      </h.f>
    )
  }
}

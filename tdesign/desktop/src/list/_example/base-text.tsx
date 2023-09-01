import { OmiProps, WeElement, h, tag, classNames, render } from 'omi'

import '../list-item-meta'
import '../list-item'
import '../list'
import '../../link/link'
import '../../space/space'

import css from '../../list/style/index'

@tag('list-base-text')
export default class ListBaseText extends WeElement {

  static css = css

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
          >列表内容的描述性文字
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
          >列表内容的描述性文字
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
          >列表内容的描述性文字
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
          >列表内容的描述性文字
          </t-list-item>
        </t-list>
      </h.f>
    )
  }
}

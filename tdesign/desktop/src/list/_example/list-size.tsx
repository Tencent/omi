import { OmiProps, WeElement, h, tag, classNames, render } from 'omi'

import '../list-item-meta'
import '../list-item'
import '../list'

import css from '../../list/style/index'

@tag('list-size')
export default class ListSize extends WeElement {

  static css = css

  render() {
    return (
      <h.f>
        <h4>尺寸-小</h4>
        <t-list size='small'>
          <t-list-item
          >列表内容列表内容列表内容
          </t-list-item>
          <t-list-item
          >列表内容列表内容列表内容
          </t-list-item>
          <t-list-item
          >列表内容列表内容列表内容
          </t-list-item>
          <t-list-item
          >列表内容列表内容列表内容
          </t-list-item>
        </t-list>

        <h4 style={{ marginTop: 32 }}>尺寸-中（默认）</h4>
        <t-list>
          <t-list-item
          >列表内容列表内容列表内容
          </t-list-item>
          <t-list-item
          >列表内容列表内容列表内容
          </t-list-item>
          <t-list-item
          >列表内容列表内容列表内容
          </t-list-item>
          <t-list-item
          >列表内容列表内容列表内容
          </t-list-item>
        </t-list>
        
        <h4 style={{ marginTop: 32 }}>尺寸-大</h4>
        <t-list size='large'>
          <t-list-item
          >列表内容列表内容列表内容
          </t-list-item>
          <t-list-item
          >列表内容列表内容列表内容
          </t-list-item>
          <t-list-item
          >列表内容列表内容列表内容
          </t-list-item>
          <t-list-item
          >列表内容列表内容列表内容
          </t-list-item>
        </t-list>
      </h.f>
    )
  }
}

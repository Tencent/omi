import { OmiProps, WeElement, h, tag, classNames, render } from 'omi'

import '../list-item-meta'
import '../list-item'
import '../list'


@tag('list-zebra')
export default class ListZebra extends WeElement {
  render() {
    return (
      <h.f>
        <t-list stripe={true}>
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

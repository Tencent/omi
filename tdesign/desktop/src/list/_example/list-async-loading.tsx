import { OmiProps, WeElement, h, tag, classNames, render } from 'omi'

import '../list-item-meta'
import '../list-item'
import '../list'


@tag('list-async-loading')
export default class ListAsyncLoading extends WeElement {
  render() {
    return (
      <h.f>
        <t-list asyncLoading="loading">
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

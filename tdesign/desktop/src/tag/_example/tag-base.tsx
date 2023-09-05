import { h, tag, WeElement } from 'omi'

import '../index'
import "../../space"

@tag('tag-base')
export default class TagBase extends WeElement {
  render() {
    return (
      <>
        <div style="position: relative;">
          <t-space direction="vertical" size="large">
            <t-space>
              <t-tag theme="default">标签一</t-tag>
              <a href="https://www.tencent.com/zh-cn" target="_blank" rel="noreferrer">
              <t-tag>超链接</t-tag>
            </a>
            </t-space>
            <t-space>
              <t-tag theme="primary">标签一</t-tag>
              <t-tag theme="warning">标签二</t-tag>
              <t-tag theme="danger" variant="dark">标签三</t-tag>
              <t-tag theme="success" variant="dark">标签四</t-tag>
            </t-space>
            <t-space>
              <t-tag theme="primary" variant="light">标签一</t-tag>
              <t-tag theme="warning" variant="light">标签二</t-tag>
              <t-tag theme="danger" variant="light">标签三</t-tag>
              <t-tag theme="success" variant="light">标签四</t-tag>
            </t-space>
            <t-space>
              <t-tag theme="primary" variant="outline">标签一</t-tag>
              <t-tag theme="warning" variant="outline">标签二</t-tag>
              <t-tag theme="danger" variant="outline">标签三</t-tag>
              <t-tag theme="success" variant="outline">标签四</t-tag>
            </t-space>
            <t-space>
              <t-tag theme="primary" variant="light-outline">标签一</t-tag>
              <t-tag theme="warning" variant="light-outline">标签二</t-tag>
              <t-tag theme="danger" variant="light-outline">标签三</t-tag>
              <t-tag theme="success" variant="light-outline">标签四</t-tag>
            </t-space>
        </t-space>
        </div>
      </>
    )
  }
}



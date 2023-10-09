import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'
import '../../switch'

@tag('timeline-loading')
export default class TimelineLoading extends WeElement {
  loading = false
  handleChange = (value: boolean) => {
    this.loading = value
    this.update()
  }
  render() {
    const { loading, handleChange } = this
    return (
      <t-space direction="vertical">
        <t-space>
          <h4>加载中</h4>
          <t-switch value={loading} onChange={(v: boolean) => handleChange(v)}></t-switch>
        </t-space>
        <t-timeline mode="same">
          <t-timeline-item label="2022-01-01">事件一</t-timeline-item>
          <t-timeline-item label="2022-02-01">事件二</t-timeline-item>
          <t-timeline-item label="2022-03-01">事件三</t-timeline-item>
          <t-timeline-item label="2022-04-01" loading={loading}>
            事件四
          </t-timeline-item>
        </t-timeline>
      </t-space>
    )
  }
}

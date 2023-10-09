import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'
import '../../switch'

@tag('timeline-reverse')
export default class TimelineReverse extends WeElement {
  reverse = false
  handleChange = (value: boolean) => {
    this.reverse = value
    this.update()
  }
  render() {
    const { reverse, handleChange } = this
    return (
      <t-space direction="vertical">
        <t-space>
          <h4>是否倒序</h4>
          <t-switch value={reverse} onChange={(v: boolean) => handleChange(v)}></t-switch>
        </t-space>
        <t-timeline mode="same" reverse={reverse}>
          <t-timeline-item label="2022-01-01">事件一</t-timeline-item>
          <t-timeline-item label="2022-02-01">事件二</t-timeline-item>
          <t-timeline-item label="2022-03-01">事件三</t-timeline-item>
          <t-timeline-item label="2022-04-01">事件四</t-timeline-item>
        </t-timeline>
      </t-space>
    )
  }
}

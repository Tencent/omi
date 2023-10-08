import { h, tag, WeElement } from 'omi'

import '../index'

const CommonStyle = {
  fontSize: 12,
  color: 'rgba(0,0,0,.6)',
}

@tag('timeline-custom-content')
export default class TimelineCustomContent extends WeElement {
  render() {
    return (
      <t-timeline mode="same">
        <t-timeline-item label="2022-01-01">
          <div>事件一</div>
          <div style={CommonStyle}>事件一自定义内容</div>
        </t-timeline-item>
        <t-timeline-item label="2022-02-01">
          <div>事件二</div>
          <div style={CommonStyle}>事件二自定义内容</div>
        </t-timeline-item>
        <t-timeline-item label="2022-03-01">
          <div>事件三</div>
          <div style={CommonStyle}>事件三自定义内容</div>
        </t-timeline-item>
        <t-timeline-item label="2022-04-01">
          <div>事件四</div>
          <div style={CommonStyle}>事件四自定义内容</div>
        </t-timeline-item>
      </t-timeline>
    )
  }
}

import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'
import '../../button'

@tag('timeline-base')
export default class TimelineBase extends WeElement {
  direction = 'vertical'
  handleClick = (value: string) => {
    this.direction = value
    this.update()
  }
  render() {
    const { direction, handleClick } = this
    return (
      <t-space direction="vertical">
        <t-space>
          <h4>时间轴方向</h4>
          <t-button
            onClick={() => {
              handleClick('vertical')
            }}
          >
            垂直时间轴
          </t-button>
          <t-button
            onClick={() => {
              this.handleClick('horizontal')
            }}
          >
            水平时间轴
          </t-button>
        </t-space>
        <t-timeline layout={direction} mode="same">
          <t-timeline-item label="2022-01-01">事件一</t-timeline-item>
          <t-timeline-item label="2022-02-01">事件二</t-timeline-item>
          <t-timeline-item label="2022-03-01">事件三</t-timeline-item>
          <t-timeline-item label="2022-04-01">事件四</t-timeline-item>
        </t-timeline>
      </t-space>
    )
  }
}

import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'
import '../../button'
import '../../icon/tips'
import '../../icon/user'
import '../../icon/heart'
import '../../icon/home'

const color = 'var(--td-brand-color)'

@tag('timeline-custom-dot')
export default class TimelineCustomDot extends WeElement {
  dot = 'default'
  handleClick = (value: string) => {
    this.dot = value
    this.update()
  }
  render() {
    const { dot, handleClick } = this
    return (
      <t-space direction="vertical">
        <t-space>
          <h4>时间轴样式</h4>
          <t-button
            onClick={() => {
              handleClick('default')
            }}
          >
            默认样式
          </t-button>
          <t-button
            onClick={() => {
              handleClick('dot')
            }}
          >
            Dot样式
          </t-button>
        </t-space>

        <t-timeline mode="same" theme={dot}>
          <t-timeline-item label="2022-01-01" dot={<t-icon-tips size="medium" style={{ color: color }} />}>
            事件一
          </t-timeline-item>
          <t-timeline-item label="2022-02-01" dot={<t-icon-user size="medium" style={{ color: color }} />}>
            事件二
          </t-timeline-item>
          <t-timeline-item label="2022-03-01" dot={<t-icon-heart size="medium" style={{ color: color }} />}>
            事件三
          </t-timeline-item>
          <t-timeline-item label="2022-04-01" dot={<t-icon-home size="medium" style={{ color: color }} />}>
            事件四
          </t-timeline-item>
        </t-timeline>
      </t-space>
    )
  }
}

import { h, tag, WeElement } from 'omi'

import '../index'

@tag('timeline-theme')
export default class TimelineTheme extends WeElement {
  render() {
    return (
      <t-timeline mode="same">
        <t-timeline-item label="2022-01-01" dotColor="primary">
          已完成的时间
        </t-timeline-item>
        <t-timeline-item label="2022-02-01" dotColor="success">
          成功的时间
        </t-timeline-item>
        <t-timeline-item label="2022-03-01" dotColor="error">
          危险时间
        </t-timeline-item>
        <t-timeline-item label="2022-04-01" dotColor="warning">
          告警事件
        </t-timeline-item>
        <t-timeline-item label="2022-05-01">默认的时间</t-timeline-item>
        <t-timeline-item label="2022-06-01" dotColor="yellowgreen">
          自定义主题色
        </t-timeline-item>
      </t-timeline>
    )
  }
}

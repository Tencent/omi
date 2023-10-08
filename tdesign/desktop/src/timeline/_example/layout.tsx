import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'
import '../../button'

@tag('timeline-layout')
export default class TimelineLayout extends WeElement {
  direction = 'left' // <'left' | 'right' | 'alternate'>
  mode = 'same' //<'same' | 'alternate'>
  layout = 'vertical' //<'vertical' | 'horizontal'>

  handleDirection = (value: string) => {
    this.direction = value
    this.update()
  }

  handleMode = (value: string) => {
    this.mode = value
    this.update()
  }

  handleLayout = (value: string) => {
    this.layout = value
    this.update()
  }
  render() {
    const { direction, mode, layout, handleDirection, handleMode, handleLayout } = this
    return (
      <t-space direction="vertical">
        <t-space>
          <h4>时间轴方向</h4>
          <t-button
            onClick={() => {
              handleLayout('vertical')
            }}
          >
            垂直时间轴
          </t-button>
          <t-button
            onClick={() => {
              this.handleLayout('horizontal')
            }}
          >
            水平时间轴
          </t-button>
        </t-space>
        <t-space>
          <h4>对齐方式</h4>
          <t-button
            onClick={() => {
              handleDirection('left')
            }}
          >
            左对齐
          </t-button>
          <t-button
            onClick={() => {
              this.handleDirection('alternate')
            }}
          >
            交错对齐
          </t-button>
          <t-button
            onClick={() => {
              this.handleDirection('right')
            }}
          >
            右对齐
          </t-button>
        </t-space>

        <t-space>
          <h4>label对齐方式</h4>
          <t-button
            onClick={() => {
              handleMode('same')
            }}
          >
            同侧
          </t-button>
          <t-button
            onClick={() => {
              this.handleMode('alternate')
            }}
          >
            交错
          </t-button>
        </t-space>
        <t-timeline layout={layout} labelAlign={direction} mode={mode}>
          <t-timeline-item label="2022-01-01">事件一</t-timeline-item>
          <t-timeline-item label="2022-02-01">事件二</t-timeline-item>
          <t-timeline-item label="2022-03-01">事件三</t-timeline-item>
          <t-timeline-item label="2022-04-01">事件四</t-timeline-item>
        </t-timeline>
      </t-space>
    )
  }
}

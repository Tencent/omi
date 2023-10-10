import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button'

@tag('tooltip-base')
export default class TooltipBase extends WeElement {
  static css = `
  .container {
      margin: 0 auto;
      width: 500px;
      height: 260px;
      position: relative;
    }
    .placement {
      position: absolute;
      &.top {
        top: 0;
      }
      &.center {
        left: 42%;
      }
      &.left {
        left: 70px;
      }
      &.right {
        right: 70px;
      }
      &.bottom {
        bottom: 0;
      }
      &.align {
        top: 42%;
      }
      &.top-align {
        top: 50px;
      }
      &.bottom-align {
        bottom: 50px;
      }
      &.right-full {
        right: 0;
      }
    }`
  render() {
    return (
      <div class="container">
        <t-tooltip class="placement top center" content="这是Tooltip内容" placement="top" showArrow destroyOnClose>
          <t-button variant="outline">top</t-button>
        </t-tooltip>
        <t-tooltip
          content="这是Tooltip内容 top-left"
          placement="top-left"
          showArrow
          destroyOnClose
          class="placement top left"
        >
          <t-button variant="outline">top-left</t-button>
        </t-tooltip>
        <t-tooltip
          content="这是Tooltip内容top-right"
          placement="top-right"
          showArrow
          destroyOnClose
          class="placement top right"
        >
          <t-button variant="outline">top-right</t-button>
        </t-tooltip>
        <t-tooltip
          content="这是Tooltip内容"
          placement="bottom"
          showArrow
          destroyOnClose
          class="placement bottom center"
        >
          <t-button variant="outline">bottom</t-button>
        </t-tooltip>
        <t-tooltip
          content="这是Tooltip内容 bottom-left"
          placement="bottom-left"
          showArrow
          destroyOnClose
          class="placement bottom left"
        >
          <t-button variant="outline">bottom-left</t-button>
        </t-tooltip>
        <t-tooltip
          content="这是Tooltip内容 bottom-right"
          placement="bottom-right"
          showArrow
          destroyOnClose
          class="placement bottom right"
        >
          <t-button variant="outline">bottom-right</t-button>
        </t-tooltip>
        <t-tooltip content="这是Tooltip内容" placement="left" showArrow destroyOnClose class="placement align">
          <t-button variant="outline">left</t-button>
        </t-tooltip>
        <t-tooltip
          content="这是Tooltip内容   left-top"
          placement="left-top"
          overlayStyle={{ width: '140px' }}
          showArrow
          destroyOnClose
          class="placement top-align"
        >
          <t-button variant="outline">left-top</t-button>
        </t-tooltip>
        <t-tooltip
          content="这是Tooltip内容 left-bottom"
          placement="left-bottom"
          overlayStyle={{ width: '140px' }}
          showArrow
          destroyOnClose
          class="placement bottom-align"
        >
          <t-button variant="outline">left-bottom</t-button>
        </t-tooltip>
        <t-tooltip
          content="这是Tooltip内容"
          placement="right"
          showArrow
          destroyOnClose
          class="placement right-full align"
        >
          <t-button variant="outline">right</t-button>
        </t-tooltip>
        <t-tooltip
          content="这是Tooltip内容 right-top"
          placement="right-top"
          overlayStyle={{ width: '140px' }}
          showArrow
          destroyOnClose
          class="placement right-full top-align"
        >
          <t-button variant="outline">right-top</t-button>
        </t-tooltip>
        <t-tooltip
          content="这是Tooltip内容 right-bottom"
          placement="right-bottom"
          overlayStyle={{ width: '140px' }}
          showArrow
          destroyOnClose
          class="placement right-full bottom-align"
        >
          <t-button variant="outline">right-bottom</t-button>
        </t-tooltip>
      </div>
    )
  }
}

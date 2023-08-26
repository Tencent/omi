import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button/index'

@tag('popup-placement')
export default class PopupPlacement extends WeElement {
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
        <t-popup class="placement top center" content="这是popup内容" placement="top" showArrow>
          <t-button variant="outline"> top </t-button>
        </t-popup>
        <t-popup class="placement top left" content="这是popup内容" placement="top-left" showArrow>
          <t-button variant="outline"> top-left </t-button>
        </t-popup>
        <t-popup class="placement top right" content="这是popup内容" placement="top-right" showArrow>
          <t-button variant="outline"> top-right </t-button>
        </t-popup>
        <t-popup class="placement bottom center" content="这是popup内容" placement="bottom" showArrow>
          <t-button variant="outline"> bottom </t-button>
        </t-popup>
        <t-popup class="placement bottom left" content="这是popup内容" placement="bottom-left" showArrow>
          <t-button variant="outline"> bottom-left </t-button>
        </t-popup>
        <t-popup class="placement bottom right" content="这是popup内容" placement="bottom-right" showArrow>
          <t-button variant="outline"> bottom-right </t-button>
        </t-popup>
        <t-popup class="placement align" content="这是popup内容" placement="left" showArrow>
          <t-button variant="outline"> left </t-button>
        </t-popup>
        <t-popup class="placement top-align" content="这是popup内容" placement="left-top" showArrow>
          <t-button variant="outline"> left-top </t-button>
        </t-popup>
        <t-popup class="placement bottom-align" content="这是popup内容" placement="left-bottom" showArrow>
          <t-button variant="outline"> left-bottom </t-button>
        </t-popup>
        <t-popup class="placement right-full align" content="这是popup内容" placement="right" showArrow>
          <t-button variant="outline"> right </t-button>
        </t-popup>
        <t-popup class="placement right-full top-align" content="这是popup内容" placement="right-top" show-arrow>
          <t-button variant="outline"> right-top </t-button>
        </t-popup>
        <t-popup class="placement right-full bottom-align" content="这是popup内容" placement="right-bottom" show-arrow>
          <t-button variant="outline"> right-bottom </t-button>
        </t-popup>
      </div>
    )
  }
}

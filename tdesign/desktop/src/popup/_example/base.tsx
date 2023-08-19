import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button/index'

@tag('popup-base')
export default class PopupBase extends WeElement {
  render() {
    return (
      <>
        <div
          style={{ width: '100%', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <t-popup content="可以在浮层内容中描述禁用原因222">
            <t-button>跳转链接</t-button>
          </t-popup>
        </div>
        <div
          style={{ width: '100%', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <t-popup placement="bottom" content="可以在浮层内容中描述禁用原因">
            <t-button>跳转链接</t-button>
          </t-popup>
        </div>
        <div
          style={{ width: '100%', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <t-popup placement="right" content="可以在浮层内容中描述禁用原因">
            <t-button>跳转链接</t-button>
          </t-popup>
        </div>
        <div
          style={{ width: '100%', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <t-popup placement="left" content="可以在浮层内容中描述禁用原因">
            <t-button>跳转链接</t-button>
          </t-popup>
        </div>
      </>
    )
  }
}

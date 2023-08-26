import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button/index'

@tag('popup-visible')
export default class PopupVisible extends WeElement {
  visible = true
  render() {
    return (
      <div style={{ width: '100%', margin: '100px' }}>
        <t-popup content="这是popup内容" trigger="context-menu" placement="right" visible={this.visible}>
          <t-button>一直显示</t-button>
        </t-popup>
      </div>
    )
  }
}

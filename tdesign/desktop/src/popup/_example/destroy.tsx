import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button/index'

@tag('popup-destroy')
export default class PopupDestroy extends WeElement {
  render() {
    return (
      <div style={{ margin: '50px' }}>
        <t-popup trigger="hover" destroyOnClose content="这是一个弹出框">
          <t-button theme="primary">Hover me</t-button>
        </t-popup>
      </div>
    )
  }
}

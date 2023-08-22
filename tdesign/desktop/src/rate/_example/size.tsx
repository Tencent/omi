import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space/index'

@tag('rate-size')
export default class RateSize extends WeElement {
  render() {
    return (
      <t-space direction="vertical" style={{ textAlign: 'center' }}>
        <h3>16px</h3>
        <t-rate size={16} defaultValue={5}></t-rate>
        <h3>24px</h3>
        <t-rate default-value={5}></t-rate>
      </t-space>
    )
  }
}

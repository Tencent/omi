import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space/index'

@tag('rate-status')
export default class RateStatus extends WeElement {
  render() {
    return (
      <t-space direction="vertical" style={{ textAlign: 'center' }}>
        <h3>未评分状态</h3>
        <t-rate></t-rate>
        <h3>满分状态</h3>
        <t-rate default-value={5}></t-rate>
        <h3>半星状态</h3>
        <t-rate allow-half="true" default-value={4.5}></t-rate>
      </t-space>
    )
  }
}

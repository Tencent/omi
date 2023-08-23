import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space/index'
@tag('icon-base')
export default class IconBase extends WeElement {
  render() {
    return (
      <h>
        <t-space direction="vertical">
          <h4>Size: small | medium | large | 1.5em | 2em | 40px</h4>
          <t-space align="center">
            <t-icon-star-filled size="small"></t-icon-star-filled>
            <t-icon-star-filled size="medium"></t-icon-star-filled>
            <t-icon-star-filled size="large"></t-icon-star-filled>
            <t-icon-star-filled size="1.5em"></t-icon-star-filled>
            <t-icon-star-filled size="2em"></t-icon-star-filled>
            <t-icon-star-filled size="40px"></t-icon-star-filled>
          </t-space>
          <h4>Color</h4>
          <t-space align="center">
            <t-icon-star-filled></t-icon-star-filled>
            <t-icon-star-filled style={{ color: '#0d5bdb' }}></t-icon-star-filled>
            <t-icon-star-filled style={{ color: '#d54941' }}></t-icon-star-filled>
            <t-icon-star-filled style={{ color: '#e47922' }}></t-icon-star-filled>
            <t-icon-star-filled style={{ color: '#2ba471' }}></t-icon-star-filled>
          </t-space>
        </t-space>
      </h>
    )
  }
}

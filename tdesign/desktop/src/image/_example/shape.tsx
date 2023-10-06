import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('image-shape')
export default class ImageShape extends WeElement {
  render() {
    return (
      <t-space>
        <t-space direction="vertical" align="center">
          <t-image
            src="https://tdesign.gtimg.com/demo/demo-image-1.png"
            shape="square"
            style={{ width: 160, height: 160 }}
            fit="cover"
          />
          square
        </t-space>
        <t-space direction="vertical" align="center">
          <t-image
            src="https://tdesign.gtimg.com/demo/demo-image-1.png"
            style={{ width: 160, height: 160 }}
            fit="cover"
            shape="round"
          />
          round
        </t-space>
        <t-space direction="vertical" align="center">
          <t-image
            src="https://tdesign.gtimg.com/demo/demo-image-1.png"
            style={{ width: 160, height: 160 }}
            shape="circle"
            fit="cover"
          />
          circle
        </t-space>
      </t-space>
    )
  }
}

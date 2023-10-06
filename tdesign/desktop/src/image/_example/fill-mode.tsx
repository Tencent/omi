import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('image-fill-mode')
export default class ImageFillMode extends WeElement {
  render() {
    return (
      <t-space breakLine size={16}>
        {['fill', 'contain', 'cover', 'none', 'scale-down'].map((item) => (
          <t-space direction="vertical" align="left" key={item}>
            <t-image
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit={item}
              style={{ width: 120, height: 120 }}
            />
            {item}
          </t-space>
        ))}
      </t-space>
    )
  }
}

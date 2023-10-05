import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('image-fill-position')
export default class ImageFillPosition extends WeElement {
  render() {
    return (
      <t-space direction="vertical" style={{ width: '100%' }}>
        <t-space breakLine>
          <t-space direction="vertical" align="left">
            <t-image
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit="cover"
              position="center"
              style={{ width: 120, height: 120 }}
            />
            cover center
          </t-space>
          <t-space direction="vertical" align="left">
            <t-image
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit="cover"
              style={{ width: 120, height: 120 }}
              position="left"
            />
            cover left
          </t-space>
          <t-space direction="vertical" align="left">
            <t-image
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit="cover"
              style={{ width: 120, height: 120 }}
              position="right"
            />
            cover right
          </t-space>
        </t-space>
        <t-space style={{ marginTop: 20 }} breakLine>
          <t-space direction="vertical" align="left">
            <t-image
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit="cover"
              style={{ width: 280, height: 120 }}
              position="top"
            />
            cover top
          </t-space>
          <t-space direction="vertical" align="left">
            <t-image
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit="cover"
              style={{ width: 280, height: 120 }}
              position="bottom"
            />
            cover bottom
          </t-space>
        </t-space>
        <t-space style={{ marginTop: 20 }} breakLine>
          <t-space direction="vertical" align="left">
            <t-image
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit="contain"
              style={{ width: 120, height: 200 }}
              position="top"
            />
            contain top
          </t-space>
          <t-space direction="vertical" align="left">
            <t-image
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit="contain"
              style={{ width: 120, height: 200 }}
              position="bottom"
            />
            contain bottom
          </t-space>
          <t-space direction="vertical" align="left">
            <t-image
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit="contain"
              style={{ width: 120, height: 200 }}
              position="center"
            />
            contain center
          </t-space>
          <t-space style={{ marginTop: 20 }} breakLine>
            <t-space direction="vertical" align="left">
              <t-image
                src="https://tdesign.gtimg.com/demo/demo-image-1.png"
                fit="contain"
                style={{ width: 280, height: 120 }}
                position="left"
              />
              contain left
            </t-space>
            <t-space direction="vertical" align="left">
              <t-image
                src="https://tdesign.gtimg.com/demo/demo-image-1.png"
                fit="contain"
                style={{ width: 280, height: 120 }}
                position="right"
              />
              contain right
            </t-space>
          </t-space>
        </t-space>
      </t-space>
    )
  }
}

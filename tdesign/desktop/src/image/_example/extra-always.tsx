import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'
import '../../tag'
import '../../icon/print'

@tag('image-extra-always')
export default class ImageExtraAlways extends WeElement {
  render() {
    const mask = (
      <div
        style={{
          background: 'rgba(0,0,0,.4)',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 14,
          lineHeight: 22,
        }}
      >
        <t-tag
          shape="mark"
          theme="warning"
          style={{
            borderRadius: 3,
            background: 'transparent',
            color: '#fff',
          }}
        >
          <t-icon-print size={16} /> 高清
        </t-tag>
      </div>
    )

    const button = (
      <t-tag
        shape="mark"
        theme="warning"
        style={{
          position: 'absolute',
          right: 8,
          bottom: 8,
          borderRadius: 3,
          background: 'rgba(236,242,254,1)',
          color: 'rgba(0,82,217,1)',
        }}
      >
        <t-icon-print size={16} /> 高清
      </t-tag>
    )

    return (
      <t-space size={32}>
        <t-space direction="vertical">
          <strong style={{ fontSize: 20 }}>有遮罩</strong>
          <t-image
            src="https://tdesign.gtimg.com/demo/demo-image-1.png"
            style={{ width: 284, height: 160 }}
            overlayContent={mask}
          />
        </t-space>
        <t-space direction="vertical">
          <strong style={{ fontSize: 20 }}>无遮罩</strong>
          <t-image
            src="https://tdesign.gtimg.com/demo/demo-image-1.png"
            style={{ width: 284, height: 160 }}
            overlayContent={button}
          />
        </t-space>
      </t-space>
    )
  }
}

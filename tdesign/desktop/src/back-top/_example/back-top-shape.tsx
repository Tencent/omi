import { OmiProps, WeElement, h, tag, classNames, render, createRef } from 'omi'

import '../index'

import '../../space'

@tag('back-top-shape')
export default class backTopShape extends WeElement {
  height = 300

  // scrollCss =
  //   `.t-list{
  //   height: ` +
  //   this.height +
  //   `px !important;
  //   overflow: auto,
  // }`

  // sizeStyle = {
  //   position: 'relative',
  //   insetInlineEnd: 0,
  //   insetBlockEnd: 0,
  // }

  withStyle = `
    .t-back-top{
      position: relative !important;
      right: 0 !important;
      bottom: 0 !important;
    }
  `
  render() {
    return (
      <h.f>
        <div style="position: relative;">
          <t-space direction="vertical">
            <t-space size={24}>
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                shape="circle"
                size="medium"
                // offset={['400px', '316px']}
                container={() => document}
              />
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                size="medium"
                // offset={['300px', '300px']}
                container={() => document}
              />
            </t-space>
            <t-space size={24}>
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                size="medium"
                shape="circle"
                theme="primary"
                // offset={['400px', '316px']}
                container={() => document}
              />
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                size="medium"
                theme="primary"
                // offset={['300px', '300px']}
                container={() => document}
              />
            </t-space>
            <t-space size={24}>
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                size="medium"
                shape="circle"
                theme="dark"
                // offset={['400px', '316px']}
                container={() => document}
              />
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                size="medium"
                theme="dark"
                // offset={['300px', '300px']}
                container={() => document}
              />
            </t-space>
          </t-space>
        </div>
      </h.f>
    )
  }
}

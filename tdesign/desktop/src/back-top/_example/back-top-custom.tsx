import { OmiProps, WeElement, h, tag, classNames, render, createRef } from 'omi'

import '../index'

import '../../space'

@tag('back-top-custom')
export default class backTopCustom extends WeElement {
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
        <div style="position: relative; ">
          <t-space direction="vertical">
            <t-space>
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                container={() => document}
              />
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                default={<span>TOP</span>}
                container={() => document}
              />
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                content={<span>UP</span>}
                container={() => document}
              />
            </t-space>
          </t-space>
        </div>
      </h.f>
    )
  }
}

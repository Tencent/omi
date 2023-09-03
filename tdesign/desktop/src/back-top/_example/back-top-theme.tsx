import { OmiProps, WeElement, h, tag, classNames, render, createRef } from 'omi'

import '../index'

import '../../space'

@tag('back-top-theme')
export default class backTopTheme extends WeElement {
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
                size="medium"
                container={() => document}
              />
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                size="medium"
                theme='primary'
                container={() => document}
              />
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                size="medium"
                theme='dark'
                container={() => document}
              />
            </t-space>
            <t-space>
            <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                size="medium"
                shape="circle"
                container={() => document}
              />
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                size="medium"
                shape="circle"
                theme='primary'
                container={() => document}
              />
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                size="medium"
                shape="circle"
                theme='dark'
                container={() => document}
              />
            </t-space>
            <t-space>
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                size="small"
                container={() => document}
              />
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                size="small"
                theme="primary"
                container={() => document}
              />
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                size="small"
                theme="dark"
                container={() => document}
              />
            </t-space>
            <t-space>
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                size="small"
                shape="circle"
                container={() => document}
              />
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                size="small"
                theme="primary"
                shape="circle"
                container={() => document}
              />
              <t-back-top
                css={this.withStyle}
                visibleHeight={0}
                size="small"
                theme="dark"
                shape="circle"
                container={() => document}
              />
            </t-space>
          </t-space>
        </div>
      </h.f>
    )
  }
}

import { h, tag, WeElement } from 'omi'

import '../index'
import "../../icon/discount"

@tag('tag-icon')
export default class TagIcon extends WeElement {

  iconStyle = `
    .t-icon{
    margin-right: var(--td-comp-margin-xs);
    width: calc(var(--td-font-size-body-medium) + 2px);
    height: calc(var(--td-font-size-body-medium) + 2px);
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  `


  install(): void {
    const shadowRoot = this.attachShadow({ mode: "open" });
    console.log(shadowRoot)
  }


  render() {
    return (
      <div>
        <t-tag icon={<t-icon-discount css={this.iconStyle}/>}
        theme="default"
        >标签</t-tag>
      </div>
    )
  }
}



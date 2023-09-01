import { OmiProps, WeElement, h, tag, classNames, render, createRef} from 'omi'

import '../index'

import '../../list/list-item-meta'
import '../../list/list-item'
import '../../list/list'

@tag('back-top-base')
export default class backTopBase extends WeElement {
  height = 300;

  scrollCss = `
  .t-list{
    height: ` + this.height + `px !important;
    overflow: auto,
  }

  .t-back-top{
    position : absolute !important
  }
  `

  render() {
    return (
      <h.f>
        <div style="position: relative;">
          <t-list class="baseList_container" css={this.scrollCss}>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
            <t-list-item>列表内容</t-list-item>
          </t-list>
          <t-back-top container=".baseList_container"></t-back-top>
        </div>
      </h.f>
    )
  }
}

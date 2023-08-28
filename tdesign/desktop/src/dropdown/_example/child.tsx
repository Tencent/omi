import { h, tag, WeElement } from 'omi'
import '../../icon/chevron-down'
import '../index'
import '../../button'

@tag('dropdown-child')
export default class DropdownChild extends WeElement {
  dropdownCss = `ul, dl, ol {
        margin: 0;
        padding: 0;
        padding-left: 1.2em;
        line-height: 22px;
    }`
  clickHandler = (data: any) => {
    console.log(`选中【${data.value}】`)
  }
  render() {
    return (
      <t-dropdown css={this.dropdownCss} minColumnWidth={100} trigger="click">
        <t-button variant="text" suffix={<t-icon-chevron-down size="16" />}>
          更多
        </t-button>
        <t-dropdown-menu>
          <t-dropdown-item value={1}>
            操作一
            <t-dropdown-menu>
              <t-dropdown-item value={11}>操作1-1</t-dropdown-item>
              <t-dropdown-item value={12}>
                操作1-2
                <t-dropdown-menu>
                  <t-dropdown-item value={111}>操作1-1-1</t-dropdown-item>
                  <t-dropdown-item value={112}>操作1-1-2</t-dropdown-item>
                </t-dropdown-menu>
              </t-dropdown-item>
            </t-dropdown-menu>
          </t-dropdown-item>
          <t-dropdown-item value={2}>
            操作二
            <t-dropdown-menu>
              <t-dropdown-item value={21}>
                操作2-1
                <t-dropdown-menu>
                  <t-dropdown-item value={211}>操作2-1-1</t-dropdown-item>
                  <t-dropdown-item value={211}>操作2-1-2</t-dropdown-item>
                </t-dropdown-menu>
              </t-dropdown-item>
              <t-dropdown-item value={22} onClick={this.clickHandler}>
                操作2-2
              </t-dropdown-item>
            </t-dropdown-menu>
          </t-dropdown-item>
          <t-dropdown-item value={3}>操作三</t-dropdown-item>
        </t-dropdown-menu>
      </t-dropdown>
    )
  }
}

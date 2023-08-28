import { h, tag, WeElement } from 'omi'
import '../../icon/chevron-down'
import '../index'
import '../../button'

@tag('dropdown-theme')
export default class DropdownTheme extends WeElement {
  dropdownCss = `ul, dl, ol {
        margin: 0;
        padding: 0;
        padding-left: 1.2em;
        line-height: 22px;
    }`
  clickHandler = (data: any) => {
    console.log(`选中【${data.value}】`)
  }
  options = [
    {
      content: '选项一',
      value: 1,
      children: [
        {
          content: '选项九',
          value: 9,
        },
      ],
    },
    {
      content: '选项二',
      value: 3,
      children: [
        {
          content: '选项十',
          value: 10,
        },
      ],
    },
    {
      content: '危险操作',
      value: 4,
      theme: 'error',
      children: [
        {
          content: '危险操作一',
          value: 11,
          theme: 'error',
          children: [
            {
              content: '危险操作项',
              value: 13,
              theme: 'error',
            },
            {
              content: '操作项',
              value: 12,
            },
          ],
        },
      ],
    },
  ]
  render() {
    return (
      <t-dropdown css={this.dropdownCss} options={this.options} onClick={this.clickHandler} trigger="click">
        <t-button variant="text" suffix={<t-icon-chevron-down size="16" />}>
          更多
        </t-button>
      </t-dropdown>
    )
  }
}

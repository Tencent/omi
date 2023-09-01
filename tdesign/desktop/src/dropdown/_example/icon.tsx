import { h, tag, WeElement } from 'omi'
import '../../icon/discount'
import '../../icon/chevron-down'
import '../index'
import '../../button'

@tag('dropdown-icon')
export default class DropdownIcon extends WeElement {
  dropdownCss = `ul, dl, ol {
        margin: 0;
        padding: 0;
        padding-left: 1.2em;
        line-height: 22px;
    }`
  getContent = () => <div>操作四</div>
  clickHandler = (data: any) => {
    console.log(`选中【${data.value}】`)
  }
  options = [
    {
      content: '选项一',
      value: 1,
      prefixIcon: <t-icon-discount size="16" />,
    },
    {
      content: '选项二',
      value: 2,
      prefixIcon: <t-icon-discount size="16" />,
    },
    {
      content: '选项三',
      value: 3,
      prefixIcon: <t-icon-discount size="16" />,
    },
    {
      content: '选项四',
      value: 4,
      prefixIcon: <t-icon-discount size="16" />,
      children: [
        {
          content: '选项五',
          value: 5,
          prefixIcon: <t-icon-discount size="16" />,
        },
        {
          content: '选项六',
          value: 6,
          prefixIcon: <t-icon-discount size="16" />,
        },
      ],
    },
  ]
  render() {
    return (
      <t-dropdown css={this.dropdownCss} options={this.options} onClick={this.clickHandler}>
        <t-button suffix={<t-icon-chevron-down size="16" />}>更多</t-button>
      </t-dropdown>
    )
  }
}

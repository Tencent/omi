import { h, tag, WeElement } from 'omi'
import '../../icon/chevron-down'
import '../index'
import '../../button'

@tag('dropdown-left')
export default class DropdownLeft extends WeElement {
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
      value: 2,
      children: [
        {
          content: '选项五',
          value: 5,
        },
        {
          content: '选项六',
          value: 6,
          children: [
            {
              content: '选项七',
              value: 7,
            },
            {
              content: '选项八',
              value: 8,
            },
          ],
        },
      ],
    },
    {
      content: '选项三',
      value: 3,
      children: [
        {
          content: '选项十',
          value: 10,
        },
      ],
    },
  ]
  render() {
    return (
      <t-dropdown
        css={this.dropdownCss}
        options={this.options}
        onClick={this.clickHandler}
        direction="left"
        popupProps={{ placement: 'bottom-right' }}
      >
        <t-button variant="text" suffix={<t-icon-chevron-down size="16" />}>
          更多
        </t-button>
      </t-dropdown>
    )
  }
}

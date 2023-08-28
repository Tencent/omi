import { h, tag, WeElement } from 'omi'
import '../../icon/chevron-down'
import '../index'
import '../../button'

@tag('dropdown-split')
export default class DropdownSplit extends WeElement {
  clickHandler = (data: any) => {
    console.log(`选中【${data.value}】`)
  }
  getContent = () => <div>操作四</div>
  options = [
    {
      content: '操作一',
      value: 1,
    },
    {
      content: '操作二',
      value: 2,
    },
    {
      content: '操作三',
      value: 3,
      divider: true,
    },
    {
      content: this.getContent(),
      value: 4,
    },
  ]
  render() {
    return (
      <t-dropdown options={this.options} onClick={this.clickHandler} trigger="click">
        <t-button variant="text" suffix={<t-icon-chevron-down size="16" />}>
          更多
        </t-button>
      </t-dropdown>
    )
  }
}

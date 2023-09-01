import { h, tag, WeElement } from 'omi'
import '../../icon/chevron-down'
import '../index'
import '../../button'

@tag('dropdown-base')
export default class DropdownBase extends WeElement {
  getContent = () => <div>操作四</div>

  clickHandler = (data: any) => {
    console.log(`选中【${data.value}】`)
  }
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
    },
    {
      content: this.getContent(),
      value: 4,
    },
  ]
  render() {
    return (
      <t-dropdown options={this.options} onClick={this.clickHandler}>
        <t-button variant="text" suffix={<t-icon-chevron-down size="16" />}>
          更多
        </t-button>
      </t-dropdown>
    )
  }
}

import { h, tag, WeElement } from 'omi'
import '../index'
import '../../button'

@tag('dropdown-custom')
export default class DropdownCustom extends WeElement {
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
      <t-dropdown
        options={this.options}
        onClick={this.clickHandler}
        trigger="click"
        popupProps={{ overlayInnerStyle: { padding: 4 } }}
      >
        <t-button>点击我试试</t-button>
      </t-dropdown>
    )
  }
}

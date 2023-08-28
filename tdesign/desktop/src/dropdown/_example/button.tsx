import { h, tag, WeElement } from 'omi'
import '../../icon/ellipsis'
import '../index'
import '../../button'

@tag('dropdown-button')
export default class DropdownButton extends WeElement {
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
        <t-button theme="default" variant="outline" shape="square">
          <t-icon-ellipsis size="16" />
        </t-button>
      </t-dropdown>
    )
  }
}

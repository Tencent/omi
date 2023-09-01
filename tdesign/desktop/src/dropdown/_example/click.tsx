import { h, tag, WeElement } from 'omi'
import '../index'
import '../../button'

@tag('dropdown-click')
export default class DropdownClick extends WeElement {
  getContent = () => <div>操作四</div>

  options = [
    {
      content: '操作一',
      value: 1,
      onClick: () => console.log('操作一'),
    },
    {
      content: '操作二',
      value: 2,
      onClick: () => console.log('操作二'),
    },
    {
      content: '操作三',
      value: 3,
      onClick: () => console.log('操作三'),
    },
    {
      content: this.getContent(),
      value: 4,
      onClick: () => console.log('操作四'),
    },
  ]
  render() {
    return (
      <t-dropdown options={this.options}>
        <t-button>hover我试试</t-button>
      </t-dropdown>
    )
  }
}

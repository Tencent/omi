import { h, tag, WeElement } from 'omi'
import '../index'
import '../../button'

@tag('dropdown-long')
export default class DropdownLong extends WeElement {
  clickHandler = (data: any) => {
    console.log(`选中【${data.value}】`)
  }
  options = Array.from({ length: 20 }).map((v, k) => ({
    content: `选项${k + 1}`,
    value: k + 1,
  }))
  render() {
    return (
      <t-dropdown options={this.options} onClick={this.clickHandler} maxHeight={400} minColumnWidth={'90px'}>
        <t-button>hover我试试</t-button>
      </t-dropdown>
    )
  }
}

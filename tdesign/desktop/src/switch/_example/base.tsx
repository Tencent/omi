import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space/index'

@tag('switch-base')
export default class SwitchBase extends WeElement {
  checked = true
  onChange = (value: boolean) => {
    console.log('value: ' + value)
    this.checked = value
    this.update()
  }
  render() {
    const { checked, onChange } = this
    return (
      <t-space>
        <t-switch size="large" />
        <t-switch size="large" value={checked} onChange={onChange} />
      </t-space>
    )
  }
}

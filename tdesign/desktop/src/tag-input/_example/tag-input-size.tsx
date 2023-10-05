import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('tag-input-size')
export default class TagInputSize extends WeElement {
  tags1 = ['Vue', 'React']
  tags2 = ['Vue', 'React']
  tags3 = ['Vue', 'React']

  render() {
    let that = this

    const setTags1 = (value, { inputValue }) => {
      that.tags1 = value
      that.update()
    }

    const setTags2 = (value, { inputValue }) => {
      that.tags2 = value
      that.update()
    }

    const setTags3 = (value, { inputValue }) => {
      that.tags3 = value
      that.update()
    }

    return (
      <t-space direction="vertical" style={{ width: '80%' }}>
        <t-tag-input value={this.tags1} onChange={setTags1} size="small" clearable />

        <t-tag-input value={this.tags2} onChange={setTags2} clearable />

        <t-tag-input value={this.tags3} onChange={setTags3} size="large" clearable />
      </t-space>
    )
  }
}

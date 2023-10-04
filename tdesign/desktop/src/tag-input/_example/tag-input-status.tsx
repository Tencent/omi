import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'
import '../../popup'
import { block } from 'rules'

@tag('tag-input-status')
export default class TagInputStatus extends WeElement {
  tags1 = ['Vue', 'React', 'Miniprogram']
  tags2 = ['Vue', 'React', 'Miniprogram']
  tags3 = ['Vue', 'React', 'Miniprogram']
  tags4 = ['Vue', 'React', 'Miniprogram']
  tags5 = ['Vue', 'React', 'Miniprogram']

  render() {
    let that = this
    const style = { width: '500px' ,display: 'block'};
    const setTags1 = (value, { inputValue }) => {
      that.tags1 = value
      that.update()
    }
    const setTags2 = (value, { inputValue }) => {
      that.tags2 = value
      that.update()
    }
    const setTags3 = (value, { inputValue }) => {
      console.log(value)
      that.tags3 = value
      that.update()
    }
    const setTags4 = (value, { inputValue }) => {
      that.tags4 = value
      that.update()
    }
    const setTags5 = (value, { inputValue }) => {
      that.tags5 = value
      that.update()
    }
    

    return (
      <t-space direction="vertical" style={{ width: '100%' }} size="32px">
        <t-space>
          <label>禁用状态：</label>
          <t-tag-input style={style} value={this.tags1} onChange={setTags1} disabled />
        </t-space>

        <t-space>
          <label>只读状态：</label>
          <t-tag-input style={style} value={this.tags2} onChange={setTags2} tips="这是普通文本提示" readonly />
        </t-space>

        <t-space>
          <label>成功状态：</label>
          <t-tag-input style={style} value={this.tags3} onChange={setTags3} status="success" tips="校验通过文本提示" clearable />
        </t-space>

        <t-space>
          <label>成功状态：</label>
          <t-tag-input style={style} value={this.tags4} onChange={setTags4} status="warning" tips="校验不通过文本提示" clearable />
        </t-space>

        <t-space>
          <label>成功状态：</label>
          <t-tag-input style={style} value={this.tags5} onChange={setTags5} status="error" tips="校验存在严重问题文本提示" clearable />
        </t-space>
      </t-space>
    )
  }
}

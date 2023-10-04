import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('tag-input-base')
export default class TagInputBase extends WeElement {

  tags1 = ['Vue', 'React', 'Angular']
  tags2 = ['Vue', 'React']
  tags3 = ['Vue', 'React']

  

  render() {
    let that = this
    const onTagInputEnter = (val, context) => {
      that.tags1 = val
      that.update()
      console.log(val, context)
    };
  
    const onChange = (val, context) => {
      that.tags1 = val
      that.update()
      console.log(val, context)
    };

    return (
      <t-space direction="vertical" style={{width:'80%'}}>
        <t-tag-input 
        value={this.tags1}
        onChange={onChange}
        clearable
        // onPaste={onPaste}
        onEnter={onTagInputEnter}
        placeholder="请输入"
        >
        </t-tag-input>
        <t-tag-input value={this.tags2} label="Controlled: " placeholder="请输入" clearable />
        <t-tag-input defaultValue={this.tags3} label="UnControlled: " placeholder="请输入" clearable />
      </t-space>
    )
  }
}



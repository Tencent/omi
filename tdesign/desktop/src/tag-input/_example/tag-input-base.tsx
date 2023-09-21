import { h, tag, WeElement } from 'omi'

import '../index'


@tag('tag-input-base')
export default class TagInputBase extends WeElement {

  tags1 = ['Vue', 'React', 'Angular']

  

  render() {

    const onTagInputEnter = (val, context) => {
      this.tags1 = val
      this.update()
      console.log(val, context)
    };
  
    const onChange = (val, context) => {
      this.tags1 = val
      this.update()
      console.log(val, context)
    };

    return (
      <t-tag-input 
        value={this.tags1}
        onChange={onChange}
        clearable
        // onPaste={onPaste}
        onEnter={onTagInputEnter}
        placeholder="请输入"
        >

        </t-tag-input>
    )
  }
}



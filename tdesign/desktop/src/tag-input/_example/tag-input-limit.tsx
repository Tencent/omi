import { h, tag, WeElement } from 'omi'

import '../index'
import '../../message'

@tag('tag-input-limit')
export default class TagInputLimit extends WeElement {
  tags = []
  

  render() {
    let that = this

    const onEnter = (value, { inputValue }) => {
      that.tags = value
      if (value.length >= 3 && inputValue) {
        //待message组件作者完善MessagePlugin
        alert('最多只能输入 3 个标签!')
        // MessagePlugin.warning('最多只能输入 3 个标签!');
      }
      that.update()
    };

    return (
      <div style={{width:'100%'}}>
        <t-tag-input
          defaultValue={this.tags} 
          placeholder="最多只能输入 3 个标签" 
          max={3} 
          onEnter={onEnter} />
      </div>
    )
  }
}

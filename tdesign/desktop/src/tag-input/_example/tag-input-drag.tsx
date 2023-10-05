import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('tag-input-drag')
export default class TagInputDrag extends WeElement {

  tags1 = ['Vue', 'React', 'Angular']
  tags2 = ['Vue', 'React', 'Angular', 'Miniprogram']

  render() {
    let that = this
    const onTagInputEnter = (val, context) => {
      that.tags1 = val
      that.update()
      console.log(val, context)
    }
  
    const onChange = (val, context) => {
      that.tags1 = val
      that.update()
      console.log(val, context)
    }

    const onChange2 = (val, context) => {
      that.tags2 = val
      that.update()
      console.log(val, context)
    }

    function onDragSort({ currentIndex, targetIndex }) {
      console.log(currentIndex,targetIndex,'测试')
      const temp = that.tags1[currentIndex];
      that.tags1[currentIndex] = that.tags1[targetIndex];
      that.tags1[targetIndex] = temp;
      // setTags1([...tags1]);
      that.update()
    }

    function onDragSort2({ currentIndex, targetIndex }) {
      console.log(currentIndex,targetIndex,'测试')
      const temp = that.tags2[currentIndex];
      that.tags2[currentIndex] = that.tags2[targetIndex];
      that.tags2[targetIndex] = temp;
      that.update()
    }

    return (
      <t-space direction="vertical" style={{width:'80%'}}>
        <t-tag-input 
        value={this.tags1}
        onChange={onChange}
        clearable
        dragSort
        // onPaste={onPaste}
        onEnter={onTagInputEnter}
        onDragSort={onDragSort}
        placeholder="请输入"
        >
        </t-tag-input>
        <t-tag-input 
        value={this.tags2} 
        dragSort
        clearable
        excessTagsDisplayType="break-line"
        label="Controlled: "
        onChange={onChange2}
        onDragSort={onDragSort2}
        placeholder="请输入"
        />
      </t-space>
    )
  }
}



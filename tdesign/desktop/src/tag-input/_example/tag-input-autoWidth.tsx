import { h, tag, WeElement } from 'omi'

import '../index'
import '../../message'

@tag('tag-input-auto')
export default class TagInputAuto extends WeElement {
  tags = ['Vue', 'React']
  

  render() {
    let that = this

    const onChange = (val, context) => {
      that.tags= val
      that.update()
    };

    return (
      <div style={{width:'100%'}}>
        <t-tag-input
          value={this.tags} 
          onChange={onChange}
          autoWidth 
          clearable 
          />
      </div>
    )
  }
}

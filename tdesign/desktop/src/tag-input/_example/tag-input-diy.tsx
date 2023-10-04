import { h, tag, WeElement } from 'omi'

import '../index'
import "../../space"
import "../../popup"

@tag('tag-input-diy')
export default class TagInputDiy extends WeElement {
  tags = ['StudentA', 'StudentB', 'StudentC']
  

  render() {
    let that = this

    const setTags = (value, { inputValue }) => {
      that.tags = value
      that.update()
    };

   

    return (
      <t-space direction="vertical" style={{ width: '80%' }}>
        <t-tag-input 
        value={this.tags} 
        onChange={setTags}
        clearable 
        minCollapsedNum={2}
        tag={({ value }) => (
          <span>
            <img
              src="https://tdesign.gtimg.com/site/avatar.jpg"
              style={{ maxWidth: '18px', maxHeight: '18px', borderRadius: '50%', verticalAlign: 'text-top' }}
            />
            {value}
          </span>
        )}
        >
        </t-tag-input>

        <t-tag-input 
        value={this.tags} 
        onChange={setTags}
        valueDisplay={({ value, onClose }) =>
          value.map((item, index) => (
            <t-tag key={item} closable style={{ marginRight: '4px' }} onClose={() => onClose(index)}>
              <div>
                <img
                  src="https://tdesign.gtimg.com/site/avatar.jpg"
                  style={{ maxWidth: '18px', maxHeight: '18px', borderRadius: '50%', verticalAlign: 'text-top' }}
                />
                {item}
              </div>
            </t-tag>
          ))
        }
        clearable
        >
        </t-tag-input>
    </t-space>
    )
  }
}

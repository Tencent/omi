import { h, tag, WeElement } from 'omi'

import '../index'
import "../../space"
import "../../popup"

@tag('tag-input-collapse')
export default class TagInputCollapse extends WeElement {
  tags = ['Vue', 'React', 'Miniprogram', 'Angular', 'Flutter']
  

  render() {
    let that = this

    const setTags = (value, { inputValue }) => {
      that.tags = value
      that.update()
    };

    const renderCollapsedItems = ({ collapsedTags }) => {
      console.log(collapsedTags)
      return(
        <t-popup
          key={'tags'}
          content={collapsedTags.map((item) => (
            <t-tag key={item} style={{ marginRight: '4px' }}>
              {item}
            </t-tag>
          ))}
        >
          <t-tag part="pop-tag">More({collapsedTags?.length})</t-tag>
        </t-popup>
      );
    }

    return (
      <t-space direction="vertical" style={{ width: '80%' }}>
        <t-tag-input value={this.tags} onChange={setTags} minCollapsedNum={1} />

        <t-tag-input value={this.tags} onChange={setTags} minCollapsedNum={3} collapsedItems={renderCollapsedItems} />
    </t-space>
    )
  }
}

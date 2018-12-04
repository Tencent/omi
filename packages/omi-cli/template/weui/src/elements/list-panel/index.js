import { define, WeElement } from 'omi'
import style from './_index.css'
import 'omi-weui/list'

define('list-panel', class extends WeElement {
  css() {
    return style
  }

  render(props, data) {
    return (
      <div>
        <ow-list title="如果爱情有天意……">
          <ow-list-item
            icon="https://ws1.sinaimg.cn/large/0065Zy9egy1fxtdkt9566j305k05kdfs.jpg"
            title="Title"
            content="Content"
            access
          />
          <ow-list-item
            icon="https://ws1.sinaimg.cn/large/0065Zy9egy1fxtdkt8yvmj305k05kweh.jpg"
            title="Title"
            content="Content"
            access
          />
        </ow-list>
      </div>
    )
  }
})

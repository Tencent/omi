import { define, WeElement } from 'omi'
import style from './_index.css'
import '../../weui/list'

define('list-panel', class extends WeElement {
  css() {
    return style
  }

  render() {
    return (
      <div>
         <div class="page__hd">
          <h1 class="page__title">List</h1>
          <p class="page__desc">列表</p>
        </div>

        <ow-list title="列表标题">
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
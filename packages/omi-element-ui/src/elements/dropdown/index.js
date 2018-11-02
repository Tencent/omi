import { tag, WeElement } from 'omi'
import style from './_index.css'
import '../../omi-element-ui/el-dropdown'

@tag('my-app')
class MyApp extends WeElement {
  css() {
    return style
  }

  onItemClick = e => {
    console.log(e.detail)
  }

  render(props, data) {
    return (
      <div>
        <div>
          <el-dropdown
            onItemClick={this.onItemClick}
            type="link"
            icon="arrow-down"
            text="下拉菜单"
            icon-right
            items={[
              { text: '黄金糕' },
              { text: '狮子头' },
              { text: '螺蛳粉' },
              { text: '双皮奶', disabled: true },
              { text: '蚵仔煎', divided: true }
            ]}
          />
        </div>
      </div>
    )
  }
}

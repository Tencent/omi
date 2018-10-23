import { tag, WeElement } from 'omi'
import style from './_index.css'
import '../../omi-element-ui/el-pagination'

@tag('my-app')
class MyApp extends WeElement {

  css() {
    return style
  }

  onChange = (e) => {
    console.log('page index', e.detail.index)
  }

  render(props, data) {
    return (
      <div>
        <div>
          <el-pagination
            onChange={this.onChange}
            total={1000}>
          </el-pagination>
        </div>


      </div>
    )
  }
}
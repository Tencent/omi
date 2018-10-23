import { tag, WeElement } from 'omi'
import style from './_index.css'
import '../../omi-element-ui/el-radio'

@tag('my-app')
class MyApp extends WeElement {

  css() {
    return style
  }

  render(props, data) {
    return (
      <div>
        <el-radio>备选项</el-radio>
        <el-radio checked>备选项</el-radio>
      </div>
    )
  }
}
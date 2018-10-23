import { tag, WeElement } from 'omi'
import style from './_index.css'
import '../../omi-element-ui/el-radio'
import '../../omi-element-ui/el-radio-group'

@tag('my-app')
class MyApp extends WeElement {

  css() {
    return style
  }

  onChange = (e) => {
    console.log('radio checked', e.detail.value)
  }

  render(props, data) {
    return (
      <div>
        <div>
          <el-radio>备选项</el-radio>
          <el-radio checked>备选项</el-radio>
          <el-radio disabled>备选项</el-radio>
          <el-radio checked disabled>备选项</el-radio>
        </div>

        <div>
          <el-radio-group  onChange={this.onChange} value={3}>
            <el-radio value={1}>备选项1</el-radio>
            <el-radio value={2}>备选项2</el-radio>
            <el-radio value={3}>备选项3</el-radio>
          </el-radio-group>
        </div>
      </div>
    )
  }
}
import { tag, WeElement } from 'omi'
import '../../omi-element-ui/el-switch'
import style from './_index.css'

@tag('my-app', true)
class MyApp extends WeElement {
  handleChange(value) {
    console.log(value)
  }
  css() {
    return style
  }

  render() {
    return (
      <el-switch
        style="display: block"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="按月付费"
        inactive-text="按年付费"
        false-value="年"
        width="80"
        onChange={this.handleChange}
      />
    )
  }
}

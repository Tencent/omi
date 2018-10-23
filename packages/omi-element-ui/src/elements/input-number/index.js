import { tag, WeElement } from 'omi'
import style from './_index.css'
import '../../omi-element-ui/el-input-number'

@tag('my-app')
class MyApp extends WeElement {

  css() {
    return style
  }

  onChange = (e) => {
    console.log(e.detail.value)
  }

  render(props, data) {
    return (
      <div>
        <div>
          <el-input-number change={this.onChange} min={1} max={10} step={1} value={2} label="描述文字"></el-input-number>
        </div>
      </div>
    )
  }
}
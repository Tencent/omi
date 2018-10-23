import { tag, WeElement } from 'omi'
import style from './_index.css'
import '../../omi-element-ui/el-progress'

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
        <el-progress percentage={0}></el-progress>
        <el-progress percentage={70}></el-progress>
        <el-progress percentage={70} color="#8e71c7"></el-progress>
        <el-progress percentage={100} status="success"></el-progress>
        <el-progress percentage={50} status="exception"></el-progress>
        </div>
      </div>
    )
  }
}
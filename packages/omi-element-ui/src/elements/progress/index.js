import { tag, WeElement } from 'omi'
import style from './_index.css'
import '../../omi-element-ui/el-progress'

@tag('my-app')
class MyApp extends WeElement {
  css() {
    return style
  }

  onChange = e => {
    console.log(e.detail.value)
  }

  render(props, data) {
    return (
      <div>
        <div>
          <el-progress percentage={0} />
          <el-progress percentage={70} />
          <el-progress percentage={70} color="#8e71c7" />
          <el-progress percentage={100} success />
          <el-progress percentage={50} error />
        </div>

        <div>
          <el-progress text-inside stroke-width={18} percentage={0} />
          <el-progress text-inside stroke-width={18} percentage={70} />
          <el-progress
            text-inside
            stroke-width={18}
            percentage={80}
            color="rgba(142, 113, 199, 0.7)"
          />
          <el-progress text-inside stroke-width={18} percentage={100} success />
          <el-progress text-inside stroke-width={18} percentage={50} error />
        </div>

        <div>
          <el-progress type="circle" percentage={0} />
          <el-progress type="circle" percentage={70} />
          <el-progress type="circle" percentage={70} color="#8e71c7" />
          <el-progress type="circle" percentage={100} success />
          <el-progress type="circle" percentage={50} error />
        </div>
      </div>
    )
  }
}

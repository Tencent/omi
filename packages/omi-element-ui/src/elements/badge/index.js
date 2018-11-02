import {tag, WeElement} from 'omi'
import style from './_index.css'
import '../../omi-element-ui/el-badge'
import '../../omi-element-ui/el-button'

@tag('my-app')
class MyApp extends WeElement {

  css() {
    return style
  }

  render(props, data) {
    return (
      <div>
        <div>
          <el-badge value={12}>
            <el-button size="small">评论</el-button>
          </el-badge>
          <el-badge value={3}>
            <el-button size="small">回复</el-button>
          </el-badge>
        </div>
        <div>
          <el-badge value={200} max={99}>
            <el-button size="small">评论</el-button>
          </el-badge>
          <el-badge value={100} max={10}>
            <el-button size="small">回复</el-button>
          </el-badge>
        </div>
        <div>
          <el-badge value="new">
            <el-button size="small">评论</el-button>
          </el-badge>
          <el-badge value="hot">
            <el-button size="small">回复</el-button>
          </el-badge>
        </div>
        <div>
          <el-badge is-dot>
            数据查询
          </el-badge>
          <el-badge is-dot>
            <el-button icon="el-icon-share" type="primary"></el-button>
          </el-badge>
        </div>
      </div>
    )
  }

}

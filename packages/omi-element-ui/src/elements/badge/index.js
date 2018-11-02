import { tag, WeElement } from 'omi'
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
        <div class="row">
          <el-badge value="12" class="item">
            <el-button size="small">comments</el-button>
          </el-badge>
          <el-badge value="3" class="item">
            <el-button size="small">replies</el-button>
          </el-badge>
        </div>
        <div class="row">
          <el-badge value={200} max={99} class="item">
            <el-button size="small">comments</el-button>
          </el-badge>
          <el-badge value={100} max={10} class="item">
            <el-button size="small">replies</el-button>
          </el-badge>
        </div>
        <div class="row">
          <el-badge value="new" class="item">
            <el-button size="small">comments</el-button>
          </el-badge>
          <el-badge value="hot" class="item">
            <el-button size="small">replies</el-button>
          </el-badge>
        </div>
        <div class="row">
          <el-badge is-dot class="item">
            query
          </el-badge>
          <el-badge is-dot class="item">
            <el-button
              class="share-button"
              icon="el-icon-share"
              type="primary"
            />
          </el-badge>
        </div>
      </div>
    )
  }
}

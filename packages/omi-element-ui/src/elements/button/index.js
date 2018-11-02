import { tag, WeElement } from 'omi'
import style from './_index.css'
import '../../omi-element-ui/el-button'
import '../../omi-element-ui/el-button-group'

@tag('my-app')
class MyApp extends WeElement {
  onClick = evt => {
    console.log(evt)
  }

  css() {
    return style
  }

  render(props, data) {
    return (
      <div>
        <div>
          <el-button onClick={this.onClick}>默认按钮1</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </div>

        <div>
          <el-button plain>朴素按钮</el-button>
          <el-button type="primary" plain>
            主要按钮
          </el-button>
          <el-button type="success" plain>
            成功按钮
          </el-button>
          <el-button type="info" plain>
            信息按钮
          </el-button>
          <el-button type="warning" plain>
            警告按钮
          </el-button>
          <el-button type="danger" plain>
            危险按钮
          </el-button>
        </div>

        <div>
          <el-button round>圆角按钮</el-button>
          <el-button type="primary" round>
            主要按钮
          </el-button>
          <el-button type="success" round>
            成功按钮
          </el-button>
          <el-button type="info" round>
            信息按钮
          </el-button>
          <el-button type="warning" round>
            警告按钮
          </el-button>
          <el-button type="danger" round>
            危险按钮
          </el-button>
        </div>

        <div>
          <el-button icon="el-icon-search" circle />
          <el-button type="primary" icon="el-icon-edit" circle />
          <el-button type="success" icon="el-icon-check" circle />
          <el-button type="info" icon="el-icon-message" circle />
          <el-button type="warning" icon="el-icon-star-off" circle />
          <el-button type="danger" icon="el-icon-delete" circle />
        </div>

        <div>
          <el-button disabled onClick={this.onClick}>
            默认按钮
          </el-button>
          <el-button type="primary" disabled>
            主要按钮
          </el-button>
          <el-button type="success" disabled>
            成功按钮
          </el-button>
          <el-button type="info" disabled>
            信息按钮
          </el-button>
          <el-button type="warning" disabled>
            警告按钮
          </el-button>
          <el-button type="danger" disabled>
            危险按钮
          </el-button>
        </div>

        <div>
          <el-button plain disabled onClick={this.onClick}>
            朴素按钮
          </el-button>
          <el-button type="primary" plain disabled>
            主要按钮
          </el-button>
          <el-button type="success" plain disabled>
            成功按钮
          </el-button>
          <el-button type="info" plain disabled>
            信息按钮
          </el-button>
          <el-button type="warning" plain disabled>
            警告按钮
          </el-button>
          <el-button type="danger" plain disabled>
            危险按钮
          </el-button>
        </div>

        <div>
          <el-button type="text">文字按钮</el-button>
          <el-button type="text" disabled>
            文字按钮
          </el-button>
        </div>

        <div>
          <el-button type="primary" icon="el-icon-edit" />
          <el-button type="primary" icon="el-icon-share" />
          <el-button type="primary" icon="el-icon-delete" />
          <el-button type="primary" icon="el-icon-search">
            搜索
          </el-button>
          <el-button type="primary" icon="el-icon-upload" icon-right>
            上传
          </el-button>
        </div>

        <div>
          <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left">
              上一页
            </el-button>
            <el-button type="primary" icon="el-icon-arrow-right" icon-right>
              下一页
            </el-button>
          </el-button-group>
        </div>
        <div>
          <el-button-group>
            <el-button type="primary" icon="el-icon-edit" />
            <el-button type="primary" icon="el-icon-share" />
            <el-button type="primary" icon="el-icon-delete" />
          </el-button-group>
        </div>

        <div>
          <el-button type="primary" icon="el-icon-loading">
            加载中
          </el-button>
        </div>

        <div>
          <el-button>默认按钮</el-button>
          <el-button size="medium">中等按钮</el-button>
          <el-button size="small">小型按钮</el-button>
          <el-button size="mini">超小按钮</el-button>
        </div>
        <div>
          <el-button round>默认按钮</el-button>
          <el-button size="medium" round>
            中等按钮
          </el-button>
          <el-button size="small" round>
            小型按钮
          </el-button>
          <el-button size="mini" round>
            超小按钮
          </el-button>
        </div>
      </div>
    )
  }
}

import { tag, WeElement } from 'omi'
import style from './_index.css'
import '../../omi-element-ui/el-alert'

@tag('my-app')
class MyApp extends WeElement {
  css() {
    return style
  }

  onClose = () => {
    console.log('trigger after default close action')
  }

  render(props, data) {
    return (
      <div>
        {/* 基本用法 */}
        <div>
          <el-alert title="成功提示的文案" type="success" />
          <el-alert title="消息提示的文案" type="info" />
          <el-alert title="警告提示的文案" type="warning" />
          <el-alert title="错误提示的文案" type="error" />
        </div>

        {/* 自定义关闭按钮 */}
        <div>
          <el-alert title="不可关闭的 alert" type="success" closable="false" />
          <el-alert title="自定义 close-text" type="info" close-text="知道了" />
          <el-alert
            title="设置了回调的 alert"
            type="warning"
            onClose={this.onClose}
          />
        </div>

        {/* 带有 icon */}
        <div>
          <el-alert title="成功提示的文案" type="success" show-icon />
          <el-alert title="消息提示的文案" type="info" show-icon />
          <el-alert title="警告提示的文案" type="warning" show-icon />
          <el-alert title="错误提示的文案" type="error" show-icon />
        </div>

        {/* 文字居中 */}
        <div>
          <el-alert title="成功提示的文案" type="success" center show-icon />
          <el-alert title="消息提示的文案" type="info" center show-icon />
          <el-alert title="警告提示的文案" type="warning" center show-icon />
          <el-alert title="错误提示的文案" type="error" center show-icon />
        </div>

        {/* 带有辅助性文字介绍 */}
        <div>
          <el-alert
            title="带辅助性文字介绍"
            type="success"
            description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
          />
        </div>

        {/* 带有 icon 和辅助性文字介绍 */}
        <div>
          <el-alert
            title="成功提示的文案"
            type="success"
            description="文字说明文字说明文字说明文字说明文字说明文字说明"
            show-icon
          />
          <el-alert
            title="消息提示的文案"
            type="info"
            description="文字说明文字说明文字说明文字说明文字说明文字说明"
            show-icon
          />
          <el-alert
            title="警告提示的文案"
            type="warning"
            description="文字说明文字说明文字说明文字说明文字说明文字说明"
            show-icon
          />
          <el-alert
            title="错误提示的文案"
            type="error"
            description="文字说明文字说明文字说明文字说明文字说明文字说明"
            show-icon
          />
        </div>
      </div>
    )
  }
}

import { tag, WeElement } from 'omi'
import style from './_index.css'

import notify from '../../omi-element-ui/el-notification'
import '../../omi-element-ui/el-button'

@tag('my-app')
class MyApp extends WeElement {
  css() {
    return style
  }

  open = () => {
    notify({
      title: '提示',
      message: '这是一条自动关闭的消息'
    })
  }

  open1 = () => {
    notify({
      title: '提示',
      message: '这是一条不会自动关闭的消息',
      duration: 0
    })
  }

  open2 = () => {
    notify({
      title: '成功',
      message: '这是一条成功的消息',
      type: 'success'
    })
  }

  open3 = () => {
    notify({
      title: '警告',
      message: '这是一条警告的消息',
      type: 'warning'
    })
  }

  open4 = () => {
    notify({
      title: '消息',
      message: '这是一条普通的消息',
      type: 'info'
    })
  }

  open5 = () => {
    notify({
      title: '错误',
      message: '这是一条错误的消息',
      type: 'error'
    })
  }

  open6 = () => {
    notify({
      title: '消息',
      message: '这是一条右上角的消息'
    })
  }

  open7 = () => {
    notify({
      title: '消息',
      message: '这是一条右下角的消息',
      position: 'bottom-right'
    })
  }

  open8 = () => {
    notify({
      title: '消息',
      message: '这是一条左下角的消息',
      position: 'bottom-left'
    })
  }

  open9 = () => {
    notify({
      title: '消息',
      message: '这是一条左上角的消息',
      position: 'top-left'
    })
  }

  open10 = () => {
    notify({
      title: '偏移消息',
      message: '这是一条带偏移的消息',
      offset: 100
    })
  }

  open11 = () => {
    notify({
      title: 'HTML片段',
      message: (
        <strong>
          这是 <i>HTML</i> 片段
        </strong>
      )
    })
  }

  open12 = () => {
    notify({
      title: '隐藏关闭按钮',
      message: '这是一条隐藏关闭按钮的消息',
      showClose: false
    })
  }

  render(props, data) {
    return (
      <div>
        <div class="group">
          <el-button onClick={this.open} plain>
            可自动关闭
          </el-button>
          <el-button onClick={this.open1} plain>
            不会自动关闭
          </el-button>
        </div>

        <div class="group">
          <el-button onClick={this.open2} plain>
            成功
          </el-button>
          <el-button onClick={this.open3} plain>
            警告
          </el-button>
          <el-button onClick={this.open4} plain>
            消息
          </el-button>
          <el-button onClick={this.open5} plain>
            错误
          </el-button>
        </div>

        <div class="group">
          <el-button onClick={this.open6} plain>
            右上角
          </el-button>
          <el-button onClick={this.open7} plain>
            右下角
          </el-button>
          <el-button onClick={this.open8} plain>
            左下角
          </el-button>
          <el-button onClick={this.open9} plain>
            左上角
          </el-button>
        </div>

        <div class="group">
          <el-button onClick={this.open10} plain>
            偏移的消息
          </el-button>
        </div>

        <div class="group">
          <el-button onClick={this.open11} plain>
            使用HTML片段
          </el-button>
        </div>

        <div class="group">
          <el-button onClick={this.open12} plain>
            隐藏关闭按钮
          </el-button>
        </div>
      </div>
    )
  }
}

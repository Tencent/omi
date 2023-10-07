import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

const commonStyle = {
  textAlign: 'center',
}
@tag('progress-circle')
export default class ProgressCircle extends WeElement {
  percent = 0
  timer: any
  install() {
    this.timer = setInterval(() => {
      this.percent = (this.percent % 100) + 10
      this.update()
    }, 1000)
  }
  uninstall() {
    clearInterval(this.timer)
  }
  render() {
    const { percent } = this
    return (
      <t-space direction="vertical" size="large">
        <t-space style={commonStyle}>
          <t-space direction="vertical">
            <div>默认样式</div>
            <t-progress theme={'circle'} percentage={percent}></t-progress>
          </t-space>
          <t-space direction="vertical">
            <div>不显示数字</div>
            <t-progress theme={'circle'} label={false} percentage={percent}></t-progress>
          </t-space>
          <t-space direction="vertical">
            <div>自定义内容</div>
            <t-progress theme={'circle'} label={<div>75 day</div>} percentage={percent}></t-progress>
          </t-space>
        </t-space>

        <t-space style={commonStyle}>
          <t-space direction="vertical">
            <div>进度完成</div>
            <t-progress theme={'circle'} status={'success'} percentage={100}></t-progress>
          </t-space>
          <t-space direction="vertical">
            <div>进度发生错误</div>
            <t-progress theme={'circle'} status={'error'} percentage={percent}></t-progress>
          </t-space>
          <t-space direction="vertical">
            <div>进度被中断</div>
            <t-progress theme={'circle'} status={'warning'} percentage={percent}></t-progress>
          </t-space>
          <t-space direction="vertical">
            <div>自定义颜色</div>
            <t-progress
              theme={'circle'}
              status={'error'}
              color={'#00f'}
              trackColor={'#0f0'}
              percentage={percent}
            ></t-progress>
          </t-space>
        </t-space>

        <t-space align="center" style={commonStyle}>
          <t-space direction="vertical">
            <div>小尺寸</div>
            <t-progress theme={'circle'} size={'small'} percentage={percent}></t-progress>
          </t-space>
          <t-space direction="vertical">
            <div>默认尺寸</div>
            <t-progress theme={'circle'} percentage={percent}></t-progress>
          </t-space>
          <t-space direction="vertical">
            <div>大尺寸</div>
            <t-progress theme={'circle'} size={'large'} percentage={percent}></t-progress>
          </t-space>
          <t-space direction="vertical">
            <div>自定义尺寸</div>
            <t-progress theme={'circle'} percentage={percent} strokeWidth={50}></t-progress>
          </t-space>
        </t-space>
      </t-space>
    )
  }
}

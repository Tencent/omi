import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('progress-line')
export default class ProgressLine extends WeElement {
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
      <t-space direction="vertical" style={{ width: '100%' }}>
        <h3>默认在线形外展示进度和状态</h3>
        <div>默认样式</div>
        <t-progress percentage={percent}></t-progress>

        <div>进度被中断</div>
        <t-progress status={'warning'} percentage={percent}></t-progress>

        <div>进度状态发生重大错误</div>
        <t-progress status={'error'} percentage={percent}></t-progress>

        <div>进度正常更新</div>
        <t-progress status={'active'} percentage={percent}></t-progress>

        <div>不显示数字</div>
        <t-progress label={false} percentage={percent}></t-progress>

        <div>自定义内容</div>
        <t-progress label={<div>自定义文本</div>} percentage={percent}></t-progress>

        <div>自定义颜色与高度</div>
        <t-progress strokeWidth={30} color={'#00f'} trackColor={'#0f0'} percentage={percent}></t-progress>

        <div>进度条渐变色</div>
        <t-progress color={['#f00', '#0ff', '#f0f']} percentage={percent}></t-progress>
        <t-progress color={{ '0%': '#f00', '100%': '#0ff' }} trackColor={'#0f0'} percentage={percent}></t-progress>
        <t-progress
          strokeWidth={30}
          color={{ direction: 'to right', from: '#f00', to: '#0ff' }}
          percentage={percent}
        ></t-progress>

        <h3>可以在线形内展示进度信息</h3>
        <t-space direction="vertical" style={{ width: '100%' }}>
          <div>默认样式</div>
          <t-progress theme="plump" percentage="30" />
          <div>进度0-10%时数字数字位置出现在目前进度的右边区域</div>
          <t-progress theme="plump" percentage="5" />
        </t-space>
      </t-space>
    )
  }
}

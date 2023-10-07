import { h, tag, WeElement } from 'omi'

import '../index'

@tag('progress-plump')
export default class ProgressPlump extends WeElement {
  render() {
    const style = { margin: '20px 0 10px' }
    return (
      <div>
        <div style={style}>默认样式</div>
        <t-progress theme={'plump'} percentage={30}></t-progress>
        <div style={style}>进度0-10%时数字数字位置出现在目前进度的右边区域</div>
        <t-progress theme={'plump'} percentage={5}></t-progress>
        <div style={style}>100%</div>
        <t-progress theme={'plump'} percentage={100}></t-progress>
        <div style={style}>success</div>
        <t-progress theme={'plump'} status={'success'} percentage={100}></t-progress>
        <div style={style}>warning</div>
        <t-progress theme={'plump'} status={'warning'} percentage={30}></t-progress>
        <div style={style}>error</div>
        <t-progress theme={'plump'} status={'error'} percentage={30}></t-progress>
        <div style={style}>active</div>
        <t-progress theme={'plump'} status={'active'} percentage={30}></t-progress>
        <div style={style}>不显示数字</div>
        <t-progress theme={'plump'} label={false} percentage={30}></t-progress>
        <div style={style}>自定义颜色与尺寸</div>
        <t-progress theme={'plump'} strokeWidth={30} color={'#00f'} trackColor={'#0f0'} percentage={30}></t-progress>
        <div style={style}>进度条渐变色</div>
        <t-progress theme={'plump'} color={['#f00', '#0ff', '#f0f']} percentage={30}></t-progress>
        <br />
        <t-progress
          theme={'plump'}
          color={{ '0%': '#f00', '100%': '#0ff' }}
          trackColor={'#0f0'}
          percentage={30}
        ></t-progress>
        <br />
        <t-progress
          theme={'plump'}
          color={{ direction: 'to right', from: '#f00', to: '#0ff' }}
          percentage={30}
        ></t-progress>
      </div>
    )
  }
}

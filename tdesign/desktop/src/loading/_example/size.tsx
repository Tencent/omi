import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space/index'

@tag('loading-size')
export default class LoadingSize extends WeElement {
  render() {
    return (
      <t-space direction="vertical">
        <t-loading text="加载中...（小）" loading size="small"></t-loading>
        <t-loading text="加载中...（中）" loading size="medium"></t-loading>
        <t-loading text="加载中...（大）" loading size="large"></t-loading>
      </t-space>
    )
  }
}

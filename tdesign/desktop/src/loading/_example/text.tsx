import { h, tag, WeElement } from 'omi'

import '../index'

@tag('loading-text')
export default class LoadingText extends WeElement {
  render() {
    return <t-loading loading={true} text="静态文字加载中..." indicator={false}></t-loading>
  }
}

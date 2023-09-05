import { h, tag, WeElement } from 'omi'

import '../index'

@tag('loading-icon-text')
export default class LoadingIconText extends WeElement {
  render() {
    return <t-loading loading={true} text="拼命加载中..." size="small"></t-loading>
  }
}

import { h, tag, WeElement } from 'omi'

import '../index'

@tag('loading-base')
export default class LoadingBase extends WeElement {
  render() {
    return <t-loading></t-loading>
  }
}

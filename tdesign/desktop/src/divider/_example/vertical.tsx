import { h, tag, WeElement } from 'omi'

import '../index'

@tag('divider-vertical')
export default class DividerVertical extends WeElement {
  render() {
    return (
      <h>
        <span>正直</span>
        <t-divider layout="vertical"></t-divider>
        <span>进取</span>
        <t-divider layout="vertical"></t-divider>
        <span>合作</span>
        <t-divider layout="vertical"></t-divider>
        <span>创新</span>
      </h>
    )
  }
}

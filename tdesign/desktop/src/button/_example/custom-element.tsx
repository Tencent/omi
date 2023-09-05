import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'

@tag('button-custom-element')
export default class ButtonCustomElement extends WeElement {
  render() {
    return (
      <t-space size={24}>
        <t-button tag="div">div</t-button>
        <t-button tag="a">a</t-button>
        <t-button href="#">a:href</t-button>
      </t-space>
    )
  }
}

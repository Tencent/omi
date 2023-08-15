import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button/index'
import '../../divider/index'

@tag('space-separator')
export default class SpaceSeparator extends WeElement {
  render() {
    return (
      <h>
        <t-space align="center" separator={<t-divider layout="vertical" />}>
          <t-button variant="text">Text</t-button>
          <t-button variant="text">Text</t-button>
          <t-button variant="text">Text</t-button>
        </t-space>
      </h>
    )
  }
}

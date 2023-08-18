import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button/index'

@tag('space-base')
export default class SpaceBase extends WeElement {
  render() {
    return (
      <h>
        <t-space>
          <t-button>Button</t-button>
          <t-button>Button</t-button>
          <t-button>Button</t-button>
        </t-space>
      </h>
    )
  }
}

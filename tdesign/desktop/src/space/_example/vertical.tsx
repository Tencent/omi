import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button/index'

@tag('space-vertical')
export default class SpaceVertical extends WeElement {
  render() {
    return (
      <h>
        <t-space direction="vertical">
          <t-button>Button</t-button>
          <t-button>Button</t-button>
          <t-button>Button</t-button>
        </t-space>
      </h>
    )
  }
}

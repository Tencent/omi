import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button/index'

@tag('space-break-line')
export default class SpaceBreakLine extends WeElement {
  render() {
    return (
      <h>
        <div>
          <t-space breakLine size="small">
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
            <t-button>Button</t-button>
          </t-space>
        </div>
      </h>
    )
  }
}

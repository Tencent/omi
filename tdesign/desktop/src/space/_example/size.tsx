import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button/index'
import '../../slider/index'

@tag('space-size')
export default class SpaceSize extends WeElement {
  static css = `t-space {
        margin-left: 10px;
        margin-bottom: 10px;
    }`
  size_5: number = 5
  size_15: number = 15
  size_30: number = 30
  render() {
    return (
      <h>
        {/* TODO: remain: add slider? */}
        size: 5
        <t-space size={this.size_5}>
          <t-button>Button</t-button>
          <t-button>Button</t-button>
          <t-button>Button</t-button>
        </t-space>
        <br />
        <br />
        size: 15
        <t-space size={this.size_15}>
          <t-button>Button</t-button>
          <t-button>Button</t-button>
          <t-button>Button</t-button>
        </t-space>
        <br />
        <br />
        size: 30
        <t-space size={this.size_30}>
          <t-button>Button</t-button>
          <t-button>Button</t-button>
          <t-button>Button</t-button>
        </t-space>
        <br />
      </h>
    )
  }
}

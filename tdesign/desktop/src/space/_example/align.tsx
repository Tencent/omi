import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button/index'

@tag('space-align')
export default class SpaceAlign extends WeElement {
  render() {
    return (
      <h>
        <t-space breakLine>
          <t-space align="start" style={{ padding: 12, border: '1px dashed var(--td-component-stroke)' }}>
            <div>start</div>
            <t-button>Button</t-button>
            <div style={{ background: 'var(--td-bg-color-component)', height: 60, width: 60 }}></div>
          </t-space>
          <t-space align="center" style={{ padding: 12, border: '1px dashed var(--td-component-stroke)' }}>
            <div>center</div>
            <t-button>Button</t-button>
            <div style={{ background: 'var(--td-bg-color-component)', height: 60, width: 60 }}></div>
          </t-space>
          <t-space align="end" style={{ padding: 12, border: '1px dashed var(--td-component-stroke)' }}>
            <div>end</div>
            <t-button>Button</t-button>
            <div style={{ background: 'var(--td-bg-color-component)', height: 60, width: 60 }}></div>
          </t-space>
          <t-space align="baseline" style={{ padding: 12, border: '1px dashed var(--td-component-stroke)' }}>
            <div>baseline</div>
            <t-button>Button</t-button>
            <div style={{ background: 'var(--td-bg-color-component)', height: 60, width: 60 }}></div>
          </t-space>
        </t-space>
      </h>
    )
  }
}

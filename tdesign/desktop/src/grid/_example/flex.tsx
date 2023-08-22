import { h, tag, WeElement, render } from 'omi'

import '../index'

@tag('grid-flex')
export default class GridFlex extends WeElement {
  render() {
    const divStyle = {
      minHeight: '40px',
      marginTop: '8px',
      marginBottom: '8px',
      color: '#fff',
      textAlign: 'center',
      lineHeight: '40px',
    }
    const color1 = '#366ef4'
    const color2 = '#8eabff'
    return (
      <div style={{ width: '100%' }}>
        <t-row>
          <t-col flex={2}>
            <div style={{ ...divStyle, background: color1 }}>2 / 5</div>
          </t-col>
          <t-col flex={3}>
            <div style={{ ...divStyle, background: color2 }}>3 / 5</div>
          </t-col>
        </t-row>
        <t-row>
          <t-col flex="100px">
            <div style={{ ...divStyle, background: color1 }}>100px</div>
          </t-col>
          <t-col flex="auto">
            <div style={{ ...divStyle, background: color2 }}>Fill Rest</div>
          </t-col>
        </t-row>
        <t-row>
          <t-col flex="1 1 200px">
            <div style={{ ...divStyle, background: color1 }}>1 1 200px</div>
          </t-col>
          <t-col flex="0 1 300px">
            <div style={{ ...divStyle, background: color2 }}>0 1 300px</div>
          </t-col>
        </t-row>
        <t-row>
          <t-col flex="none">
            <div style={{ ...divStyle, background: color1, padding: '0 16px' }}>none</div>
          </t-col>
          <t-col flex="auto">
            <div style={{ ...divStyle, background: color2 }}>auto with no-wrap</div>
          </t-col>
        </t-row>
      </div>
    )
  }
}

render(<grid-flex />, '#grid-flex')

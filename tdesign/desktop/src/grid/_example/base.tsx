import { h, tag, WeElement, render } from 'omi'

import '../index'
const demoCols = [
  Array(12).fill(1),
  Array(6).fill(2),
  Array(4).fill(3),
  Array(3).fill(4),
  Array(2).fill(6),
  Array(1).fill(12),
]
@tag('grid-base')
export default class GridBase extends WeElement {
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
        {demoCols.map((cols, i) => (
          <t-row>
            {cols.map((col, j) => (
              <t-col span={col}>
                <div style={j % 2 === 0 ? { ...divStyle, background: color1 } : { ...divStyle, background: color2 }}>
                  {col}
                </div>
              </t-col>
            ))}
          </t-row>
        ))}
      </div>
    )
  }
}

// render(<grid-base />, '#grid-base')

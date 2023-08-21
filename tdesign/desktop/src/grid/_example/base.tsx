import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button/index'
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
    const colStyle = {
      minHeight: '40px',
      marginTop: '8px',
      marginBottom: '8px',
      color: '#fff',
      textAlign: 'center',
      lineHeight: '40px',
      display: 'flex',
    }
    return (
      <div style={{ width: '200px' }}>
        {demoCols.map((cols, i) => (
          <t-row>
            {cols.map((col, j) => (
              <t-col
                span={col}
                style={j % 2 === 0 ? { ...colStyle, background: '#366ef4' } : { ...colStyle, background: '#8eabff' }}
              >
                <div>{col}</div>
              </t-col>
            ))}
          </t-row>
        ))}
      </div>
    )
  }
}

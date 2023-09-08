## 样式配置

grid 组件的样式需要在父组件中引入才能正常生效，使用示例如下：

```typescript
import { h, tag, WeElement } from 'omi'

import '../index'
import css from '../style/index' //grid css
import common from './common.css'
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
  static css = (css + common) as string

  render() {
    return (
      <>
        {demoCols.map((cols, i) => (
          <t-row>
            {cols.map((col, j) => (
              <t-col span={col}>
                <div>{col}</div>
              </t-col>
            ))}
          </t-row>
        ))}
      </>
    )
  }
}
```

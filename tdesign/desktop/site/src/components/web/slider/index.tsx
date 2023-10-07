import { define, OmiProps, h, render, WeElement } from 'omi'
import '../../../../../src/button/index'
import * as marked from 'marked'
import '../../../../../src/slider/index'

const docsHtml = marked.parse(`
:: BASE_DOC ::

## API
### Slider Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --

`)

define(
  'page-slider',
  class extends WeElement {
    render(props: {} | OmiProps<{}, any>, store: any) {
      return (
        <div style="padding:24px">
          <t-slider inputNumberProps />
        </div>
      )
    }
  },
)

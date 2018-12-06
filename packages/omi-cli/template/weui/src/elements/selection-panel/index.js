import { define, WeElement } from 'omi'
import style from './_index.css'
import '../../weui/selection'

define('selection-panel', class extends WeElement {
  css() {
    return style
  }

  render(props, data) {
    return (
      <div>
        <div class="page__hd">
          <h1 class="page__title">Selection</h1>
          <p class="page__desc">选择</p>
        </div>
        <div>
          <div class="weui-cells__title">单选列表项</div>
          <ow-selection items={[
            { text: 'item1' },
            { text: 'item2' },
            { text: 'item3' }
          ]} single></ow-selection>


<div class="weui-cells__title">多选列表项</div>
          <ow-selection items={[
            { text: 'item1' },
            { text: 'item2' },
            { text: 'item3' }
          ]} ></ow-selection>
        </div>
      </div>
    )
  }
})
import { define, WeElement } from 'omi'
import style from './_index.css'
import '../../weui/selection'

define('selection-panel', class extends WeElement {
  static observe = true

  css() {
    return style
  }

  data = {
    selectedIndex: 2,
    selectedIndexs: [0, 1]
  }

 
  onTapMore = () => {
    console.log(1)
  }

  onSelectSingle = (e) => {
    this.data.selectedIndex = e.detail.index
  }

  onSelect = (e) => {

    this.data.selectedIndexs = e.detail.indexs
    
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
          <ow-selection
            items={[
              { text: 'item1' },
              { text: 'item2' },
              { text: 'item3' }
            ]}
            selectedIndex={data.selectedIndex}
            single
            onTapMore={this.onTapMore}
            onSelect={this.onSelectSingle}
          >
          </ow-selection>


          <div class="weui-cells__title">多选列表项</div>
          <ow-selection
            selectedIndexs={data.selectedIndexs}
            items={[
              { text: 'item1' },
              { text: 'item2' },
              { text: 'item3' }
            ]}
            onSelect={this.onSelect}
          >

          </ow-selection>
        </div>
      </div>
    )
  }
})
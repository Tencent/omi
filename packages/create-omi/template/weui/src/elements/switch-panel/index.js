import { define, WeElement } from 'omi'
import style from './_index.css'
import '../../weui/switch'

define('switch-panel', class extends WeElement {
  css() {
    return style
  }

  onChangeA = (e) => {
    console.log(e.detail)
  }

  onChangeB = (e) => {
    console.log(e.detail)
  }

  render() {
    return (
      <div>
        <div class="page__hd">
          <h1 class="page__title">Switch</h1>
          <p class="page__desc">开关</p>
        </div>
        <div>
          <div class="weui-cell weui-cell_switch">
            <div class="weui-cell__bd">标题文字</div>
            <div class="weui-cell__ft">
              <ow-switch onChange={this.onChangeA} checked={true}> </ow-switch>
            </div>
          </div>
          <div class="weui-cell weui-cell_switch">
            <div class="weui-cell__bd">标题文字</div>
            <div class="weui-cell__ft">
              <ow-switch onChange={this.onChangeB} checked={false}> </ow-switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
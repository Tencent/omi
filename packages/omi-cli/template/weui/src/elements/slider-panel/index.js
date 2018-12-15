import { define, WeElement } from 'omi'
import style from './_index.css'
import '../../weui/slider'

define('slider-panel', class extends WeElement {
  static observe = true
  
  css() {
    return style
  }

  install(){
    this.data.percentage = 30
  }

  onChange= (e) => {
    this.data.percentage = e.detail
  }

  render() {
    return (
      <div>
        <div class="page__hd">
          <h1 class="page__title">Slider</h1>
          <p class="page__desc">滑块</p>
        </div>
        <div class="page__bd page__bd_spacing">
          <ow-slider disabled></ow-slider>

          <ow-slider onChange={this.onChange} percentage={this.data.percentage}></ow-slider>
        </div>
      </div>
    )
  }
})
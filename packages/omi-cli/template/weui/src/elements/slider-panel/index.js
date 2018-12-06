import { define, WeElement } from 'omi'
import style from './_index.css'
import '../../weui/slider'

define('slider-panel', class extends WeElement {
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
          <h1 class="page__title">Slider</h1>
          <p class="page__desc">滑块</p>
        </div>
        <div class="page__bd page__bd_spacing">
          <ow-slider disabled></ow-slider>

          <ow-slider percentage={30}></ow-slider>
        </div>
      </div>
    )
  }
})
import '../../src/slider/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <m-slider onChange={(evt) => {
      console.log(evt.detail.value)
    }}> </m-slider>
    <br />

    <m-slider value={10} onChange={(evt) => {
      console.log(evt.detail.value)
    }} discrete> </m-slider>
    <br />

    <m-slider disabled > </m-slider>

    <m-slider discrete displayMarkers step={2}> </m-slider>
  </div>
  , 'body')


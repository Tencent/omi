
import Slider from '../index.tsx'
import { render, h } from 'omis'


render(
  <div>
   <Slider onChange={_=>{console.log(_)}}></Slider>

  </div>
  , 'body')


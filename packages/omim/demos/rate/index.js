import '../../src/rate/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <m-rate  total={5} value={this.valueA} color='#f57c00' onSelected={onSelected}></m-rate>

  </div>
  , 'body')


  function onSelected(evt){
    console.log(evt.detail)
  }
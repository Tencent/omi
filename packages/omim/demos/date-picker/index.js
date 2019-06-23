

import '../../src/date-picker/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <m-date-picker selected-date="2019-10-8" onSelect={onSelect}></m-date-picker>
  </div>
  , 'body')

function onSelect(evt) {
  console.log(evt.detail)
}


import '../../src/color-picker/index.tsx'
import { render, h } from 'omi'

render(
  <div>
   <m-color-picker strings={{save:'保存'}} width="300px"></m-color-picker>
   <div>abc</div>
  </div>
  , 'body')


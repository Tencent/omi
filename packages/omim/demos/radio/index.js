import '../../src/radio/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <m-radio label='Label'> </m-radio>
    <br />

    <m-radio checked label='checked'> </m-radio>
    <br />

    <m-radio disabled label='disabled'> </m-radio>

  </div>
  , 'body')


import '../../src/checkbox/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <m-checkbox label='Label'> </m-checkbox>
    <br />

    <m-checkbox checked label='checked'> </m-checkbox>
    <br />

    <m-checkbox indeterminate label='indeterminate'> </m-checkbox>
    <br />

    <m-checkbox disabled label='disabled'> </m-checkbox>

  </div>
  , 'body')


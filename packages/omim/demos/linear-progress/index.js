import '../../src/linear-progress/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <m-linear-progress value={0.1}  buffer={0.2}> </m-linear-progress>
    <br />
    <m-linear-progress value={0.2}  > </m-linear-progress>
    <br />
    <m-linear-progress indeterminate > </m-linear-progress>
    <br />
    <m-linear-progress reversed value={0.3}> </m-linear-progress>
  </div>
  , 'body')


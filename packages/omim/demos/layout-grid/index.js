import '../../src/layout-grid/index.tsx'
import { render, h } from 'omi'

const css = `div{
  border: 1px solid #ccc;
  text-align: center;
}`
render(
  <div>
    <m-layout-grid css={css}>
      <cell>a</cell>
      <cell>a</cell>
      <cell>a</cell>
    </m-layout-grid>



    {/* <m-layout-grid css={css}>
  <m-layout-grid-cell css={css}>
    <m-layout-grid-cell css={css}><span>Second level</span></m-layout-grid-cell>
    <m-layout-grid-cell css={css}><span>Second level</span></m-layout-grid-cell>
  </m-layout-grid-cell>
  <m-layout-grid-cell css={css}>First level</m-layout-grid-cell>
  <m-layout-grid-cell css={css}>First level</m-layout-grid-cell>
</m-layout-grid> */}
  </div>
  , 'body')



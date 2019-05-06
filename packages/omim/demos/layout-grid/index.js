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


   <m-layout-grid 
        css=".mdc-layout-grid__cell{
            background: rgba(0,0,0,.2);
            height: 100px;
        }
        .mdc-layout-grid__inner {
            height: 200px;
            block;background: rgba(0,0,0,.1)
        }
        " >
        <cell align-top>a</cell>
        <cell align-middle>b</cell>
        <cell align-bottom>c</cell>
    </m-layout-grid>

    <m-layout-grid css={css}>
      <cell css={css}>
        <cell css={css}><span>Second level</span></cell>
        <cell css={css}><span>Second level</span></cell>
      </cell>
      <cell css={css}>First level</cell>
      <cell css={css}>First level</cell>
    </m-layout-grid>

    <m-layout-grid style="text-align:center;" align-left>
      <cell>
          <cell align-bottom>lv 2</cell>
          <cell>lv 2</cell>
      </cell>
      <cell align-top>
          <ul>
              <li>list item1</li>
              <li>list item2</li>
          </ul>
      </cell>
      <cell>lv 1</cell>
    </m-layout-grid>

  </div>
  , 'body')



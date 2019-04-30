import '../../src/text-field/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <h3>Filled</h3>
    <m-text-field label='Label' />
    <br />

    <m-text-field disabled />
    <br />

    <m-text-field textarea rows={5} cols={30} />
    <br />

    <m-text-field value='TEST TEXT' />
    <br />

    <m-text-field label='Label' value='TEST TEXT' />
    <br />


    <m-text-field fullWidth label='Label' />
    <br />

    <m-text-field outlined label='Label' />
    <br />



    <m-text-field noLabel label='Label' />
    <br />


    <m-text-field helperText="Helper Text" label='Label2' />
    <br />

    <m-text-field showHelper helperText="Helper Text" label='Label2' />
    <br />

    <m-text-field characterCounter={[50, 100]} helperText="Helper Text" label='Label2' />
    <br />


    <m-text-field textarea characterCounter={[50, 100]} label='Label2' />
    <br />


    <m-text-field required label='Label2' />
    <br />


    <m-text-field iconRight path='M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z' label='Label2' />
    <br />


    <m-text-field paths={[{
      color: '#F98080',
      path: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
    }, {
      color: '#F95050',
      path: 'M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z'
    }]} label='Label2' />
    <br />

    <m-text-field label='Label' css={`
.mdc-floating-label{ 
  color:red!important; 
}
`} />

  </div>
  , 'body')


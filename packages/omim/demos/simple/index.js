import '../../src/text-field/index.tsx'
import { render, h } from 'omi'

render(
  <div>

    <m-text-field />
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

    <m-text-field characterCounter={[50, 100]} label='Label2' />
    <br />


    <m-text-field textarea characterCounter={[50, 100]} label='Label2' />
    <br />


    <m-text-field required label='Label2' />
    <br />


    <m-text-field label='Label' css={`
.mdc-floating-label{ 
  color:red!important; 
}
`} />

  </div>
  , 'body')


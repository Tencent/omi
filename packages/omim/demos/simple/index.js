import '../../src/text-field/index.js'
import { render, h } from 'omi'

render(<m-text-field placeholder='Label' css={`
.mdc-floating-label{ 
  color:red!important; 
}
`} />, 'body')


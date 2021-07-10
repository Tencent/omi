import { tag, WeElement, h, render } from 'omi'

import './index.tsx'

@tag('table-demo')
export default class Table extends WeElement {



  render(props) {
    return <div>
      <o-hamburger-menu></o-hamburger-menu>
    </div>
  }
}


render(<table-demo></table-demo>, 'body', {
  ignoreAttrs: false
})

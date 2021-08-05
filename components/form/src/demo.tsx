import { tag, WeElement, h, render } from 'omi'

import './index.tsx'

@tag('my-demo')
export default class extends WeElement {
  render(props) {
    return <div>
      demo
    </div>
  }
}


render(<my-demo></my-demo>, 'body', {
  ignoreAttrs: true
})

import { tag, WeElement, h, render } from 'omi'

import './index.tsx'

@tag('input-demo')
export default class InputDemo extends WeElement {

  render() {
    return <div>
      <o-input></o-input>
    </div>
  }
}


render(<input-demo></input-demo>, 'body', {
  ignoreAttrs: true
})

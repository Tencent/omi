import '../../src/list/index.tsx'

import { define, WeElement, render, h } from 'omi'


define('my-app', class extends WeElement {

  render() {
    return <div>
      <m-list></m-list>
    </div>
  }
})
render(<my-app />, 'body')

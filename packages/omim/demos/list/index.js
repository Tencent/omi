import { css } from '../../src/typography/index.tsx'
import '../../src/list/index.tsx'
import '../../src/switch/index.tsx'
import '../../src/icon-button/index.tsx'
import '../../src/checkbox/index.tsx'
import '../../src/radio/index.tsx'

import { define, WeElement, render, h } from 'omi'

define('my-app', class extends WeElement {

  static css = css


  render() {
    return <div>
     
     <m-list></m-list>
    </div>
  }
})
render(<my-app />, 'body')

import '../../src/drawer/index.tsx'

import { render, WeElement, define, h } from 'omi'

define('my-app', class extends WeElement {

  render(props, data) {
    return(
      <div>
        
      </div>
    )
  }
})

render(<my-app />, 'body')

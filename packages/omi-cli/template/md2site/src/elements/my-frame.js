import { define, WeElement } from 'omi'

import './my-head'
import './my-content'
import './my-sidebar'
import './my-demo'

define('my-frame', class extends WeElement {

  render() {
    return (
      <div>
        <my-head />
        <div class="main">
          <my-content />
        </div>
        <my-sidebar />
        <my-demo />
      </div>
    )
  }
})

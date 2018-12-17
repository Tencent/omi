import { define, WeElement } from 'omi'

import './my-head'
import './my-content'
import './my-sidebar'

define('my-frame', class extends WeElement {

  render() {
    return (
      <div>
        <my-head />
        <div
          class="main"
          ref={e => {
            this.mainDiv = e
          }}
        >
          <my-content omi-id="content" />
        </div>
        <my-sidebar omi-id="sidebar" />
      </div>
    )
  }
})

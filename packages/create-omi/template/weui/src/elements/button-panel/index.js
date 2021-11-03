import { define, WeElement } from 'omi'
import style from './_index.css'
import '../../weui/button'

define('button-panel', class extends WeElement {
  css() {
    return style
  }

  render(props, data) {
    return (
      <div>
        <div class="page__hd">
          <h1 class="page__title">Button</h1>
          <p class="page__desc">按钮</p>
        </div>
        <div>
          <ow-button type="primary">primary</ow-button>
          <ow-button type="primary" disabled>
            primary disabled
        </ow-button>
          <ow-button type="warn">warn</ow-button>
          <ow-button type="warn" disabled>
            wran disabled
        </ow-button>
          <ow-button type="secondary">secondary</ow-button>
          <ow-button type="secondary" disabled>
            secondary disabled
        </ow-button>
          <ow-button size="small">small</ow-button>
        </div>
      </div>
    )
  }
})
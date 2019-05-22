import * as css from './_top-bar.css'
import { define, WeElement, h } from 'omi'
import '@omim/core/icon'
import '@omim/core/icon-button'
import '@omim/core/badge'

define('top-bar', class extends WeElement {
  static css = css

  onClickA = () => {
    this.fire('clicka')
  }

  onClickB = () => {
    this.fire('clickb')
  }

  render() {
    return (
      <div>
        <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
          <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <button onClick={this.onClickA} class="mdc-top-app-bar__navigation-icon mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" style="--mdc-ripple-fg-size:28px; --mdc-ripple-fg-scale:1.71429; --mdc-ripple-left:10px; --mdc-ripple-top:10px;">
                <m-icon view="48" path="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z"></m-icon>
              </button>
            </section>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
              <button onClick={this.onClickB} accesskey="0" class="mdc-top-app-bar__action-item mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" style="--mdc-ripple-fg-size:28px; --mdc-ripple-fg-scale:1.71429; --mdc-ripple-left:10px; --mdc-ripple-top:10px;">
                <m-icon accesskey="0" view="24" path="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z" color="#fff"></m-icon>
              </button>
              <m-badge content={99} x={-10} y={10}>
                <m-icon-button icon='favorite'></m-icon-button>
              </m-badge>
            </section>
          </div>
        </header>
        <div class="mdc-top-app-bar--fixed-adjust">
        </div>
      </div>
    )
  }
})

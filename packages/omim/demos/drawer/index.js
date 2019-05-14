import '../../src/drawer/index.tsx'
import '../../src/top-app-bar/index.tsx'

import { render, WeElement, define, h } from 'omi'

define('my-app', class extends WeElement {

  showDrawer = false

  onTopAppBar = (evt) => {
    this.showDrawer = !this.showDrawer
    this.update()
  }

  render(props, data) {
    return(
      <div>
        <m-drawer
          dismissible
          // remove-animation
          show={this.showDrawer}
          heading='Heading'
          sub-heading='sub heading'
        >
          <div slot='mdc-drawer-app-content'>
            <m-top-app-bar
              heading='Click to show menus'
              onNavigation={this.onTopAppBar}
              navigation-icon={{
                view: 24,
                path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z'
              }}
            />
          </div>
          <div slot='drawer-main-content'>
            Lorem ipsp-bar--dense-fixed-adjust	Class used to style the content below the dense top app bar to prevent the top app bar from covering it.
mdc-top-app-bar--dense-prominent-fixed-adjust	Class used to style the content below the top app bar when styled as both dense and prominent, to prevent the top app bar from covering it.
mdc-top-app-bar--short	Class used to style the top app bar as a short top app bar.
mdc-top-app-bar--short-collapsed	Class used to indicate the short top app bar is collapsed.
mdc-top-app-bar--short-fixed-adjust	Class used to style the content below the short top app bar to prevent the top app bar fro
          </div>
        </m-drawer>
      </div>
    )
  }
})

render(<my-app />, 'body')

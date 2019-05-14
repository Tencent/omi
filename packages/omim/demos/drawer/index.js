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
          show={this.showDrawer}
          heading='Title'
          sub-heading='subTitle'
        >
          <div slot='m-drawer-header'>
            <m-top-app-bar
              drawer-top-app-bar
              // adjust={false}
              heading='Drawer'
              onNavigation={this.onTopAppBar}
              navigation-icon={{
                view: 24,
                path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z'
              }}
            />
          </div>
          <div slot='m-drawer-content-main'>
            dntzhang
            <p>zain</p>
            <p>jane</p>
            <p>Lorem ipsp-bar--dense-fixed-adjust	Class used to style the content below the dense top app bar to prevent the top app bar from covering it.
mdc-top-app-bar--dense-prominent-fixed-adjust	Class used to style the content below the top app bar when styled as both dense and prominent, to prevent the top app bar from covering it.
mdc-top-app-bar--short	Class used to style the top app bar as a short top app bar.
mdc-top-app-bar--short-collapsed	Class used to indicate the short top app bar is collapsed.
mdc-top-app-bar--short-fixed-adjust	Class used to style the content below the short top app bar to prevent the top app bar fro</p>
          </div>
        </m-drawer>
      </div>
    )
  }
})

render(<my-app />, 'body')

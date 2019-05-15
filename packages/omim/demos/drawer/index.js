import '../../src/drawer/index.tsx'
import '../../src/top-app-bar/index.tsx'

import { render, WeElement, define, h } from 'omi'

define('my-app', class extends WeElement {

  showDrawer = false

  onTopAppBar = (evt) => {
    this.showDrawer = !this.showDrawer
    console.log('drawer open')
    this.update()
  }

  onDrawerClosed = (evt) => {
    this.showDrawer = false
    console.log('drawer closed')
  }

  onList = (evt) => {
    console.log(evt)
  }

  render(props, data) {
    return(
      <div>
        <m-drawer
          frame
          dismissible
          // modal
          show={this.showDrawer}
          heading='Title'
          sub-heading='subTitle'
          onClosed={this.onDrawerClosed}
          onList0={this.onList}
          lists={[
            {
              focus: true,
              text: 'Inbox',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#'
            }, {
              text: 'Inbox',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#'
            }, {
              text: 'Inbox',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#'
            }, {
              divider: true
            }, {
              subheader: 'Labels'
            }, {
              text: 'Inbox',
              icon: {
                text: 'icon',
                view: 48
                // path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#'
            }, {
              text: 'Inbox',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#'
            }
          ]}
        >
          <div slot='m-drawer-header'>
            <m-top-app-bar
              css={`
                .mdc-top-app-bar {
                  position: absolute;
                  // z-index: 7;
                }
              `}
              dense
              // adjust
              // short
              // fixed
              heading='Drawer'
              // onNav={this.onTopAppBar}
              onNavigation={this.onTopAppBar}
              navigation-icon={{
                view: 24,
                path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z'
              }}
            />
          </div>
          <div slot='m-drawer-content'>
            <br/><br/>
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

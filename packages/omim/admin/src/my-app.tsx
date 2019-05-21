import logo from './logo.svg'
import * as css from './_my-app.css'
import { define, WeElement, h } from 'omi'
import '@omim/core/button'
import '@omim/core/drawer'
import '@omim/core/top-app-bar'


define('my-app', class extends WeElement {
  static css = css


  onDrawerClosed = () => {

  }
  onListPermanent = () => {

  }
  onListDismissible = () => {

  }
  toggleDrawer = () => {

    this.showDrawer = !this.showDrawer
    //@ts-ignore
    this.update()
  }
  onDemoStart = () => {
    toggleFullScreen()
  }
  showDrawer = true
  drawer = null

  render() {
    return <div class="app">
      <div>

        <m-top-app-bar css={`.mdc-top-app-bar{padding-left:${this.showDrawer ? '256' : '0'}px;transition-property: padding-left;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);}`}
          adjust
          fixed
          class='abc'
          heading='Omim Templates'
          onNavigation={this.toggleDrawer}
          navigation-icon={{
            view: 48,
            //M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z
            path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
          }}
          onAction0={this.onDemoStart}
          actionItems={[
            {
              view: 24,
              path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z',
              color: '#fff'
            }
          ]}
        />
        <div class='main' style={` padding-left:${this.showDrawer ? '256' : '0'}px;transition: padding-left .4s cubic-bezier(0.4, 0, 0.2, 1);`}>
          <h1 class="mdc-typography--headline1">Headline 1</h1>
          <h2 class="mdc-typography--headline2">Headline 2</h2>
          <h3 class="mdc-typography--headline3">Headline 3</h3>
          <h4 class="mdc-typography--headline4">Headline 4</h4>
          <h5 class="mdc-typography--headline5">Headline 5</h5>
          <h6 class="mdc-typography--headline6">Headline 6</h6>
          <h6 class="mdc-typography--subtitle1">Subtitle 1</h6>
          <h6 class="mdc-typography--subtitle2">Subtitle 2</h6>
          <p class="mdc-typography--body1">Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</p>
          <p class="mdc-typography--body2">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.</p>
          <div>
            <span class="mdc-typography--button">Button text</span>
          </div>
          <div><span class="mdc-typography--caption">Caption text</span>
          </div>
          <div><span class="mdc-typography--overline">Overline text</span></div>


          <h1 class="mdc-typography--headline1">Headline 1</h1>
          <h2 class="mdc-typography--headline2">Headline 2</h2>
          <h3 class="mdc-typography--headline3">Headline 3</h3>
          <h4 class="mdc-typography--headline4">Headline 4</h4>
          <h5 class="mdc-typography--headline5">Headline 5</h5>
          <h6 class="mdc-typography--headline6">Headline 6</h6>
          <h6 class="mdc-typography--subtitle1">Subtitle 1</h6>
          <h6 class="mdc-typography--subtitle2">Subtitle 2</h6>
          <p class="mdc-typography--body1">Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</p>
          <p class="mdc-typography--body2">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.</p>
          <div>
            <span class="mdc-typography--button">Button text</span>
          </div>
          <div><span class="mdc-typography--caption">Caption text</span>
          </div>
          <div><span class="mdc-typography--overline">Overline text</span></div>


          <h1 class="mdc-typography--headline1">Headline 1</h1>
          <h2 class="mdc-typography--headline2">Headline 2</h2>
          <h3 class="mdc-typography--headline3">Headline 3</h3>
          <h4 class="mdc-typography--headline4">Headline 4</h4>
          <h5 class="mdc-typography--headline5">Headline 5</h5>
          <h6 class="mdc-typography--headline6">Headline 6</h6>
          <h6 class="mdc-typography--subtitle1">Subtitle 1</h6>
          <h6 class="mdc-typography--subtitle2">Subtitle 2</h6>
          <p class="mdc-typography--body1">Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</p>
          <p class="mdc-typography--body2">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.</p>
          <div>
            <span class="mdc-typography--button">Button text</span>
          </div>
          <div><span class="mdc-typography--caption">Caption text</span>
          </div>
          <div><span class="mdc-typography--overline">Overline text</span></div>
        </div>

      </div>

      <m-drawer
        ref={(evt) => { this.drawer = evt }}
        style="position:fixed;top:0px;z-index:100000"
        frame
        dismissible
        show={this.showDrawer}
        heading='Omim'
        sub-heading='drawer-demo-modal'
        onClosed={this.onDrawerClosed}
        onList2={this.onListPermanent}
        onList3={this.onListDismissible}
        lists={[
          {
            divider: true
          }, {
            subheader: 'Official sample'
          }, {
            text: 'Permanent',
            icon: {
              path: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
            },
            href: '#/Permanent'
          }, {
            focus: true,
            text: 'Dismissible',
            icon: {
              path: 'M879.5 470.4c-.3-27-.4-54.2-.5-81.3h-80.8c-.3 27-.5 54.1-.7 81.3-27.2.1-54.2.3-81.2.6v80.9c27 .3 54.2.5 81.2.8.3 27 .3 54.1.5 81.1h80.9c.1-27 .3-54.1.5-81.3 27.2-.3 54.2-.4 81.2-.7v-80.9c-26.9-.2-54.1-.2-81.1-.5zm-530 .4c-.1 32.3 0 64.7.1 97 54.2 1.8 108.5 1 162.7 1.8-23.9 120.3-187.4 159.3-273.9 80.7-89-68.9-84.8-220 7.7-284 64.7-51.6 156.6-38.9 221.3 5.8 25.4-23.5 49.2-48.7 72.1-74.7-53.8-42.9-119.8-73.5-190-70.3-146.6-4.9-281.3 123.5-283.7 270.2-9.4 119.9 69.4 237.4 180.6 279.8 110.8 42.7 252.9 13.6 323.7-86 46.7-62.9 56.8-143.9 51.3-220-90.7-.7-181.3-.6-271.9-.3z',
            },
            href: '#/Dismissible'
          }
        ]}
      >
        <div slot='m-drawer-header'>

        </div>
        <div slot='m-drawer-content'></div>
      </m-drawer>
    </div>
  }
})

function toggleFullScreen() {
  //@ts-ignore
  if (!document.fullscreenElement) {
    //@ts-ignore
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

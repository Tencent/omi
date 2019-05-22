import logo from './logo.svg'
import * as css from './_app.css'
import { define, WeElement, h } from 'omi'
import '@omim/core/button'
import '@omim/core/drawer'
import 'omi-router'
import './dashboard'
import './about'
import './top-bar'

const hash = location.hash || '#/dashboard'


define('my-app', class extends WeElement {
  static css = css

  mainTag = null

  install() {
    //@ts-ignore
    route('/', () => {
      this.mainTag = 'my-dashboard'
      this.update()
    })
    //@ts-ignore
    route('/dashboard', () => {
      this.mainTag = 'my-dashboard'
      this.update()
    })
    //@ts-ignore
    route('/about', () => {
      this.mainTag = 'my-about'
      this.update()
    })

  }
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

        <top-bar onClickA={this.toggleDrawer} onClickB={this.onDemoStart} css={`.mdc-top-app-bar{padding-left:${this.showDrawer ? '256' : '0'}px;transition-property: padding-left;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);}`} />
        <div class='main' style={` padding-left:${this.showDrawer ? '256' : '0'}px;transition: padding-left .4s cubic-bezier(0.4, 0, 0.2, 1);`}>
          <this.mainTag ></this.mainTag>
        </div>
      </div>

      <m-drawer
        ref={(evt) => { this.drawer = evt }}
        style="position:fixed;top:0px;z-index:100000"
        frame
        dismissible
        show={this.showDrawer}
        heading='Omim Templates'
        sub-heading='powered by omi'
        onClosed={this.onDrawerClosed}
        onList2={this.onListPermanent}
        onList3={this.onListDismissible}
        lists={[
          {
            divider: true
          }, {
            subheader: 'Official sample'
          }, {
            text: 'Dashboard',
            icon: {
              path: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
            },
            href: '#/dashboard',
            focus: hash==='#/dashboard'
          }, {
            focus: hash==='#/dismissible',
            text: 'Dismissible',
            icon: {
              path: 'M879.5 470.4c-.3-27-.4-54.2-.5-81.3h-80.8c-.3 27-.5 54.1-.7 81.3-27.2.1-54.2.3-81.2.6v80.9c27 .3 54.2.5 81.2.8.3 27 .3 54.1.5 81.1h80.9c.1-27 .3-54.1.5-81.3 27.2-.3 54.2-.4 81.2-.7v-80.9c-26.9-.2-54.1-.2-81.1-.5zm-530 .4c-.1 32.3 0 64.7.1 97 54.2 1.8 108.5 1 162.7 1.8-23.9 120.3-187.4 159.3-273.9 80.7-89-68.9-84.8-220 7.7-284 64.7-51.6 156.6-38.9 221.3 5.8 25.4-23.5 49.2-48.7 72.1-74.7-53.8-42.9-119.8-73.5-190-70.3-146.6-4.9-281.3 123.5-283.7 270.2-9.4 119.9 69.4 237.4 180.6 279.8 110.8 42.7 252.9 13.6 323.7-86 46.7-62.9 56.8-143.9 51.3-220-90.7-.7-181.3-.6-271.9-.3z',
            },
            href: '#/dismissible'
          }, {
            divider: true
          }, {
            subheader: 'Official sample'
          }, {
            text: 'Permanent',
            icon: {
              path: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
            },
            href: '#/permanent',
            focus: hash==='#/permanent'
          }, {

            text: 'About',
            icon: {
              path: 'M824.2 699.9a301.55 301.55 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z',
            },
            href: '#/about',
            focus: hash==='#/about'
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

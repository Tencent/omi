import logo from './logo.svg'
import * as css from './_app.css'
import { define, WeElement, h } from 'omi'
import '@omim/core/button'
import 'omi-router'
import './dashboard'
import './about'
import './top-bar'
import './drawer'

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

      <my-drawer show={this.showDrawer}></my-drawer>
     
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

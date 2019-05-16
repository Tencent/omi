import '../../src/drawer/index.tsx'
import '../../src/top-app-bar/index.tsx'

import { render, WeElement, define, h } from 'omi'

define('my-app', class extends WeElement {

  static css = `
    .mdc-typography--subtitle1 {
      font-size: 1rem;
      line-height: 1.75rem;
      font-weight: 400;
      letter-spacing: .009375em;
    }
    .demos-display {
      display: flex;
      flex-wrap: wrap;
      min-height: 200px;
    }
    .drawer-demo {
      display: inline-block;
      flex: 1 1 80%;
      justify-content: space-around;
      min-height: 100px;
      min-width: 100px;
      padding: 30px;
    }
    .drawer-iframe {
      width: 100%;
      height: 400px;
    }
  `

  showDrawer = false

  scrollTarget = null
  topAppBarHeight = null

  showPermanent = false
  showDismissible = false
  showModal = true
  showZainDemo1 = false
  showZainDemo2 = false
  showZainDemo3 = false
  showZainDemo4 = false
  showDemoAll = false
  showAlone = false

  installed() {
    if(this.showPermanent || this.showDismissible || this.showModal || this.showZainDemo3 || this.showZainDemo4 || this.showDemoAll || this.showAlone) {
      //Get the target scrollbar of 'm-top-app-bar' and trigger the animation based on this scrollbar
      //获取 'm-top-app-bar' 的目标滚动条，根据此滚动条触发动画
      this.scrollTarget = this.shadowRoot.querySelector('m-drawer').shadowRoot.lastElementChild.getElementsByClassName('m-drawer-content')[0]
      console.log(this.scrollTarget)
      this.update()

      //Automatically get the 'm-top-app-bar' height and fill it into the content section
      //自动获取 'm-top-app-bar' 高度，填充到内容部分
      const topAppBar = document.getElementsByTagName('my-app')[0].shadowRoot.lastElementChild.getElementsByTagName('m-top-app-bar')[0].shadowRoot.querySelector('.mdc-top-app-bar')
      this.topAppBarHeight = window.getComputedStyle(topAppBar).height
      // console.log(this.topAppBarHeight)
      this.update()
    }
  }

  onTopAppBar = (evt) => {
    this.showDrawer = !this.showDrawer
    console.log('drawer open')
    this.update()
  }

  onDrawerClosed = (evt) => {
    this.showDrawer = false
    console.log('drawer closed')
  }

  onListPermanent = () => {
    this.showPermanent = true
    this.showDismissible = false
    this.showModal = false
    this.showZainDemo1 = false
    this.showZainDemo2 = false
    this.showZainDemo3 = false
    this.showZainDemo4 = false
    this.showDemoAll = false
    this.showAlone = false
    this.updateTopAppBarInfo()
  }

  onListDismissible = () => {
    this.onListPermanent()
    this.showPermanent = false
    this.showDismissible = true
    this.showModal = false
    this.showZainDemo1 = false
    this.showZainDemo2 = false
    this.showZainDemo3 = false
    this.showZainDemo4 = false
    this.showDemoAll = false
    this.showAlone = false
    this.updateTopAppBarInfo()
  }

  onListModal = () => {
    this.onListPermanent()
    this.showPermanent = false
    this.showDismissible = false
    this.showModal = true
    this.showZainDemo1 = false
    this.showZainDemo2 = false
    this.showZainDemo3 = false
    this.showZainDemo4 = false
    this.showDemoAll = false
    this.showAlone = false
    this.updateTopAppBarInfo()
  }

  onListZainDemo1 = () => {
    this.onListPermanent()
    this.showPermanent = false
    this.showDismissible = false
    this.showModal = false
    this.showZainDemo1 = true
    this.showZainDemo2 = false
    this.showZainDemo3 = false
    this.showZainDemo4 = false
    this.showDemoAll = false
    this.showAlone = false
    this.update()
  }

  onListZainDemo2 = () => {
    this.onListPermanent()
    this.showPermanent = false
    this.showDismissible = false
    this.showModal = false
    this.showZainDemo1 = false
    this.showZainDemo2 = true
    this.showZainDemo3 = false
    this.showZainDemo4 = false
    this.showDemoAll = false
    this.showAlone = false
    this.update()
  }

  onListZainDemo3 = () => {
    this.onListPermanent()
    this.showPermanent = false
    this.showDismissible = false
    this.showModal = false
    this.showZainDemo1 = false
    this.showZainDemo2 = false
    this.showZainDemo3 = true
    this.showZainDemo4 = false
    this.showDemoAll = false
    this.showAlone = false
    this.updateTopAppBarInfo()
  }

  onListZainDemo4 = () => {
    this.onListPermanent()
    this.showPermanent = false
    this.showDismissible = false
    this.showModal = false
    this.showZainDemo1 = false
    this.showZainDemo2 = false
    this.showZainDemo3 = false
    this.showZainDemo4 = true
    this.showDemoAll = false
    this.showAlone = false
    this.updateTopAppBarInfo()
  }

  onListDemoAll = () => {
    this.onListPermanent()
    this.showPermanent = false
    this.showDismissible = false
    this.showModal = false
    this.showZainDemo1 = false
    this.showZainDemo2 = false
    this.showZainDemo3 = false
    this.showZainDemo4 = false
    this.showDemoAll = true
    this.showAlone = false
    this.updateTopAppBarInfo()
  }

  onListAlone = () => {
    this.onListPermanent()
    this.showPermanent = false
    this.showDismissible = false
    this.showModal = false
    this.showZainDemo1 = false
    this.showZainDemo2 = false
    this.showZainDemo3 = false
    this.showZainDemo4 = false
    this.showDemoAll = false
    this.showAlone = true
    this.updateTopAppBarInfo()
  }

  updateTopAppBarInfo() {
    //Update 'top-app-bar' fill height and target scrollbar
    //更新'top-app-bar'填充高度和目标滚动条
    this.scrollTarget = null
    this.update()
    this.scrollTarget = this.shadowRoot.querySelector('m-drawer').shadowRoot.lastElementChild.getElementsByClassName('m-drawer-content')[0]
    this.update()
    const topAppBar = document.getElementsByTagName('my-app')[0].shadowRoot.lastElementChild.getElementsByTagName('m-top-app-bar')[0].shadowRoot.querySelector('.mdc-top-app-bar')
    this.topAppBarHeight = window.getComputedStyle(topAppBar).height
    this.update()
  }

  render(props, data) {
    return(
      <div>
        {this.showPermanent &&
        <m-drawer
          frame
          heading='Omim'
          sub-heading='drawer-demo-permanent'
          onClosed={this.onDrawerClosed}
          onList2={this.onListPermanent}
          onList3={this.onListDismissible}
          onList4={this.onListModal}
          onList7={this.onListZainDemo1}
          onList8={this.onListZainDemo2}
          onList9={this.onListZainDemo3}
          onList10={this.onListZainDemo4}
          onList13={this.onListDemoAll}
          onList16={this.onListAlone}
          lists={[
            {
              divider: true
            }, {
              subheader: 'Official sample'
            }, {
              focus: true,
              text: 'Permanent',
              icon: {
                view: 1024,
                path: 'M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z',
              },
              href: '#/Permanent'
            }, {
              text: 'Dismissible',
              icon: {
                view: 1024,
                path: 'M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 0 1 9.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 0 0 6.4-2.6 9 9 0 0 0 2.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 0 1-36 35.9z',
              },
              href: '#/Dismissible'
            }, {
              text: 'Modal',
              icon: {
                view: 1024,
                path: 'M308.6 545.7c-19.8 2-57.1 10.7-77.4 28.6-61 53-24.5 150 99 150 71.8 0 143.5-45.7 199.8-119-80.2-38.9-148.1-66.8-221.4-59.6zm460.5 67c100.1 33.4 154.7 43 166.7 44.8A445.9 445.9 0 0 0 960 512c0-247.4-200.6-448-448-448S64 264.6 64 512s200.6 448 448 448c155.9 0 293.2-79.7 373.5-200.5-75.6-29.8-213.6-85-286.8-120.1-69.9 85.7-160.1 137.8-253.7 137.8-158.4 0-212.1-138.1-137.2-229 16.3-19.8 44.2-38.7 87.3-49.4 67.5-16.5 175 10.3 275.7 43.4 18.1-33.3 33.4-69.9 44.7-108.9H305.1V402h160v-56.2H271.3v-31.3h193.8v-80.1s0-13.5 13.7-13.5H557v93.6h191.7v31.3H557.1V402h156.4c-15 61.1-37.7 117.4-66.2 166.8 47.5 17.1 90.1 33.3 121.8 43.9z',
              },
              href: '#/Modal'
            }, {
              divider: true
            }, {
              subheader: 'ZainChen sample'
            }, {
              text: 'ZainDemo1',
              icon: {
                view: 1024,
                path: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z',
              },
              href: '#/ZainDemo1'
            }, {
              text: 'ZainDemo2',
              icon: {
                view: 1024,
                path: 'M883.7 578.6c4.1-22.5 6.3-45.5 6.3-68.5 0-51-10-100.5-29.7-147-19-45-46.3-85.4-81-120.1a375.79 375.79 0 0 0-120.1-80.9c-46.6-19.7-96-29.7-147-29.7-24 0-48.1 2.3-71.5 6.8A225.1 225.1 0 0 0 335.6 113c-59.7 0-115.9 23.3-158.1 65.5A222.25 222.25 0 0 0 112 336.6c0 38 9.8 75.4 28.1 108.4-3.7 21.4-5.7 43.3-5.7 65.1 0 51 10 100.5 29.7 147 19 45 46.2 85.4 80.9 120.1 34.7 34.7 75.1 61.9 120.1 80.9 46.6 19.7 96 29.7 147 29.7 22.2 0 44.4-2 66.2-5.9 33.5 18.9 71.3 29 110 29 59.7 0 115.9-23.2 158.1-65.5 42.3-42.2 65.5-98.4 65.5-158.1.1-38-9.7-75.5-28.2-108.7zm-88.1 216C766.9 823.4 729 839 688.4 839c-26.1 0-51.8-6.8-74.6-19.7l-22.5-12.7-25.5 4.5c-17.8 3.2-35.8 4.8-53.6 4.8-41.4 0-81.3-8.1-119.1-24.1-36.3-15.3-69-37.3-97.2-65.5a304.29 304.29 0 0 1-65.5-97.1c-16-37.7-24-77.6-24-119 0-17.4 1.6-35.2 4.6-52.8l4.4-25.1L203 410a151.02 151.02 0 0 1-19.1-73.4c0-40.6 15.7-78.5 44.4-107.2C257.1 200.7 295 185 335.6 185a153 153 0 0 1 71.4 17.9l22.4 11.8 24.8-4.8c18.9-3.6 38.4-5.5 58-5.5 41.4 0 81.3 8.1 119 24 36.5 15.4 69.1 37.4 97.2 65.5 28.2 28.1 50.2 60.8 65.6 97.2 16 37.7 24 77.6 24 119 0 18.4-1.7 37-5.1 55.5l-4.7 25.5 12.6 22.6c12.6 22.5 19.2 48 19.2 73.7 0 40.7-15.7 78.5-44.4 107.2zM583.4 466.2L495 446.6c-33.6-7.7-72.3-17.8-72.3-49.5s27.1-53.9 76.1-53.9c98.7 0 89.7 67.8 138.7 67.8 25.8 0 48.4-15.2 48.4-41.2 0-60.8-97.4-106.5-180-106.5-89.7 0-185.2 38.1-185.2 139.5 0 48.8 17.4 100.8 113.6 124.9l119.4 29.8c36.1 8.9 45.2 29.2 45.2 47.6 0 30.5-30.3 60.3-85.2 60.3-107.2 0-92.3-82.5-149.7-82.5-25.8 0-44.5 17.8-44.5 43.1 0 49.4 60 115.4 194.2 115.4 127.7 0 191-61.5 191-144 0-53.1-24.5-109.6-121.3-131.2z',
              },
              href: '#/ZainDemo2'
            }, {
              text: 'ZainDemo3',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo3'
            }, {
              text: 'ZainDemo4',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo4'
            }, {
              divider: true
            }, {
              subheader: 'All sample'
            }, {
              text: 'DemoAll',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/DemoAll'
            }, {
              divider: true
            }, {
              subheader: 'Alone sample'
            }, {
              text: 'Alone',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/Alone'
            }
          ]}
        >
          <div slot='m-drawer-header'>
            {this.scrollTarget &&
            <m-top-app-bar
              css={`
                .mdc-top-app-bar {
                  position: absolute;
                }
              `}
              scroll-target={this.scrollTarget}
              heading='Omim Drawer Permanent'
            />}
          </div>
          <div slot='m-drawer-content'>
            <div style={`height:${this.topAppBarHeight}`}></div>
            <div class='demos-display'>
              <div class="drawer-demo">
                <div>
                  <a href="#/component/drawer/permanent" target="_blank">
                    <h3 class="mdc-typography--subtitle1">Permanent</h3>
                  </a>
                </div>
                <div>
                  <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                </div>
              </div>
              <div class="drawer-demo">
                <div>
                  <a href="#/component/drawer/permanent" target="_blank">
                    <h3 class="mdc-typography--subtitle1">Permanent</h3>
                  </a>
                </div>
                <div>
                  <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                </div>
              </div>
              <div class="drawer-demo">
                <div>
                  <a href="#/component/drawer/permanent" target="_blank">
                    <h3 class="mdc-typography--subtitle1">Permanent</h3>
                  </a>
                </div>
                <div>
                  <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                </div>
              </div>
            </div>
          </div>
        </m-drawer>}
        {this.showDismissible &&
        <m-drawer
          frame
          dismissible
          dismissible-smooth
          show={this.showDrawer}
          heading='Omim'
          sub-heading='drawer-demo-dismissible'
          onClosed={this.onDrawerClosed}
          onList2={this.onListPermanent}
          onList3={this.onListDismissible}
          onList4={this.onListModal}
          onList7={this.onListZainDemo1}
          onList8={this.onListZainDemo2}
          onList9={this.onListZainDemo3}
          onList10={this.onListZainDemo4}
          onList13={this.onListDemoAll}
          onList16={this.onListAlone}
          lists={[
            {
              divider: true
            }, {
              subheader: 'Official sample'
            }, {
              text: 'Permanent',
              icon: {
                view: 1024,
                path: 'M913.9 552.2L805 181.4v-.1c-7.6-22.9-25.7-36.5-48.3-36.5-23.4 0-42.5 13.5-49.7 35.2l-71.4 213H388.8l-71.4-213c-7.2-21.7-26.3-35.2-49.7-35.2-23.1 0-42.5 14.8-48.4 36.6L110.5 552.2c-4.4 14.7 1.2 31.4 13.5 40.7l368.5 276.4c2.6 3.6 6.2 6.3 10.4 7.8l8.6 6.4 8.5-6.4c4.9-1.7 9-4.7 11.9-8.9l368.4-275.4c12.4-9.2 18-25.9 13.6-40.6zM751.7 193.4c1-1.8 2.9-1.9 3.5-1.9 1.1 0 2.5.3 3.4 3L818 394.3H684.5l67.2-200.9zm-487.4 1c.9-2.6 2.3-2.9 3.4-2.9 2.7 0 2.9.1 3.4 1.7l67.3 201.2H206.5l57.8-200zM158.8 558.7l28.2-97.3 202.4 270.2-230.6-172.9zm73.9-116.4h122.1l90.8 284.3-212.9-284.3zM512.9 776L405.7 442.3H620L512.9 776zm157.9-333.7h119.5L580 723.1l90.8-280.8zm-40.7 293.9l207.3-276.7 29.5 99.2-236.8 177.5z',
              },
              href: '#/Permanent'
            }, {
              focus: true,
              text: 'Dismissible',
              icon: {
                view: 1024,
                path: 'M120.1 770.6L443 823.2V543.8H120.1v226.8zm63.4-163.5h196.2v141.6l-196.2-31.9V607.1zm340.3 226.5l382 62.2v-352h-382v289.8zm63.4-226.5h255.3v214.4l-255.3-41.6V607.1zm-63.4-415.7v288.8h382V128.1l-382 63.3zm318.7 225.5H587.3V245l255.3-42.3v214.2zm-722.4 63.3H443V201.9l-322.9 53.5v224.8zM183.5 309l196.2-32.5v140.4H183.5V309z',
              },
              href: '#/Dismissible'
            }, {
              text: 'Modal',
              icon: {
                view: 1024,
                path: 'M928 512.3v-.3c0-229.8-186.2-416-416-416S96 282.2 96 512v.4c0 229.8 186.2 416 416 416s416-186.2 416-416v-.3.2zm-6.7-74.6l.6 3.3-.6-3.3zM676.7 638.2c53.5-82.2 52.5-189.4-11.1-263.7l162.4-8.4c20.5 44.4 32 93.8 32 145.9 0 185.2-144.6 336.6-327.1 347.4l143.8-221.2zM512 652.3c-77.5 0-140.2-62.7-140.2-140.2 0-77.7 62.7-140.2 140.2-140.2S652.2 434.5 652.2 512 589.5 652.3 512 652.3zm369.2-331.7l-3-5.7 3 5.7zM512 164c121.3 0 228.2 62.1 290.4 156.2l-263.6-13.9c-97.5-5.7-190.2 49.2-222.3 141.1L227.8 311c63.1-88.9 166.9-147 284.2-147zM102.5 585.8c26 145 127.1 264 261.6 315.1C229.6 850 128.5 731 102.5 585.8zM164 512c0-55.9 13.2-108.7 36.6-155.5l119.7 235.4c44.1 86.7 137.4 139.7 234 121.6l-74 145.1C302.9 842.5 164 693.5 164 512zm324.7 415.4c4 .2 8 .4 12 .5-4-.2-8-.3-12-.5z',
              },
              href: '#/Modal'
            }, {
              divider: true
            }, {
              subheader: 'ZainChen sample'
            }, {
              text: 'ZainDemo1',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo1'
            }, {
              text: 'ZainDemo2',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo2'
            }, {
              text: 'ZainDemo3',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo3'
            }, {
              text: 'ZainDemo4',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo4'
            }, {
              divider: true
            }, {
              subheader: 'All sample'
            }, {
              text: 'DemoAll',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/DemoAll'
            }, {
              divider: true
            }, {
              subheader: 'Alone sample'
            }, {
              text: 'Alone',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/Alone'
            }
          ]}
        >
          <div slot='m-drawer-header'>
            {this.scrollTarget &&
            <m-top-app-bar
              css={`
                .mdc-top-app-bar {
                  position: absolute;
                }
              `}
              short
              dense
              scroll-target={this.scrollTarget}
              heading='Omim Drawer Dismissible'
              onNavigation={this.onTopAppBar}
              navigation-icon={{
                view: 48,
                path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
              }}
            />}
          </div>
          <div slot='m-drawer-content'>
            <div style={`height:${this.topAppBarHeight}`}></div>
            <div class='demos-display'>
              <div class="drawer-demo">
                <div>
                  <a href="#/component/drawer/permanent" target="_blank">
                    <h3 class="mdc-typography--subtitle1">Permanent</h3>
                  </a>
                </div>
                <div>
                  <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                </div>
              </div>
              <div class="drawer-demo">
                <div>
                  <a href="#/component/drawer/permanent" target="_blank">
                    <h3 class="mdc-typography--subtitle1">Permanent</h3>
                  </a>
                </div>
                <div>
                  <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                </div>
              </div>
              <div class="drawer-demo">
                <div>
                  <a href="#/component/drawer/permanent" target="_blank">
                    <h3 class="mdc-typography--subtitle1">Permanent</h3>
                  </a>
                </div>
                <div>
                  <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                </div>
              </div>
            </div>
          </div>
        </m-drawer>}
        {this.showModal &&
        <m-drawer
          frame
          modal
          show={this.showDrawer}
          heading='Omim'
          sub-heading='drawer-demo-modal'
          onClosed={this.onDrawerClosed}
          onList2={this.onListPermanent}
          onList3={this.onListDismissible}
          onList4={this.onListModal}
          onList7={this.onListZainDemo1}
          onList8={this.onListZainDemo2}
          onList9={this.onListZainDemo3}
          onList10={this.onListZainDemo4}
          onList13={this.onListDemoAll}
          onList16={this.onListAlone}
          lists={[
            {
              divider: true
            }, {
              subheader: 'Official sample'
            }, {
              text: 'Permanent',
              icon: {
                view: 1024,
                path: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
              },
              href: '#/Permanent'
            }, {
              text: 'Dismissible',
              icon: {
                view: 1024,
                path: 'M879.5 470.4c-.3-27-.4-54.2-.5-81.3h-80.8c-.3 27-.5 54.1-.7 81.3-27.2.1-54.2.3-81.2.6v80.9c27 .3 54.2.5 81.2.8.3 27 .3 54.1.5 81.1h80.9c.1-27 .3-54.1.5-81.3 27.2-.3 54.2-.4 81.2-.7v-80.9c-26.9-.2-54.1-.2-81.1-.5zm-530 .4c-.1 32.3 0 64.7.1 97 54.2 1.8 108.5 1 162.7 1.8-23.9 120.3-187.4 159.3-273.9 80.7-89-68.9-84.8-220 7.7-284 64.7-51.6 156.6-38.9 221.3 5.8 25.4-23.5 49.2-48.7 72.1-74.7-53.8-42.9-119.8-73.5-190-70.3-146.6-4.9-281.3 123.5-283.7 270.2-9.4 119.9 69.4 237.4 180.6 279.8 110.8 42.7 252.9 13.6 323.7-86 46.7-62.9 56.8-143.9 51.3-220-90.7-.7-181.3-.6-271.9-.3z',
              },
              href: '#/Dismissible'
            }, {
              focus: true,
              text: 'Modal',
              icon: {
                view: 1024,
                path: 'M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z',
              },
              href: '#/Modal'
            }, {
              divider: true
            }, {
              subheader: 'ZainChen sample'
            }, {
              text: 'ZainDemo1',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo1'
            }, {
              text: 'ZainDemo2',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo2'
            }, {
              text: 'ZainDemo3',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo3'
            }, {
              text: 'ZainDemo4',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo4'
            }, {
              divider: true
            }, {
              subheader: 'All sample'
            }, {
              text: 'DemoAll',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/DemoAll'
            }, {
              divider: true
            }, {
              subheader: 'Alone sample'
            }, {
              text: 'Alone',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/Alone'
            }
          ]}
        >
          <div slot='m-drawer-header'>
            {this.scrollTarget &&
            <m-top-app-bar
              css={`
                .mdc-top-app-bar {
                  position: absolute;
                }
              `}
              short
              scroll-target={this.scrollTarget}
              heading='Omim Drawer Modal'
              onNavigation={this.onTopAppBar}
              navigation-icon={{
                view: 48,
                path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
              }}
            />}
          </div>
          <div slot='m-drawer-content'>
            <div style={`height:${this.topAppBarHeight}`}></div>
            <div class='demos-display'>
              <div class="drawer-demo">
                <div>
                  <a href="#/component/drawer/permanent" target="_blank">
                    <h3 class="mdc-typography--subtitle1">Permanent</h3>
                  </a>
                </div>
                <div>
                  <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                </div>
              </div>
              <div class="drawer-demo">
                <div>
                  <a href="#/component/drawer/permanent" target="_blank">
                    <h3 class="mdc-typography--subtitle1">Permanent</h3>
                  </a>
                </div>
                <div>
                  <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                </div>
              </div>
              <div class="drawer-demo">
                <div>
                  <a href="#/component/drawer/permanent" target="_blank">
                    <h3 class="mdc-typography--subtitle1">Permanent</h3>
                  </a>
                </div>
                <div>
                  <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                </div>
              </div>
            </div>
          </div>
        </m-drawer>}
        {this.showZainDemo1 &&
        <div>
          <m-top-app-bar
            css={`
              .mdc-top-app-bar {
                z-index: 7;
              }
            `}
            fixed
            dense
            adjust
            heading='Omim Drawer Zain Demo1'
            onNavigation={this.onTopAppBar}
            navigation-icon={{
              view: 48,
              path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
            }}
          />
          <m-drawer
            css={`
              .mdc-drawer {
                position: fixed;
                box-shadow: 3px 0 10px #ccc;
              }
            `}
            dismissible
            show={this.showDrawer}
            heading='Omim'
            sub-heading='drawer-demo-zain'
            onClosed={this.onDrawerClosed}
            onList2={this.onListPermanent}
            onList3={this.onListDismissible}
            onList4={this.onListModal}
            onList7={this.onListZainDemo1}
            onList8={this.onListZainDemo2}
            onList9={this.onListZainDemo3}
            onList10={this.onListZainDemo4}
            onList13={this.onListDemoAll}
            onList16={this.onListAlone}
            lists={[
              {
                divider: true
              }, {
                subheader: 'Official sample'
              }, {
                text: 'Permanent',
                icon: {
                  view: 1024,
                  path: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
                },
                href: '#/Permanent'
              }, {
                text: 'Dismissible',
                icon: {
                  view: 1024,
                  path: 'M879.5 470.4c-.3-27-.4-54.2-.5-81.3h-80.8c-.3 27-.5 54.1-.7 81.3-27.2.1-54.2.3-81.2.6v80.9c27 .3 54.2.5 81.2.8.3 27 .3 54.1.5 81.1h80.9c.1-27 .3-54.1.5-81.3 27.2-.3 54.2-.4 81.2-.7v-80.9c-26.9-.2-54.1-.2-81.1-.5zm-530 .4c-.1 32.3 0 64.7.1 97 54.2 1.8 108.5 1 162.7 1.8-23.9 120.3-187.4 159.3-273.9 80.7-89-68.9-84.8-220 7.7-284 64.7-51.6 156.6-38.9 221.3 5.8 25.4-23.5 49.2-48.7 72.1-74.7-53.8-42.9-119.8-73.5-190-70.3-146.6-4.9-281.3 123.5-283.7 270.2-9.4 119.9 69.4 237.4 180.6 279.8 110.8 42.7 252.9 13.6 323.7-86 46.7-62.9 56.8-143.9 51.3-220-90.7-.7-181.3-.6-271.9-.3z',
                },
                href: '#/Dismissible'
              }, {
                text: 'Modal',
                icon: {
                  view: 1024,
                  path: 'M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z',
                },
                href: '#/Modal'
              }, {
                divider: true
              }, {
                subheader: 'ZainChen sample'
              }, {
                focus: true,
                text: 'ZainDemo1',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/ZainDemo1'
              }, {
                text: 'ZainDemo2',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/ZainDemo2'
              }, {
                text: 'ZainDemo3',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/ZainDemo3'
              }, {
                text: 'ZainDemo4',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/ZainDemo4'
              }, {
                divider: true
              }, {
                subheader: 'All sample'
              }, {
                text: 'DemoAll',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/DemoAll'
              }, {
                divider: true
              }, {
                subheader: 'Alone sample'
              }, {
                text: 'Alone',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/Alone'
              }
            ]}
          ></m-drawer>
          <div class='demos-display'>
            <div class="drawer-demo">
              <div>
                <a href="#/component/drawer/permanent" target="_blank">
                  <h3 class="mdc-typography--subtitle1">Permanent</h3>
                </a>
              </div>
              <div>
                <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
              </div>
            </div>
            <div class="drawer-demo">
              <div>
                <a href="#/component/drawer/permanent" target="_blank">
                  <h3 class="mdc-typography--subtitle1">Permanent</h3>
                </a>
              </div>
              <div>
                <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
              </div>
            </div>
            <div class="drawer-demo">
              <div>
                <a href="#/component/drawer/permanent" target="_blank">
                  <h3 class="mdc-typography--subtitle1">Permanent</h3>
                </a>
              </div>
              <div>
                <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
              </div>
            </div>
          </div>
        </div>}
        {this.showZainDemo2 &&
        <div>
          <m-top-app-bar
            css={`
              .mdc-top-app-bar {
                z-index: 7;
              }
            `}
            short
            adjust
            heading='Omim Drawer Zain Demo2'
            onNavigation={this.onTopAppBar}
            navigation-icon={{
              view: 48,
              path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
            }}
          />
          <m-drawer
            modal
            show={this.showDrawer}
            heading='Omim'
            sub-heading='drawer-demo-zain'
            onClosed={this.onDrawerClosed}
            onList2={this.onListPermanent}
            onList3={this.onListDismissible}
            onList4={this.onListModal}
            onList7={this.onListZainDemo1}
            onList8={this.onListZainDemo2}
            onList9={this.onListZainDemo3}
            onList10={this.onListZainDemo4}
            onList13={this.onListDemoAll}
            onList16={this.onListAlone}
            lists={[
              {
                divider: true
              }, {
                subheader: 'Official sample'
              }, {
                text: 'Permanent',
                icon: {
                  view: 1024,
                  path: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
                },
                href: '#/Permanent'
              }, {
                text: 'Dismissible',
                icon: {
                  view: 1024,
                  path: 'M879.5 470.4c-.3-27-.4-54.2-.5-81.3h-80.8c-.3 27-.5 54.1-.7 81.3-27.2.1-54.2.3-81.2.6v80.9c27 .3 54.2.5 81.2.8.3 27 .3 54.1.5 81.1h80.9c.1-27 .3-54.1.5-81.3 27.2-.3 54.2-.4 81.2-.7v-80.9c-26.9-.2-54.1-.2-81.1-.5zm-530 .4c-.1 32.3 0 64.7.1 97 54.2 1.8 108.5 1 162.7 1.8-23.9 120.3-187.4 159.3-273.9 80.7-89-68.9-84.8-220 7.7-284 64.7-51.6 156.6-38.9 221.3 5.8 25.4-23.5 49.2-48.7 72.1-74.7-53.8-42.9-119.8-73.5-190-70.3-146.6-4.9-281.3 123.5-283.7 270.2-9.4 119.9 69.4 237.4 180.6 279.8 110.8 42.7 252.9 13.6 323.7-86 46.7-62.9 56.8-143.9 51.3-220-90.7-.7-181.3-.6-271.9-.3z',
                },
                href: '#/Dismissible'
              }, {
                text: 'Modal',
                icon: {
                  view: 1024,
                  path: 'M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z',
                },
                href: '#/Modal'
              }, {
                divider: true
              }, {
                subheader: 'ZainChen sample'
              }, {
                text: 'ZainDemo1',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/ZainDemo1'
              }, {
                focus: true,
                text: 'ZainDemo2',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/ZainDemo2'
              }, {
                text: 'ZainDemo3',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/ZainDemo3'
              }, {
                text: 'ZainDemo4',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/ZainDemo4'
              }, {
                divider: true
              }, {
                subheader: 'All sample'
              }, {
                text: 'DemoAll',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/DemoAll'
              }, {
                divider: true
              }, {
                subheader: 'Alone sample'
              }, {
                text: 'Alone',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/Alone'
              }
            ]}
          ></m-drawer>
          <div class='demos-display'>
            <div class="drawer-demo">
              <div>
                <a href="#/component/drawer/permanent" target="_blank">
                  <h3 class="mdc-typography--subtitle1">Permanent</h3>
                </a>
              </div>
              <div>
                <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
              </div>
            </div>
            <div class="drawer-demo">
              <div>
                <a href="#/component/drawer/permanent" target="_blank">
                  <h3 class="mdc-typography--subtitle1">Permanent</h3>
                </a>
              </div>
              <div>
                <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
              </div>
            </div>
            <div class="drawer-demo">
              <div>
                <a href="#/component/drawer/permanent" target="_blank">
                  <h3 class="mdc-typography--subtitle1">Permanent</h3>
                </a>
              </div>
              <div>
                <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
              </div>
            </div>
          </div>
        </div>}
        {this.showZainDemo3 &&
        <div>
          {this.scrollTarget &&
          <m-top-app-bar
            css={`
              .mdc-top-app-bar {
                z-index: 7;
              }
            `}
            fixed
            dense
            heading='Omim Drawer Zain Demo3'
            scroll-target={this.scrollTarget}
          />}
          <m-drawer
            css={`
              .mdc-drawer {
                padding-top: ${this.topAppBarHeight};
                box-shadow: 3px 0 10px #ccc;
              }
            `}
            frame
            show={this.showDrawer}
            heading='Omim'
            sub-heading='drawer-demo-zain'
            onClosed={this.onDrawerClosed}
            onList2={this.onListPermanent}
            onList3={this.onListDismissible}
            onList4={this.onListModal}
            onList7={this.onListZainDemo1}
            onList8={this.onListZainDemo2}
            onList9={this.onListZainDemo3}
            onList10={this.onListZainDemo4}
            onList13={this.onListDemoAll}
            onList16={this.onListAlone}
            lists={[
              {
                divider: true
              }, {
                subheader: 'Official sample'
              }, {
                text: 'Permanent',
                icon: {
                  view: 1024,
                  path: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
                },
                href: '#/Permanent'
              }, {
                text: 'Dismissible',
                icon: {
                  view: 1024,
                  path: 'M879.5 470.4c-.3-27-.4-54.2-.5-81.3h-80.8c-.3 27-.5 54.1-.7 81.3-27.2.1-54.2.3-81.2.6v80.9c27 .3 54.2.5 81.2.8.3 27 .3 54.1.5 81.1h80.9c.1-27 .3-54.1.5-81.3 27.2-.3 54.2-.4 81.2-.7v-80.9c-26.9-.2-54.1-.2-81.1-.5zm-530 .4c-.1 32.3 0 64.7.1 97 54.2 1.8 108.5 1 162.7 1.8-23.9 120.3-187.4 159.3-273.9 80.7-89-68.9-84.8-220 7.7-284 64.7-51.6 156.6-38.9 221.3 5.8 25.4-23.5 49.2-48.7 72.1-74.7-53.8-42.9-119.8-73.5-190-70.3-146.6-4.9-281.3 123.5-283.7 270.2-9.4 119.9 69.4 237.4 180.6 279.8 110.8 42.7 252.9 13.6 323.7-86 46.7-62.9 56.8-143.9 51.3-220-90.7-.7-181.3-.6-271.9-.3z',
                },
                href: '#/Dismissible'
              }, {
                text: 'Modal',
                icon: {
                  view: 1024,
                  path: 'M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z',
                },
                href: '#/Modal'
              }, {
                divider: true
              }, {
                subheader: 'ZainChen sample'
              }, {
                text: 'ZainDemo1',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/ZainDemo1'
              }, {
                text: 'ZainDemo2',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/ZainDemo2'
              }, {
                focus: true,
                text: 'ZainDemo3',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/ZainDemo3'
              }, {
                text: 'ZainDemo4',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/ZainDemo4'
              }, {
                divider: true
              }, {
                subheader: 'All sample'
              }, {
                text: 'DemoAll',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/DemoAll'
              }, {
                divider: true
              }, {
                subheader: 'Alone sample'
              }, {
                text: 'Alone',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/Alone'
              }
            ]}
          >
            <div slot='m-drawer-content'>
              <div style={`height:${this.topAppBarHeight};`}></div>
              <div class='demos-display'>
                <div class="drawer-demo">
                  <div>
                    <a href="#/component/drawer/permanent" target="_blank">
                      <h3 class="mdc-typography--subtitle1">Permanent</h3>
                    </a>
                  </div>
                  <div>
                    <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                  </div>
                </div>
                <div class="drawer-demo">
                  <div>
                    <a href="#/component/drawer/permanent" target="_blank">
                      <h3 class="mdc-typography--subtitle1">Permanent</h3>
                    </a>
                  </div>
                  <div>
                    <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                  </div>
                </div>
                <div class="drawer-demo">
                  <div>
                    <a href="#/component/drawer/permanent" target="_blank">
                      <h3 class="mdc-typography--subtitle1">Permanent</h3>
                    </a>
                  </div>
                  <div>
                    <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </m-drawer>
        </div>}
        {this.showZainDemo4 &&
        <div>
          {this.scrollTarget &&
          <m-top-app-bar
            css={`
              .mdc-top-app-bar {
                z-index: 7;
              }
            `}
            fixed
            dense
            heading='Omim Drawer Zain Demo4'
            scroll-target={this.scrollTarget}
            onNavigation={this.onTopAppBar}
            navigation-icon={{
              view: 48,
              path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
            }}
          />}
          <m-drawer
            css={`
              .mdc-drawer {
                padding-top: ${this.topAppBarHeight};
                box-shadow: 3px 0 10px #ccc;
              }
            `}
            frame
            dismissible
            dismissible-smooth
            show={this.showDrawer}
            heading='Omim'
            sub-heading='drawer-demo-zain'
            onClosed={this.onDrawerClosed}
            onList2={this.onListPermanent}
            onList3={this.onListDismissible}
            onList4={this.onListModal}
            onList7={this.onListZainDemo1}
            onList8={this.onListZainDemo2}
            onList9={this.onListZainDemo3}
            onList10={this.onListZainDemo4}
            onList13={this.onListDemoAll}
            onList16={this.onListAlone}
            lists={[
              {
                divider: true
              }, {
                subheader: 'Official sample'
              }, {
                text: 'Permanent',
                icon: {
                  view: 1024,
                  path: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
                },
                href: '#/Permanent'
              }, {
                text: 'Dismissible',
                icon: {
                  view: 1024,
                  path: 'M879.5 470.4c-.3-27-.4-54.2-.5-81.3h-80.8c-.3 27-.5 54.1-.7 81.3-27.2.1-54.2.3-81.2.6v80.9c27 .3 54.2.5 81.2.8.3 27 .3 54.1.5 81.1h80.9c.1-27 .3-54.1.5-81.3 27.2-.3 54.2-.4 81.2-.7v-80.9c-26.9-.2-54.1-.2-81.1-.5zm-530 .4c-.1 32.3 0 64.7.1 97 54.2 1.8 108.5 1 162.7 1.8-23.9 120.3-187.4 159.3-273.9 80.7-89-68.9-84.8-220 7.7-284 64.7-51.6 156.6-38.9 221.3 5.8 25.4-23.5 49.2-48.7 72.1-74.7-53.8-42.9-119.8-73.5-190-70.3-146.6-4.9-281.3 123.5-283.7 270.2-9.4 119.9 69.4 237.4 180.6 279.8 110.8 42.7 252.9 13.6 323.7-86 46.7-62.9 56.8-143.9 51.3-220-90.7-.7-181.3-.6-271.9-.3z',
                },
                href: '#/Dismissible'
              }, {
                text: 'Modal',
                icon: {
                  view: 1024,
                  path: 'M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z',
                },
                href: '#/Modal'
              }, {
                divider: true
              }, {
                subheader: 'ZainChen sample'
              }, {
                text: 'ZainDemo1',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/ZainDemo1'
              }, {
                text: 'ZainDemo2',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/ZainDemo2'
              }, {
                text: 'ZainDemo3',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/ZainDemo3'
              }, {
                focus: true,
                text: 'ZainDemo4',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/ZainDemo4'
              }, {
                divider: true
              }, {
                subheader: 'All sample'
              }, {
                text: 'DemoAll',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/DemoAll'
              }, {
                divider: true
              }, {
                subheader: 'Alone sample'
              }, {
                text: 'Alone',
                icon: {
                  view: 48,
                  path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                },
                href: '#/Alone'
              }
            ]}
          >
            <div slot='m-drawer-content'>
              <div style={`height:${this.topAppBarHeight};`}></div>
              <div class='demos-display'>
                <div class="drawer-demo">
                  <div>
                    <a href="#/component/drawer/permanent" target="_blank">
                      <h3 class="mdc-typography--subtitle1">Permanent</h3>
                    </a>
                  </div>
                  <div>
                    <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                  </div>
                </div>
                <div class="drawer-demo">
                  <div>
                    <a href="#/component/drawer/permanent" target="_blank">
                      <h3 class="mdc-typography--subtitle1">Permanent</h3>
                    </a>
                  </div>
                  <div>
                    <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                  </div>
                </div>
                <div class="drawer-demo">
                  <div>
                    <a href="#/component/drawer/permanent" target="_blank">
                      <h3 class="mdc-typography--subtitle1">Permanent</h3>
                    </a>
                  </div>
                  <div>
                    <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </m-drawer>
        </div>}
        {this.showDemoAll &&
        <m-drawer
          frame
          modal
          show={this.showDrawer}
          heading='Omim'
          sub-heading='drawer-demo-all'
          onClosed={this.onDrawerClosed}
          onList2={this.onListPermanent}
          onList3={this.onListDismissible}
          onList4={this.onListModal}
          onList7={this.onListZainDemo1}
          onList8={this.onListZainDemo2}
          onList9={this.onListZainDemo3}
          onList10={this.onListZainDemo4}
          onList13={this.onListDemoAll}
          onList16={this.onListAlone}
          lists={[
            {
              divider: true
            }, {
              subheader: 'Official sample'
            }, {
              text: 'Permanent',
              icon: {
                view: 1024,
                path: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
              },
              href: '#/Permanent'
            }, {
              text: 'Dismissible',
              icon: {
                view: 1024,
                path: 'M879.5 470.4c-.3-27-.4-54.2-.5-81.3h-80.8c-.3 27-.5 54.1-.7 81.3-27.2.1-54.2.3-81.2.6v80.9c27 .3 54.2.5 81.2.8.3 27 .3 54.1.5 81.1h80.9c.1-27 .3-54.1.5-81.3 27.2-.3 54.2-.4 81.2-.7v-80.9c-26.9-.2-54.1-.2-81.1-.5zm-530 .4c-.1 32.3 0 64.7.1 97 54.2 1.8 108.5 1 162.7 1.8-23.9 120.3-187.4 159.3-273.9 80.7-89-68.9-84.8-220 7.7-284 64.7-51.6 156.6-38.9 221.3 5.8 25.4-23.5 49.2-48.7 72.1-74.7-53.8-42.9-119.8-73.5-190-70.3-146.6-4.9-281.3 123.5-283.7 270.2-9.4 119.9 69.4 237.4 180.6 279.8 110.8 42.7 252.9 13.6 323.7-86 46.7-62.9 56.8-143.9 51.3-220-90.7-.7-181.3-.6-271.9-.3z',
              },
              href: '#/Dismissible'
            }, {
              text: 'Modal',
              icon: {
                view: 1024,
                path: 'M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z',
              },
              href: '#/Modal'
            }, {
              divider: true
            }, {
              subheader: 'ZainChen sample'
            }, {
              text: 'ZainDemo1',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo1'
            }, {
              text: 'ZainDemo2',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo2'
            }, {
              text: 'ZainDemo3',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo3'
            }, {
              text: 'ZainDemo4',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo4'
            }, {
              divider: true
            }, {
              subheader: 'All sample'
            }, {
              focus: true,
              text: 'DemoAll',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/DemoAll'
            }, {
              divider: true
            }, {
              subheader: 'Alone sample'
            }, {
              text: 'Alone',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/Alone'
            }
          ]}
        >
          <div slot='m-drawer-header'>
            {this.scrollTarget &&
            <m-top-app-bar
              css={`
                .mdc-top-app-bar {
                  position: absolute;
                }
              `}
              short
              scroll-target={this.scrollTarget}
              heading='Omim Drawer Demo All'
              onNavigation={this.onTopAppBar}
              navigation-icon={{
                view: 48,
                path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
              }}
            />}
          </div>
          <div slot='m-drawer-content'>
            <div style={`height:${this.topAppBarHeight}`}></div>
            <div class='demos-display'>
              <div class="drawer-demo">
                <div>
                  <a href="#/component/drawer/permanent" target="_blank">
                    <h3 class="mdc-typography--subtitle1">Permanent</h3>
                  </a>
                </div>
                <div>
                  <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                </div>
              </div>
              <div class="drawer-demo">
                <div>
                  <a href="#/component/drawer/permanent" target="_blank">
                    <h3 class="mdc-typography--subtitle1">Permanent</h3>
                  </a>
                </div>
                <div>
                  <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                </div>
              </div>
              <div class="drawer-demo">
                <div>
                  <a href="#/component/drawer/permanent" target="_blank">
                    <h3 class="mdc-typography--subtitle1">Permanent</h3>
                  </a>
                </div>
                <div>
                  <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                </div>
              </div>
            </div>
          </div>
        </m-drawer>}
        {this.showAlone &&
        <m-drawer
          frame
          modal
          show={this.showDrawer}
          heading='Omim'
          sub-heading='drawer-demo-Alone'
          onClosed={this.onDrawerClosed}
          onList2={this.onListPermanent}
          onList3={this.onListDismissible}
          onList4={this.onListModal}
          onList7={this.onListZainDemo1}
          onList8={this.onListZainDemo2}
          onList9={this.onListZainDemo3}
          onList10={this.onListZainDemo4}
          onList13={this.onListDemoAll}
          onList16={this.onListAlone}
          lists={[
            {
              divider: true
            }, {
              subheader: 'Official sample'
            }, {
              text: 'Permanent',
              icon: {
                view: 1024,
                path: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
              },
              href: '#/Permanent'
            }, {
              text: 'Dismissible',
              icon: {
                view: 1024,
                path: 'M879.5 470.4c-.3-27-.4-54.2-.5-81.3h-80.8c-.3 27-.5 54.1-.7 81.3-27.2.1-54.2.3-81.2.6v80.9c27 .3 54.2.5 81.2.8.3 27 .3 54.1.5 81.1h80.9c.1-27 .3-54.1.5-81.3 27.2-.3 54.2-.4 81.2-.7v-80.9c-26.9-.2-54.1-.2-81.1-.5zm-530 .4c-.1 32.3 0 64.7.1 97 54.2 1.8 108.5 1 162.7 1.8-23.9 120.3-187.4 159.3-273.9 80.7-89-68.9-84.8-220 7.7-284 64.7-51.6 156.6-38.9 221.3 5.8 25.4-23.5 49.2-48.7 72.1-74.7-53.8-42.9-119.8-73.5-190-70.3-146.6-4.9-281.3 123.5-283.7 270.2-9.4 119.9 69.4 237.4 180.6 279.8 110.8 42.7 252.9 13.6 323.7-86 46.7-62.9 56.8-143.9 51.3-220-90.7-.7-181.3-.6-271.9-.3z',
              },
              href: '#/Dismissible'
            }, {
              text: 'Modal',
              icon: {
                view: 1024,
                path: 'M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z',
              },
              href: '#/Modal'
            }, {
              divider: true
            }, {
              subheader: 'ZainChen sample'
            }, {
              text: 'ZainDemo1',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo1'
            }, {
              text: 'ZainDemo2',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo2'
            }, {
              text: 'ZainDemo3',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo3'
            }, {
              text: 'ZainDemo4',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/ZainDemo4'
            }, {
              divider: true
            }, {
              subheader: 'All sample'
            }, {
              text: 'DemoAll',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/DemoAll'
            }, {
              divider: true
            }, {
              subheader: 'Alone sample'
            }, {
              focus: true,
              text: 'Alone',
              icon: {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
              },
              href: '#/Alone'
            }
          ]}
        >
          <div slot='m-drawer-header'>
            {this.scrollTarget &&
            <m-top-app-bar
              css={`
                .mdc-top-app-bar {
                  position: absolute;
                }
              `}
              short
              scroll-target={this.scrollTarget}
              heading='Omim Drawer Alone'
              onNavigation={this.onTopAppBar}
              navigation-icon={{
                view: 48,
                path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
              }}
            />}
          </div>
          <div slot='m-drawer-content'>
            <div style={`height:${this.topAppBarHeight}`}></div>
            <div class='demos-display'>
              <div class="drawer-demo">
                <div>
                  <a href="#/component/drawer/permanent" target="_blank">
                    <h3 class="mdc-typography--subtitle1">Permanent</h3>
                  </a>
                </div>
                <div>
                  <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                </div>
              </div>
              <div class="drawer-demo">
                <div>
                  <a href="#/component/drawer/permanent" target="_blank">
                    <h3 class="mdc-typography--subtitle1">Permanent</h3>
                  </a>
                </div>
                <div>
                  <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                </div>
              </div>
              <div class="drawer-demo">
                <div>
                  <a href="#/component/drawer/permanent" target="_blank">
                    <h3 class="mdc-typography--subtitle1">Permanent</h3>
                  </a>
                </div>
                <div>
                  <iframe class="drawer-iframe" title="Permanent" src="https://material-components.github.io/material-components-web-catalog/?bust#/component/drawer/permanent"></iframe>
                </div>
              </div>
            </div>
          </div>
        </m-drawer>}
        
      </div>
    )
  }
})

render(<my-app />, 'body')

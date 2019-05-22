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
    .demos-content-one {
      height: 130px;
      // background: #EEE;
    }
    .demos-content-two {
      height: 80px;
      // background: #EEE;
    }
    .demos-display {
      display: flex;
      flex-wrap: wrap;
      min-height: 200px;
    }
    .demo {
      display: inline-block;
      flex: 1 1 45%;
      justify-content: space-around;
      min-height: 200px;
      // min-width: 400px;
      padding: 15px;
    }
    .iframe {
      width: 100%;
      height: 200px;
    }
  `

  showDemoStart = false

  onDemoStart = e => {
    this.showDemoStart = !this.showDemoStart
    this.update()
  }
  
  titleOmi = ' (Omi)'
  
  onMenu = e => {
    this.titleOmi = this.titleOmi == '' ? ' (Omi)' : ''
    this.update()
  }

  render() {
    return(
      <div>
        {!this.showDemoStart &&
        <div id='demo-show-button'>
          <m-top-app-bar
            adjust
            heading='Click to show menus'
            onNavigation={this.onDemoStart}
            //Support a lot of methods
            //支持非常多种写法
            navigation-element={<img style='width:50px' src='../../assets/pv4.jpeg'></img>}
            // navigation='wifi'
            // navigation={'favorite'}
            // navigation={['favorite', 'favorite_border']}
            // navigation={{
            //   text: 'omim',
            //   // mIconButton: {
            //   //   icon: 'wifi',
            //   //   icons: ['favorite', 'favorite_border']
            //   // },
            //   mIcon: {
            //     view: 24,
            //     path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z'
            //   }
            // }}
            // onAction0={this.onDemoStart}
            //Support a lot of methods
            //支持非常多种写法
            action-elements={[
              <img onClick={this.onDemoStart} style='width:50px' src='../../assets/pv4.jpeg'></img>,
              <h1 style='color:red'>zain</h1>
            ]}
            // action-items='wifi'
            // action-items={'wifi'}
            // action-items={['wifi', 'favorite', 'favorite_border']}
            // action-items={[['favorite', 'wifi'], ['favorite', 'favorite_border'], 'wifi', 'favorite_border']}
            // action-items={[
            //   {
            //     text: 'omim',
            //     mIconButton: {
            //       // icon: 'wifi',
            //       icons: ['favorite', 'favorite_border']
            //     },
            //     mIcon: {
            //       view: 24,
            //       path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z'
            //     }
            //   }
            // ]}
          >
            {/* <svg viewBox="0 0 24 24" class="" width="2em" height="2em" aria-hidden="true"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></svg>
            <svg viewBox="0 0 1024 1024" class="" width="2em" height="2em" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" fill="#F98080"></path><path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" fill="#F95050"></path></svg> */}
          </m-top-app-bar>
        </div>}
        {this.showDemoStart &&
        <div id='demo-start'>
          <m-top-app-bar
            adjust
            heading={'Standard' + this.titleOmi}
            onNavigation={this.onMenu}
            navigation='favorite_border'
            onAction0={this.onMenu}
            onAction1={this.onMenu}
            onAction2={this.onMenu}
            action-items={[
              ['favorite', 'wifi'],
              { text: 'Omi' },
              'favorite'
            ]}
          />
          <div style='height:15px;'></div>
          <m-top-app-bar
            adjust
            fixed
            heading={'Fixed' + this.titleOmi}
            // onNavigation={this.onMenu}
            navigation={{
              mIcon: {
                view: 48,
                path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z',
                onClick: this.onMenu
              }
            }}
            onAction0={this.onMenu}
            onAction1={this.onMenu}
            onAction2={this.onMenu}
            onAction3={this.onMenu}
            action-items={[
              {
                mIconButton: {
                  icons: ['favorite', 'favorite_border']
                }
              },
              'favorite',
              'wifi',
              'wifi'
            ]}
          />
          <div style='height:15px;'></div>
          <m-top-app-bar
            adjust
            dense
            fixed
            heading={'Dense + Fixed' + this.titleOmi}
            onNavigation={this.onMenu}
            navigation='favorite'
            onAction0={this.onMenu}
            onAction1={this.onMenu}
            onAction2={this.onMenu}
            onAction3={this.onMenu}
            action-items={[['favorite', 'wifi'], ['favorite', 'favorite_border'], 'wifi', 'favorite_border']}
          />
          <div style='height:15px;'></div>
          <m-top-app-bar
            adjust
            prominent
            fixed
            heading={'Prominent + Fixed' + this.titleOmi}
            onNavigation={this.onMenu}
            navigation={{
              mIcon: {
                view: 48,
                path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
              }
            }}
            onAction0={this.onMenu}
            action-items={[
              {
                mIcon: {
                  view: 48,
                  path: 'M40 10H21.76L20 4H8C5.8 4 4 5.8 4 8v26c0 2.2 1.8 4 4 4h14l2 6h16c2.2 0 4-1.8 4-4V14c0-2.2-1.8-4-4-4zM14.33 29.17c-4.51 0-8.17-3.67-8.17-8.17s3.67-8.17 8.17-8.17c2.08 0 3.97.74 5.47 2.13l.13.13-2.44 2.36-.12-.11c-.57-.54-1.56-1.17-3.04-1.17-2.62 0-4.75 2.17-4.75 4.84s2.13 4.84 4.75 4.84c2.74 0 3.93-1.75 4.25-2.92h-4.42v-3.1h7.9l.03.14c.08.42.11.79.11 1.21-.01 4.71-3.24 7.99-7.87 7.99zm12.07-3.4c.67 1.2 1.48 2.35 2.38 3.4l-1.07 1.06-1.31-4.46zm1.54-1.54h-1.98l-.61-2.08h7.99s-.68 2.63-3.12 5.47c-1.07-1.23-1.81-2.43-2.28-3.39zM42 40c0 1.1-.9 2-2 2H26l4-4-1.63-5.53 1.84-1.84L35.58 36l1.46-1.46-5.41-5.37c1.8-2.07 3.2-4.5 3.83-7.01H38v-2.08h-7.27V18h-2.08v2.08h-3.92L22.35 12H40c1.1 0 2 .9 2 2v26z'
                }
              }
            ]}
          />
          <div style='height:15px;'></div>
          <m-top-app-bar
            adjust
            prominent
            dense
            fixed
            heading={'Prominent + Dense + Fixed' + this.titleOmi}
            onNavigation={this.onMenu}
            navigation={{
              mIcon: {
                view: 48,
                path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
              }
            }}
            onAction0={this.onMenu}
            action-items='favorite'
          />
          <div style='height:15px;'></div>
          <m-top-app-bar
            adjust
            fixed
            heading='Click to hide menus'
            onNavigation={this.onDemoStart}
            navigation={{
              mIcon: {
                view: 24,
                path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
              }
            }}
            onAction0={this.onDemoStart}
            onAction1={this.onDemoStart}
            onAction2={this.onDemoStart}
            onAction3={this.onDemoStart}
            onAction4={this.onDemoStart}
            onAction5={this.onDemoStart}
            onAction6={this.onDemoStart}
            onAction7={this.onDemoStart}
            action-items={[
              {
                mIcon: {
                  view: 24,
                  path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
                }
              }, {
                mIcon: {
                  view: 24,
                  path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
                }
              }, {
                mIcon: {
                  view: 24,
                  path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
                }
              }, {
                mIcon: {
                  view: 24,
                  path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
                }
              }, {
                mIcon: {
                  view: 24,
                  path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
                }
              }, {
                mIcon: {
                  view: 24,
                  path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
                }
              }, {
                mIcon: {
                  view: 24,
                  path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
                }
              }, {
                mIcon: {
                  view: 24,
                  path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
                }
              }
            ]}
          />
          <div style='height:15px;'></div>
          <m-top-app-bar
            css={`
              .mdc-top-app-bar { 
                position: static;
              }
            `}
            adjust
            shortCollapsed
            heading={'Short - Always Collapsed' + this.titleOmi}
            onNavigation={this.onMenu}
            navigation={{
              mIcon: {
                view: 48,
                path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
              }
            }}
            onAction0={this.onMenu}
            action-items='favorite'
          />
          <m-top-app-bar
            css={`
              .mdc-top-app-bar { 
                position: static;
                margin-top: -40px;
              }
            `}
            adjust
            short
            heading={'Short' + this.titleOmi}
            onNavigation={this.onMenu}
            navigation={{
              mIcon: {
                view: 48,
                path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
              }
            }}
            onAction0={this.onMenu}
            action-items='favorite'
          />
          <m-top-app-bar
            css={`
              .mdc-top-app-bar { 
                position: static;
                margin-top: -40px;
              }
            `}
            adjust
            short
            dense
            heading={'Short + Dense' + this.titleOmi}
            onNavigation={this.onMenu}
            navigation={{
              mIcon: {
                view: 48,
                path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
              }
            }}
            onAction0={this.onMenu}
            action-items='favorite'
          />
        </div>}
        <div id='demo-build' class='demos-display'>
          <div class='demo'>
            <div>
              <a href='./index-standard.script.html' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Standard</h3>
              </a>
            </div>
            <div>
              <div>
                <iframe class='iframe' src='./index-standard.script.html'></iframe>
              </div>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='./index-fixed.script.html' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Fixed</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src='./index-fixed.script.html'></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='./index-dense.script.html' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Dense</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src='./index-dense.script.html'></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='./index-dense-fixed.script.html' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Dense + Fixed</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src='./index-dense-fixed.script.html'></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='./index-prominent.script.html' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Prominent</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src='./index-prominent.script.html'></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='./index-prominent-dense.script.html' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Prominent + Dense</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src='./index-prominent-dense.script.html'></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='./index-short.script.html' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Short</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src='./index-short.script.html'></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='./index-short-collapsed.script.html' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Short - Always Collapsed</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src='./index-short-collapsed.script.html'></iframe>
            </div>
          </div>
          <div style='width:100%;height:500px;background:#EEE;'></div>
        </div>
      </div>
    )
  }
})
  
render(<my-app />, 'body')
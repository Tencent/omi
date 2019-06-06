import '../../src/top-app-bar/index.tsx'
import '../../src/icon-button/index.tsx'
import '../../src/avatar/index.tsx'
import '../../src/badge/index.tsx'
import '../../src/text-field/index.tsx'
import '../../src/tab/index.tsx'

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
      padding: 20px;
    }
    .iframe {
      width: 100%;
      height: 200px;
    }
    .demos-display {
      overflow: scroll;
      height: 1400px;
    }
  `

  showDemoStart = false
  themeColor = '#0072d9'
  searchColor = '#2196f3'
  scrollTarget = null

  onDemoStart = e => {
    console.log(e.detail)
    this.showDemoStart = !this.showDemoStart
    document.body.style.setProperty('--mdc-theme-primary', '#0072d9')
    this.themeColor = '#0072d9'
    this.searchColor = '#2196f3'
    this.update()
  }
  
  titleOmi = ' (Omi)'
  
  onMenu = e => {
    console.log(e.detail)
    this.titleOmi = this.titleOmi == '' ? ' (Omim)' : ''
    document.body.style.setProperty('--mdc-theme-primary', '#018786')
    this.themeColor = '#018786'
    this.searchColor = '#24BFA5'
    this.update()
  }

  onMenuStart = e => {
    console.log(e.detail)
    this.titleOmi = this.titleOmi == '' ? ' (Omim)' : ''
    document.body.style.setProperty('--mdc-theme-primary', '#018786')
    this.themeColor = '#018786'
    this.searchColor = '#24BFA5'
    if(e.detail.index == '2') {
      this.scrollTarget = this.scrollTarget === null ? this.shadowRoot.querySelector('#demo-build') : null
    }
    this.update()
  }

  render() {
    return(
      <div style='background:#FFF'>
        {!this.showDemoStart &&
        <div id='demo-show-button'>
          <m-top-app-bar
            heading={'Click to show menus' + this.titleOmi}
            scroll-target={this.scrollTarget}
            onNavigation={this.onDemoStart}
            onAction={this.onMenuStart}>
            <navigation>
              <m-avatar icon="person" backgroundColor='#FFF' color={this.themeColor} />
            </navigation>
            <actionitem>
              <m-badge css={`.badge{background-color: #FFF; color: ${this.themeColor};}`} content="99">
                <m-icon path="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" color="#FFF" />
              </m-badge>
            </actionitem>
            <actionitem>
              <m-icon
                rotate
                view={24}
                path='M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z'>
              </m-icon>
            </actionitem>
            <actionitem>
              <m-icon-button title='Switch scroll target' icons={['view_carousel', 'view_array']}></m-icon-button>
            </actionitem>
          </m-top-app-bar>
          <m-top-app-bar bottom>
            <div style='width:100%'>
              <m-tab css={`.mdc-tab-bar {background: #EEE;}`} default-active='speed' align="end" stacked>
                <item label="Recents" value="speed" icon="access_time"></item>
                <item label="Nearby" value="fire" icon="near_me"></item>
                <item label="Favorites" value="lol" icon="favorite"></item>
              </m-tab>
            </div>
          </m-top-app-bar>
        </div>}
        {this.showDemoStart &&
        <div id='demo-start'>
          <m-top-app-bar
            adjust
            heading={'Standard' + this.titleOmi}
            navigations={['menu']}
            actionItems={['favorite_border', {text: 'Omi'},'wifi']}
            onNavigation={this.onMenu}
            onAction={this.onMenu}
          ></m-top-app-bar>
          <div style='height:15px;'></div>
          <m-top-app-bar
            adjust
            fixed
            heading={'Fixed' + this.titleOmi}
            navigations={['menu', {text: 'Omim'}, 'favorite']}
            onNavigation={this.onMenu}
            onAction={this.onMenu}>
            <div>
              <m-text-field
                outlined
                label='search...'
                paths={[{
                  color: '#FFF',
                  path: 'M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z'
                }]}
                css={`
                  .mdc-text-field {
                    margin-top: 13px;
                    margin-right: 15px;
                    height: 38px;
                  }
                  .mdc-text-field .mdc-text-field__input {
                    caret-color: #FFF;
                  }
                  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading, .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch, .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
                    border-color: rgba(0, 0, 0, 0) !important;
                    background: ${this.searchColor};
                  }
                  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {
                    color: #FFF;
                  }
                  .mdc-notched-outline {
                    overflow: hidden;
                  }
                  .mdc-notched-outline__trailing {
                    border-radius: 0 6px 6px 0 !important;
                  }
                  .mdc-notched-outline__leading {
                    border-radius: 6px 0 0 6px!important;
                    width: 6px!important;
                  }
                  .mdc-text-field--with-leading-icon .icon {
                    z-index: 1;
                    top: 3px;
                  }
                  .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label {
                    top: 9px;
                    left: 48px;
                    color: #FFF;
                  }
                  .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-flgatine-label--float-above {
                    display: none;
                  }
                `}
              ></m-text-field>
            </div>
          </m-top-app-bar>
          <div style='height:15px;'></div>
          <m-top-app-bar
            adjust
            dense
            fixed
            heading={'Dense + Fixed' + this.titleOmi}
            navigations={['menu']}
            onNavigation={this.onMenu}
            onAction={this.onMenu}>
            <actionitem>
              <m-icon
                rotate
                paths={[{
                  color: '#FFF',
                  path: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                },
                {
                  color: '#FFF',
                  path: 'M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z'
                }]}>
              </m-icon>
            </actionitem>
          </m-top-app-bar>
          <div style='height:15px;'></div>
          <m-top-app-bar
            adjust
            prominent
            fixed
            heading={'Prominent + Fixed' + this.titleOmi}
            navigations={['menu', 'favorite', 'favorite']}
            actionItems={['favorite_border', 'favorite_border', 'favorite_border']}
            onAction={this.onMenu}
            onNavigation={this.onMenu}
          />
          <div style='height:15px;'></div>
          <m-top-app-bar
            adjust
            prominent
            dense
            fixed
            heading={'Prominent + Dense + Fixed' + this.titleOmi}
            navigations={['menu']}
            actionItems={['favorite_border']}
            onNavigation={this.onMenu}
            onAction={this.onMenu}
          />
          <div style='height:15px;'></div>
          <m-top-app-bar
            adjust
            fixed
            heading='Click to hide menus'
            navigations={['cancel', 'cancel', 'cancel']}
            actionItems={['cancel', 'cancel', 'cancel']}
            onNavigation={this.onDemoStart}
            onAction={this.onDemoStart}
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
            onAction={this.onMenu}
            navigations={['menu']}
            actionItems={['favorite_border']}
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
            onAction={this.onMenu}
            navigations={['menu']}
            actionItems={['favorite_border']}
          />
          <m-top-app-bar
            css={`
              .mdc-top-app-bar { 
                position: static;
                margin-top: -40px;
              }
            `}
            // adjust
            short
            dense
            heading={'Short + Dense' + this.titleOmi}
            onNavigation={this.onMenu}
            onAction={this.onMenu}
            navigations={['menu']}
            actionItems={['favorite_border']}
          />
        </div>}
        <div id='demo-build' class='demos-display'>
          <div style='width:100%;height:64px;'></div>
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
          <div style='width:100%;height:500px;'></div>
        </div>
      </div>
    )
  }
})
  
render(<my-app />, 'body')
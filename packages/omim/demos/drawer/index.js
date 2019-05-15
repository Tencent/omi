import '../../src/drawer/index.tsx'
import '../../src/top-app-bar/index.tsx'

import { render, WeElement, define, h } from 'omi'

define('my-app', class extends WeElement {

  showDrawer = false

  target = null //document.getElementsByClassName('m-drawer-content')

  install() {
    
  }

  installed() {
    const zain = this.shadowRoot.childNodes[0].childNodes[0]._host.getElementsByClassName('m-drawer-content')[0]
    this.target = zain
    console.log(this.target)
    console.log('ed')
    this.update()
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

  onList = (evt) => {
    console.log(evt)
  }

  render(props, data) {
    return(
      <div>
        <m-drawer
          frame
          dismissible
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
              href: '#',
              target: true
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
            {this.target &&
            <m-top-app-bar
              css={`
                .mdc-top-app-bar {
                  position: absolute;
                }
              `}
              scrollTarget={this.target}
              heading='Omim'
              onNavigation={this.onTopAppBar}
              navigation-icon={{
                view: 48,
                path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z',
                onClick: this.onMenu
              }}
            />}
          </div>
          <div slot='m-drawer-content'>
            <br/><br/><br/>
            <h2><a id="user-content-why-omi" class="anchor" aria-hidden="true" href="#why-omi"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why Omi?</h2>
            <ul>
              <li>Cross framework(react, vue, angular) custom elements by omi</li>
              <li>One framework. Mobile &amp; desktop &amp; mini program</li>
              <li><a href="https://tencent.github.io/omi/packages/omi/examples/perfs/" rel="nofollow">Super fast rendering and updating</a></li>
              <li>Tiny size</li>
              <li>Supports TypeScript</li>
              <li>Reactive data-binding</li>
              <li>Having official UI components - <a href="https://tencent.github.io/omi/packages/omiu/examples/build/index.html" rel="nofollow">omiu</a></li>
              <li>Excellent compatibility(IE8+) with <a href="https://github.com/Tencent/omi/tree/master/packages/omio">omio</a></li>
              <li>Supporting both grammars of omi and react with <a href="https://github.com/Tencent/omi/tree/master/packages/reomi">reomi</a></li>
              <li>Real <a href="https://github.com/Tencent/omi/blob/master/tutorial/omi-mvvm.md">MVVM</a> with <a href="https://github.com/Tencent/omi/tree/master/packages/mappingjs">mappingjs</a> strong support</li>
              <li>Enhanced CSS, <a href="https://github.com/Tencent/omi/releases/tag/v4.0.26">rpx unit support</a> base on <strong>750</strong> screen width</li>
              <li>Compliance with browser trend and API design</li>
              <li>Merge <a href="https://developers.google.com/web/fundamentals/web-components/" rel="nofollow"><strong>Web Components</strong></a>, <a href="https://reactjs.org/docs/introducing-jsx.html" rel="nofollow"><strong>JSX</strong></a> and <a href="https://github.com/developit/htm"><strong>HTM</strong></a> into one framework</li>
              <li>Web Components can also be a data-driven view, <strong><code>UI = fn(data)</code></strong>.</li>
              <li>JSX is the best development experience (code intelligent completion and tip) UI Expression with least <a href="https://github.com/facebook/jsx#why-not-template-literals">grammatical noise</a> and it's turing complete(template engine is not, es template string is but grammatical noise is too loud)</li>
              <li>Look at <a href="https://softwareengineering.stackexchange.com/questions/225400/pros-and-cons-of-facebooks-react-vs-web-components-polymer" rel="nofollow">Facebook React vs Web Components</a>，Omi <strong>combines their advantages</strong> and gives developers the <strong>freedom to choose the way they like</strong></li>
              <li><strong>Shadow DOM merges with Virtual DOM</strong>, Omi uses both virtual DOM and real Shadow DOM to make view updates more accurate and faster</li>
              <li><strong>Scoped CSS</strong>'s best solution is <a href="https://developers.google.com/web/fundamentals/web-components/shadowdom" rel="nofollow"><strong>Shadow DOM</strong></a>, the community churning out frameworks and libraries for Scoped CSS (using JS or JSON writing styles such as Radium, jsxstyle, react-style; binding to webpack using generated unique <code>className</code> <code>filename-classname-hash</code>, such as CSS Modules, Vue), are hack technologies; <em>and Shadow DOM Style is the perfect solution</em>.</li>
              <li>The original <strong>Path Updating</strong> <strong>store system</strong>. Proxy-based automatic <strong>accurate</strong> update, <strong>low power consumption</strong>, high degree of freedom, excellent performance, easy integration of <code>requestIdleCallback</code>,It will automatically update UI partially when data is changed</li>
            </ul>
          </div>
        </m-drawer>
      </div>
    )
  }
})

render(<my-app />, 'body')

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
      height: 100px;
      background: #EEE;
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
      min-width: 400px;
      padding: 15px;
    }
    .iframe {
      width: 100%;
      height: 200px;
    }
  `

  render() {
    return(
      <div>
        <m-top-app-bar
          title='Standard'
          navigation-button={{
            text: 'menu',
            view: 48,
            path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
          }}
          action-items={[
            {
              view: 48,
              path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
            }, {
              text: 'action'
            }, {
              view: 48,
              path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
            }
          ]}
        />
        <div class='demos-content-one'></div>
        <m-top-app-bar
          fixed
          title='Fixed'
          navigation-button={{
            text: 'menu'
          }}
          action-items={[
            {
              view: 48,
              path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
            }, {
              view: 48,
              path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
            }, {
              view: 48,
              path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
            }
          ]}
        />
        <div class='demos-content-one'></div>
        <div class='demos-content-one'></div>
        <div class='demos-display'>
          <div class='demo'>
            <div>
              <a href='#' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Standard</h3>
              </a>
            </div>
            <div>
              <div>
                <iframe class='iframe' src=''></iframe>
              </div>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='#' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Fixed</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src=''></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='#' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Dense</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src=''></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='#' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Prominent</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src=''></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='#' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Short</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src=''></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='#' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Short - Always Collapsed</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src=''></iframe>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
})
  
render(<my-app />, 'body')
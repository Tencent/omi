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
      background: #CCC;
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
    .standard {
      width: 100%;
      height: 200px;
    }
  `

  render() {
    return(
      <div>
        <m-top-app-bar></m-top-app-bar>
        <div class='demos-content-one'></div>
        <m-top-app-bar></m-top-app-bar>
        <div class='demos-content-one'></div>
        <div class='demos-content-one'></div>
        <div class='demos-display'>
          <div class='demo'>
            <div>
              <a href="#/component/top-app-bar/standard" target="_blank">
                <h3 class="mdc-typography--subtitle1">Standard</h3>
              </a>
            </div>
            <div>
              <div>
                <iframe class="standard" src=''></iframe>
              </div>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href="#/component/top-app-bar/standard" target="_blank">
                <h3 class="mdc-typography--subtitle1">Standard</h3>
              </a>
            </div>
            <div>
              <iframe class="standard" src=''></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href="#/component/top-app-bar/standard" target="_blank">
                <h3 class="mdc-typography--subtitle1">Standard</h3>
              </a>
            </div>
            <div>
              <iframe class="standard" src=''></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href="#/component/top-app-bar/standard" target="_blank">
                <h3 class="mdc-typography--subtitle1">Standard</h3>
              </a>
            </div>
            <div>
              <iframe class="standard" src=''></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href="#/component/top-app-bar/standard" target="_blank">
                <h3 class="mdc-typography--subtitle1">Standard</h3>
              </a>
            </div>
            <div>
              <iframe class="standard" src=''></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href="#/component/top-app-bar/standard" target="_blank">
                <h3 class="mdc-typography--subtitle1">Standard</h3>
              </a>
            </div>
            <div>
              <iframe class="standard" src=''></iframe>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
})
  
  render(<my-app />, 'body')
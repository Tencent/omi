import '../../src/paper/index.tsx'

import { render, WeElement, define, h } from 'omi'

define('my-app', class extends WeElement {

  css = `
    .m-paper-root {
      margin: 10px;
    }
    h3 {
      margin: 0;
      font-size: 1.5rem;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 400;
      line-height: 1.33;
      letter-spacing: 0em;
    }
    p, span {
      margin: 0;
      font-size: 1rem;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 0.00938em;
    }
    i {
      color: #0072d9;
    }
  `

  paper = new Array()

  _getPaper() {
    this.paper.push({elevation: 0, square: false})
    this.paper.push({elevation: 1, square: true})
    for(let i = 1; i <= 24; i++)
      this.paper.push({elevation: i, square: false})
  }

  render() {
    this._getPaper()
    return(
      <div>
        {this.paper.map((item) => {
          return <m-paper css={this.css} elevation={item.elevation} square={item.square}>
            <h3>This is a sheet of paper.</h3>
            <p>Paper can be used to build surface or other elements for your </p>
            <span>[elevation=<i>{item.elevation}</i>, square=<i>{item.square === true ? 'true' : 'false'}</i>]</span>
          </m-paper>
        })}
      </div>
    )
  }
})

render(<my-app />, 'body')
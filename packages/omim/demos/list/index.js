import { css } from '../../src/typography/index.tsx'
import '../../src/list/index.tsx'
import '../../src/switch/index.tsx'
import '../../src/icon-button/index.tsx'
import '../../src/checkbox/index.tsx'
import '../../src/radio/index.tsx'

import { define, WeElement, render, h } from 'omi'

define('my-app', class extends WeElement {

  static css = css

  onItemClick = (e) => {
    console.log(e)
  }

  render() {
    return <div>

      <m-list
        css={`ul{
        max-width:400px;
        border: 1px solid rgba(0,0,0,.1);
      }`}
        items={['Line item1', 'Line item2', 'Line item3']}

        onItemClick={this.onItemClick}
      ></m-list>

    </div>
  }
})
render(<my-app />, 'body')

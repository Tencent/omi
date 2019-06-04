//window.OmimThemePrimary =  'green'

import '../../src/drawer/index.tsx'
import '../../src/list/index.tsx'

import { render, WeElement, define, h } from 'omi'


define('my-app', class extends WeElement {

  render(props, data) {
    return (
      <div>
        <m-draw>
          <m-list
            singleSelection
            css={`ul{
        max-width:400px;
        border: 1px solid rgba(0,0,0,.1);
      }`}
            items={[{
              text: 'Line item1',
              icon: 'wifi'
            },
            { divider: true },
            {
              text: 'Line item2',
              selected: true,
              icon: 'bluetooth'
            },
            { divider: true },
            {
              text: 'Line item3',
              icon: 'data_usage'
            }]}

            onItemClick={this.onItemClick}
          ></m-list>
        </m-draw>

      </div>
    )
  }
})

render(<my-app />, 'body')

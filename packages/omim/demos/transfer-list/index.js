import css from '../../src/transfer-list/index.tsx'

import { define, WeElement, render, h } from 'omi'

define('my-app', class extends WeElement {

  static css = css + `
  m-list{
    margin-top: 30px;
    display:block;
  }`

  onItemClick = (e) => {
    console.log(e)
  }

  render() {
    return <div>

      <m-transfer-list
        left={[{
          text: 'Line item1'
        },
        {
          text: 'Line item2',
          checked: true
        },
        {
          text: 'Line item3'
        },
        {
          text: 'Line item4'
        }]}

        right={[{
          text: 'Line item5'
        },
        {
          text: 'Line item6'
        },
        {
          text: 'Line item7'
        }]}

        onItemClick={this.onItemClick}
      ></m-transfer-list>


    </div>
  }
})
render(<my-app />, 'body')

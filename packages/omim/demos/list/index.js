import css from '../../src/typography/index.tsx'
import '../../src/list/index.tsx'
import '../../src/switch/index.tsx'
import '../../src/icon-button/index.tsx'
import '../../src/checkbox/index.tsx'
import '../../src/radio/index.tsx'

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


      <m-list
        singleSelection
        css={`ul{
        max-width:400px;
        border: 1px solid rgba(0,0,0,.1);
      }`}
        items={[{
          text: 'Line item1',
          rightIcon: 'wifi'
        },
        { divider: true },
        {
          text: 'Line item2',
          selected: true,
          rightIcon: 'bluetooth'
        },
        { divider: true },
        {
          text: 'Line item3',
          rightIcon: 'data_usage'
        }]}

        onItemClick={this.onItemClick}
      ></m-list>


      <m-list
        singleSelection
        css={`ul{
        max-width:400px;
        border: 1px solid rgba(0,0,0,.1);
      }`}
        items={[{
          text: 'Line item1',
          icon: 'folder',
          rightIcon: 'wifi'
        },
        { divider: true },
        {
          text: 'Line item2',
          selected: true,
          icon: 'folder',
          rightIcon: 'bluetooth'
        },
        { divider: true },
        {
          text: 'Line item3',
          icon: 'folder',
          rightIcon: 'data_usage'
        }]}

        onItemClick={this.onItemClick}
      ></m-list>

      <m-list
        css={`ul{
        max-width:400px;
        border: 1px solid rgba(0,0,0,.1);
      }`}
        items={['Line item1', 'Line item2', 'Line item3']}

        onItemClick={this.onItemClick}
      ></m-list>

      <m-list
        css={`ul{
        max-width:400px;
        border: 1px solid rgba(0,0,0,.1);
      }`}
        items={['Line item1', true, 'Line item2', true, 'Line item3']}

        onItemClick={this.onItemClick}
      ></m-list>


      <m-list
        css={`ul{
        max-width:400px;
        border: 1px solid rgba(0,0,0,.1);
      }`}
        items={[{
          text: 'Line item1',
          secondaryText: 'Secondary Text3'
        },
        {
          text: 'Line item2',
          secondaryText: 'Secondary Text3'
        },
        {
          text: 'Line item3',
          secondaryText: 'Secondary Text3'
        }]}

        onItemClick={this.onItemClick}
      ></m-list>

      <m-list
        css={`ul{
        max-width:400px;
        border: 1px solid rgba(0,0,0,.1);
      }`}
        items={[{
          text: 'Line item1',
          secondaryText: 'Secondary Text3'
        },
        { divider: true },
        {
          text: 'Line item2',
          secondaryText: 'Secondary Text3'
        },
        { divider: true },
        {
          text: 'Line item3',
          secondaryText: 'Secondary Text3'
        }]}

        onItemClick={this.onItemClick}
      ></m-list>



      <m-list
        singleSelection
        css={`ul{
        max-width:400px;
        border: 1px solid rgba(0,0,0,.1);
      }`}
        items={['Line item1', 'Line item2', 'Line item3']}

        onItemClick={this.onItemClick}
      ></m-list>


      <m-list
        singleSelection
        css={`ul{
        max-width:400px;
        border: 1px solid rgba(0,0,0,.1);
      }`}
        items={[{
          text: 'Line item1',
          secondaryText: 'Secondary Text3'
        },
        { divider: true },
        {
          text: 'Line item2',
          secondaryText: 'Secondary Text3',
          selected: true
        },
        { divider: true },
        {
          text: 'Line item3',
          secondaryText: 'Secondary Text3'
        }]}

        onItemClick={this.onItemClick}
      ></m-list>

      <m-list
        singleSelection
        css={`ul{
        max-width:400px;
        border: 1px solid rgba(0,0,0,.1);
      }`}
        items={[{
          text: 'Line item1',
          secondaryText: 'Secondary Text3',
          icon: 'wifi'
        },
        { divider: true },
        {
          text: 'Line item2',
          secondaryText: 'Secondary Text3',
          selected: true,
          icon: 'bluetooth'
        },
        { divider: true },
        {
          text: 'Line item3',
          secondaryText: 'Secondary Text3',
          icon: 'data_usage'
        }]}

        onItemClick={this.onItemClick}
      ></m-list>



      <m-list
        checkbox
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
          icon: 'bluetooth'
        },
        { divider: true },
        {
          text: 'Line item3',
          icon: 'data_usage',
          checked: true
        }]}

        onItemClick={this.onItemClick}
      ></m-list>


      <m-list
        radio
        css={`ul{
        max-width:400px;
        border: 1px solid rgba(0,0,0,.1);
      }`}
        items={[{
          text: 'Line item1',
          icon: 'wifi',
          checked: true,
        },
        { divider: true },
        {
          text: 'Line item2',
          icon: 'bluetooth'
        },
        { divider: true },
        {
          text: 'Line item3',
          icon: 'data_usage'
        }]}

        onItemClick={this.onItemClick}
      ></m-list>
    </div>
  }
})
render(<my-app />, 'body')

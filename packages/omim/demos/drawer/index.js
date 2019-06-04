import '../../src/button/index.tsx'
import '../../src/drawer/index.tsx'
import '../../src/list/index.tsx'

import { render, WeElement, define, h } from 'omi'


define('my-app', class extends WeElement {

  items = [{
    text: 'Line item1',
    icon: 'wifi'
  },
  {
    text: 'Line item2',
    selected: true,
    icon: 'bluetooth'
  },
  {
    text: 'Line item3',
    icon: 'data_usage'
  }, {
    text: 'Line item1',
    icon: 'wifi'
  },
  { divider: true },
  {
    text: 'Line item2',
    icon: 'bluetooth'
  },
  {
    text: 'Line item3',
    icon: 'data_usage'
  }, {
    text: 'Line item1',
    icon: 'wifi'
  },
  {
    text: 'Line item2',
    icon: 'bluetooth'
  },
  {
    text: 'Line item3',
    icon: 'data_usage'
  }]
  showA = false
  showB = true

  onClickLeft = () => {
    this.showA = true
    this.update()
  }

  onClickRight = () => {
    this.showB = true
    this.update()
  }

  onClickTop = () => {
    this.showC = true
    this.update()
  }

  onClickBottom = () => {
    this.showD = true
    this.update()
  }
  onClose = () => {
    this.showA = false
    this.showB = false
    this.showC = false
    this.showD = false
    this.update()
  }

  onItemClick = () => {
    this.showA = false
    this.showB = false
    this.showC = false
    this.showD = false
    this.update()
  }

  render(props, data) {
    return (
      <div>
        <m-button onClick={this.onClickLeft}>left</m-button>
        <m-button onClick={this.onClickRight}>right</m-button>
        <m-button onClick={this.onClickTop}>top</m-button>
        <m-button onClick={this.onClickBottom}>bottom</m-button>
        <m-drawer
          show={this.showA}
          position='left'
          onClose={this.onClose}>

          <m-list
            singleSelection
            css={`ul{
        width:200px;
        height:100vh;
        border: 1px solid rgba(0,0,0,.1);
        background:#fff;
       
      }`}
            items={this.items}

            onItemClick={this.onItemClick}
          ></m-list>
        </m-drawer>

        <m-drawer
          show={this.showB}
          position='right'
          onClose={this.onClose}>

          <m-list
            singleSelection
            css={`ul{
        width:200px;
        height:100vh;
        border: 1px solid rgba(0,0,0,.1);
        background:#fff;
       
      }`}
            items={this.items}

            onItemClick={this.onItemClick}
          ></m-list>
        </m-drawer>

        <m-drawer
          show={this.showC}
          position='top'
          onClose={this.onClose}>

          <m-list
            singleSelection
            css={`ul{
        width:100vw;
        border: 1px solid rgba(0,0,0,.1);
        background:#fff;
       
      }`}
            items={this.items}

            onItemClick={this.onItemClick}
          ></m-list>


        </m-drawer>


        <m-drawer
          show={this.showD}
          position='bottom'
          onClose={this.onClose}>

          <m-list
            singleSelection
            css={`ul{
        width:100vw;
        border: 1px solid rgba(0,0,0,.1);
        background:#fff;
       
      }`}
            items={this.items}

            onItemClick={this.onItemClick}
          ></m-list>


        </m-drawer>
      </div>
    )
  }
})

render(<my-app />, 'body')

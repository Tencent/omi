import '../../src/menu/index.tsx'
import '../../src/button/index.tsx'
import '../../src/locate/index.tsx'
import { define, WeElement, render, h } from 'omi'


define('my-app', class extends WeElement {
  onSelected = (evt) => {
    console.log(evt)
    this.show = false
    this.update()
  }

  show = true

  onClick = () => {
    this.show = !this.show
    this.update()
  }

  render() {
    return <div>
      <m-button 
        id='myBtn'
        style='position: relative;top: 100px;left: 40px;'
        onClick={this.onClick}>
          OPEN MENU
      </m-button>
      <m-locate to="#myBtn"  direction='bottom-left' show={this.show}>
        <m-menu anchor onSelected={this.onSelected} list={[
          { text: 'A Menu Item' },
          { text: 'A Disabled Menu Item', disabled: true },
          { text: 'Another Menu Item' }
        ]}></m-menu>
      </m-locate>


    </div>

  }
})
render(<my-app />, 'body')


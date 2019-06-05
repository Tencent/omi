
import '../../src/popover/index.tsx'
import '../../src/button/index.tsx'
import { render, h, define, WeElement } from 'omi'

define('my-app', class extends WeElement {

  popoverIt = (evt) => {
    this.popoverShow = !this.popoverShow
    this.popoverTarget = evt.target
    this.direction = evt.target.innerText.toLowerCase()
    this.update()
  }

  onClose = () => {
    this.popoverShow = false
    //no need to update
    // this.update()
  }

  static css = `
  m-button{
    display:inline-block;
  }
  `

	render() {
		return <div>
			  <div>
        <div style='position:relative;left:200px;top:100px;'>
        <div style='position:relative;left:43px;'>
          <m-button onClick={this.popoverIt}>top-left</m-button>
          <m-button onClick={this.popoverIt}>top</m-button>
          <m-button onClick={this.popoverIt}>top-right</m-button>
          </div>
          <div style='position:relative;left:-50px;'>
          <m-button onClick={this.popoverIt}>left-top</m-button>
          <br />
          <m-button onClick={this.popoverIt}>left</m-button>
          <br />
          <m-button onClick={this.popoverIt}>left-bottom</m-button>
          <br />
          </div>
          <m-button onClick={this.popoverIt}>bottom-left</m-button>
          <m-button onClick={this.popoverIt}>bottom</m-button>
          <m-button onClick={this.popoverIt}>bottom-right</m-button>
          <br />
          <div style='position:relative;left:296px;top:-144px;'>
          <m-button onClick={this.popoverIt}>right-top</m-button>
          <br />
          <m-button onClick={this.popoverIt}>right</m-button>
          <br />
          <m-button onClick={this.popoverIt}>right-bottom</m-button>
          </div>
         
        </div>
        <m-popover show={this.popoverShow} target={this.popoverTarget} direction={this.direction} onClose={this.onClose}>
          <div>Test Content</div>
          <div>Test Content</div>
          <div>Test Content..</div>
        </m-popover>
      </div>
		</div>

	}
})

render(<my-app />, 'body')

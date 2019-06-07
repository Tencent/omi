import '../../src/transition/index.tsx'
import { define, WeElement, render, h } from 'omi'


define('my-app', class extends WeElement {

  show = false

  onClick = (evt) => {
    this.show = !this.show
    this.update()
  }

  render() {
    return <div>
      <button onClick={this.onClick}>Toggle</button>
      <m-transition in={this.show}   css={`
   .enter {
    opacity: 0;
  }
  .enter-active{
    opacity: 1;
    transition: opacity 1200ms;
  }
  .exit {
    opacity: 1;
  }
  .exit-active{
    opacity: 0;
    transition: opacity 1200ms;
  }
      `}>
        <div>abc</div>
      </m-transition>
      <div>xxx</div>
    </div>

  }
})
render(<my-app />, 'body')


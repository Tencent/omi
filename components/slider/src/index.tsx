import { WeElement, render, h, tag } from 'omi'

import './index.css'
import * as css from './_index.less'

interface Props {
  min?: number,
  max?: number,
  step?: number,
  value?: string,
}

@tag('o-slider')
export default class Slider extends WeElement<Props> {
  
  sliderVal

  static defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    value: "20"
  }
  
  static propTypes = {
    min: Number,
    max: Number,
    step: Number,
    value: String,
  }
  
  static css = css.default

  handleSlide = evt => {
    this.sliderVal = this.shadowRoot.querySelector("input").value
    this.update() 
  }

  install() {
    this.sliderVal = this.props.value
  }

  updated() {
    console.log(this.shadowRoot.querySelector("input").value)
  }

  render(props) {
    console.log(props.text)
    return (
      <div class="slidecontainer">
          <input type="range" min={props.min} max={props.max} value={this.sliderVal} class="slider" onChange={this.handleSlide} id="myRange"/>
          <p>Value: <span id="demo">{this.sliderVal}</span></p>
          
        </div>
    )
  }
}

// render(<o-slider></o-slider>, '#root', {
//   // if using OMI to build the whole application, ignore the attributs of DOM and use props of virtual dom
//   ignoreAttrs: true
// })

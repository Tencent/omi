import { WeElement, render, h, tag } from 'omi'

import './o-progress'
import './index.css'
import logo from './logo.svg'

interface MyAppProps {
  // percent: number
}

let percent = 0
let timer;
@tag('my-app')
export default class extends WeElement<MyAppProps> {


  render(props) {

    
    if (!timer) {
      timer = setInterval(() => {
        percent += 10
        console.log(percent)
        if (percent > 200) {
          percent = 0
          clearInterval(timer)
          timer = null
        }
        this.update()
      }, 1000)

    }
    return (
      <div class="app">
        <div>hello,here we will show you how to use "progress"!</div>
        <o-progress percent={percent} status="success"></o-progress>
        <o-progress percent="40" status="error"></o-progress>
        <o-progress percent = "100" status="success"></o-progress>
        <o-progress percent="50"></o-progress>
        <o-progress percent="60" strokeColor="lightseagreen"></o-progress>
        <o-progress percent="70" strokeColor="lightseagreen" trailColor="black"></o-progress>
        <o-progress percent="50" strokeWidth = "20"></o-progress>
        <o-progress percent="50" strokeWidth = "70"></o-progress>
        <o-progress percent="50" textColor = "#af0f8c"></o-progress>
      </div>
    )
  }
}

render(<my-app></my-app>, '#root', {
  // if using OMI to build the whole application, ignore the attributs of DOM and use props of virtual dom
  ignoreAttrs: true
})

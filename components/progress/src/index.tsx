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
        if (percent > 110) {
          percent = 0
          clearInterval(timer)
          timer = null
        }
        this.update()
      }, 1000)

    }
    return (
      <div class="app">
        <h1>Hello,here we will show you how to use "o-progress"!</h1><hr></hr>
        <div>We can set up a timer to achieve dynamic effects.</div>
        <o-progress percent={percent} status="success"></o-progress><hr></hr>
        <div>We can change the percentage by changing the "percent",the default percent is "30". </div>
        <o-progress></o-progress>
        <o-progress percent="40"></o-progress>
        <div>We can change the width by changing the "width",the default width is "300". </div>
        <o-progress percent="40"></o-progress>
        <o-progress percent="40" width={600}></o-progress>
        <div>We can change the height by changing the "strokeWidth",the default width is "8". </div>
        <o-progress percent="50" strokeWidth={8}></o-progress>
        <o-progress percent="50" strokeWidth={4}></o-progress>
        <o-progress percent="50" strokeWidth={16}></o-progress>
        <div>As you can see, instead of providing a fixed size, we choose to provide a custom width and height,
           and leave the decision to the user to achieve the desired effect.</div><hr></hr>
        <div>We can change the progress color by changing the "strokeColor". </div>
        <o-progress percent="60" strokeColor="lightseagreen"></o-progress>
        <div>We can change the progress trail color by changing the "trailColor". </div>
        <o-progress percent="60" trailColor="black"></o-progress>
        <div>We can change the progress text color by changing the "textColor". </div>
        <o-progress percent="60" textColor = "red"></o-progress><hr></hr>
        <div>We provide two status to achieve the default effect of success / failure, and icons can be introduced using icons in "@omiu-icon" . </div>
        <o-progress percent="70" status="error"></o-progress>
        <o-progress percent="80" status="error" strokeWidth={4}></o-progress>
        <o-progress percent="90" status="error" strokeWidth={16}></o-progress>
        <o-progress percent = "100" status="success"></o-progress>
      </div>
    )
  }
}

render(<my-app></my-app>, '#root', {
  // if using OMI to build the whole application, ignore the attributs of DOM and use props of virtual dom
  ignoreAttrs: true
})

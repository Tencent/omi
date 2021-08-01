import { WeElement, render, h, tag } from 'omi'


import './progress'
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
        if (percent > 300) {
          percent=0
        }
        this.update()
      }, 1000)

    }
    return (
      <div class="app">
        <div>hello</div>
        <o-progress percent={percent} status="success" strokeWidth={30} width={600}></o-progress>
        <o-progress percent={40} status="error" width={400} strokeWidth={16}></o-progress>
        <o-progress percent={50}></o-progress>
        <o-progress type="circle" status="success"></o-progress>
        <o-progress type="circle" width={150} status="error"></o-progress>
        <o-progress type="circle" percent={percent}></o-progress>
        <o-progress type="circle" percent={60} width={200}></o-progress>
      </div>
    )
  }
}

render(<my-app></my-app>, '#root', {
  // if using OMI to build the whole application, ignore the attributs of DOM and use props of virtual dom
  ignoreAttrs: true
})

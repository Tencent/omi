import exp from 'constants'
import { OmiProps, WeElement, h, tag, classNames, render } from 'omi'

import "../index"

@tag("backtop-base")
export default class backTopBase extends WeElement{

  render(){
    
    return <h.f>
      <t-back-top container=".baseList_wrapper" offset={['24px', '80px']}></t-back-top>
    </h.f>
    
  }
}

render(<backtop-base></backtop-base>, '.baseList_wrapper', {})
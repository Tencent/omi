import { OmiProps, WeElement, h, tag, render} from 'omi'

import '../textarea'

@tag('textarea-event')
export default class TextareaEvent extends WeElement {

  value=''
  
  onBlur = (value,{e}) =>{
    console.log('onBlur: ', value, e);
  }

  onFocus = (value,{e}) =>{
    console.log('onFocus: ', value, e);
  }

  onKeyup = (value,{e}) =>{
    console.log('onKeyup',  value, e)
  }

  onKeypress = (value,{e}) =>{
    console.log('onKeypress', value, e)
  }

  onKeydown = (value,{e}) =>{
    console.log('onKeydown', value, e)
  }

  render() {
    return (
      <h.f>
        <t-textarea
          placeholder="请输入"
          value={this.value}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onKeypress={this.onKeypress}
          onKeydown={this.onKeydown}
          onKeyup={this.onKeyup}
        ></t-textarea>
      </h.f>
    )
  }
}

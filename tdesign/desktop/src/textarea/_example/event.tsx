import { OmiProps, WeElement, h, tag, render} from 'omi'

import '../index'

@tag('textarea-event')
export default class TextareaEvent extends WeElement {

  evtDetail: number
  value :string
  
  onBlur = (evt : Event) =>{
    console.log('onBlur', evt.detail.value, evt.detail.event)
  }

  onFocus = (evt : Event) =>{
    console.log('onFocus', evt.detail.value, evt.detail.event)
  }

  onKeyup = (evt : Event) =>{
    console.log('onKeyup', evt.detail.value, evt.detail.event)
  }

  onKeypress = (evt : Event) =>{
    console.log('onKeypress', evt.detail.value, evt.detail.event)
  }

  onKeydown = (evt : Event) =>{
    console.log('onKeydown', evt.detail.value, evt.detail.event)
  }

  render() {
    return (
      <h.f>
        <t-textarea
          placeholder="请输入"
          // value={this.value}
          onMyBlur={this.onBlur}
          onMyFocus={this.onFocus}
          onMyKeypress={this.onKeypress}
          onMyKeydown={this.onKeydown}
          onMyKeyup={this.onKeyup}
        ></t-textarea>
      </h.f>
    )
  }
}

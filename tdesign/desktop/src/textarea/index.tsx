import { OmiProps, WeElement, h, tag, classNames, createRef } from 'omi'
import style from './style'
import { TextareaProps } from './types'
import { TdClassNamePrefix } from '../utils/clsx'
import calcTextareaHeight from '../_common/js/utils/calcTextareaHeight'
import { valueToNode } from '@babel/types'

import { auto } from '@popperjs/core'
const TextareaClassNamePrefix = (className: string) => TdClassNamePrefix('textarea__') + className


@tag('t-textarea')
export default class Textarea extends WeElement<TextareaProps> {
  static css = style

  static defaultProps = {
    allowInputOverMax: false,
    autofocus: false,
    autosize: false,
    disabled: false,
    readonly: false,
    value:''
  }

  static propTypes = {
    allowInputOverMax: Boolean,
    autofocus: Boolean,
    autosize: [Boolean, Object], 
    disabled: Boolean,
    readonly: Boolean,

    style: String,
    label: String,
    tips: String,
    status: String,

    maxcharacter: Number,
    maxlength: Number,

    name: String,
    placeholder: String,

    value: String,
    defaultValue: String,

    onBlur: Function,
    onChange: Function,
    onFocus: Function,
    onKeydown: Function,
    onKeypress: Function,
    onKeyup: Function,
  }


  value = ""

  installed() {
    let node = this.textArea.current
    this.value = node.value
    // console.log(this.props)
    let autosize = this.props.autosize
    if (autosize === true) {
      node.addEventListener('input', () => {
        let heightObj = calcTextareaHeight(node)
        let clacMinHeight = heightObj.minHeight
        let clacHeight = heightObj.height
        node.style.minHeight = clacMinHeight
        node.style.height = clacHeight   
      })
    } else if (typeof autosize === 'object') {
        node.addEventListener('input', () => {
          let heightObj = calcTextareaHeight(node, autosize?.minRows, autosize?.maxRows)
          let clacMinHeight = heightObj.minHeight
          let clacHeight = heightObj.height
          node.style.minHeight = clacMinHeight
          node.style.height = clacHeight   
        })
    }
    let maxLength = this.props.maxcharacter

    if(maxLength){
      node.addEventListener("input", () => {
        const text = node.value
        const length = this.countCharacters(text)
        if (length > maxLength) {
          if(text[text.length-1].match('/[\u4e00-\u9fa5]/g')){
            node.value = text.slice(0, maxLength-1)
          }else{
            node.value = text.slice(0, maxLength)
          }
        }
      });
    }
  }

  //textarea ref
  textArea = createRef()

  getTextareaStatus(status: string) {
    return TdClassNamePrefix(`is-${status || ''}`)
  }

  getTipsStyle(status: string) {
    return TextareaClassNamePrefix(`tips--${status}`)
  }

  getTextareaIsDisabled(disabled: boolean) {
    return TdClassNamePrefix(`is-${disabled ? 'disabled' : ''}`)
  }


  countCharacters(text : string) {
    // 按照一个中文汉字等于一个字符长度计算
    const chineseCharacterRegex = /[\u4e00-\u9fa5]/g;
    const chineseCharacters = text.match(chineseCharacterRegex) || [];
    return text.length + chineseCharacters.length;
  }


  onblur = (event : Event) =>{
    var textareaValue = event.currentTarget.value;
    this.fire('my-blur', { event : event, value : textareaValue })
  }

  onfocus = (event : Event) =>{
    var textareaValue = event.currentTarget.value;
    this.fire('my-focus', { event : event, value : textareaValue })
  }
  onKeyup = (event : Event) =>{
    var textareaValue = event.currentTarget.value;
    this.fire('my-keyup', { event : event, value : textareaValue })
  } 

  onKeypress = (event : Event) =>{
    var textareaValue = event.currentTarget.value;
    this.fire('my-keypress', { event : event, value : textareaValue })
  } 

  onKeydown = (event : Event) =>{
    var textareaValue = event.currentTarget.value;
    this.fire('my-keydown', { event : event, value : textareaValue })
  } 

  render(props: OmiProps<TextareaProps, any>, store: any) {
    const { autofocus, autosize, placeholder, readonly, value, status, 
      disabled, tips ,maxlength, maxcharacter, onBlur, onChange, onKeydown,
      onKeypress, onKeyup, onFocus} = props
    
    return (
      <>
        <div class={classNames(TdClassNamePrefix('textarea'))}>
          <textarea
            class={classNames(
              TextareaClassNamePrefix('inner'),
              this.getTextareaStatus(status),
              this.getTextareaIsDisabled(disabled),
            )}
            value={value}
            placeholder={placeholder}
            readonly={readonly}
            disabled={disabled}
            autofocus={autofocus}
            maxlength={maxlength}
            maxcharacter={maxcharacter}
            onBlur={(e) => {this.onblur(e)}}
            onChange={onChange}
            onFocus={(e) => {this.onfocus(e)}}
            onKeyPress={(e) => {this.onKeypress(e)}}
            onKeyDown={(e) =>{this.onKeydown(e)}}
            onKeyUp={(e) =>{this.onKeyup(e)}}
            ref={this.textArea}
          ></textarea>
          {tips && <div class={classNames(TextareaClassNamePrefix('tips'), this.getTipsStyle(status))}>{tips}</div>}
        </div>
      </>
    )
  }
}

import { OmiProps, WeElement, h, tag, classNames, createRef } from 'omi'
import style from './style'
import { TextareaProps } from './types'
import { TdClassNamePefix } from '../utils/clsx'
import calcTextareaHeight from '../_common/js/utils/calcTextareaHeight'
import { valueToNode } from '@babel/types'
import { auto } from '@popperjs/core'
const TextareaClassNamePefix = (className: string) => TdClassNamePefix('textarea__') + className

@tag('t-textarea')
export default class Textarea extends WeElement<TextareaProps> {
  static css = style

  static defaultProps = {
    allowInputOverMax: false,
    autofocus: false,
    autosize: false,
    disabled: false,
    readonly: false,
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

  installed() {    
    let node = this.textArea.current
    let autosize = this.props.autosize
    console.log(autosize)
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
    return TdClassNamePefix(`is-${status || ''}`)
  }

  getTipsStyle(status: string) {
    return TextareaClassNamePefix(`tips--${status}`)
  }

  getTextareaIsDisabled(disabled: boolean){
    return TdClassNamePefix(`is-${disabled ? 'disabled' : ''}`)
  }


  countCharacters(text : string) {
    // 按照一个中文汉字等于一个字符长度计算
    const chineseCharacterRegex = /[\u4e00-\u9fa5]/g;
    const chineseCharacters = text.match(chineseCharacterRegex) || [];
    return text.length + chineseCharacters.length;
  }

  onBlur = (e: any) => {
    // console.log(event)
  }

  handleTextChange = (evt : any) => {
  }

  onFocus = (e: any) => {
  }

  onKeypress = (e: any) => {
    // console.log(event);
  }
  onKeydown = (e: any) => {
    // console.log(event);
  }
  onKeyup = (e: any) => {
    // console.log(event);
  }

  render(props: OmiProps<TextareaProps, any>, store: any) {
    const { autofocus, autosize, placeholder, readonly, value, status, 
      disabled, tips ,maxlength, maxcharacter} = props
    
    return (
      <>
        <div class={classNames(TdClassNamePefix('textarea'))}>
          <textarea
            class={classNames(TextareaClassNamePefix('inner'), 
            this.getTextareaStatus(status),
            this.getTextareaIsDisabled(disabled)
            )}
            value={value}
            placeholder={placeholder}
            readonly={readonly}
            disabled={disabled}
            autofocus={autofocus}
            maxlength={maxlength}
            maxcharacter={maxcharacter}
            onChange={this.handleTextChange}
            onFocus={this.onFocus}
            onKeypress={this.onKeypress}
            ref={this.textArea}
          ></textarea>
          {tips && <div class={classNames(TextareaClassNamePefix('tips'), this.getTipsStyle(status))}>{tips}</div>}
        </div>
      </>
    )
  }
}

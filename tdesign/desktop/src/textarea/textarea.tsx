import { OmiProps, WeElement, h, tag, classNames, createRef } from 'omi'
import style from './style'
import { TextareaProps } from './type'
import { TdClassNamePrefix } from '../utils'
import calcTextareaHeight from '../_common/js/utils/calcTextareaHeight'
import noop from '../utils/noop'
import { valueToNode } from '@babel/types'
import { getCharacterLength, getUnicodeLength, limitUnicodeMaxLength } from '../_common/js/utils/helper'

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
    value: '',
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

  value = ''
  isFocused = false

  eventPropsNames
  eventProps
  installed() {
    const {
      value,
      disabled,
      maxlength,
      maxcharacter,
      readonly,
      autofocus,
      style,
      onKeydown = noop,
      onKeypress = noop,
      onKeyup = noop,
      autosize,
      status,
      tips,
      allowInputOverMax,
      ...otherProps
    } = this.props

    this.value = value
    this.eventPropsNames = Object.keys(otherProps).filter((key) => /^on[A-Z]/.test(key))
    this.eventProps = this.eventPropsNames.reduce((eventProps, key) => {
      Object.assign(eventProps, {
        [key]: (e) => {
          if (disabled) return
          if (key === 'onFocus') {
            this.isFocused = true
            this.update()
          }
          if (key === 'onBlur') {
            this.isFocused = false
            this.update()
          }
          this.props[key](e.currentTarget.value, { e })
          e.stopPropagation()
        },
      })
      return eventProps
    }, {})

    this.update()

    let node = this.textArea.current
    this.value = node.value

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

    let maxLength = maxcharacter
    if (maxLength) {
      node.addEventListener('input', () => {
        const text = node.value
        const length = this.countCharacters(text)
        if (length > maxLength) {
          if (text[text.length - 1].match('/[\u4e00-\u9fa5]/g')) {
            node.value = text.slice(0, maxLength - 1)
          } else {
            node.value = text.slice(0, maxLength)
          }
        }
      })
    }
  }

  countCharacters(text: string) {
    // 按照一个中文汉字等于一个字符长度计算
    const chineseCharacterRegex = /[\u4e00-\u9fa5]/g
    const chineseCharacters = text.match(chineseCharacterRegex) || []
    return text.length + chineseCharacters.length
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

  // eventProps = this.eventPropsNames.reduce((eventProps, key) => {
  //   Object.assign(eventProps, {
  //     [key]: (e) => {
  //       if (this.props.disabled) return;
  //       if (key === 'onFocus'){
  //         this.isFocused = true
  //         this.update()
  //       }
  //       if (key === 'onBlur'){
  //         this.isFocused = false
  //         this.update()
  //       }
  //       this.props[key](e.currentTarget.value, e);
  //     },
  //   });
  //   return eventProps;
  // }, {});
  // onblur = (event: Event) => {
  //   var textareaValue = event.currentTarget.value;
  //   // this.fire('my-blur', { event: event, value: textareaValue })
  // }

  // onfocus = (event: Event) => {
  //   var textareaValue = event.currentTarget.value;
  //   this.fire('my-focus', { event: event, value: textareaValue })
  // }
  // onKeyup = (event: Event) => {
  //   var textareaValue = event.currentTarget.value;
  //   this.fire('my-keyup', { event: event, value: textareaValue })
  // }

  // onKeypress = (event: Event) => {
  //   var textareaValue = event.currentTarget.value;
  //   this.fire('my-keypress', { event: event, value: textareaValue })
  // }

  // onKeydown = (event: Event) => {
  //   var textareaValue = event.currentTarget.value;
  //   this.fire('my-keydown', { event: event, value: textareaValue })
  // }

  textareaClassPrefix = `t-textarea`
  cls() {
    return classNames(TextareaClassNamePrefix('inner'), {
      [`${this.textareaClassPrefix}-is-${this.props.status}`]: this.props.status,
      [`${this.textareaClassPrefix}-is-disabled`]: this.props.disabled,
      [`${this.textareaClassPrefix}-is-focused`]: this.isFocused,
      [`${this.textareaClassPrefix}-resize-none`]: typeof this.props.autosize === 'object',
    })
  }

  inputValueChangeHandle = (e: Event) => {
    const { target } = e
    let val = (target as HTMLInputElement).value
    if (!this.props.allowInputOverMax && !this.textArea.current) {
      val = limitUnicodeMaxLength(val, this.props.maxlength)
      if (this.props.maxcharacter && this.props.maxcharacter >= 0) {
        const stringInfo = getCharacterLength(val, this.props.maxcharacter)
        val = typeof stringInfo === 'object' && stringInfo.characters
      }
    }
    // setValue(val, { e });
    this.value = val
    this.update()
  }

  render(props: OmiProps<TextareaProps, any>, store: any) {
    const {
      autofocus,
      autosize,
      placeholder,
      readonly,
      value,
      status,
      disabled,
      tips,
      maxlength,
      maxcharacter,
      onKeydown,
      onKeypress,
      onKeyup,
    } = props

    return (
      <>
        <div class={classNames(TdClassNamePrefix('textarea'))}>
          <textarea
            {...this.eventProps}
            class={this.cls()}
            value={this.value}
            placeholder={placeholder}
            readonly={readonly}
            disabled={disabled}
            autofocus={autofocus}
            maxlength={maxlength}
            maxcharacter={maxcharacter}
            // onBlur={onBlur}
            onChange={(e) => {
              this.inputValueChangeHandle(e)
            }}
            // onFocus={(e) => { this.onfocus(e) }}
            onKeyPress={(e) => onKeypress(e.currentTarget.value, { e })}
            onKeyDown={(e) => onKeydown(e.currentTarget.value, { e })}
            onKeyUp={(e) => onKeyup(e.currentTarget.value, { e })}
            ref={this.textArea}
          ></textarea>
          {tips && <div class={classNames(TextareaClassNamePrefix('tips'), this.getTipsStyle(status))}>{tips}</div>}
        </div>
      </>
    )
  }
}

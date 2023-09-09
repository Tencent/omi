/* eslint-disable */

import { TNode, TElement, SizeEnum } from '@src/common';


export type TextareaProps = {

  allowInputOverMax?:boolean
  autofocus?:boolean
  autosize?:boolean | Object
  disabled?: boolean
  readonly?:boolean

  style?: String
  label?: String | TNode
  tips?: String | TNode
  status?: String 

  maxcharacter?: Number
  maxlength?: Number

  name?:string
  placeholder?:string

  value?:string
  defaultValue?:string | Number

  onBlur?: Function
  onChange?: Function
  onFocus?: Function
  onKeydown?: Function
  onKeypress?: Function
  onKeyup?: Function
}

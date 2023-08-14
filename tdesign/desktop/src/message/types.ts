/* eslint-disable */

import { TNode, TElement, SizeEnum } from '@src/common';

export type MessageThemeList =  "info" | "success" | "warning" | "error" | 'question' | 'loading'

export type MessageProps = {
  className?: String
  style?: String
  closeBtn?: TNode | string | boolean
  content?: TNode | string
  duration?: Number
  icon?: TNode | boolean
  theme?: MessageThemeList
  onClose?: Function
  onCloseBtnClick?: Function
  onDurationEnd?: Function
}

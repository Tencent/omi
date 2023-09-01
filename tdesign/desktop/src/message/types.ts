/* eslint-disable */

import { TNode, TElement, SizeEnum } from '@src/common';

export type MessageThemeList =  "info" | "success" | "warning" | "error" | 'question' | 'loading'

export type MessageProps = {
  className?: string
  style?: string
  closeBtn?: TNode | string | boolean
  content?: TNode | string
  duration?: number
  icon?: TNode | boolean
  theme?: MessageThemeList
  onClose?: Function
  onCloseBtnClick?: Function
  onDurationEnd?: Function
}

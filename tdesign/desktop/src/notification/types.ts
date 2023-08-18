/* eslint-disable */

import { TNode, TElement, SizeEnum } from '@src/common';

export type NotificationThemeList =  'info' | 'success' | 'warning' | 'error'

export type NotificationProps = {
  className?: String
  style?: String
  children?: TNode | String
  closeBtn?: TNode | Boolean
  content?: TNode | String
  duration?: Number
  footer?: TNode | String
  icon?: TNode | Boolean
  theme?: NotificationThemeList
  title?: TNode | String
  onCloseBtnClick?: Function
  onDurationEnd?: Function
}

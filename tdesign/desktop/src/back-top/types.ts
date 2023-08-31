/* eslint-disable */

import { TNode, TElement, SizeEnum } from '@src/common';

import { AttachNodeReturnValue } from '../common'

export type BackTopProps = {

  container?:string | Function
  content?:string | Function
  default?:string | Function
  target?:string | Function
  
  duration?:number
  offset?: Array<string | number>
  visibleHeight?: string | number

  shape?:string
  size?:string
  theme?: string

  onClick?: Function
}

export type UseScrollProps = {
  target: AttachNodeReturnValue;
};
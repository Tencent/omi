import { TNode } from '@src/common'

export type SliderProps = {
  className: string
  style: string
  disabled: boolean
  inputNumberProps: Boolean | Object
  label: TNode
  layout: 'vertical' | 'horizontal'
  marks: Array<any>
  max: number
  min: number
  range: boolean
  showStep: boolean
  step: number
  tooltipProps: object
  value: number
  defaultValue: number
  onChange: Function
}

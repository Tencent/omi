import { SizeEnum, TElement, TNode } from '../common'

export type ButtonTheme = 'default' | 'primary' | 'danger' | 'warning' | 'success'
export type ButtonVariant = 'base' | 'outline' | 'dashed' | 'text'
export type ButtonShape = 'rectangle' | 'square' | 'round' | 'circle'

export type ButtonProps = {
  block?: boolean
  disable?: boolean
  ghost?: boolean
  loading?: boolean

  href?: string
  icon?: string | TNode
  theme?: ButtonTheme

  size?: SizeEnum
  suffix?: TElement

  shape?: ButtonShape
  tag?: 'button' | 'a' | 'div'
  type?: 'submit' | 'reset' | 'button'
  variant?: ButtonVariant

  onClick?: (e: MouseEvent) => void
} & HTMLButtonElement

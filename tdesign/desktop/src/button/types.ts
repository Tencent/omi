import { SizeEnum, TElement, TNode } from '../common'
export type ButtonProps = {
  block?: boolean
  disable?: boolean
  ghost?: boolean
  loading?: boolean

  href?: string
  icon?: string | TNode

  size?: SizeEnum
  suffix?: TElement

  shape?: 'rectangle' | 'square' | 'round' | 'circle'
  tag?: 'button' | 'a' | 'div'
  type?: 'submit' | 'reset' | 'button'
  variant?: 'base' | 'outline' | 'dashed' | 'text'

  onClick?: (e: MouseEvent) => void
} & HTMLButtonElement

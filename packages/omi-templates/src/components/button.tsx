import { Component, tag } from 'omi'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from './utils'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonProps = VariantProps<typeof buttonVariants> & {
  // 使用 cls， 避免使用 className 同时作用 host 和 内部的 root
  cls?: string
  tag: string
  className?: string
}

@tag('o-button')
export class Button extends Component<ButtonProps> {
  static css = [
    `:host {
    display: inline-flex;
  }`,
  ]

  static defaultProps = {
    tag: 'button',
  }

  render() {
    // 取出 className 不使用，防止覆盖
    const { tag: Tag, cls, variant, size, className, ...props } = this.props

    return (
      <Tag className={cn(buttonVariants({ variant, size, className: cls }))} {...props}>
        <slot></slot>
      </Tag>
    )
  }
}

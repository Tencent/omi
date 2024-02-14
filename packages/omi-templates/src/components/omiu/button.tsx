import { Component, tag } from 'omi'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from './utils'

export const buttonVariants = cva(
  'inline-flex text-sm items-center justify-center whitespace-nowrap rounded ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        base: 'bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:text-primary-foreground dark:bg-zinc-600 dark:hover:bg-zinc-500', // Adjust base variant as needed
        outline: 'border border-input bg-background hover:text-primary hover:border-primary', // Existing outline variant
        dashed: 'border border-dashed border-zinc-300 hover:text-primary hover:border-primary', // Add dashed variant
        text: 'bg-transparent hover:bg-accent hover:text-accent-foreground', // Add text variant
      },
      block: {
        true: 'w-full', // Add block variant
      },
      disabled: {
        true: 'disabled', // Add disabled variant
      },
      ghost: {
        true: 'bg-transparent', // Add ghost variant
      },
      loading: {
        true: 'cursor-wait', // Add loading variant
      },
      shape: {
        rectangle: 'rounded', // Add rectangle shape
        square: 'rounded-md', // Add square shape (adjust as needed)
        round: 'rounded-full', // Add round shape
        circle: 'rounded-full', // Add circle shape (adjust as needed)
      },
      size: {
        small: 'h-8 px-3', // Adjust sizes as needed
        medium: 'h-9 px-4', // Adjust sizes as needed
        large: 'h-12 px-5', // Adjust sizes as needed
      },

      theme: {
        primary: 'text-primary', // Add primary theme
        danger: 'text-danger', // Add danger theme
        warning: 'text-warning', // Add warning theme
        success: 'text-success', // Add success theme
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
      shape: 'rectangle',
      theme: 'primary',
    },
  },
)

export type ButtonProps = VariantProps<typeof buttonVariants> & {
  // 使用 clsn， 避免使用 className 同时作用 host 和 内部的 root
  cls?: string
  tag: string
  className?: string
  block?: boolean
  disabled?: boolean
  ghost?: boolean
  loading?: boolean
  shape?: 'rectangle' | 'square' | 'round' | 'circle'
  size?: 'small' | 'medium' | 'large'
  type?: 'submit' | 'reset' | 'button'
  variant?: 'base' | 'outline' | 'dashed' | 'text'
  theme?: 'default' | 'primary' | 'danger' | 'warning' | 'success'
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
    const {
      tag: Tag,
      cls,
      variant,
      size,
      className,
      block,
      disabled,
      ghost,
      loading,
      shape,
      theme,
      ...props
    } = this.props

    // Add disabled attribute if the button is disabled
    if (disabled) {
      ;(props as { disabled?: boolean }).disabled = true
    }

    return (
      <Tag
        className={cn(
          buttonVariants({
            variant,
            size,
            className: cls,
            block,
            disabled,
            ghost,
            loading,
            shape,
            theme,
          }),
        )}
        {...props}
      >
        <slot></slot>
      </Tag>
    )
  }
}

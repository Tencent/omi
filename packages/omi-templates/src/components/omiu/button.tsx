import { Component, tag } from 'omi'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from './utils'

// In order to have tailwindcss scan containing these:
// border-primary !bg-primary hover:!bg-primary/70 text-primary hover:border-primary/70 hover:text-primary/70
// border-danger !bg-danger hover:!bg-danger/70 text-danger hover:border-danger/70 hover:text-danger/70
// border-warning !bg-warning hover:!bg-warning/70 text-warning hover:border-warning/70 hover:text-warning/70
// border-success !bg-success hover:!bg-success/70 text-success hover:border-success/70 hover:text-success/70

type Theme = 'default' | 'primary' | 'danger' | 'warning' | 'success'
type Variant = 'base' | 'outline' | 'dashed' | 'text'

const getCompoundVariantsByTheme = (
  theme: Theme,
): {
  variant: Variant
  theme: Theme
  className: string
}[] => {
  return [
    {
      variant: 'base',
      theme,
      className: `!bg-${theme} !text-primary-foreground hover:!bg-${theme}/70`,
    },
    {
      variant: 'outline',
      theme,
      className: `bg-transparent text-${theme} border-${theme} hover:border-${theme}/70 hover:text-${theme}/70 dark:brightness-125`,
    },
    {
      variant: 'dashed',
      theme,
      className: `bg-transparent border border-dashed border-${theme} hover:text-${theme}/70 hover:border-${theme}/70 text-${theme} dark:brightness-125`,
    },
    {
      variant: 'text',
      theme,
      className: `bg-transparent text-${theme} hover:text-${theme}/70 hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:brightness-125`,
    },
  ]
}

export const buttonVariants = cva(
  'inline-flex text-sm items-center justify-center whitespace-nowrap rounded ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border gap-2',
  {
    variants: {
      variant: {
        base: 'bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:text-primary-foreground dark:bg-zinc-600 dark:hover:bg-zinc-500', // Adjust base variant as needed
        outline: 'border border-input bg-background hover:text-primary hover:border-primary', // Existing outline variant
        dashed: 'border border-dashed border-zinc-300 hover:text-primary hover:border-primary', // Add dashed variant
        text: 'bg-transparent hover:bg-accent hover:text-accent-foreground dark:hover:bg-zinc-800', // Add text variant
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
        default: '',
        primary: 'bg-primary text-white', // Add primary theme
        danger: 'bg-danger text-white', // Add danger theme
        warning: 'bg-warning text-white', // Add warning theme
        success: 'bg-success text-white', // Add success theme
      },
    },
    compoundVariants: [
      ...getCompoundVariantsByTheme('primary'),
      ...getCompoundVariantsByTheme('danger'),
      ...getCompoundVariantsByTheme('warning'),
      ...getCompoundVariantsByTheme('success'),
      {
        size: 'small',
        shape: 'circle',
        className: 'w-8 h-8',
      },
      {
        size: 'medium',
        shape: 'circle',
        className: 'w-9 h-9',
      },
      {
        size: 'large',
        shape: 'circle',
        className: 'w-12 h-12',
      },
    ],
    defaultVariants: {
      variant: 'base',
      size: 'medium',
      shape: 'rectangle',
      theme: 'default',
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
  icon?: string
  loading?: boolean
  shape?: 'rectangle' | 'square' | 'round' | 'circle'
  size?: 'small' | 'medium' | 'large'
  type?: 'submit' | 'reset' | 'button'
  variant?: Variant
  theme?: Theme
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
        {props.icon && <i class={`t-icon t-icon-${props.icon} text-base`}></i>}
        {loading && <i class="t-icon t-icon-loading text-base animate-spin"></i>}
        <slot></slot>
      </Tag>
    )
  }
}

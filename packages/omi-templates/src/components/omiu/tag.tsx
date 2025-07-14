import { Component, tag } from 'omi'

@tag('o-tag')
export class Tag extends Component {
  static defaultProps = {
    closable: false,
    default: null,
    disabled: false,
    icon: undefined,
    maxWidth: null,
    shape: 'square',
    size: 'medium', // small, medium, large
    theme: 'default',
    variant: 'dark',
  }

  onClose = (e: MouseEvent) => {
    e.stopPropagation()
    this.fire('close')
  }

  render() {
    // @ts-ignore
    const { closable, disabled, icon, maxWidth, shape, size, theme, variant } = this.props

    const baseClasses =
      'inline-flex items-center justify-center border border-transparent text-base font-medium rounded-sm focus:outline-none transition duration-150 ease-in-out whitespace-nowrap'
    const sizeClasses =
      size === 'small' ? 'px-1 text-xs h-5' : size === 'medium' ? 'px-3 text-xs h-6' : 'px-4 text-sm h-8'
    const shapeClasses = shape === 'square' ? '' : shape === 'round' ? 'rounded' : 'rounded-full'
    const themeClasses =
      theme === 'default'
        ? 'bg-zinc-200'
        : theme === 'primary'
        ? 'bg-blue-600'
        : theme === 'warning'
        ? 'bg-yellow-400'
        : theme === 'danger'
        ? 'bg-red-600'
        : 'bg-green-500'
    const variantClasses =
      variant === 'dark'
        ? 'text-zinc-700'
        : variant === 'light'
        ? 'text-zinc-700'
        : variant === 'outline'
        ? `border ${themeClasses}`
        : `border ${themeClasses} bg-white`
    const disabledClasses = disabled ? 'cursor-not-allowed' : 'cursor-pointer'

    const cls = `${baseClasses} ${sizeClasses} ${shapeClasses} ${themeClasses} ${variantClasses} ${disabledClasses}`

    return (
      <div className={cls} style={{ maxWidth }}>
        {icon && <span className="mr-2">{typeof icon === 'function' ? icon() : icon}</span>}
        <slot></slot>
        {closable && <i class="t-icon t-icon-close"></i>}
      </div>
    )
  }
}

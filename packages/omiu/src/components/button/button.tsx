import { tag, Component, classNames } from 'omi'
import { tailwind } from '@/tailwind'
import 'omi-ripple'

// https://mui.com/material-ui/api/button/
const theme = {
  common:
    'flex items-center justify-center leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 overflow-hidden',

  secondary: {
    bg: 'primary-100',
    text: 'primary-700',
    hover: 'primary-accent-100',
    focus: 'primary-accent-100',
    active: 'primary-accent-200',
  },
  light: { bg: 'neutral-50', text: 'neutral-800', hover: 'neutral-100', focus: 'neutral-100', active: 'neutral-200' },
  dark: { bg: 'neutral-800', text: 'neutral-50', hover: 'neutral-800', focus: 'neutral-800', active: 'neutral-900' },

  contained: '',
  outlined: '',
  text: '',

  small: 'px-4 leading-[29px] text-xs font-medium h-[29px]',
  medium: 'px-6 leading-[36px] text-xs font-medium h-[36px]',
  large: 'px-7 leading-[43px] text-sm font-medium h-[43px]',

  rounded: 'rounded',
  roundedFull: 'rounded-full',

  fullWidth: 'w-full block',

  floating: {
    small: 'p-1',
    medium: 'p-2',
    large: 'p-3',
  },

  disabled: 'pointer-events-none opacity-50',
}

@tag('o-button')
export class Button extends Component {
  static css = [
    tailwind,
    `:host {
    display: inline-block;
  }
  `,
  ]

  static defaultProps = {
    ripple: true,
    color: 'primary',
    variant: 'contained',
    size: 'medium',
    tag: 'button',
    href: null,
    rounded: true,
    floating: false,
    disabled: false,
    fullWidth: false,
    roundedFull: false,
    uppercase: true,
    className: '',
  }

  install() {
    if (this.props.fullWidth) {
      this.style.display = 'block'
    }
  }

  updated() {
    if (this.props.fullWidth) {
      this.style.display = 'block'
    }
  }

  render(props) {
    const config = theme[props.color]
    let btnClass = ''
    switch (props.variant) {
      case 'contained':
        switch (props.color) {
          case 'primary':
          case 'success':
          case 'info':
          case 'warning':
          case 'danger':
            btnClass = `bg-${props.color} text-white hover:bg-${props.color}-600 focus:bg-${props.color}-600 active:bg-${props.color}-700`
            break

          case 'secondary':
          case 'light':
          case 'dark':
            btnClass = `bg-${config.bg} text-${config.text} hover:bg-${config.hover} focus:bg-${config.focus} active:bg-${config.active}`
            break
        }

        break
      case 'outlined':
        switch (props.color) {
          case 'primary':
          case 'success':
          case 'info':
          case 'warning':
          case 'danger':
            btnClass = `border-2 border-${props.color} text-${props.color} hover:border-${props.color}-600 focus:border-${props.color}-600 active:border-${props.color}-700 hover:text-${props.color}-600 focus:text-${props.color}-600 active:text-${props.color}-700 hover:bg-neutral-500  hover:bg-opacity-10`
            break

          case 'secondary':
            btnClass = `border-2 border-${config.bg} text-${config.text} hover:border-${config.hover} focus:border-${config.focus} active:border-${config.active} hover:text-${config.hover} focus:text-${config.focus} active:text-${config.active} hover:bg-neutral-500  hover:bg-opacity-10 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10`
            break
          case 'light':
          case 'dark':
            btnClass = `border-2 border-${config.bg} text-${config.bg} hover:border-${config.hover} focus:border-${config.focus} active:border-${config.active} hover:text-${config.hover} focus:text-${config.focus} active:text-${config.active} hover:bg-neutral-500  hover:bg-opacity-10`
            break
        }

        break
      case 'text':
        switch (props.color) {
          case 'primary':
          case 'success':
          case 'info':
          case 'warning':
          case 'danger':
            btnClass = `text-${props.color} hover:bg-${props.color}-600 focus:bg-${props.color}-600 active:bg-${props.color}-700 hover:text-${props.color}-600 focus:text-${props.color}-600 active:text-${props.color}-700 hover:bg-opacity-10 focus:bg-opacity-10 active:bg-opacity-10`
            break

          case 'secondary':
            btnClass = `text-${config.text} hover:bg-${config.hover} focus:bg-${config.focus} active:bg-${config.active} hover:text-${config.hover} focus:text-${config.focus} active:text-${config.active} hover:bg-opacity-10 focus:bg-opacity-10 active:bg-opacity-10`
            break
          case 'light':
          case 'dark':
            btnClass = `text-${config.bg} hover:bg-${config.hover} focus:bg-${config.focus} active:bg-${config.active} hover:text-${config.hover} focus:text-${config.focus} active:text-${config.active} hover:bg-opacity-10 focus:bg-opacity-10 active:bg-opacity-10`
            break
        }
        break
    }

    return (
      <props.tag
        type={props.tag === 'button' ? 'button' : null}
        href={props.tag === 'a' ? props.href : null}
        o-ripple={props.ripple === false ? null : ''}
        class={classNames({
          [theme.common]: true,
          [btnClass]: true,
          [theme[props.size]]: props.size && !props.floating,
          [theme.rounded]: props.rounded && !props.roundedFull,
          [theme.roundedFull]: props.roundedFull,
          [props.className]: true,
          [theme.disable]: props.disabled,
          [theme.floating[props.size]]: props.floating,
          [theme.fullWidth]: props.fullWidth,
          uppercase: props.uppercase,
        })}
      >
        <slot></slot>
      </props.tag>
    )
  }
}

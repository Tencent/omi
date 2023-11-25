import { tag, Component, classNames } from 'omi'
import { tailwind } from '@/tailwind'

// https://mui.com/material-ui/api/button/
const theme = {
  primary:
    'text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600',
  secondary:
    'text-secondary transition duration-150 ease-in-out hover:text-secondary-600 focus:text-secondary-600 active:text-secondary-700',
  success:
    'text-success transition duration-150 ease-in-out hover:text-success-600 focus:text-success-600 active:text-success-700',
  danger:
    'text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700',
  warning:
    'text-warning transition duration-150 ease-in-out hover:text-warning-600 focus:text-warning-600 active:text-warning-700',
  info: 'text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700',
  light:
    'text-neutral-50 transition duration-150 ease-in-out hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200',
  dark: 'text-neutral-800 transition duration-150 ease-in-out hover:text-neutral-800 focus:text-neutral-800 active:text-neutral-900 dark:text-neutral-900 dark:hover:text-neutral-900 dark:focus:text-neutral-900 dark:active:text-neutral-900',
  white:
    'text-white transition duration-150 ease-in-out hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200',
  black: 'text-black transition duration-150 ease-in-out',
  disabled: 'pointer-events-none opacity-50',
}

@tag('o-link')
export class Button extends Component {
  static css = [
    tailwind,
    `:host {
    display: inline-block;
  }
  `,
  ]

  static defaultProps = {
    color: 'primary',
    href: null,
    disabled: false,
    uppercase: false,
    underline: false,
    className: '',
  }

  render(props) {
    return (
      <a
        href={props.href}
        class={classNames(
          {
            [theme[props.color]]: true,
            [theme.disable]: props.disabled,
            uppercase: props.uppercase,
            underline: props.underline,
            'decoration-transparent hover:decoration-inherit': props.underline === 'hover',
          },
          props.className,
        )}
      >
        <slot></slot>
      </a>
    )
  }
}

import { tag, Component, classNames } from 'omi'
import { tailwind } from '@/tailwind'

const theme = {
  primary: 'bg-primary-100 text-primary-700',
  secondary: 'bg-secondary-100 text-secondary-800',
  success: 'bg-success-100 text-success-700',
  danger: 'bg-danger-100 text-danger-700',
  warning: 'bg-warning-100 text-warning-800',
  indigo: 'bg-info-100 text-info-800',
  light: 'bg-neutral-50 text-neutral-600',
  dark: 'bg-neutral-800 text-neutral-50 dark:bg-neutral-900',
}

const baseIcon = `<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
class="h-5 w-5">
<path
  fill-rule="evenodd"
  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
  clip-rule="evenodd" />
</svg>`
const icons = {
  primary: baseIcon,

  secondary: baseIcon,

  success: `<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
class="h-5 w-5">
<path
  fill-rule="evenodd"
  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
  clip-rule="evenodd" />
</svg>`,

  danger: `<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
class="h-5 w-5">
<path
  fill-rule="evenodd"
  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
  clip-rule="evenodd" />
</svg>`,
  warning: `<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
class="h-5 w-5">
<path
  fill-rule="evenodd"
  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
  clip-rule="evenodd" />
</svg>`,
  indigo: baseIcon,

  light: baseIcon,
  dark: baseIcon,
}

@tag('o-alert')
export class Button extends Component {
  static css = [
    tailwind,
    `:host {
    display: block;
  }
  `,
  ]

  static defaultProps = {
    color: 'primary',
    className: '',
  }

  render(props) {
    return (
      <div
        class={classNames(
          'mb-3 inline-flex w-full items-center rounded-lg px-6 py-5 text-base',
          theme[props.color],
          props.className,
        )}
        role="alert"
      >
        <span class="mr-2" unsafeHTML={{ html: icons[props.color] }}></span>
        <slot></slot>
      </div>
    )
  }
}

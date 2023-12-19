import { tag, Component, classNames, bind } from 'omi'
import { tailwind } from '@/tailwind'
import 'omi-ripple'

const theme = {
  root: '[word-wrap: break-word] my-[5px] mr-4 flex cursor-pointer items-center justify-between bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none dark:bg-neutral-600 dark:text-neutral-200 overflow-hidden whitespace-nowrap',
  small: 'h-[32px] rounded-[16px]',
  medium: 'h-[42px] rounded-[21px]',
  large: 'h-[52px] rounded-[26px]',

  primary: 'border border-[#3b71ca] bg-[transparent] dark:bg-[transparent]',
  secondary: 'border border-[#9fa6b2] bg-[transparent] dark:bg-[transparent]',
  success: 'border border-[#14a44d] bg-[transparent] dark:bg-[transparent]',
  danger: 'border border-[#dc4c64] bg-[transparent] dark:bg-[transparent]',
  warning: 'border border-[#e4a11b] bg-[transparent] dark:bg-[transparent]',
  info: 'border border-[#54b4d3] bg-[transparent] dark:bg-[transparent]',
  light: 'border border-[#fbfbfb] bg-[transparent] dark:bg-[transparent]',
  dark: 'border border-[#332d2d] bg-[transparent] dark:bg-[transparent]',
}

@tag('o-chip')
export class Chip extends Component {
  static css = [
    tailwind,
    `:host {
    display: inline-block;
  }
  `,
  ]

  static defaultProps = {
    outline: '', // primary secondary success danger warning info light dark
    size: 'small', // small medium large
    img: '',
    closable: false,
    tag: '',
    className: '',
  }

  @bind
  onClose(evt: MouseEvent) {
    this.fire('close', {
      nativeEvent: evt,
    })
  }

  render(props: {
    outline: '' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
    size: 'small' | 'medium' | 'large'
    img: string
    closable: boolean
    tag: string
    className?: string
  }) {
    const rippleColor = document.documentElement.classList.contains('dark')
      ? 'rgba(200,200,200,.7)'
      : 'rgba(128,128,128,.7)'

    return (
      <div
        o-ripple={{ color: rippleColor }}
        // @ts-ignore
        class={classNames(theme.root, theme[props.size], theme[props.outline], props.className)}
      >
        {props.img && (
          <img
            class="my-0 -ml-[12px] mr-[8px] h-[inherit] w-[inherit] rounded-[100%]"
            src={props.img}
            alt={props.tag}
          />
        )}
        {props.tag}
        {props.closable && (
          <span
            onClick={this.onClose}
            class="float-right w-4 cursor-pointer pl-[8px] text-[16px] text-[#afafaf] opacity-[.53] transition-all duration-200 ease-in-out hover:text-[#8b8b8b] dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-3 w-3"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        )}
      </div>
    )
  }
}

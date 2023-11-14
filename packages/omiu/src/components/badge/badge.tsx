import { tag, Component, classNames } from 'omi'
import { tailwind } from '@/tailwind'

type OmiProps<T> = T & { children?: any }

interface Props {
  dot: boolean
  content: string
  x: number
  y: number
}

const theme = {
  badge:
    'bg-red-500 text-white leading-snug top-0 right-0 h-5 flex px-1 z-10 absolute flex-wrap text-xs min-w-5 transform-gpu translate-x-1/2 -translate-y-1/2 box-border transition ease-in duration-200 items-center font-roboto font-semibold content-center rounded-full flex-row justify-center origin-top-right cursor-pointer',
  circle: 'w-2 !h-2 rounded-full min-w-2 p-0',
}

@tag('o-badge')
export default class Badge extends Component<Props> {
  static css = [
    tailwind,
    `
  :host{
    position: relative;
    display: inline-block;
  }
  `,
  ]

  static defaultProps = {
    dot: false,
    content: '',
    x: 0,
    y: 0,
  }

  render(props: OmiProps<Props>) {
    return (
      <>
        <slot></slot>
        <span
          class={classNames({
            [theme.badge]: true,
            [theme.circle]: props.dot,
          })}
          style={{
            right: props.x,
            top: props.y,
            minWidth: props.dot ? null : '1.25rem',
          }}
        >
          {props.content}
        </span>
      </>
    )
  }
}

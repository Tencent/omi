import { tag, Component, classNames } from 'omi'
import { tailwind } from '@/tailwind'

type Props = {
  // scroll: boolean
  horizontal: boolean
  tag: string
  rounded: boolean
  show: boolean
  className: string
}
const theme = {
  visible: '!visible',
  hidden: 'hidden',
  baseTransition:
    'overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none shadow-lg',
  collapsing:
    'h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none',
  collapsingHorizontal:
    'w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none',
  collapseStyles: 'rounded-lg shadow-lg',
  // scrollStyles: 'max-h-24 overflow-y-auto max-w-[500px]',
}

@tag('o-collapse')
export class Collapse extends Component<Props> {
  static css = [
    tailwind,
    `
  :host{
    display: block;
  }
  `,
  ]

  static defaultProps = {
    show: false,
    tag: 'div',
    rounded: true,
    horizontal: false,
    // scroll: false,
    className: '',
  }

  showCollapse: boolean = false
  collapseSize: number | null = 0
  transition: boolean = false
  collapseElSlot: HTMLSlotElement | null = null

  timeoutId: NodeJS.Timeout | null = null

  install(): void {
    this.showCollapse = this.props.show
    if (this.showCollapse) {
      // 防止设置为 0，导致无法显示
      this.collapseSize = null
    }
  }

  installed(): void {
    // 外层有transition，里面一直是 0 ，所以需要改成定时器获取，且获取到了之后清空定时器。修改一下
    const getSize = () => {
      setTimeout(() => {
        const el = this.collapseElSlot?.assignedElements()[0]

        if (this.showCollapse) {
          if (this.props.horizontal) {
            this.collapseSize = el?.scrollWidth || 0
          } else {
            this.collapseSize = el?.scrollHeight || 0
          }
        } else {
          this.collapseSize = 0
        }

        if (this.showCollapse && this.collapseSize === 0) {
          getSize()
        } else {
          // 防止第一次收缩没有动画，所有需要把height设置上去
          this.update()
        }
      }, 100)
    }

    requestAnimationFrame(getSize)
  }

  receiveProps() {
    this.timeoutId !== null && clearTimeout(this.timeoutId)
    const el = this.collapseElSlot?.assignedElements()[0]
    if (this.collapseSize === undefined && this.showCollapse) {
      if (this.props.horizontal) {
        this.collapseSize = el?.scrollWidth || 0
      } else {
        this.collapseSize = el?.scrollHeight || 0
      }
      this.update()
    }

    if (this.showCollapse !== this.props.show) {
      if (this.props.show) {
        this.fire('showStart')
      } else {
        this.fire('hideStart')
      }

      this.showCollapse = this.props.show
      this.transition = true
      this.update()

      this.timeoutId = setTimeout(() => {
        this.transition = false
        this.update()

        if (this.props.show) {
          this.fire('showEnd')
        } else {
          this.fire('hideEnd')
        }
      }, 350)
    }

    if (this.showCollapse) {
      if (this.props.horizontal) {
        this.collapseSize = el?.scrollWidth || 0
      } else {
        this.collapseSize = el?.scrollHeight || 0
      }
    } else {
      this.collapseSize = 0
    }
  }

  render(props: Props) {
    return (
      <props.tag
        style={props.horizontal ? { width: this.collapseSize } : { height: this.collapseSize }}
        class={classNames(
          props.rounded && theme.collapseStyles,
          theme.visible,
          this.transition &&
            theme.baseTransition &&
            (props.horizontal ? `${theme.collapsingHorizontal}` : `${theme.collapsing}`),
          !this.transition && !this.showCollapse && theme.hidden,
          // props.scroll && theme.scrollStyles,
          {
            'overflow-auto': true,
          },
          props.className,
        )}
      >
        <slot ref={(el) => (this.collapseElSlot = el)}></slot>
      </props.tag>
    )
  }
}

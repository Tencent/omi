import { tag, Component, classNames } from 'omi'
import { tailwind } from '@/tailwind'

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
  scrollStyles: 'max-h-24 overflow-y-auto max-w-[500px]',
}

@tag('o-collapse')
export class Collapse extends Component {
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
    horizontal: false,
    scroll: false,
  }

  showCollapse: false
  collapseSize: undefined
  transition: false
  collapseElSlot = null

  timeoutId = null

  receiveProps() {
    clearTimeout(this.timeoutId)
    const el = this.collapseElSlot.assignedElements()[0]
    if (this.collapseSize === undefined && this.showCollapse) {
      if (this.props.horizontal) {
        this.collapseSize = el.scrollWidth
      } else {
        this.collapseSize = el.scrollHeight
      }
      this.update()
    }

    if (this.showCollapse !== this.props.show) {
      this.props.show ? this.props.onShow?.() : this.props.onHide?.()
      this.showCollapse = this.props.show
      this.transition = true
      this.update()

      this.timeoutId = setTimeout(() => {
        this.transition = false
        this.update()
      }, 350)
    }

    if (this.showCollapse) {
      if (this.props.horizontal) {
        this.collapseSize = el.scrollWidth || 0
      } else {
        this.collapseSize = el.scrollHeight || 0
      }
    } else {
      this.collapseSize = 0
    }
  }

  render(props) {
    return (
      <props.tag
        style={props.horizontal ? { width: this.collapseSize } : { height: this.collapseSize }}
        class={classNames(
          theme.collapseStyles,
          theme.visible,
          this.transition &&
            theme.baseTransition &&
            (this.props.horizontal ? `${theme.collapsingHorizontal}` : `${theme.collapsing}`),
          !this.transition && !this.showCollapse && theme.hidden,
          this.props.scroll && theme.scrollStyles,
        )}
      >
        <slot ref={(el) => (this.collapseElSlot = el)}></slot>
      </props.tag>
    )
  }

  uninstall() {
    window.removeEventListener('resize', this.handleResize)
  }
}

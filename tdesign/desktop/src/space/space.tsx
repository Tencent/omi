import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { TdSpaceProps } from './type'
import css from './style/index'
import { toArray } from 'lodash'
import { StyledProps } from '../common'
export interface SpaceProps extends TdSpaceProps, StyledProps {}
const SizeMap = { small: '8px', medium: '16px', large: '24px' }
@tag('t-space')
export default class Space extends WeElement<SpaceProps> {
  static css = css as string
  static defaultProps = { breakLine: false, direction: 'horizontal', size: 'medium' }
  static propTypes = {
    algin: String,
    breakLine: Boolean,
    direction: String,
    separator: Object,
    size: Object,
  }

  renderGap = ''
  renderStyle = {
    gap: this.renderGap,
    ...(this.props.breakLine ? { flexWrap: 'wrap' } : {}),
    ...this.props.style,
  }

  install() {
    if (Array.isArray(this.props.size)) {
      this.renderGap = this.props.size
        .map((s: string | number) => {
          if (typeof s === 'number') return `${s}px`
          if (typeof s === 'string') return SizeMap[s] || this.props.size
          return s
        })
        .join(' ')
    } else if (typeof this.props.size === 'string') {
      this.renderGap = SizeMap[this.props.size] || this.props.size
    } else if (typeof this.props.size === 'number') {
      this.renderGap = `${this.props.size}px`
    }

    this.renderStyle = {
      gap: this.renderGap,
      ...(this.props.breakLine ? { flexWrap: 'wrap' } : {}),
      ...this.props.style,
    }
  }

  render(props: OmiProps<SpaceProps>) {
    const classPrefix = 't'

    function renderChildren() {
      const children = toArray(props.children)
      const childCount = children.length
      return children.map((child, index) => {
        // const separatorNode = renderTNodeJSX(this, 'separator') check 效果
        const showSeparator = index + 1 !== childCount && props.separator
        return (
          <>
            <div key={index} className={`${classPrefix}-space-item`}>
              {child}
            </div>
            {showSeparator && <div className={`${classPrefix}-space-item-separator`}>{props.separator}</div>}
          </>
        )
      })
    }
    return (
      <>
        <div
          style={this.renderStyle}
          class={classNames(`${classPrefix}-space`, props.class, {
            [`${classPrefix}-space-align-${props.align}`]: props.align,
            [`${classPrefix}-space-${props.direction}`]: props.direction,
          })}
        >
          {renderChildren()}
        </div>
      </>
    )
  }
}

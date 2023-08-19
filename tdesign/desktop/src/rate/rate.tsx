import { h, tag, WeElement, OmiProps, define, classNames, createRef } from 'omi'
import { RateProps } from './type'

import css from './style/index'
type IconProps = {
  size: string
  color: string
}
define(
  'rate-icon',
  class extends WeElement<IconProps> {
    static css = css

    render(props: OmiProps<IconProps>) {
      return (
        <svg
          fill="none"
          viewBox={`0 0 24 24`}
          width="1em"
          height="1em"
          color="var(--td-bg-color-component)"
          style={`font-size: ${props.size};`}
        >
          <path
            fill={props.color}
            d="M12 .63l2.9 8.35 8.84.18-7.04 5.34 2.56 8.46L12 17.91l-7.26 5.05L7.3 14.5.26 9.16l8.84-.18L12 .63z"
          ></path>
        </svg>
      )
    }
  },
)

@tag('t-rate')
export default class Rate extends WeElement<RateProps> {
  static css = css as string

  static defaultProps = {
    defaultValue: 1,
    allowHalf: false,
    color: '#ED7B2F',
    size: '24px',
    count: 5,
    gap: 4,
    showText: false,
    texts: ['极差', '失望', '一般', '满意', '惊喜'],
  }

  static propTypes = {
    allowHalf: Boolean,
    // color: [String, Array],
    count: Number,
    disabled: Boolean,
    gap: Number,
    icon: Object,
    showText: Boolean,
    size: String,
    texts: Array,
    value: Number,
    defaultValue: Number,
    onChange: Function,
  }

  hoverValue: number | undefined = undefined
  starValue: number | undefined = undefined
  rootRef = createRef()
  getStarValue = (event: MouseEvent, index: number) => {
    if (this.props.allowHalf) {
      const rootNode = this.rootRef.current
      const { left } = rootNode.getBoundingClientRect()
      const firstStar = rootNode.firstChild as HTMLElement
      const { width } = firstStar.getBoundingClientRect()
      const { clientX } = event
      const starMiddle = width * (index - 0.5) + this.props.gap * (index - 1)
      if (clientX - left >= starMiddle) return index
      if (clientX - left < starMiddle) return index - 0.5
    }
    return index
  }

  mouseLeaveHandler = () => {
    if (this.props.disabled) return
    this.hoverValue = undefined
    this.update()
  }

  mouseEnterHandler = (event: MouseEvent, index: number) => {
    if (this.props.disabled) return
    this.hoverValue = this.getStarValue(event, index)
    this.update()
  }

  clickHandler = (event: MouseEvent, index: number) => {
    if (this.props.disabled) return
    this.starValue = this.getStarValue(event, index)
    this.update()
  }

  render(props: OmiProps<RateProps>) {
    const classPrefix = 't'
    const displayValue = this.hoverValue || this.starValue || props.defaultValue
    const activeColor = Array.isArray(this.props.color) ? this.props.color[0] : this.props.color
    const defaultColor = Array.isArray(this.props.color) ? this.props.color[1] : 'var(--td-bg-color-component)'

    const getStarCls = (index: number) => {
      if (props.allowHalf && index + 0.5 === displayValue) return `${classPrefix}-rate__item--half`
      if (index >= displayValue) return ''
      if (index < displayValue) return `${classPrefix}-rate__item--full`
    }
    return (
      <div class={`${classPrefix}-rate`} onMouseleave={this.mouseLeaveHandler}>
        <ul class={`${classPrefix}-rate__list`} style={{ gap: `${props.gap}px` }} ref={this.rootRef}>
          {[...Array(props.count)].map((_, index) => (
            <li
              key={index}
              className={classNames(`${classPrefix}-rate__item`, getStarCls(index))}
              onClick={(event) => this.clickHandler(event, index + 1)}
              onMouseMove={(event) => this.mouseEnterHandler(event, index + 1)}
            >
              <>
                <div className={`${classPrefix}-rate__star-top`}>
                  <rate-icon size={props.size} color={activeColor} />
                </div>
                <div className={`${classPrefix}-rate__star-bottom`}>
                  <rate-icon size={props.size} color={defaultColor} />
                </div>
              </>
            </li>
          ))}
        </ul>
        {props.showText && <div className={`${classPrefix}-rate__text`}>{props.texts[displayValue - 1]}</div>}
      </div>
    )
  }
}

import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { TdDividerProps } from './type'
import css from './style/index'
import { StyledProps } from '../common'
export interface DividerProps extends TdDividerProps, StyledProps {}
@tag('t-divider')
export default class Divider extends WeElement<DividerProps> {
  static css = css as string

  static defaultProps = {
    align: 'center',
    dashed: false,
    layout: 'horizontal',
  }

  static propTypes = {
    algin: String,
    content: Object,
    dashed: Boolean,
    layout: String,
  }

  render(props: OmiProps<DividerProps>) {
    const classPrefix = 't'
    const childNode = props.content || props.children

    const showText = props.layout !== 'vertical' && !!childNode
    const dividerClassNames = classNames(props.class, `${classPrefix}-divider`, {
      [`${classPrefix}-divider--${props.layout}`]: props.layout,
      [`${classPrefix}-divider--dashed`]: !!props.dashed,
      [`${classPrefix}-divider--with-text`]: showText,
      [`${classPrefix}-divider--with-text-${props.align}`]: showText,
    })
    return (
      <div class={dividerClassNames} style={props.style}>
        {showText ? <span class={`${classPrefix}-divider__inner-text`}>{childNode}</span> : null}
      </div>
    )
  }
}

import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { DividerProps } from './type'
import './style/index.js'
import css from './style/index'

@tag('t-divider')
export default class Link extends WeElement<DividerProps> {
  static css = css as string

  static defaultProps = {
    align: 'center',
    dashed: false,
    layout: 'horizontal',
  }

  static propTypes = {
    algin: String,
    children: Object,
    content: Object,
    dashed: Boolean,
    layout: String,
    style: String,
    class: String,
  }

  render(props: OmiProps<DividerProps>) {
    const classPrefix = 't'
    // TODO: children is null
    const childNode = props.content || props.children

    const showText = props.layout !== 'vertical' && !!childNode
    const dividerClassNames = classNames(props.class, `${classPrefix}-divider`, {
      [`${classPrefix}-divider--${props.layout}`]: props.layout,
      [`${classPrefix}-divider--dashed`]: !!props.dashed,
      [`${classPrefix}-divider--with-text`]: showText,
      [`${classPrefix}-divider--with-text-${props.align}`]: showText,
    })
    console.log('props.style', props.style)
    return (
      <div class={dividerClassNames} style={props.style}>
        {showText ? <span class={`${classPrefix}-divider__inner-text`}>{childNode}</span> : null}
      </div>
    )
  }
}

import { OmiProps, WeElement, h, tag, classNames, createRef } from 'omi'
import style from './style'
import { TagProps } from './type'
import { TdClassNamePrefix, noop } from '../utils'
import '../icon/close'
import ListItem from '@src/list/list-item'
import { setThemePrimary } from '@omiu/common'
const TagClassNamePrefix = (className: string) => TdClassNamePrefix('tag') + className

@tag('t-tag')
export default class Tag extends WeElement<TagProps> {
  static css = style

  // iconStyle = `
  // .t-icon{
  //   margin-right: var(--td-comp-margin-xs);
  //   width: calc(var(--td-font-size-body-medium) + 2px);
  //   height: calc(var(--td-font-size-body-medium) + 2px);
  //   -ms-flex-negative: 0;
  //   flex-shrink: 0;
  // }
  // `

  // tagStyle = `.t-tag {
  //     vertical-align: middle;
  //     -webkit-animation: t-fade-in .2s ease-in-out;
  //     animation: t-fade-in .2s ease-in-out;
  //     margin: 3px var(--td-comp-margin-xs) 3px 0;
  //   }
  // `

  static defaultProps = {
    closable: false,
    disabled: false,
    icon: undefined,
    shape: 'square',
    size: 'medium',
    theme: 'default',
    variant: 'dark',
    onClick: noop,
    onClose: noop,
  }

  static propTypes = {
    closable: Boolean,
    disabled: Boolean,

    children: String,
    content: String,
    icon: String,
    maxWidth: String,
    shape: String,
    size: String,
    theme: String,
    variant: String,

    onClick: Function,
    onClose: Function,
  }

  span = createRef()

  install() {
    // this.attributes.css += this.tagStyle
    // console.log(this.attributes)
  }

  cls() {
    return classNames(
      TdClassNamePrefix('tag'),
      TagClassNamePrefix(`--${this.props.theme}`),
      TagClassNamePrefix(`--${this.props.variant}`),
      {
        [TagClassNamePrefix(`--${this.props.shape}`)]: this.props.shape !== 'square',
        [TagClassNamePrefix(`--ellipsis`)]: !!this.props.maxWidth,
        [TagClassNamePrefix(`--disabled`)]: this.props.disabled,
        [TdClassNamePrefix(`size-s`)]: this.props.size == 'small',
        [TdClassNamePrefix(`size-l`)]: this.props.size == 'large',
      },
    )
  }

  deleteIcon = (
    <t-icon-close
      onClick={(e) => {
        if (this.props.disabled) return
        this.fire('close', { event: e })
      }}
      class={classNames(TagClassNamePrefix(`__icon-close`))}
    />
  )

  getTitle(children: any) {
    if (children && typeof children === 'object') return { title: children[0] }
  }

  render(props: OmiProps<TagProps, any>, store: any) {
    const { disabled, maxWidth, icon, children, content, closable, onClick, style } = props

    // (() => console.log(icon.attributes))()
    if (icon) {
      icon.attributes['style'] = {}
      icon.attributes.style['marginRight'] = 4
    }

    return (
      <span
        class={this.cls()}
        part="my-part"
        ref={this.span}
        onClick={(e) => {
          if (disabled) return
          onClick({ e })
        }}
        style={maxWidth ? { maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth, ...style } : style}
      >
        <>
          {icon}
          <span class={maxWidth ? TagClassNamePrefix(`--text`) : undefined} {...this.getTitle(children)}>
            {children ?? content}
          </span>
          {closable && !disabled && this.deleteIcon}
        </>
      </span>
    )
  }
}

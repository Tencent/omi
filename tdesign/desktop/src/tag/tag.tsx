import { OmiProps, WeElement, h, tag, classNames, createRef } from 'omi'
import style from './style'
import { TagProps } from './type'
import { TdClassNamePrefix } from '../utils/clsx'
import "../icon/delete"
import { AnyMxRecord } from 'dns'
const TagClassNamePrefix = (className: string) => TdClassNamePrefix('tag__') + className


@tag('t-tag')
export default class Tag extends WeElement<TagProps> {
  static css = style

  static defaultProps = {
    closable: false,
    disabled: false,
    icon: undefined,
    shape: 'square',
    size: 'medium',
    theme: 'default',
    variant: 'dark',
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

  installed(): void {
    // console.log(this.titleAttribute)
  }
  
  tagClassPrefix = `t-tag`;
  cls(){
    return classNames(
      TdClassNamePrefix('tag'),
      `${this.tagClassPrefix}--${this.props.theme}`,
        `${this.tagClassPrefix}--${this.props.variant}`,
        {
          [`${this.tagClassPrefix}--${this.props.shape}`]: this.props.shape !== 'square',
          [`${this.tagClassPrefix}--ellipsis`]: !!this.props.maxWidth,
          [`${this.tagClassPrefix}--disabled`]: this.props.disabled,
        },
  
    )
  } 

  deleteIcon = (
    <t-icon-delete
      onClick={(e) => {
        if (this.props.disabled) return;
        onClose({ e });
      }}
      class={classNames(TagClassNamePrefix(`icon_close`))}
    />
  )
  
  getTitle(children : any){
    if (children && typeof children === 'object') return {title: children[0]}
  }


  render(props: OmiProps<TagProps, any>, store: any) {
    const {disabled, maxWidth, icon, children,content,closable, } = props

    return (
      <>
        <span class={this.cls()}
        ref={this.span}
        onClick={(e) => {
          if (disabled) return;
          this.onclick(e);
        }}
        style={maxWidth ? { maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth, ...style } : style}>
        <>
          {icon}
          <span class={maxWidth ? TdClassNamePrefix(`tag-text`) : undefined} {...this.getTitle(children)}>
            {children ?? content}
          </span>
          {closable && !disabled && this.deleteIcon}
        </>
        </span>
      </>
    )
  }
}

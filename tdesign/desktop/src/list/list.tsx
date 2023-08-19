import { OmiProps, WeElement, h, tag, classNames } from 'omi'
import style from './style'
import { ListProps } from './types'
import { TdClassNamePefix } from '../utils/clsx'

const ListClassNamePefix = (className: string) => TdClassNamePefix('list__') + className

@tag('t-list')
export default class BackTop extends WeElement<ListProps> {
  static css = style

  static defaultProps = {
    layout:'horizontal',
    size:'size',
    split:false,
    stripe:false,
  }

  static propTypes = {
    split:Boolean,
    stripe:Boolean,
    dragSort:Boolean,


    asyncLoading:String,
    footer:String,
    header:String,
    children:String,

    layout:String,
    size:String,

    onLoadMore: Function,
    onScroll: Function,
  }
  install() {
    console.log(this)
    console.log(this.children[0])
    console.log(this.children[0].children)
  }
  getClasses(split:Boolean, stripe:Boolean) {
    let cls:string[] = []
    if(split){
      cls.push(TdClassNamePefix('list--split'))
    }
    if(stripe){
      cls.push(TdClassNamePefix('list--stripe'))
    }
    return cls
  }

  render(props: OmiProps<ListProps, any>, store: any) {
    const { header, footer , split, stripe} = props

    return (
      <>
        <div class={classNames(TdClassNamePefix('list'),...this.getClasses(split,stripe))}>
          <slot name='header'></slot>
          {header && <div>{header}</div>}
          <ul class={classNames(ListClassNamePefix('inner'))}>
            <slot></slot>
          </ul>
          {footer && <div>{footer}</div>}
          <slot name='footer'></slot>
        </div>
      </>
    )
  }
}

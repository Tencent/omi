import { OmiProps, WeElement, h, tag, classNames } from 'omi'
import style from './style'
import { ListProps } from './types'
import { TdClassNamePrefix } from '../utils/clsx'

const ListClassNamePrefix = (className: string) => TdClassNamePrefix('list__') + className

@tag('t-list')
export default class BackTop extends WeElement<ListProps> {
  static css = style

  static defaultProps = {
    layout: 'horizontal',
    size: 'size',
    split: false,
    stripe: false,
  }

  static propTypes = {
    split: Boolean,
    stripe: Boolean,
    dragSort: Boolean,

    asyncLoading: String,
    footer: String,
    header: String,
    children: String,

    layout: String,
    size: String,

    onLoadMore: Function,
    onScroll: Function,
  }

  install() {
  }
  getClasses(split:Boolean, stripe:Boolean) {
    let cls:string[] = []
    if(split){
      cls.push(TdClassNamePrefix('list--split'))
    }
    if (stripe) {
      cls.push(TdClassNamePrefix('list--stripe'))
    }
    return cls
  }

  renderLoadElement(asyncLoading : string){
    console.log(asyncLoading)
    if(typeof asyncLoading == 'string' && asyncLoading){
      return (
        <div
      className={classNames(ListClassNamePrefix(`load`), {
        [ListClassNamePrefix(`load--loading`)]: asyncLoading === 'loading',
        [ListClassNamePrefix(`load--load-more`)]: asyncLoading === 'load-more',
      })}
      onClick={this.handleClickLoad}
    >
      {asyncLoading === 'loading' && (
        <div>
          {/* <Loading loading={true} /> */}
          <span>正在加载中，请稍后</span>
        </div>
      )}
      {asyncLoading === 'load-more' && <span>点击加载更多</span>}
    </div>
      )
    }
  }

  render(props: OmiProps<ListProps, any>, store: any) {
    const { header, footer , split, stripe, children, asyncLoading} = props

    return (
      <>
        <div class={classNames(TdClassNamePrefix('list'), ...this.getClasses(split, stripe))}>
          {header && <div>{header}</div>}
          <ul class={classNames(ListClassNamePrefix('inner'))}>
            {this.children && <div>{children}</div>}
          </ul>
          {asyncLoading && this.renderLoadElement(asyncLoading)}
          {footer && <div>{footer}</div>}
        </div>
      </>
    )
  }
}
// ...this.getClasses(split,stripe)

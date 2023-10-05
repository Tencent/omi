import { OmiProps, WeElement, h, tag, classNames } from 'omi'
import style from './style'
import { ListProps } from './types'
import { TdClassNamePrefix } from '../utils'
import '../loading/loading'

const ListClassNamePrefix = (className: string) => TdClassNamePrefix('list__') + className

@tag('t-list')
export default class BackTop extends WeElement<ListProps> {
  stripeCss = `
    .t-list-item:nth-child(even){
      background: var(--td-bg-color-secondarycontainer) ;
    }
  `

  splitCss = `
    .t-list-item::after {
      background: var(--td-border-level-1-color);
    }
  
  `

  smallSizeCss = `
    .t-list-item {
      padding: var(--td-comp-paddingTB-s) var(--td-comp-paddingLR-m) !important;
    }
  `

  largeSizeCss = `
    .t-list-item {
      padding: var(--td-comp-paddingTB-l) var(--td-comp-paddingLR-xl) !important;
    }
  `

  static css = style

  static defaultProps = {
    layout: 'horizontal',
    size: 'medium',
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

  childrenlist

  install() {
    let that = this
    this.childrenlist = this.props.children
    if (this.props.stripe) {
      this.childrenlist.map((item, index) => {
        if ((index + 1) % 2 == 0) {
          if (!item.attributes.css) {
            item.attributes.css = ''
          }
          item.attributes.css += that.stripeCss
        }
      })
    }

    if (this.props.split) {
      this.childrenlist.map((item, index) => {
        if (index + 1 != this.childrenlist.length) {
          if (!item.attributes.css) {
            item.attributes.css = ''
          }
          item.attributes.css += that.splitCss
        }
      })
    }
    if (this.props.size) {
      if (this.props.size == 'small') {
        this.childrenlist.map((item) => {
          if (!item.attributes.css) {
            item.attributes.css = ''
          }
          item.attributes.css += that.smallSizeCss
        })
      }
      if (this.props.size == 'large') {
        this.childrenlist.map((item) => {
          if (!item.attributes.css) {
            item.attributes.css = ''
          }
          item.attributes.css += that.largeSizeCss
        })
      }
    }
    if (this.props.onScroll) {
    }
  }
  getClasses(split: Boolean, stripe: Boolean) {
    let cls: string[] = []
    if (split) {
      cls.push(TdClassNamePrefix('list--split'))
    }
    if (stripe) {
      cls.push(TdClassNamePrefix('list--stripe'))
    }
    return cls
  }

  renderLoadElement(asyncLoading: string) {
    if (typeof asyncLoading == 'string' && asyncLoading) {
      return (
        <div
          className={classNames(ListClassNamePrefix(`load`), {
            [ListClassNamePrefix(`load--loading`)]: asyncLoading === 'loading',
            [ListClassNamePrefix(`load--load-more`)]: asyncLoading === 'load-more',
          })}
          onClick={(e) => {
            this.handleClickLoad(e, asyncLoading)
          }}
        >
          {asyncLoading === 'loading' && (
            <div>
              <t-loading />
              <span>正在加载中，请稍后</span>
            </div>
          )}
          {asyncLoading === 'load-more' && <span>点击加载更多</span>}
        </div>
      )
    }
  }

  handleClickLoad = (e: Event, asyncLoading: string) => {
    if (asyncLoading === 'load-more') {
      console.log(e)
      this.fire('loadMore', { event: e })
    }
  }

  renderHeader(header: any) {
    return <div class={classNames(ListClassNamePrefix('header'))}>{header}</div>
  }

  renderFooter(footer: any) {
    return <div class={classNames(ListClassNamePrefix('footer'))}>{footer}</div>
  }

  render(props: OmiProps<ListProps, any>, store: any) {
    const { header, footer, split, stripe, asyncLoading } = props

    return (
      <>
        <div class={classNames(TdClassNamePrefix('list'), ...this.getClasses(split, stripe))}>
          {header && this.renderHeader(header)}
          <ul class={classNames(ListClassNamePrefix('inner'))}>
            {this.childrenlist && <div>{this.childrenlist}</div>}
          </ul>
          {asyncLoading && this.renderLoadElement(asyncLoading)}
          {footer && this.renderFooter(footer)}
        </div>
      </>
    )
  }
}
// ...this.getClasses(split,stripe)

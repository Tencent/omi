import { OmiProps, WeElement, h, tag, classNames, createRef, extend, get, set } from 'omi'
import style from './style'
import { scrollTo } from '../utils/dom'
// import useScroll from './useScroll'
import { BackTopProps, UseScrollProps } from './types'
import { TdClassNamePrefix } from '../utils'

import './backtop'

const BackTopClassNamePrefix = (className: string) => TdClassNamePrefix('back-top__') + className

// extend('model', (el, path, scope) => {
//   el.value = get(scope, path)
//   el.addEventListener('input', () => {
//     set(scope, path, el.value)
//     scope.update()
//   })
// })

@tag('t-back-top')
export default class BackTop extends WeElement<BackTopProps> {
  static css = style

  static defaultProps = {
    container: 'body',
    duration: 200,
    offset: ['24px', '80px'],
    shape: 'square',
    size: 'medium',
    target: 'body',
    theme: 'light',
    visibleHeight: '200px',
  }

  static propTypes = {
    container: String,
    content: String,
    default: String,
    target: String,

    duration: Number,
    offset: Array<String>,
    visibleHeight: String,

    shape: String,
    size: String,
    theme: String,

    onClick: Function,
  }

  // scrollProps = {
  //   scrollLeft : 0,
  //   scrollTop : 0
  // }
  // scrollLeft = 0
  // scrollTop = {}

  // useScroll = (props: UseScrollProps) => {
  //   let that = this
  //   const { target } = props;

  //   const [scrollLeft,] = [0,0];
  //   const [scrollTop, setScrollTop] = [0,0];

  //   if (!target) return;

  //   const setPosition = () => {
  //     if (target === document) {
  //       that.scrollLeft = target.documentElement.scrollLeft
  //       that.scrollTop = target.documentElement.scrollTop
  //     } else {
  //       that.scrollLeft = (target as HTMLElement).scrollLeft
  //       that.scrollTop = (target as HTMLElement).scrollTop
  //     }
  //   };
  //     target.addEventListener('scroll', setPosition);
  //     return () => {
  //       target.removeEventListener('scroll', setPosition);
  //   };

  //   return {
  //     scrollLeft,
  //     scrollTop,
  //   };
  // };

  getContainer = (container: BackTopProps['container']) => {
    if (typeof container === 'string' && typeof document !== undefined) {
      if (container === 'body') {
        return document
      }
      container = container.slice(1, this.props.container.length)
      if (container == this.parentNode.children[0].classList[0]) {
        let containerNode = this.parentNode.children[0].shadowRoot.children[1]
        return containerNode
      }
      // return document.querySelector(container)
    }
    if (typeof container === 'function') {
      return container()
    }
    return null
  }

  defaultContent = (
    <>
      <t-icon-backtop class={classNames(BackTopClassNamePrefix('icon'))} size="medium"></t-icon-backtop>
      <span class={classNames(BackTopClassNamePrefix('text'))}>TOP</span>
    </>
  )

  renderChildren(content: any, cusContent: any) {
    return content || cusContent || this.defaultContent
  }

  getBackTo = () => {
    // if (!this.props.container) return 0
    // const targetNode = this.getContainer(this.props.container)
    // if (!targetNode) return 0
    // const rect = targetNode.getBoundingClientRect()
    // const { y } = rect
    // return y
    return 0
  }

  scrollContainer

  visibleHeight =
    typeof this.props.visibleHeight == 'number' ? this.props.visibleHeight : parseInt(this.props.visibleHeight)
  // scrollTop = useScroll({ target: this.scrollContainer })

  installed() {
    this.scrollContainer = this.getContainer(this.props.container)
    let that = this
    // console.log(document.querySelector(this.props.container));
    // console.log(this.getContainer(this.props.container))
    // console.log(this.props.container.slice(1,this.props.container.length))
    // console.log(this.parentNode.children[0].classList[0])
    // let containerNode = null

    // if(container == this.parentNode.children[0].classList[0]){
    //   containerNode = this.parentNode.children[0].shadowRoot.children[1]
    // }

    let buttonNode = this.button.current
    // buttonNode.style.position = 'absolute'
    if (this.props.offset) {
      buttonNode.style.right = this.props.offset[0]
      buttonNode.style.bottom = this.props.offset[1]
    }

    let duration = this.props.duration
    let scrollContainer = this.getContainer(this.props.container)
    buttonNode.addEventListener('click', () => {
      const backTo = that.getBackTo()
      scrollTo(backTo, { container: scrollContainer, duration })
      // containerNode.scrollTop = 0
      // this.classList.remove(TdClassNamePrefix(`back-top--show`)) // 移除类名
    })

    let visibleHeight = 0
    if (typeof this.props.visibleHeight == 'number') {
      visibleHeight = this.props.visibleHeight
    } else {
      visibleHeight = parseInt(this.props.visibleHeight)
    }

    scrollContainer.addEventListener('scroll', () => {
      let offsetTop
      if (scrollContainer === document) {
        offsetTop = Math.abs(scrollContainer.documentElement.scrollTop)
      } else {
        offsetTop = Math.abs((scrollContainer as HTMLElement).scrollTop)
      }
      if (offsetTop >= visibleHeight) {
        buttonNode.classList.add(TdClassNamePrefix(`back-top--show`)) // 添加类名
      } else {
        buttonNode.classList.remove(TdClassNamePrefix(`back-top--show`)) // 移除类名
      }
    })
  }

  getSizeClass(size: string) {
    if (size == 'medium') {
      return TdClassNamePrefix(`size-m`)
    } else if (size == 'small') {
      return TdClassNamePrefix(`size-s`)
    }
  }

  // getThemeClass(theme : string){
  //   return TdClassNamePrefix(`back-top--theme-${theme}`)
  // }

  // getShapeClass(shpae : string){
  //   return TdClassNamePrefix(`back-top--${shpae}`)
  // }

  visible() {
    let scrollContainer = this.getContainer(this.props.container)
    let offsetTop = 0
    if (scrollContainer === document) {
      offsetTop = Math.abs(scrollContainer.documentElement.scrollTop)
    } else {
      offsetTop = Math.abs((scrollContainer as HTMLElement).scrollTop)
    }
    return offsetTop >= this.props.visibleHeight
  }

  cls() {
    return classNames(
      TdClassNamePrefix(`back-top`),
      TdClassNamePrefix(`back-top--theme-${this.props.theme}`),
      TdClassNamePrefix(`back-top--${this.props.shape}`),
      {
        [TdClassNamePrefix(`back-top--show`)]: this.visible(),
        [TdClassNamePrefix(`size-s`)]: this.props.size === 'small',
        [TdClassNamePrefix(`size-m`)]: this.props.size === 'medium',
      },
    )
  }

  //textarea ref
  button = createRef()

  render(props: OmiProps<BackTopProps, any>, store: any) {
    const { content } = props
    const cusContent = props.default
    return (
      <>
        <button type="button" class={this.cls()} ref={this.button}>
          {this.renderChildren(content, cusContent)}
        </button>
      </>
    )
  }
}

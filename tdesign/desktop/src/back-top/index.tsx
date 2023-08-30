import { OmiProps, WeElement, h, tag, classNames, createRef } from 'omi'
import style from './style'
import { scrollTo } from '../utils/dom';
import { BackTopProps } from './types'
import { TdClassNamePrefix } from '../utils/clsx'

import '../icon/backtop'

const BackTopClassNamePrefix = (className: string) => TdClassNamePrefix('back-top__') + className

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

  getContainer = (container: BackTopProps['container']) => {
    if (typeof container === 'string' && typeof document !== undefined) {
      if (container === 'body') {
        return document
      }
      container = container.slice(1,this.props.container.length)
      if(container == this.parentNode.children[0].classList[0]){
        let containerNode = this.parentNode.children[0].shadowRoot.children[1]
        return containerNode
      }
      // return document.querySelector(container)
    }
    if (typeof container === 'function') {
      return container()
    }
    return null
  };
  
  getBackTo = () => {
    // if (!this.props.container) return 0
    // const targetNode = this.getContainer(this.props.container)
    // if (!targetNode) return 0
    // const rect = targetNode.getBoundingClientRect()
    // const { y } = rect
    // return y
    return 0
  }


  installed() {
    let that = this
    // console.log(document.querySelector(this.props.container));
    // console.log(this.getContainer(this.props.container))
    let container = this.props.container.slice(1,this.props.container.length)
    // console.log(this.props.container.slice(1,this.props.container.length))
    // console.log(this.parentNode.children[0].classList[0])
    let containerNode = null

    if(container == this.parentNode.children[0].classList[0]){
      containerNode = this.parentNode.children[0].shadowRoot.children[1]
    }
    
    let buttonNode = this.button.current
    buttonNode.style.position = 'absolute'
    if(this.props.offset){
      buttonNode.style.right = this.props.offset[0]
      buttonNode.style.bottom = this.props.offset[1]
    }

    let duration = this.props.duration
    let scrollContainer = this.getContainer(this.props.container)
    buttonNode.addEventListener('click', () => {
      const backTo = that.getBackTo();
      console.log(backTo)
      scrollTo(backTo, { container: scrollContainer, duration });
      // containerNode.scrollTop = 0
      // this.classList.remove(TdClassNamePrefix(`back-top--show`)) // 移除类名
    })

    let visibleHeight = 0
    if (typeof this.props.visibleHeight == 'number') {
      visibleHeight = this.props.visibleHeight
    } else {
      visibleHeight = parseInt(this.props.visibleHeight)
    }

    containerNode.addEventListener('scroll', () => {
      const offsetTop = Math.abs(containerNode.scrollTop)
      if (offsetTop > visibleHeight) {
        buttonNode.classList.add(TdClassNamePrefix(`back-top--show`)) // 添加类名
      } else {
        buttonNode.classList.remove(TdClassNamePrefix(`back-top--show`)) // 移除类名
      }
    })
  }

  
  getSizeClass(size : string){
    if(size == 'medium'){
      return TdClassNamePrefix(`size-m`)
    }
    else if(size == 'small'){
      return TdClassNamePrefix(`size-s`)
    }
  }

  getThemeClass(theme : string){
    return TdClassNamePrefix(`back-top--theme-${theme}`)
  }

  getShapeClass(shpae : string){
    return TdClassNamePrefix(`back-top--${shpae}`)
  }

  //textarea ref
  button = createRef()

  render(props: OmiProps<BackTopProps, any>, store: any) {
    const { container, visibleHeight, offset, size, theme, shape } = props

    

    return (
      <>
        <button
          type="button"

          class={classNames(TdClassNamePrefix('back-top'),
                  this.getSizeClass(size),
                  this.getThemeClass(theme),
                  this.getShapeClass(shape)
                  )}
          ref={this.button}

        >
          <t-icon-backtop></t-icon-backtop>
          <span class={classNames(BackTopClassNamePrefix('text'))}>TOP</span>
        </button>
      </>
    )
  }
}

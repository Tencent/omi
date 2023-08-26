import { OmiProps, WeElement, h, tag, classNames, createRef } from 'omi'
import style from './style'
import { BackTopProps } from './types'
import { TdClassNamePrefix } from '../utils/clsx'

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

  installed() {

    console.log(this.props.container)
    let containerNode = document.querySelector(this.props.container).children[0]
    let buttonNode = this.button.current
    if(this.props.offset){
      buttonNode.style.right = this.props.offset[0]
      buttonNode.style.bottom = this.props.offset[1]
    }
    

    buttonNode.addEventListener('click', () => {
      containerNode.scrollTop = 0
      this.classList.remove(TdClassNamePrefix(`back-top--show`)) // 移除类名
    })

    let visibleHeight = 0
    if (typeof this.props.visibleHeight == 'number') {
      visibleHeight = this.props.visibleHeight
    } else {
      visibleHeight = parseInt(this.props.visibleHeight)
    }

    containerNode.addEventListener('scroll', () => {
      const offsetTop = Math.abs(containerNode.scrollTop)
      console.log(containerNode.scrollTop)
      if (offsetTop > visibleHeight) {
        buttonNode.classList.add(TdClassNamePrefix(`back-top--show`)) // 添加类名
      } else {
        buttonNode.classList.remove(TdClassNamePrefix(`back-top--show`)) // 移除类名
      }
    })
  }

  
  getSizeClass(size : string){
    if(size == 'medium'){
      return TdClassNamePefix(`size-m`)
    }
    else if(size == 'small'){
      return TdClassNamePefix(`size-s`)
    }
  }

  getThemeClass(theme : string){
    return TdClassNamePefix(`back-top--theme-${theme}`)
  }

  getShapeClass(shpae : string){
    return TdClassNamePefix(`back-top--${shpae}`)
  }

  //textarea ref
  button = createRef()

  render(props: OmiProps<BackTopProps, any>, store: any) {
    const { container, visibleHeight, offset, size, theme, shape } = props

    

    return (
      <>
        <button
          type="button"

          class={classNames(TdClassNamePefix('back-top'),
                  this.getSizeClass(size),
                  this.getThemeClass(theme),
                  this.getShapeClass(shape)
                  )}
          ref={this.button}

        >
          <span class={classNames(BackTopClassNamePrefix('text'))}>返回顶部</span>
          <svg
            t="1692345983557"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4867"
            class={classNames(BackTopClassNamePrefix('icon'))}
          >
            <path
              d="M877.330034 611.250468 542.062178 273.77841c-7.429203-7.463995-17.135262-11.05273-26.801413-10.978029-1.309832-0.107447-2.426259-0.74599-3.736091-0.74599-5.451152 0-10.527774 1.270946-15.192004 3.361561-4.705162 1.793856-9.18315 4.516874-12.992919 8.328689L180.811554 575.74686c-14.600533 14.559601-14.633279 38.192857-0.039909 52.78725 7.2798 7.315616 16.838503 10.977006 26.429952 10.977006 9.55768 0 19.077497-3.660366 26.396183-10.902304l240.59873-240.222153 0 485.548558c0 20.643156 16.72287 37.332257 37.32714 37.332257 20.609387 0 37.332257-16.690124 37.332257-37.332257L548.855908 386.556986l275.53952 277.328259c7.2798 7.318686 16.912182 11.015891 26.463722 11.015891 9.559727 0 19.042705-3.625574 26.323529-10.862395C891.850749 649.51291 891.889635 625.844861 877.330034 611.250468L877.330034 611.250468zM922.166195 187.393971 100.889293 187.393971c-20.61041 0-37.334303-16.723893-37.334303-37.32714 0-20.608364 16.723893-37.332257 37.334303-37.332257L922.166195 112.734574c20.642133 0 37.32714 16.723893 37.32714 37.332257C959.493336 170.669054 942.808328 187.393971 922.166195 187.393971L922.166195 187.393971zM922.166195 187.393971"
              fill="#000000"
              p-id="4868"
            ></path>
          </svg>
        </button>
      </>
    )
  }
}

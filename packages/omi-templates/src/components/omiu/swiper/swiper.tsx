import { tag, Component, OmiProps, bind, VNode } from 'omi'
// import '../collapse/collapse'


/**
 * copy from omiu/src/components/swiper
 * Changes:
 * 1. Added Props: slidesPreView, spaceBetween, autoPlay.
 * 2. Added a timerId to store the ID of the autoplay interval.
 * 3. Added startAutoplay method to start the autoplay with a default interval of 3 seconds.
 * 4. Added pauseAutoplay method to pause the autoplay when the mouse hovers over the component.
 * 5. Added resumeAutoplay method to resume the autoplay when the mouse leaves the component.
 * 6. Added event listeners for mouseover and mouseleave to rootElement in the installed method.
 * 7. Cleaned up the interval and event listeners in the uninstall method.
 */

// https://swiperjs.com/get-started
// import Swiper JS
import Swiper from 'swiper'
// import Swiper styles
import swiperStyle from 'swiper/css?raw'

interface Props {
  direction?: 'vertical' | 'horizontal'
  loop?: boolean
  index: number
  navigation?: boolean
  slidesPerView?: "auto" | number
  spaceBetween?: number,
  autoplay?: boolean 
}

const theme = {
  paginationButton:
    'mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none',
}

@tag('o-swiper')
export class SwiperComponent extends Component<Props> {
  static css = [
    swiperStyle,
    `:host {
    display: block;
  }
  `,
  ]
  paginationDiv: any
  timerId: NodeJS.Timeout | null = null // 定时器ID

  @bind
  onPreviusClick(evt: Event) {
    this.swiper?.slidePrev()
    this.fire('change', {
      index: this.swiper!.realIndex,
      nativeEvent: evt,
    })
  }

  @bind
  onNextClick(evt: Event) {
    this.swiper?.slideNext()
    this.fire('change', {
      index: this.swiper!.realIndex,
      nativeEvent: evt,
    })
  }

  @bind
  onPaginationClick(index: number, evt: Event) {
    // https://www.swiper.com.cn/api/methods/417.html
    this.swiper?.slideToLoop(index)
    this.fire('change', {
      index,
      nativeEvent: evt,
    })
  }

  static defaultProps = {
    direction: 'horizontal', // vertical | horizontal
    loop: true,
    index: 0,
    navigation: true,
    pagination: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: true
  }

  swiper: Swiper | null = null

  installed(): void {
    this.swiper = new Swiper(this.rootElement!, {
      // Optional parameters
      direction: this.props.direction,
      loop: this.props.loop,
      initialSlide: this.props.index,
      slidesPerView: this.props.slidesPerView,
      spaceBetween:this.props.spaceBetween,
      observer: true,
      observeParents: true
  
      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    })
    // try {
    //   console.log('swiper',this.swiper)
    //   this.swiper.slidesPerViewDynamic()  // 动态设置slidesPerView
    //   this.swiper.autoplay.start()  // 自动轮播
    //   this.swiper.loopCreate()  // 循环模式
    // }catch(e){
    //   console.log(e)
    // }

    this.swiper.on('slideChange', () => {
      this.setActiveButton(this.swiper!.realIndex)
    })

    if (this.props.autoplay) {
      this.startAutoplay()
    }

    // 自定义实现：随窗口大小动态设置同时展示的slide，
    // 原swiper组件会因为封装多的一层swiper-wrapper影响判断swiper-slide的宽度
    const updateSlidesPerView = () => {
      let slidesPerView = 1
      if (window.innerWidth >= 1440) {
        slidesPerView = 3
      } else if (window.innerWidth >= 768) {
        slidesPerView = 2
      }
      if (this.swiper){
        this.swiper.params.slidesPerView = slidesPerView
        this.swiper.update()  
      }
    }

    if (this.props.slidesPerView === 'auto') {
      updateSlidesPerView()
      window.addEventListener('resize', updateSlidesPerView)
    }

    this.rootElement!.addEventListener('mouseover', this.pauseAutoplay)
    this.rootElement!.addEventListener('mouseleave', this.resumeAutoplay)
  }

  startAutoplay() {
    this.timerId = setInterval(() => {
      this.swiper?.slideNext()
    }, 3000) // 每3秒自动轮播
  }

  pauseAutoplay = () => {
    if (this.timerId) {
      clearInterval(this.timerId)
      this.timerId = null
    }
  }

  resumeAutoplay = () => {
    this.startAutoplay()
  }

  setActiveButton(index: number) {
    const buttons = this.paginationDiv.querySelectorAll('button')

    for (let i = 0; i < buttons.length; i++) {
      if (i === index) {
        buttons[i].classList.remove('opacity-50')
      } else {
        buttons[i].classList.add('opacity-50')
      }
    }
  }

  // 在组件销毁时清除定时器和事件监听器
  uninstall() {
    if (this.timerId) {
      clearInterval(this.timerId)
    }
    this.rootElement!.removeEventListener('mouseover', this.pauseAutoplay)
    this.rootElement!.removeEventListener('mouseleave', this.resumeAutoplay)
  }

  // 不需要更新，不然状态不一致
  receiveProps() {
    return false
  }

  render(props: OmiProps<Props>) {
    return (
      <div class="swiper">
        <div class="swiper-wrapper">
          {(props.children as VNode[])?.map((child) => {
            return <div class="swiper-slide">{child}</div>
          })}
        </div>

        {props.navigation && (
          <button
            onClick={this.onPreviusClick}
            class=" absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
          >
            <span class="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
              </svg>
            </span>
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
        )}

        {props.navigation && (
          <button
            onClick={this.onNextClick}
            class=" absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
              </svg>
            </span>
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        )}

        {props.pagination && (
          <div
            ref={(e) => {
              this.paginationDiv = e
            }}
            class="absolute bottom-0 left-0 right-0 z-[1] m-0 flex list-none justify-center p-0"
          >
            {(props.children as VNode[])?.map((_child, index) => {
              return (
                <button
                  onClick={(evt) => {
                    this.onPaginationClick(index, evt)
                  }}
                  class={theme.paginationButton}
                ></button>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

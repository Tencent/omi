import { tag, Component, classNames, OmiProps, bind } from 'omi'
import { tailwind } from '@/tailwind'
import '../collapse/collapse'

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
}

const theme = {
  paginationButton:
    'mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none',
}
@tag('o-swiper')
export class SwiperComponent extends Component<Props> {
  static css = [
    tailwind,
    swiperStyle,
    `:host {
    display: block;
  }
  `,
  ]

  @bind
  onPreviusClick() {
    this.swiper?.slidePrev()
    this.fire('change', this.swiper!.realIndex)
  }

  @bind
  onNextClick() {
    this.swiper?.slideNext()
    this.fire('change', this.swiper!.realIndex)
  }

  @bind
  onPaginationClick(index: number) {
    // https://www.swiper.com.cn/api/methods/417.html
    this.swiper?.slideToLoop(index)
    this.fire('change', this.swiper!.realIndex)
  }

  static defaultProps = {
    direction: 'horizontal', // vertical | horizontal
    loop: true,
    index: 0,
    navigation: true,
    pagination: true,
  }

  swiper: Swiper | null = null

  installed(): void {
    this.swiper = new Swiper(this.rootElement!, {
      // Optional parameters
      direction: this.props.direction,
      loop: this.props.loop,
      initialSlide: this.props.index,
      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    })

    this.swiper.on('slideChange', () => {
      this.setActiveButton(this.swiper!.realIndex)
    })
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

  // 不需要更新，不然状态不一致
  receiveProps() {
    return false
  }

  render(props: Props) {
    return (
      <div class="swiper">
        <div class="swiper-wrapper">
          {props.children.map((child, index) => {
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
            class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          >
            {props.children.map((child, index) => {
              return (
                <button
                  onClick={() => this.onPaginationClick(index)}
                  type="button"
                  class={classNames(theme.paginationButton, {
                    'opacity-50': props.index !== index,
                  })}
                ></button>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

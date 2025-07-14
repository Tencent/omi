import { render, tag, Component } from 'omi'

type Props = {
  type: string
  content: string
}

@tag('o-msg')
class Msg extends Component<Props> {
  static css = `:host: {
    display: block
  }`

  renderIcon(type: string) {
    switch (type) {
      case 'success':
        return <i class="t-icon t-icon-check-circle-filled text-lg text-green-500"></i>
      default:
        break
    }
  }
  render(props: Props) {
    return (
      <div class="border flex items-center bg-background text-foreground  px-4 py-2 rounded shadow-lg space-x-2">
        {this.renderIcon(props.type)}
        <span>{props.content}</span>
      </div>
    )
  }
}

let doms: HTMLElement[] = []

export function showMsg(options: { type: 'success' | 'error'; content: string }): void {
  const dom = render(
    <Msg
      class="z-[10000000] transition-all ease-in-out duration-300 fixed left-1/2 transform -translate-x-1/2"
      style={{
        top: `calc(1rem + ${3 * (doms.length - 1)}rem)`,
      }}
      {...options}
    />,
    document.body,
  )
  requestAnimationFrame(() => {
    dom.style.top = `calc(1rem + ${3 * doms.length}rem)`
    // 后来出现的 dom 需要刷一遍黑夜白天模式加上 dark class
    window.refreshDark()
  })

  doms.push(dom)
  setTimeout(() => {
    hideMsg()
  }, 2000)
}

export function hideMsg(): void {
  if (doms.length === 0) return
  const dom = doms.shift()
  if (dom) {
    dom.style.top = '-3rem'
    dom.addEventListener('transitionend', () => {
      dom.remove()
      updateDomsPosition()
    })
  }
}

function updateDomsPosition(): void {
  doms.forEach((dom, index) => {
    dom.style.top = `calc(1rem + ${3 * index}rem)`
  })
}

import { tag, Component, VNode } from 'omi'

@tag('o-appear')
export class Appear extends Component {
  static css = ':host {display: block;}'

  isLightDOM = true

  /**
   * 这里不能使用 installed，只能用 ready。
   * 因为这个时候，this.classList 未空，innerHTML 还是 svg loading(因为正在patch过程中，也就是suspense的 pending > resolve 过程中，触发 o-appear 的 connectedCallback/installed)。
   * 但 this.classList 也未准备好，【子dom】还未准备好。这里 ready 类似 nextTick 的作用
   * 
   * 另外：父元素的 connectedCallback(installed) 先于子元素的 connectedCallback(installed) 执行。
   * connectedCallback，每当元素添加到文档中时调用，属性未准备好，【子dom】还未准备好
   */
  ready() {
    const arr: string[] = []
    this.classList.forEach((item) => {
      arr.push(item)
    })

    setTimeout(() => {
      this.classList.add('transition-all', 'duration-300', 'ease-in')
      arr.forEach((item) => {
        this.classList.add(item)
        this.classList.remove(item)
      })
      window.refreshDark()
    }, 10)
  }

  render(props: { children: VNode }) {
    return props.children
  }
}

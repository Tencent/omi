import { tag, Component, VNode } from 'omi'

@tag('o-appear')
export class Appear extends Component {
  static css = ':host {display: block;}'

  isLightDOM = true

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

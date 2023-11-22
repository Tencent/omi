import * as MarkdownIt from 'markdown-it'
import mdStyle from './md.css?raw'
import prismStyle from './prism.css?raw'
import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

// @ts-ignore
const MdIt = MarkdownIt.default ? MarkdownIt.default : MarkdownIt

@tag('markdown-renderer')
export class MarkdownRenderer extends Component {
  static css = [tailwind, mdStyle, prismStyle]

  install() {
    // @ts-ignore
    this.md = new MdIt()
  }

  installed() {
    this.highlight()
  }

  updated() {
    this.highlight()
  }

  highlight() {
    const codes = Array.prototype.slice.call(this.shadowRoot?.querySelectorAll('code'))
    const Prism = window.Prism
    codes.forEach((code) => {
      const arr = code.className.match(/{([\S\s]*)}/)
      let pre = code.parentNode
      // bug!
      arr && pre.setAttribute('data-line', arr[1])

      if (code.className) {
        pre.className = code.className
        const temp = code.className.match(/language-\w*/g)[0]
        const lan = temp.split('-')[1]
        const pl = Prism.languages[lan]
        if (temp && pl) {
          code.innerHTML = Prism.highlight(code.innerText, pl, lan)
        }
      } else {
        pre = code.parentNode
        code.className = 'language-markup'
        pre.className = 'language-markup'
        code.innerHTML = Prism.highlight(code.innerText, Prism.languages.markup, 'markup')
      }
    })

    // fix line-highlight invalid
    window.dispatchEvent(new Event('resize'))
  }

  render(props) {
    return <div unsafeHTML={this.md.render(props.content)} class="mb-48"></div>
  }
}

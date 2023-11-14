import * as MarkdownIt from 'markdown-it'
import mdStyle from '../common/md.css?raw'
import prismStyle from '../common/prism.css?raw'
import apiMd from './api.md?raw'
import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

// @ts-ignore
const MdIt = MarkdownIt.default ? MarkdownIt.default : MarkdownIt

@tag('accordion-api')
export class AlertAPI extends Component {
  static css = [tailwind, mdStyle, prismStyle]

  install() {
    // @ts-ignore
    this.md = new MdIt()
  }

  installed() {
    this.initCodeStyle()
  }

  updated() {
    this.initCodeStyle()
  }

  initCodeStyle() {
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

  render() {
    return <div unsafeHTML={this.md.render(apiMd)} class="mb-48"></div>
  }
}

import { WeElement, h, tag } from 'omi'
import * as MarkdownIt from 'markdown-it'
import prismCSS from './prism.css'
import mdCSS from './md.css'
import * as anchor from 'markdown-it-anchor'
import * as prismjs from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-tsx'

// 不能注释掉，不然代码不染色
console.log(prismjs)
// @ts-ignore
const MdIt = MarkdownIt.default ? MarkdownIt.default : MarkdownIt

interface Props {
  mdContent: string
  padding?: number
}

const tagName = 'markdown-docs'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
  class Prism {
    static highlight(code: string, la: string, lan: string): string
    static languages
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = [mdCSS, prismCSS]

  static defaultProps = {
    mdContent: '',
    padding: 0

  }

  md

  install() {
    // @ts-ignore
    this.md = new MdIt().use(anchor.default, {
      level: 2,
      permalink: true
    })
  }

  installed() {
    this.initCodeStyle()
  }

  updated() {
    this.initCodeStyle()
  }

  initCodeStyle() {
    const codes = Array.prototype.slice.call(this.shadowRoot.querySelectorAll('code'))

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
    return (
      <div class="result-html" style={{ padding: this.props.padding }}>
        <div unsafeHTML={this.md.render(this.props.mdContent)}></div >
      </div >
    )
  }
}

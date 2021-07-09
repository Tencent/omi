import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import * as MarkdownIt from 'markdown-it'
import * as priseCSS from './prism.css'
import * as mdCSS from './md.css'
import * as anchor from 'markdown-it-anchor'
import * as prismjs from 'prismjs'

console.error(prismjs)
const MdIt = MarkdownIt.default ? MarkdownIt.default : MarkdownIt

interface Props {
  mdContent: string
}

const tagName = 'admin-docs'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
  class Prism {
    static highlight(code: string, la: string, lan: string): string;
    static languages

  }
}

@tag(tagName)
export default class extends WeElement<Props> {

  static defaultProps = {
    mdContent: ''
  }

  static css = [mdCSS.default, priseCSS.default]

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


  initCodeStyle() {
    const codes = this.shadowRoot.querySelectorAll('code')

    const codesArr = Array.prototype.slice.call(codes)
    //const codeHlNumArr = []

    codesArr.forEach((code) => {
      const arr = code.className.match(/{([\S\s]*)}/)
      let pre = code.parentNode
      //bug!
      arr && pre.setAttribute('data-line', arr[1])

      if (code.className) {
        pre.className = code.className

        const temp = code.className.match(/language-\w*/g)[0]
        if (temp) {

          code.innerHTML = Prism.highlight(code.innerText, Prism.languages[temp.split('-')[1]], temp.split('-')[1])
        }
      } else {
        pre = code.parentNode
        code.className = 'language-markup'
        pre.className = 'language-markup'
        code.innerHTML = Prism.highlight(code.innerText, Prism.languages.markup, 'markup')
      }
    })

    //fix line-highlight
    window.dispatchEvent(new Event('resize'))
  }

  render() {
    return <div class="docs" style="padding:20px;">
      <div dangerouslySetInnerHTML={{ __html: this.md.render(this.props.mdContent) }
      } ></div >
    </div >
  }
}

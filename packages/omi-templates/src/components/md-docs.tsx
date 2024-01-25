import * as MarkdownIt from 'markdown-it'
import prismStyle from './prism.css?raw'
import * as Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-tsx'
import { tag, Component } from 'omi'

// @ts-ignore
const MdIt = MarkdownIt.default ? MarkdownIt.default : MarkdownIt

@tag('md-docs')
export class MarkdownRenderer extends Component {
  static css = [prismStyle]
  md: any

  install() {
    // @ts-ignore
    this.md = new MdIt()
  }

  installed() {
    this.highlight()
    window.refreshDark()
  }

  updated() {
    this.highlight()
  }

  highlight() {
    const codes = Array.from(this.shadowRoot?.querySelectorAll('code') || [])
    codes.forEach((code) => {
      const arr = code.className.match(/{([\S\s]*)}/)
      let pre = code.parentNode as HTMLElement
      if (arr) {
        pre.setAttribute('data-line', arr[1])
      }
      if (code.className && pre) {
        pre.className = code.className
        const temp = code.className.match(/language-\w*/g)?.[0]
        const lan = temp?.split('-')[1] || 'markup'
        const pl = Prism.languages[lan]
        if (temp && pl) {
          code.innerHTML = Prism.highlight(code.innerText, pl, lan).trim()
        }
      }
    })

    //fix line-highlight
    window.dispatchEvent(new Event('resize'))
  }

  render(props: { content: string }) {
    return (
      <div
        unsafeHTML={{ html: this.md.render(props.content) }}
        class="prose prose-slate max-w-none dark:prose-invert dark:text-slate-400 prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem] prose-lead:text-slate-500 dark:prose-lead:text-slate-400 prose-a:font-semibold dark:prose-a:text-blue-400 prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,2px)+2px))_0_0_var(--tw-prose-underline,theme(colors.blue.300))] hover:prose-a:[--tw-prose-underline-size:3px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.blue.800))] dark:hover:prose-a:[--tw-prose-underline-size:2px] prose-pre:rounded-xl prose-pre:bg-slate-800 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10 dark:prose-hr:border-slate-500"
      ></div>
    )
  }
}

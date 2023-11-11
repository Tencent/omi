import { tag, Component, bind, classNames } from 'omi'
import { tailwind } from '@/tailwind'
import * as prismjs from 'prismjs'
import prismStyle from './prism.css?raw'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-tsx'
import * as copyToClipboard from 'copy-to-clipboard'
import { Collapse } from 'omi-elements'

type Props = {
  lan: string
  code: string
}

@tag('code-showcase')
export default class CodeShowcase extends Component<Props> {
  static css = [
    tailwind,
    prismStyle,
    `
  :host {
    display: block;
    width: 100%;
  }
  `,
  ]

  static defaultProps = {
    lan: 'tsx',
    code: '',
  }

  installed() {
    this.initCodeStyle()
  }

  timeoutId: NodeJS.Timeout | null = null

  showCode = false
  collapsing = false
  copied = false

  @bind
  toogleShowCode() {
    this.showCode = !this.showCode
    this.update()
  }

  @bind
  onCopy() {
    // @ts-ignore
    copyToClipboard.default ? copyToClipboard.default(this.props.code) : copyToClipboard(this.props.code)

    clearTimeout(this.timeoutId as NodeJS.Timeout)
    this.copied = true
    this.update()
    this.timeoutId = setTimeout(() => {
      this.copied = false
      this.update()
    }, 3000)
  }

  updated() {
    this.initCodeStyle()
  }

  initCodeStyle() {
    const codes = Array.prototype.slice.call(this.shadowRoot?.querySelectorAll('code'))
    codes.forEach((code) => {
      const arr = code.className.match(/{([\S\s]*)}/)
      let pre = code.parentNode
      // bug!
      arr && pre.setAttribute('data-line', arr[1])
      if (code.className) {
        pre.className = code.className

        const temp = code.className.match(/language-\w*/g)[0]
        const lan = temp.split('-')[1] || 'markup'
        const pl = prismjs.languages[lan]
        if (temp && pl) {
          code.innerHTML = prismjs.highlight(code.innerText, pl, lan).trim()
        }
      }
    })

    //fix line-highlight
    window.dispatchEvent(new Event('resize'))
  }

  render(props: Props) {
    return (
      <>
        <section class="my-5">
          <div class="rounded-lg border dark:border-neutral-600">
            <div class="p-4">
              <slot></slot>
            </div>
            <div class="block mt-4 border-t p-4 rounded-b-lg bg-white dark:bg-neutral-800 text-center dark:border-neutral-600">
              <button
                onClick={this.toogleShowCode}
                class="inline-block rounded px-4 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary hover:bg-secondary-100 focus:bg-secondary-100 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400 dark:hover:bg-white/10 dark:focus:bg-white/10 relative overflow-hidden align-bottom"
                data-te-collapse-init=""
                data-te-ripple-init=""
                data-te-ripple-color="light"
                href="#"
                role="button"
                aria-expanded="true"
                data-te-target="#example1"
                aria-controls="example1"
                data-ripple-color="hsl(0, 0%, 67%)"
                style=""
              >
                <span class="mr-1 inline-block pb-1 align-middle md:mr-2">
                  <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path
                      fill="currentColor"
                      d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                    ></path>
                  </svg>
                </span>
                Show code
              </button>
            </div>
          </div>
        </section>

        <Collapse.tagName show={this.showCode}>
          <section id="code-section">
            <div class="pt-4">
              <div class="docs-pills">
                <div
                  class="
                  flex
                  justify-between
                  items-center
                  py-2
                  rounded-t-lg
                  border-t border-l border-r border-neutral-200 dark:border-neutral-600"
                  style="padding-left: 0.6rem"
                >
                  <ul class="flex list-none flex-col flex-wrap pl-0 md:flex-row p-2" data-te-nav-ref="">
                    <li>
                      <a
                        class="inline-block mx-[5px] rounded bg-[#F7F7F7] px-[20px] py-2.5 text-xs font-medium uppercase leading-none text-[#0000008c] shadow-none focus:outline-none focus:ring-0 data-[te-nav-active]:bg-[#E3EBF7] data-[te-nav-active]:text-[#285192]  dark:bg-neutral-600 dark:text-white dark:data-[te-nav-active]:bg-[#E3EBF7] dark:data-[te-nav-active]:text-[#285192]  "
                        data-te-toggle="pill"
                        data-te-target="#mdb_daddc35712f4511b23eecf513d016213420fa417"
                        data-te-nav-active=""
                        href="#mdb_daddc35712f4511b23eecf513d016213420fa417"
                        role="tab"
                      >
                        TSX
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="tab-content">
                  <div
                    class="hidden opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block mb-5"
                    data-te-tab-active=""
                    id="mdb_daddc35712f4511b23eecf513d016213420fa417"
                    role="tabpanel"
                  >
                    <div class="code-toolbar">
                      <pre>
                        <code class={`language-${props.lan}`}>{props.code}</code>
                      </pre>
                      <div class="toolbar">
                        <div class="toolbar-item">
                          <button
                            class="btn-copy-code text-gray-500 text-xs leading-[1.6] !top-[16px] bg-transparent font-bold uppercase text-sm px-4 py-2 outline-none focus:outline-none dark:text-gray-200"
                            onClick={this.onCopy}
                          >
                            {this.copied ? 'Copied' : 'Copy'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Collapse.tagName>
      </>
    )
  }
}

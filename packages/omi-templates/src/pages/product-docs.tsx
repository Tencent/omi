import '../components/md-docs'
import '../components/docs-sidebar'
import { Component, tag, bind, classNames } from 'omi'
import { docsConfig } from '../docs/config'
import * as MarkdownIt from 'markdown-it'

// @ts-ignore
const MdIt = MarkdownIt.default ? MarkdownIt.default : MarkdownIt

type NavTreeNode = {
  title: string
  children: NavTreeNode[]
}

type Props = {
  lang: string
  section: string
  markdownContent: string
}

type Lang = 'zh' | 'en'

@tag('product-docs')
export class ProductDocs extends Component<Props> {
  state: {
    markdownContent: string
    navTree: NavTreeNode
    active: [string, string]
  } = {
    markdownContent: '',
    navTree: { title: '', children: [] },
    active: ['', ''],
  }

  @bind
  async onChange(evt: CustomEvent) {
    // 滚动到最顶
    window.scrollTo(0, 0)
    history.pushState(null, '', evt.detail.item.path)
    const { default: markdownContent } = await import(`../docs/${this.props.lang}/${evt.detail.item.value}.md?raw`)
    this.state.markdownContent = markdownContent
    this.update()
  }

  md: MarkdownIt = new MdIt()

  install() {
    this.state.markdownContent = this.props.markdownContent

    this.setNavTree()
  }

  // 提取 markdown 中的标题
  setNavTree() {
    const tokens = this.md.parse(this.state.markdownContent, {})

    let currentNode: NavTreeNode = this.state.navTree

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i]
      if (token.type === 'heading_open') {
        const title = tokens[i + 1].content
        const newNode: NavTreeNode = { title, children: [] }

        if (token.tag === 'h2') {
          this.state.navTree.children.push(newNode)
          currentNode = newNode
        } else if (token.tag === 'h3') {
          currentNode.children.push(newNode)
        }
      }
    }
    this.state.active = [this.state.navTree.children[0].title, this.state.navTree.children[0].children?.[0]?.title]
  }

  goToSection = (item: NavTreeNode) => () => {
    this.state.active = [item.title, '']
    this.update()
    this.scrollToH2(item.title)
  }

  goToSubSection = (item: NavTreeNode, child: NavTreeNode) => () => {
    this.state.active = [item.title, child.title]
    this.update()
    this.scrollToH3(child.title)
  }

  scrollToH2(title: string) {
    const h2Elements = (
      this.rootElement?.querySelector('md-docs') as HTMLElement & {
        rootElement: HTMLElement
      }
    )?.rootElement.getElementsByTagName('h2')
    for (let i = 0; i < h2Elements.length; i++) {
      if (h2Elements[i].textContent === title) {
        h2Elements[i].scrollIntoView({ behavior: 'smooth' })
        break
      }
    }
  }

  scrollToH3(title: string) {
    const h2Elements = (
      this.rootElement?.querySelector('md-docs') as HTMLElement & {
        rootElement: HTMLElement
      }
    ).rootElement.getElementsByTagName('h3')
    for (let i = 0; i < h2Elements.length; i++) {
      if (h2Elements[i].textContent === title) {
        h2Elements[i].scrollIntoView({ behavior: 'smooth' })
        break
      }
    }
  }

  render() {
    return (
      <div class="flex min-h-full bg-white dark:bg-zinc-800">
        <div class="flex w-full flex-col">
          <div class="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
            <div class="hidden lg:relative lg:block lg:flex-none">
              <div class="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden"></div>
              <div class="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block"></div>
              <div class="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block"></div>
              <div class="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
                <o-docs-sidebar
                  onChange={this.onChange}
                  active={this.props.section}
                  items={docsConfig[this.props.lang as Lang].sidebar}
                ></o-docs-sidebar>
              </div>
            </div>
            <div class="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
              <article>
                {/* <header class="mb-9 space-y-1">
                  <p class="font-display text-sm font-medium text-primary brightness-125">Introduction</p>
                  <h1 class="font-display text-3xl tracking-tight text-slate-900 dark:text-white">Installation</h1>
                </header> */}

                <md-docs content={this.state.markdownContent}></md-docs>
              </article>
              <dl class="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
                <div>
                  <dt class="font-display text-sm font-medium text-slate-900 dark:text-white">Previous</dt>
                  <dd class="mt-1">
                    <a
                      class="flex items-center gap-x-1 text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 flex-row-reverse"
                      href="/"
                    >
                      Getting started
                      <svg viewBox="0 0 16 16" aria-hidden="true" class="h-4 w-4 flex-none fill-current -scale-x-100">
                        <path d="m9.182 13.423-1.17-1.16 3.505-3.505H3V7.065h8.517l-3.506-3.5L9.181 2.4l5.512 5.511-5.511 5.512Z"></path>
                      </svg>
                    </a>
                  </dd>
                </div>
                <div class="ml-auto text-right">
                  <dt class="font-display text-sm font-medium text-slate-900 dark:text-white">Next</dt>
                  <dd class="mt-1">
                    <a
                      class="flex items-center gap-x-1 text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                      href="/docs/understanding-caching"
                    >
                      Understanding caching
                      <svg viewBox="0 0 16 16" aria-hidden="true" class="h-4 w-4 flex-none fill-current">
                        <path d="m9.182 13.423-1.17-1.16 3.505-3.505H3V7.065h8.517l-3.506-3.5L9.181 2.4l5.512 5.511-5.511 5.512Z"></path>
                      </svg>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div class="hidden xl:sticky xl:top-[4.75rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
              <nav aria-labelledby="on-this-page-title" class="w-56">
                <h2 id="on-this-page-title" class="font-display text-sm font-medium text-slate-900 dark:text-white">
                  On this page
                </h2>
                <ol role="list" class="mt-4 space-y-3 text-sm">
                  {this.state.navTree.children.map((item: NavTreeNode) => {
                    return (
                      <li class="text-slate-500 dark:text-slate-400">
                        <h3 onClick={this.goToSection(item)}>
                          <a
                            class={classNames({
                              'text-primary brightness-125': this.state.active[0] === item.title,
                              'hover:text-slate-600 dark:hover:text-slate-300': this.state.active[0] !== item.title,
                            })}
                            href="javascript:void(0)"
                          >
                            {item.title}
                          </a>
                        </h3>
                        <ol role="list" class="mt-2 space-y-3 pl-5">
                          {item.children.map((child: NavTreeNode) => {
                            return (
                              <li onClick={this.goToSubSection(item, child)}>
                                <a
                                  class={classNames({
                                    'text-primary brightness-125': this.state.active[1] === child.title,
                                    'hover:text-slate-600 dark:hover:text-slate-300':
                                      this.state.active[1] !== child.title,
                                  })}
                                  href="javascript:void(0)"
                                >
                                  {child.title}
                                </a>
                              </li>
                            )
                          })}
                        </ol>
                      </li>
                    )
                  })}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

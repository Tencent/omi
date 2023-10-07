import { WeElement, render, h, tag } from 'omi'
import './assets/index.css'
import logo from './assets/logo.svg'
import { tw, sheet } from 'omi-twind'
import './components/markdown-docs'
// import { EditorState, EditorStateConfig, Compartment, Extension, StateEffect } from '@codemirror/state'
import { EditorView, basicSetup } from "codemirror"
import { javascript } from "@codemirror/lang-javascript"
// import { css } from "@codemirror/lang-css"
import { route } from 'omi-router'
// todo, 兼容 omi-next
import { showLoading, hideLoading } from '@omiu/toast'
import { files } from './files'
import { tsBuild } from './ts-build'
import { rollupBuild } from './rollup-build'

import '@omiu/popover'
// todo, 兼容 omi-next
import '@omiu/link'
import '@omiu/icon/esm/navigate-before'
import '@omiu/icon/esm/navigate-next'
import '@omiu/tabs'
import '@omiu/tree'
import '@omiu/icon/esm/git-hub'
import '@omiu/icon/esm/translate'

interface TreeItem {
  id?: string
  label: string
  expanded?: boolean
  files?: string[]
  codePanelHeight?: string
  previewPanelHeight?: string
  children?: TreeItem[]
  sign?: string
}

declare global {
  interface Window {
    PreviewIframeDynamicSourceCode: string
  }
}

@tag('my-app')
export default class extends WeElement {
  static css = sheet.target

  onCountChanged = (evt: CustomEvent) => {
    console.log(evt.detail)
  }

  $editor: HTMLElement
  editor: EditorView
  $iframe: HTMLIFrameElement

  reloadPreview(code) {
    window.PreviewIframeDynamicSourceCode = code
    this.$iframe.contentWindow.location.reload()
  }

  treeData: TreeItem[] = [{
    label: 'Base',
    sign: '❤️',
    expanded: true,
    // selected: true,
    // icon: 'ac-unit-outlined',
    children: [{
      id: 'hello-omi',
      label: 'Hello Omi',
    }, {
      id: 'render',
      label: 'Render',
      files: ['index.tsx', 'index.css'],
    }, {
      id: 'component',
      label: 'Component',
      files: ['index.tsx', 'my-counter.tsx'],
    }, {
      id: 'props',
      label: 'Props',
      files: ['index.tsx', 'button.tsx', 'button.css'],
    }, {
      id: 'event',
      label: 'Event',
    }, {
      id: 'lifecycle-and-ref',
      label: 'Lifecycle and Ref',
    },
    {
      id: 'scoped-css',
      label: 'Scoped CSS',
    }, {
      id: 'slot',
      label: 'Slot',
    }, {
      id: 'fragment',
      label: 'Fragment',
    }, {
      id: 'unsafe-html',
      label: 'Unsafe HTML',
    }]
  }, {
    label: 'Complex',
    expanded: true,
    sign: '💯',
    children: [{
      id: 'router',
      label: 'Router',
    }, {
      id: 'transition',
      label: 'Transition',
    }, {
      id: 'bubble-sort',
      label: 'Bubble Sort',
      files: ['index.tsx', 'store.ts', 'index.css'],
    }, {
      id: 'clock',
      label: 'Clock',
      files: ['index.tsx', 'index.css'],
    }, {
      id: 'to-motion',
      label: 'To Motion',
    }, {
      id: 'snake-game',
      label: 'Snake Game',
      files: ['index.tsx', 'snake-game.tsx', 'game-screen.tsx', 'store.ts', 'game.ts', 'snake.ts'],
      codePanelHeight: '41%',
      previewPanelHeight: '59%'
    }]
  }, {
    id: 'congratulations',
    label: '🎉 Congratulations!',
  }]

  lan = 'en'

  setLan(lan) {
    this.lan = lan
    this.loadSection(this.section)
  }

  codePanelHeight = '58%'
  previewPanelHeight = '42%'
  mdContent: string
  filesContent: { [fileName: string]: string } = {}

  selectTreeNodeById(id) {
    this.treeData.forEach((node) => {
      this.deselect(node, id)
    })
  }

  deselect(node, id) {
    node.selected = false
    node.children &&
      node.children.forEach((child) => {
        child.selected = false
        this.deselect(child, id)
      })

    if (node.id === id) {
      node.selected = true
    }
  }

  setFiles(id) {
    for (let i = 0, len = this.treeData.length; i < len; i++) {
      if (this.treeData[i].id === id) {
        this.files = this.treeData[i].files || ['index.tsx']
        this.codePanelHeight = this.treeData[i].codePanelHeight || '58%'
        this.previewPanelHeight = this.treeData[i].previewPanelHeight || '42%'
        break
      } else {
        if (this.treeData[i].children) {
          this.recSetFiles(this.treeData[i].children, id)
        }
      }
    }
  }

  recSetFiles(children, id) {
    for (let i = 0, len = children.length; i < len; i++) {
      if (children[i].id === id) {
        this.files = children[i].files || ['index.tsx']
        this.codePanelHeight = children[i].codePanelHeight || '58%'
        this.previewPanelHeight = children[i].previewPanelHeight || '42%'
        break
      } else {
        children[i].children && this.recSetFiles(children[i].children, id)
      }
    }
  }

  section: string

  async loadSection(section) {
    this.section = section
    // 本地 debug：
    const url = 'https://omi.cdn-go.cn/play/latest/sections/'
    // const url = './sections/'
    showLoading()
    const urls = [
      `${url}${this.lan}/${section}/description.md`
    ]
    this.files.forEach((file) => {
      urls.push(`${url}${this.lan}/${section}/app/${file}`)
    })
    const texts = await Promise.all(urls.map(async url => {
      const resp = await fetch(url)
      return resp.text()
    }))

    this.mdContent = texts[0]
    const tsxMatch = texts[1]
    this.editor.dispatch({
      changes: { from: 0, to: this.editor.state.doc.length, insert: tsxMatch }
    })
    this.files.forEach((file, index) => {
      this.filesContent[file] = texts[index + 1]
      files[`./${file.replace('.tsx', '').replace('.ts', '')}`] = file.endsWith('.css') ? texts[index + 1] : tsBuild(texts[index + 1])
    })

    rollupBuild((code) => {
      this.reloadPreview(code)
    })
    this.selectTreeNodeById(section)
    this.update()
    hideLoading()

    this.$mainPanel.scrollTop = 0
    this.$mdPanel.scrollTop = 0
  }

  registerRoute() {
    // https://github.com/vitejs/vite/issues/4945
    // https://vitejs.dev/guide/features.html#glob-import
    // const mds = import.meta.glob(`./sections/**/**/*.*`, { as: 'raw' })

    route('/:section', async (evt) => {
      this.setFiles(evt.params.section)
      this.loadSection(evt.params.section)

    })

    route('*', async () => {
      this.loadSection('hello-omi')
    })
  }

  installed(): void {
    this.editor = new EditorView({
      extensions: [
        basicSetup,
        javascript({ jsx: true, typescript: true }),
        // 无效？ https://github.com/surmon-china/vue-codemirror/blob/1910d83a6ac0005b6969f78b7554ee5c3da8698e/src/codemirror.ts#L46
        // css(),
        EditorView.updateListener.of((e) => {
          this.filesContent[this.tabName] = e.state.doc.toString()
          files['./' + this.tabName.replace('.tsx', '').replace('.ts', '')] = this.tabName.endsWith('.css') ? e.state.doc.toString() : tsBuild(e.state.doc.toString())
          rollupBuild((code) => {
            this.reloadPreview(code)
          })
        })],
      parent: this.$editor,
      doc: ''
    })

    this.registerRoute()
  }

  onIframeLoad = () => {
    const html = this.$iframe.contentWindow.document.body.innerHTML
    if (!html) {
      // 防止 safari 加载失败
      this.$iframe.src = `./preview.html?rd=${Math.random()}`
    }
  }

  files: string[] = ['index.tsx']

  onNodeClick = (evt) => {
    evt.detail.id && route.to(`/${evt.detail.id}`)
  }

  tabName = 'index.tsx'

  onChange = (evt) => {
    this.tabName = evt.detail.tab.label
    this.editor.dispatch({
      changes: {
        from: 0,
        to: this.editor.state.doc.length,
        insert: this.filesContent[evt.detail.tab.label]
      }
    })
  }



  $mainPanel: HTMLElement
  $mdPanel: HTMLElement
  $translate: WeElement
  $tip: WeElement


  render() {
    return (
      <div>
        <div class={tw`flex`}>
          <div class={tw`md:flex md:flex-col`}>
            <header class={tw`border-b h-9 leading-9 text-black pl-2 relative`}>
              <h1 style={{ color: '#07C160' }}>  <img class={tw`w-5 inline-block mr-1 relative -top-0.5`} src={logo} />
                <span>OMI</span>
              </h1>
              <a
                href="https://github.com/Tencent/omi"
                target="_blank"
                class={tw`absolute top-0 right-0.5`}
              >
                <o-icon-git-hub></o-icon-git-hub>
              </a>

              <o-popover class={tw`absolute cursor-pointer right-6 top-0.5`} trigger="all"  >
                <o-icon-translate
                  ref={e => this.$translate = e}
                  class={tw``}
                ></o-icon-translate>
                <div slot="popover" tip="popover">
                  <ul
                    class={tw`bg-white text-center text-slate-600 z-50 cursor-pointer`}
                    ref={e => this.$tip = e} >
                    <li class={tw`border-b-1 pt-0.5 pb-0.5`}> <o-link onClick={e => this.setLan('zh')} underline={false}>简体中文</o-link></li>
                    <li class={tw`pt-0.5 pb-0.5`}><o-link onClick={e => this.setLan('en')} underline={false}>English</o-link></li>
                  </ul>

                </div>
              </o-popover>

            </header>

            <o-tree
              css={window.innerWidth < 768 && `
                .o-tree-node__label {
                  font-size: 10px !important
                }

                .o-tree-node__content {
                  padding-left: 5px !important
                }

                .o-tree-node__expand-icon.is-leaf {
                  width: 0px !important;
                }

                .o-tree-node__label {
                  padding-right: 12px !important;
                }

                .o-tree-node__content>.o-tree-node__expand-icon {
                  padding: 2px !important;
                }
              `}
              style={{
                width: window.innerWidth > 768 ? '200px' : '120px'
              }}
              onNodeClick={this.onNodeClick}
              data={this.treeData}>
            </o-tree>
          </div>

          <div ref={e => this.$mainPanel = e} class={tw`md:flex md:flex-row flex-col flex-1 overflow-scroll md:overflow-hidden`} style={{
            height: window.innerWidth < 768 ? 'calc(100vh)' : 'auto'
          }}>
            <div ref={e => this.$mdPanel = e} class={tw`md:w-1/2 overflow-auto  pl-2 pr-2 md:pl-8 md:pr-8 border-l`} style={{
              height: window.innerWidth > 768 ? 'calc(100vh)' : 'auto'
            }}>
              {this.mdContent && <markdown-docs mdContent={this.mdContent}></markdown-docs>}
              <div class={tw`flex justify-between border-t pt-2 pb-8`}>
                {/* <o-link type="primary"><o-icon-navigate-before></o-icon-navigate-before> Prev</o-link>
              <o-link icon="navigate-next" type="primary">Next<o-icon-navigate-next></o-icon-navigate-next></o-link> */}
              </div>
            </div>
            <div class={tw`md:w-1/2`} style={{
              height: window.innerWidth > 768 ? 'calc(100vh)' : 'auto'
            }}>
              <div class={tw`flex flex-col`} style={{ height: this.codePanelHeight }} >
                <o-tabs type="card" activeIndex={0} onChange={this.onChange} tabs={this.files.map(file => {
                  return { label: file }
                })}></o-tabs>
                <div class={tw`bg-gray-100 overflow-auto flex-1`} ref={e => this.$editor = e}  >
                </div>
              </div>
              <div class={tw`overflow-hidden`} style={{ height: this.previewPanelHeight }}>
                <div class={tw`flex flex-col h-full`} >
                  <o-tabs type="card" activeIndex={0} tabs={[{ label: 'PREVIEW' }]}></o-tabs>
                  <div class={tw`overflow-auto flex-1 border pl-2 pr-2`}   >
                    <iframe onLoad={this.onIframeLoad} class={tw`w-full h-full`} src={`./preview.html?rd=${Math.random()}`} ref={e => this.$iframe = e}></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

// 清空 loading
document.querySelector('#root').innerHTML = ''
render(<my-app></my-app>, '#root', {
  // if using OMI to build the whole application, ignore the attributs of DOM and use props of virtual dom
  ignoreAttrs: true
})

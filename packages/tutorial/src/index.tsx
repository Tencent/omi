import { WeElement, render, h, tag } from 'omi'
import './index.css'
import { tw, sheet } from 'omi-twind'
import './docs/admin-docs'
import { EditorView, basicSetup } from "codemirror"
import { javascript } from "@codemirror/lang-javascript"
import '@omiu/link'
import '@omiu/icon/navigate-before'
import '@omiu/icon/navigate-next'
import logo from './assets/logo.svg'
import '@omiu/tabs'
import '@omiu/tree'

import { hashChange, route } from 'omi-router'
import { showLoading, hideLoading } from '@omiu/toast'

import { vfilePlugin } from './rollup-plugin'

import * as ts from "typescript";
import { rollup } from 'rollup';



function tsBuild(code) {
  return ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ESNext,
      // @ts-ignore
      jsx: 'react',
      jsxFactory: 'h',
      jsxFragmentFactory: 'h.f',
    }
  }).outputText;
}

const files = {
  './main.js': '',
  './answer.js': ''
}


// see below for details on these options
const inputOptions = {
  input: './main.js', // resolved by our plugin
  plugins: [vfilePlugin(files)],
  // 不需要 tree shaking
  treeshake: false
};

// you can create multiple outputs from the same input to generate e.g.
// different formats like CommonJS and ESM
const outputOptionsList = [{
  file: 'bundle.js',
  format: 'umd' //es
}];


async function build(callback) {
  if (!files['./main.js']) {
    return
  }
  let bundle;
  let buildFailed = false;
  try {
    // create a bundle
    bundle = await rollup(inputOptions);

    // an array of file names this bundle depends on
    await generateOutputs(bundle, callback);
  } catch (error) {
    buildFailed = true;
    // do some error reporting
    console.error(error);
  }
  if (bundle) {
    // closes the bundle
    await bundle.close();
  }
  // process.exit(buildFailed ? 1 : 0);
}

async function generateOutputs(bundle, callback) {
  for (const outputOptions of outputOptionsList) {
    const { output } = await bundle.generate(outputOptions);
    for (const chunkOrAsset of output) {
      if (chunkOrAsset.type === 'asset') {
        console.log('Asset', chunkOrAsset);
      } else {
        // console.error(output[0].code)
        callback(output[0].code)
        // console.log('Chunk', chunkOrAsset.modules);
      }
    }
  }
}


@tag('my-app')
export default class extends WeElement {
  static css = sheet.target

  abc: string

  onCountChanged = (evt: CustomEvent) => {
    console.log(evt.detail)
  }

  editorEl: HTMLElement

  editor: EditorView

  $iframe: HTMLElement

  reloadPreview(code) {
    // @ts-ignore
    window._sourceCode = code;
    // @ts-ignore
    this.$iframe.contentWindow.location.reload(true);
  }

  treeData = [{
    label: 'Base',
    // sign: '●',
    expanded: true,
    selected: true,
    icon: 'ac-unit-outlined',
    children: [{
      id: 'hello-omi',
      label: 'Hello Omi',
    }, {
      id: 'scoped-css',
      label: 'Scoped CSS',
    }, {
      id: 'slot',
      label: 'Slot',
    }, {
      id: 'fragment',
      label: 'Fragment',
    }]
  }]
  lan = 'zh'

  mdContent: string

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

  registerRoute() {
    route('/:section', (evt) => {
      showLoading()
      let loadedCount = 0
      import(`./sections/${this.lan}/${evt.params.section}/description.md?raw`).then((md) => {
        loadedCount++
        this.mdContent = md.default
        this.update()
        loadedCount > 1 && hideLoading()
      })

      import(`./sections/${this.lan}/${evt.params.section}/app/index.tsx?raw`).then((md) => {
        //https://codemirror.net/docs/migration/ setValue
        loadedCount++
        this.editor.dispatch({
          changes: { from: 0, to: this.editor.state.doc.length, insert: md.default }
        })
        files['./main.js'] = tsBuild(md.default)
        build((code) => {
          this.reloadPreview(code)
        });
        this.selectTreeNodeById(evt.params.section)
        this.update()
        loadedCount > 1 && hideLoading()
      })
    })



    route('*', (evt) => {
      showLoading()
      let loadedCount = 0
      import(`./sections/${this.lan}/hello-omi/description.md?raw`).then((md) => {
        loadedCount++
        this.mdContent = md.default
        this.update()
        loadedCount > 1 && hideLoading()
      })

      import(`./sections/${this.lan}/hello-omi/app/index.tsx?raw`).then((md) => {
        loadedCount++
        //https://codemirror.net/docs/migration/ setValue
        this.editor.dispatch({
          changes: { from: 0, to: this.editor.state.doc.length, insert: md.default }
        })
        files['./main.js'] = tsBuild(md.default)
        build((code) => {
          this.reloadPreview(code)
        });
        this.selectTreeNodeById('hello-omi')
        this.update()
        loadedCount > 1 && hideLoading()
      })
    })
  }

  installed(): void {
    this.editor = new EditorView({
      extensions: [
        basicSetup,
        javascript({ jsx: true, typescript: true }),
        EditorView.updateListener.of((e) => {
          files['./main.js'] = tsBuild(e.state.doc.toString())
          build((code) => {
            this.reloadPreview(code)
          });
        })],
      parent: this.editorEl,
      doc: ''
    })

    this.registerRoute()
  }

  onNodeClick = (evt) => {
    evt.detail.id && route.to(`/${evt.detail.id}`)
  }

  render() {
    return (
      <div>
        <div class={tw`flex`}>
          <div class={tw`flex flex-col`}>
            <header class={tw`border-b h-9 leading-9 text-black pl-2`}>
              <h1 style={{ color: '#07C160' }}>  <img class={tw`w-5 inline-block mr-1 relative -top-0.5`} src={logo} />OMI TUTORIAL</h1>
            </header>
            <o-tree
              style="width:180px"
              onNodeClick={this.onNodeClick}
              data={this.treeData}>
            </o-tree>
          </div>
          <div class={tw`w-1/2 overflow-auto pl-8 pr-8 border-l`} style={{ height: 'calc(100vh)' }}>
            {this.mdContent && <admin-docs mdContent={this.mdContent}></admin-docs>}
            <div class={tw`flex justify-between border-t pt-2 pb-8`}>
              {/* <o-link type="primary"><o-icon-navigate-before></o-icon-navigate-before> Prev</o-link>
              <o-link icon="navigate-next" type="primary">Next<o-icon-navigate-next></o-icon-navigate-next></o-link> */}
            </div>

          </div>
          <div class={tw`w-1/2`} style={{ height: 'calc(100vh)' }}>
            <div class={tw`flex flex-col`} style="height:58%" >
              <o-tabs type="card" activeIndex={0} tabs={[{ label: 'hello-omi.tsx' }]}></o-tabs>
              <div class={tw`bg-gray-100 overflow-auto flex-1`} ref={e => this.editorEl = e}  >
              </div>
            </div>
            <div class={tw`overflow-hidden`} style="height:42%">
              <div class={tw`flex flex-col h-full`} >
                <o-tabs type="card" activeIndex={0} tabs={[{ label: 'PREVIEW' }]}></o-tabs>
                <div class={tw`overflow-auto flex-1 border`}   >
                  <iframe class={tw`w-full h-full`} src="./preview.html" ref={e => this.$iframe = e}></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

render(<my-app></my-app>, '#root', {
  // if using OMI to build the whole application, ignore the attributs of DOM and use props of virtual dom
  ignoreAttrs: true
})
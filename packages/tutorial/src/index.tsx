import { WeElement, render, h, tag } from 'omi'
import './index.css'
import { tw, sheet } from 'omi-twind'
import './docs/admin-docs'
import { EditorView, basicSetup } from "codemirror"
import { javascript } from "@codemirror/lang-javascript"
import '@omiu/link'
import '@omiu/icon/navigate-before'
import '@omiu/icon/navigate-next'
import mdContent from './sections/zh/section-1/description.md?raw'
import logo from './assets/logo.svg'
import '@omiu/tabs'

interface MyAppProps {
  name: string
}

@tag('my-app')
export default class extends WeElement<MyAppProps> {
  static css = sheet.target

  abc: string

  onCountChanged = (evt: CustomEvent) => {
    console.log(evt.detail)
  }




  editorEl: HTMLElement

  editor: EditorView

  installed(): void {
    this.editor = new EditorView({
      extensions: [basicSetup, javascript()],
      parent: this.editorEl,
      doc: 'console.log("hello")',
    })


  }

  render(props) {
    return (
      <div>
        <header class={tw`border-b h-9 leading-9 text-black pl-8`}>
          <h1 style={{ color: '#07C160' }}>  <img class={tw`w-5 inline-block mr-1 relative -top-0.5`} src={logo} />OMI TUTORIAL</h1>
        </header>
        <div class={tw`flex`}>
          <div class={tw`w-1/2 overflow-auto pl-8 pr-8`} style={{ height: 'calc(100vh - 36px)' }}>
            <admin-docs mdContent={mdContent}></admin-docs>
            <div class={tw`flex justify-between border-t pt-2`}>
              <o-link type="primary"><o-icon-navigate-before></o-icon-navigate-before> Prev</o-link>
              <o-link icon="navigate-next" type="primary">Next<o-icon-navigate-next></o-icon-navigate-next></o-link>
            </div>

          </div>
          <div class={tw`w-1/2 bg-gray-100`} style={{ height: 'calc(100vh - 36px)' }}>
            <div class={tw`bg-gray-100 flex flex-col`} style="height:58%" >
              <div class={tw`bg-gray-100`}  >
                <o-tabs type="card" activeIndex={0} tabs={[{ label: 'hello-world.tsx' }, { label: 'xx.tsx' }, { label: 'xxx.tsx' }]}></o-tabs>
              </div>
              <div class={tw`bg-gray-100 overflow-auto flex-1`} ref={e => this.editorEl = e}  >
              </div>
            </div>
            <div class={tw`bg-red-100`} style="height:42%">
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
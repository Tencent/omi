import { WeElement, render, h, tag } from 'omi'
import './index.css'
import { tw, sheet } from 'omi-twind'

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

  render(props) {
    return (
      <div>
        <header class={tw`bg-emerald-400 h-9 leading-9 text-white pl-1`}>
          <h1>OMI TUTORIAL</h1>
        </header>
        <div class={tw`flex`}>

          <div class={tw`flex-1 bg-gray-50 `} style={{ height: 'calc(100vh - 36px)' }}></div>
          <div class={tw`flex-1 bg-gray-100`} style={{ height: 'calc(100vh - 36px)' }}>
            <div class={tw`bg-gray-100`} style="height:58%" >
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

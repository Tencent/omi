import { tag, WeElement, h, extractClass } from 'omi'
import * as css from 'quill/dist/quill.snow.css'
import * as Quill from 'quill'
//@ts-ignore
import '../theme.ts'

const style = document.createElement('style')
style.textContent = css
document.querySelector('head').appendChild(style)

interface Props {
}

interface Data { }

@tag('m-editor')
export default class Editor extends WeElement<Props, Data> {
  static css = css

  static propTypes = {

  }

  installed() {

    document.body.appendChild(this.shadowRoot.querySelector('div'))
    const editor = new Quill('#editor', {
      modules: { toolbar: '#toolbar' },
      theme: 'snow'
    })
  }

  render(props) {
    return (
      <div>
        <div id="toolbar">
          <button class="ql-bold">Bold</button>
          <button class="ql-italic">Italic</button>
        </div>

        <div id="editor">
          <p>Hello World!</p>
        </div>
      </div>
    )
  }
}

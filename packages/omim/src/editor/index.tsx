import { tag, WeElement, h, extractClass } from 'omi'
import * as css from 'quill/dist/quill.snow.css'
import * as Quill from 'quill'
//@ts-ignore
import '../theme.ts'

interface Props {
}

interface Data { }

@tag('m-editor')
export default class Editor extends WeElement<Props, Data> {
  static css = css

  static propTypes = {

  }

  installed() {

    var editor = new Quill(this.shadowRoot.querySelector('#editor'), {
      modules: { toolbar: this.shadowRoot.querySelector('#toolbar') },
      theme: 'snow'
    });
  
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

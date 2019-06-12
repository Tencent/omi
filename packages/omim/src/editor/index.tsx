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

  editor: Quill

  installed() {
    var fonts = ['sofia', 'slabo', 'roboto', 'inconsolata', 'ubuntu']
    document.body.appendChild(this.shadowRoot.querySelector('div'))

    const editor = new Quill('#editor', {
      bounds: '#editor',
      modules: {
        //syntax': true, //require highlight.js
        'toolbar': [
          [{ 'font': fonts }, { 'size': [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'script': 'super' }, { 'script': 'sub' }],
          [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
          ['direction', { 'align': [] }],
          ['link', 'image', 'video'], // 'formula'  //require katex.js
          ['clean']
        ],
      },
      placeholder: '',
      readOnly: false,
      theme: 'snow'
    })

    editor.on('text-change', (delta, oldDelta, source) => {
      // if (source == 'api') {
      //   console.log("An API call triggered this change.");
      // } else if (source == 'user') {
      //   console.log("A user action triggered this change.");
      // }

      this.fire('text-change', {
        content: editor.getContents(),
        source
      })
    });

    //more api https://quilljs.com/docs/api/
    this.editor = editor
  }

  render(props) {
    return (
      <div>
        <div id="editor">
          {props.children.length > 0 ? props.children : (this.innerHTML ? this.innerHTML : '')}
        </div>
      </div>
    )
  }
}


import { tag, Component } from 'omi'

// 代码编辑器，暂时不管

@tag('code-editor')
export class CodeEditor extends Component {
  codeContent: string = ''

  static css = [
    `
    textarea {
      width: 100%;
      height: 48px;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      font-family: monospace;
      background: #f8f8f8;
      color: #333;
      transition: background 0.3s ease-in-out, border-color 0.3s ease-in-out;
    }

    textarea:focus {
      background: #fff;
      border-color: #007bff;
    }
  
    .editor-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 1.5rem;
      background: #fff;
      border-radius: 0.5rem;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    }
  
    .editor-title {
      text-align: center;
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  
    .editor-textarea {
      height: 200px;
    }
    `,
  ]

  handleInput(e: Event) {
    this.codeContent = (e.target as HTMLTextAreaElement).value
  }

  render() {
    return (
      <div class="editor-container">

      </div>
    )
  }
}

// 渲染组件到页面
export function EditorPage() {
  return <code-editor />
}

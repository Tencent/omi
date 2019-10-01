import { render } from '../../src/omis'
import Remarkable from 'remarkable'

const MarkdownEditor = (props, store) => {
  return (
    <div>
        <div>
          Enter some markdown
        </div>
        <textarea
          onInput={store.handleInput}
          defaultValue={store.value}
        />
        <div
          dangerouslySetInnerHTML={store.getRawMarkup()}
        />
      </div>
  )
}

MarkdownEditor.store = _ => {
  return {
    value: '## Omis\n\nHello, **omis**!',
		handleInput(e) {
			this.value = e.target.value
			this.update()
		},
		getRawMarkup() {
			const md = new Remarkable();
			return { __html: md.render(this.value) };
		}
  }
}

MarkdownEditor.css = `
textarea{
	width: 300px;
	height: 120px;
}

h3{
	color: #888;
}
`

render(<MarkdownEditor />, 'body')

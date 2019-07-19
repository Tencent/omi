
import { define, render, WeElement } from '../../src/omi'
import Remarkable from 'remarkable'

define('markdown-editor', class extends WeElement {

  value = 'Hello, **world**!' 

  handleInput = (e) => {
    console.log(11)
    this.value = e.target.value 
    this.update()
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.value) };
  }


  render( ) {
    return (
      <div className="MarkdownEditor">
      <h3>Input</h3>
      <label htmlFor="markdown-content">
        Enter some markdown
      </label>
      <textarea
        id="markdown-content"
        onInput={this.handleInput}
        defaultValue={this.value}
      />
      <h3>Output</h3>
      <div
        className="content"
        dangerouslySetInnerHTML={this.getRawMarkup()}
      />
    </div>
    )
  }
})

render(<markdown-editor />, 'body')


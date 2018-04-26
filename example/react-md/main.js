import Omi from '../../src/index.js'

class MarkdownEditor extends Omi.Component {
    constructor(data) {
      super(data);
      this.handleChange = this.handleChange.bind(this);
      this.md = new Remarkable();
      this.data = { value: 'Hello, **world**!'};
      this.data.html = this.md.render(this.data.value) 
      this.defaultValue = this.data.value
    }
  
    handleChange(e) {

        this.data.value =  e.target.value
        this.data.html = this.md.render(this.data.value) 

        this.update()
    }

    render() {
  
      return (
        <div className="MarkdownEditor">
          <h3>Input</h3>
          <label htmlFor="markdown-content" onClick={this.handleChange}>
            Enter some markdown
          </label>
          <textarea
            id="markdown-content"
            onKeyUp={this.handleChange}
            defaultValue={this.defaultValue}
            value={this.data.value}
          />
          <h3>Output</h3>
          <div className="content" innerHTML={this.data.html}>  </div>
        </div>
      );
    }
  }
  
  Omi.render(<MarkdownEditor />, 'body');
import { render, WeElement, define, getHost } from '../../src/omi'

define('sub-my-ele', class extends WeElement {
  install() {
    this.css = getHost(this).css
  }

  render(props) {
    return props.children[0]
  }
})

define('my-ele', class extends WeElement {
  install() {
    this.css = getHost(this).css
  }

  render(props) {
    return props.children[0]
  }
})

define('my-parent-ele', class extends WeElement {
  css() {
    return `
    p { 
      width: 100px;
      height: 100px;
      border: 1px solid #ccc; 
    }`
  }

  render() {
    return (
      <div>
        <my-ele>
          <p>content</p>
        </my-ele>
      </div>
    )
  }
})

render(<my-parent-ele />, 'body')

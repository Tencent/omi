import { define, render, WeElement } from '../../src/omi'
import './my-element'

define('my-app', class extends WeElement {

  myCSS = `
  h1{
    color: green;
  }`

  onClick = () => {
    this.myCSS = `
    h1{
      color: blue;
    }`
    this.update()
  }

  render() {
    return (
      <div onClick={this.onClick}>
        <my-element css={this.myCSS} />
      </div>
    )
  }
})

render(<my-app />, 'body')

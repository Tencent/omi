import { define, render, WeElement, getHost } from '../../src/omi'

define('my-hello', class extends WeElement {
  css() {
    console.log(this.base.parentNode.css)

    return getHost(this).css() + `div{ }`
  }

  installed() {

    console.log(this.base.parentNode)
  }
  render() {
    window.aa = this
    //use this.store in any method of any children components
    return <div><h1>{this.store.name}</h1></div>
  }
})

define('my-app', class extends WeElement {
  handleClick = () => {
    //use this.store in any method of any children components
    this.store.reverse()
    this.update()
  }

  css() {
    return `h1{
      font-size:100px;
    }`
  }

  render() {
    return (
      <div>
        <my-hello />
        <button onclick={this.handleClick}>reverse</button>
      </div>
    )
  }
})

const store = {
  name: 'imO',
  reverse: function () {
    this.name = this.name.split("").reverse().join("")
  }
}
//Injection through a third parameter
render(<my-app />, document.body, store)
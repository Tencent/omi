import { define, render, WeElement } from '../../src/omi'

define('my-hello', class extends WeElement {
  render() {
    //use this.store in any method of any children components
    return <div>{this.store.name}</div>
  }
})

define('my-app', class extends WeElement {
  handleClick = () => {
    //use this.store in any method of any children components
    this.store.reverse()
    this.update()
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
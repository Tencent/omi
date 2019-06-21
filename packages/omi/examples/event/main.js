import { define, render, WeElement } from '../../src/omi'

define('my-element', class extends WeElement {
  onClick = () => {
    this.fire('change')
  }

  render() {
    console.log('render')
    return (
      <div onClick={this.onClick}>Hello, World! </div>
    )
  }
})


define('my-component', class extends WeElement {

  onClick = () => {
    this.update()
  }

  list = [{
    id: 24,
    name: 'dnt',
    age: 18
  }, {
    id: 100,
    name: 'omi',
    age: 1
  }]

  changeHandler = event => console.log(event.target.dataset)

  render(props) {
    return (
      <div>
        <button onClick={this.onClick}>update</button>
        {this.list.map((item, index) =>
          <my-element data-id={item.id} data-index={index} onChange={this.changeHandler}></my-element>)
        }
      </div>
    )
  }
})

render(<my-component />, 'body')




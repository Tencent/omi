import { define, render, WeElement, extend, set, get } from '../../src/omi'

extend('model-select', (el, path, scope) => {
  el.value = get(scope, path)
  el.addEventListener('change', (evt) => {
    set(scope, path, el.value)
    scope.update()
  })
})


define('my-component', class extends WeElement {
  selected = 'b'

  render() {
    return (
      <div>
        <select o-model-select='selected'>
          <option value="a">Item A</option>
          <option value="b">Item B</option>
        </select>
        <div>{this.selected}</div>
      </div>
    )
  }
})

render(<my-component />, 'body')


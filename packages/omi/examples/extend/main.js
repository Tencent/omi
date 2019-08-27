import { define, WeElement, render, h, extend, get, set, bind, unbind } from '../../src/omi'

extend('model', (el, path, scope) => {
  if (el.nodeName === 'SELECT') {
    el.value = get(scope, path)
    unbind(el, 'change')
    bind(el, 'change', () => {
      set(scope, path, el.value)
      scope.update()
    })
  } else if (el.type === 'radio') {
    el.checked = get(scope, path) === el.value
    unbind(el, 'change')
    bind(el, 'change', () => {
      set(scope, path, el.value)
      scope.update()
    })
  } else if (el.type === 'checkbox') {
    const tureVal = el.getAttribute('o-true-value') || true
    const falseVal = el.getAttribute('o-false-value') || false
    el.checked = get(scope, path) === tureVal
    unbind(el, 'change')
    bind(el, 'change', () => {
      set(scope, path, el.checked ? tureVal : falseVal)
      scope.update()
    })
  } else {
    el.value = get(scope, path)
    unbind(el, 'input')
    bind(el, 'input', () => {
      set(scope, path, el.value)
      scope.update()
    })
  }
})

define('my-component', class extends WeElement {

  formData = {
    name: 'Omi',
    colors: {
      red: true,
      blue: false,
      green: true
    },
    awesome: 'ofCourse',
    chickenEgg: 'egg',
    omiReact: 'Omi'
  }

  render() {
    return (
      <div>

        <h1>Omi Extend: o-model</h1>

        <h3>Name</h3>
        <input o-model="formData.name"> </input>

        <h3>Favorite Colors</h3>
        <div class="form-group">
          <label class="checkbox-inline">
            <input type="checkbox" name="favoriteColors" o-model="formData.colors.red" /> Red
            </label>
          <label class="checkbox-inline">
            <input type="checkbox" name="favoriteColors" o-model="formData.colors.blue" /> Blue
            </label>
          <label class="checkbox-inline">
            <input type="checkbox" name="favoriteColors" o-model="formData.colors.green" /> Green
            </label>
        </div>

        <h3>Personal Question</h3>
        <div class="checkbox">
          <label>
            <input type="checkbox" name="awesome" o-model="formData.awesome" o-true-value="ofCourse" o-false-value="iWish" />
            Are you awesome?
            </label>
        </div>

        <h3>Chicken or the Egg?</h3>
        <div class="form-group">
          <div class="radio">
            <label>
              <input type="radio" name="chickenEgg" value="chicken" o-model="formData.chickenEgg" />
              Chicken
                </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" name="chickenEgg" value="egg" o-model="formData.chickenEgg" />
              Egg
                </label>
          </div>
        </div>

        <h3>Omi or React?</h3>
        <div class="form-group">
          <select o-model='formData.omiReact'>
            <option value="Omi">Omi</option>
            <option value="React">React</option>
          </select>
        </div>

        <h3>output</h3>
        <pre>{JSON.stringify(this.formData, null, 2)} </pre>

      </div>
    )
  }
})

render(<my-component></my-component>, 'body')
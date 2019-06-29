import { define, render, WeElement } from '../../src/omi'

define('my-app', class extends WeElement {

  obj = {
    a: 1,
    b: { c: 2, d: 3 },
    e: 4
  }
  render() {
    return (
      <my-ele first="dnt" last='zhang' bool-test obj={this.obj} ></my-ele>
    )
  }
})

define('my-ele', class extends WeElement {
  static propTypes = {
    first: String,
    last: String,
    boolTest: Boolean,
    obj: Object
  }

  //static observer will prevent update by parent update
  static observer = {
    first(newVal, oldVal) {
      this.fullName = newVal + this.props.last
      this.update()
    },
    last(newVal, oldVal) {
      this.fullName = this.props.first + newVal
      this.update()
    },
    bollTest() {

    },
    'obj.a'() {

    },
    'obj.b.*'() {

    },
    '*'() {

    }
  }

  render(props) {
    return (
      <div>Hello, World! I'm {`${this.fullName}`}</div>
    )
  }
})


render(<my-app />, 'body')


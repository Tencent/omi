import { define, WeElement } from '../../src/omi'

define('hello-element', class extends WeElement {
  static defaultProps = {
    msg: '',
    propFromParent: '123111',
    testDefault: 'abc'
  }

  onClick = evt => {
    // trigger CustomEvent
    this.fire('abc', { name: 'dntzhang', age: 12 })
    evt.stopPropagation()
  }

  css() {
    return `
        div {
          color: red;
          cursor: pointer;
        }`
  }

  receiveProps(props, data, oldProps) {
    console.log(props, data, oldProps)
  }

  render(props) {
    return (
      <div onClick={this.onClick}>
        Hello {props.msg} {props.propFromParent}
        <div>Click Me!</div>
        <div>{props.testDefault}</div>
      </div>
    )
  }
})

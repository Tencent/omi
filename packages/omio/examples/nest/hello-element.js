import { define, WeElement } from '../../src/omi'

define('hello-element', class extends WeElement {
  static defaultProps = {
    msg: '',
    propFromParent: '123111',
    testDefault: 'abc'
  }

  onClick = evt => {
    // trigger CustomEvent
    this.fire('myEvent', { name: 'dntzhang', age: 12 })
    evt.stopPropagation()
  }

  static css = `
        div {
          color: red;
          cursor: pointer;
        }`


  receiveProps(props, oldProps) {
		//this.restoreProps('propFromParent')
		console.log(props, oldProps)
    //props.propFromParent = oldProps.propFromParent
    return false
	}


  render(props) {
    return (
      <div onClick={this.onClick}> {props.propFromParent}</div>
    )
  }
})

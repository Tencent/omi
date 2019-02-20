const transform = require('@tarojs/transformer-wx')

const baseOptions = {
  isRoot: false,
  isApp: false,
  sourcePath: __dirname,
  outputPath: __dirname,
  code: '',
  isTyped: false
}



const baseCode = `
import { define, render, WeElement } from '../../src/omi'
import './hello-element'

define('my-app', class extends WeElement {
  data = { abc: 'abc', passToChild: 123 }

  install() {
    this.dd = { a: 1 }
  }

  onMyEvent = evt => {
    this.data.abc = ' by ' + evt.detail.name
    this.data.passToChild = 1234
    this.dd.a++
    this.update()
  }

  css() {
    return \`
         div{
             color: green;
         }\`
  }

  render(props, data) {
    return (
      <div>
        Hello {props.name} {data.abc} {this.dd.a}
        <hello-element
          onMyEvent={this.onMyEvent}
          propFromParent={data.passToChild}
          dd={this.dd}
          msg="WeElement"
        />
      </div>
    )
  }
})`

const result = transform(Object.assign({}, baseOptions, {
  code: baseCode
}))

console.log(result.template)
console.log(result.code)
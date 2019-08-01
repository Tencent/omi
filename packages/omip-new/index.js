const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")

const code = `
import { render, h } from 'omis'

const Index = (props, store) => {
  return (
    <view>
      <text> {store.item.index}}: {store.item.msg} </text>
      <text> Time: {store.item.time} </text>
    </view>
  )
}

Index.store = _ => {
  return {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  }
}

render(<Index />, 'body')`;


const ast = parser.parse(code, {
  sourceType: 'module',
  plugins: [
    // enable jsx and flow syntax
    "jsx"
  ]
});

console.log(ast)
traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: "n" })) {
      path.node.name = "x";
    }
  },
  JSXElement(p) {
    //p.stop();
    console.log(p)
  }
});
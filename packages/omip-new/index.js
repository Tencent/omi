const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")
const generate = require("@babel/generator").default

const code = `
import { render, h } from 'omis'

const Index = (props, store) => {
  const abc = <div></div> 
  return (
    <view>
      <text> {store.item.index}: {store.item.msg} </text>
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
var jsxList =[]
traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: "n" })) {
      path.node.name = "x";
    }
  },
  JSXElement(p) {
    //p.stop();
    //change attributes
    p.node.openingElement.attributes.push(t.jsxAttribute(t.JSXIdentifier('a'), t.StringLiteral('1')))
    console.log(p)
    jsxList.push(p)
  } 
})


//change tag name
jsxList[0].node.openingElement.name.name = 'view'
jsxList[0].node.closingElement.name.name = 'view'
console.log(generate(jsxList[0].node).code)


const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")

const code = `
import { render, h } from 'omis'

const Counter = (props, store) => {
  return (
    <div>
      <button onClick={store.sub}>-</button>
      <span>{store.count}</span>
      <button onClick={store.add}>+</button>
    </div>
  )
}

Counter.store = _ => {
  return {
    count: 1,
    add() {
      this.count++
      this.update()
    },
    sub() {
      this.count--
      this.update()
    }
  }
}

Counter.css = \`
span{
  color: red;
}
\`

render(<Counter />, 'body')`;


const ast = parser.parse(code,{
  sourceType: 'module',
  plugins: [
  // enable jsx and flow syntax
  "jsx"
]});

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
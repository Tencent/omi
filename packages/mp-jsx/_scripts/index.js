const jsx  = require('./jsx2wxml/jsx')
const bc = require('babel-core')
//https://astexplorer.net/

const code = `<div>abc</div>`;
const ele = bc.transform(code,{
  parserOpts: {
    plugins: [
      'classProperties',
      'jsx',
      'flow',
      'flowComment',
      'trailingFunctionCommas',
      'asyncFunctions',
      'exponentiationOperator',
      'asyncGenerators',
      'objectRestSpread',
      'decorators',
      'dynamicImport'
    ]
  }
}
)

//console.log(ele.ast.program.body[0].expression)
const a = jsx.parseJSXElement(ele.ast.program.body[0].expression)
console.log(a)

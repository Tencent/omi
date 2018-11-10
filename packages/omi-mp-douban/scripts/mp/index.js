let u3 = require('uglify-js')
let parse = require('./parse')
let babel = require('@babel/core')

function getRef(fn) {
  let ast = u3.parse(fn)
  ast.figure_out_scope()
  let result = {}
  ast.walk(
    new u3.TreeWalker(node => {
      let name = node.name
      if (node.scope) {
        if (!isInScopeChainVariables(node.scope, name)) {
          if (name !== 'this') {
            result[name] = true
          }
        }
      }
    })
  )
  return result
}

function isInScopeChainVariables(scope, name) {
  let vars = scope.variables._values
  if (Object.prototype.hasOwnProperty.call(vars, '$' + name)) {
    return true
  }
  if (scope.parent_scope) {
    return isInScopeChainVariables(scope.parent_scope, name)
  }
  return false
}

let refStr = 'const { 0.0 } = Object.assign({}, this.data, this.props)'

function addPropsAndData(ref, code) {
  let listStr = Object.keys(ref).join(',')
  if (listStr) {
    return code.replace('0.0', refStr.replace('0.0', listStr))
  }
  return code.replace('0.0', '')
}

function compile(wxml, fnName) {
  let code = parse(wxml, fnName || 'render')
  let ref = getRef(
    babel
      .transform(code, { presets: ['env'] })
      .code.replace('"use strict";', '')
  )

  delete ref.h

  return addPropsAndData(ref, code)
}

module.exports = compile

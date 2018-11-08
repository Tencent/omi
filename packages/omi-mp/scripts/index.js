var u3 = require('uglify-js')
var parse = require('./parse')
var babel =  require("@babel/core")

function getRef(fn) {
  var ast = u3.parse(fn);
  ast.figure_out_scope();
  var result = {};
  ast.walk(new u3.TreeWalker(function (node) {

    var name = node.name;
    if (node.scope) {
      if (!isInScopeChainVariables(node.scope, name)) {
        if(name !== 'this'){
          result[name] = true;
        }
      }
    }

  }));
  return result;
}

function isInScopeChainVariables(scope, name) {
  var vars = scope.variables._values;
  if (Object.prototype.hasOwnProperty.call(vars, "$" + name)) {
    return true;
  }
  if (scope.parent_scope) {
    return isInScopeChainVariables(scope.parent_scope, name);
  }
  return false;
}

var refStr = 'const { 0.0 } = Object.assign({}, this.data, this.props)'


function addPropsAndData(ref, code){

  var listStr = Object.keys(ref).join(',')
  if(listStr){
    return code.replace('0.0',refStr.replace('0.0',listStr))
  }else{
    return code.replace('0.0', '')
  }

}

function compile(wxml, fnName){

  var code = parse(wxml, fnName || 'render')
  var ref = getRef(babel.transform(code, { presets: ['env'] }).code.replace('"use strict";', ''))

  delete ref.h

  return addPropsAndData(ref,code)
}

module.exports = compile

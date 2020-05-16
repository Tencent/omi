const fs = require('fs')

const css = fs.readFileSync('./src/index.css')
const babel = require("babel-core");

let js = fs.readFileSync('./src/index.esm.js', 'utf-8')


fs.writeFileSync('./src/index.esm.js',
  js.replace(`var css = /*#__PURE__*/Object.freeze({
    __proto__: null
});`, `
var css = \`${css}\`
`)
)

js = fs.readFileSync('./src/index.js', 'utf-8')

fs.writeFileSync('./src/index.js', js.replace(`var css = /*#__PURE__*/Object.freeze({
        __proto__: null
    });`, babel.transform(`var css = \`${css.toString()}\``, {
  presets: ['es2015']
}).code))


const fs = require('fs')

let js = fs.readFileSync('./src/index.esm.js', 'utf-8')

fs.writeFileSync('./src/index.esm.js',
  js.replace(`var css = /*#__PURE__*/Object.freeze({`, `var css = index;Object.freeze({`)
)

js = fs.readFileSync('./src/index.js', 'utf-8')

fs.writeFileSync('./src/index.js',
  js.replace(`var css = /*#__PURE__*/Object.freeze({`, `var css = index;Object.freeze({`)
)



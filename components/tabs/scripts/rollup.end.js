const fs = require('fs')

const css = fs.readFileSync('./src/index.css')

const js = fs.readFileSync('./src/index.esm.js', 'utf-8')


fs.writeFileSync('./src/index.esm.js',
js.replace(`var css = /*#__PURE__*/Object.freeze({
    __proto__: null
});`, `
var css = \`${css}\`
`)
)



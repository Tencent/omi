const fs = require("fs");
const path = require('path');

const root = '../node_modules/@material-ui/icons/esm'

const entiy = {};

const files = fs.readdirSync(root);


const hyphenateRE = /\B([A-Z])/g
const hyphenate = function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}


//遍历这些文件或者文件夹
for (let i = 0; i < files.length; i++) {

  const type = path.extname(files[i]).substring(1)
  const name = path.basename(files[i], '.' + type)
  const hname = hyphenate(name)
  entiy[hname] = './esm/' + hname + '.js'

  const data = fs.readFileSync(root + '/' + files[i], "utf-8")

  fs.writeFileSync(`../esm/${hname}.js`, data
    .replace("import React from 'react'", "import { h } from 'omi'")
    .replace(/React.createElement/g, 'h')
    .replace(/React.Fragment/g, 'h.f')
  )

}

fs.writeFileSync('./entry.js', 'module.exports =' + JSON.stringify(entiy))

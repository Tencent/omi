const fs = require("fs");
const path = require('path');

const root = '../node_modules/@material-ui/icons/esm'

const arr = [];

const files = fs.readdirSync(root);


const hyphenateRE = /\B([A-Z])/g
const hyphenate = function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}


//遍历这些文件或者文件夹
for (let i = 0; i < files.length; i++) {

  const type = path.extname(files[i]).substring(1)
  const name = path.basename(files[i], '.' + type)


  const data = fs.readFileSync(root + '/' + files[i], "utf-8")
  console.log(data)
}

fs.writeFileSync('./list.json', JSON.stringify({ list: arr }))

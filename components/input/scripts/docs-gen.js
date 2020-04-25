//自动扫描 index.tsx 生成 readme
const fs = require('fs')

const content = fs.readFileSync('./src/index.tsx', 'utf-8')

const res = content.match(new RegExp('interface Props \\{[\\s\\S]*?}'))[0].replace('interface Props ', '')

const res2 = content.match(new RegExp('static defaultProps = \\{[\\s\\S]*?}'))[0].replace('static defaultProps = ', '').replace(/    /g, '  ').replace(/  }/g, ')')

console.log(res2)

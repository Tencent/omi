//自动扫描 index.tsx 生成 readme
const fs = require('fs')

const content = fs.readFileSync('./src/index.tsx', 'utf-8')

const props = content.match(new RegExp('interface Props \\{[\\s\\S]*?}'))[0].replace('interface Props ', '')

const defaultProps = content.match(new RegExp('static defaultProps = \\{[\\s\\S]*?}'))[0].replace('static defaultProps = ', '').replace(/    /g, '  ').replace(/  }/g, ')')


const eventContexts = content.match(new RegExp('this.fire\\([\\s\\S]*?,', 'g'))
const package = require('../package.json')
const packageName = package.name
const name = packageName.split('/')[1]

const upperCaseName = name.split('-').map(item => {
  return item.charAt(0).toUpperCase() + item.slice(1)
}).join('')
const tagName = 'o-' + name

//fire 附近打标标记 event.detail 类型？
const events = eventContexts.map(event => {
  return event.replace('this.fire(\'', '').replace('\',', '')
})
const eventMap = {}
events.forEach(event => {
  eventMap[event] = 1
})

const cn = `## ${upperCaseName} 复选框

用于选择多个选项。

<iframe height="391" style="width: 100%;" scrolling="no" title="OMIU Checkbox" src="https://codepen.io/omijs/embed/MWapwNZ?height=391&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/MWapwNZ'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

\`\`\`js
import '${packageName}'
\`\`\`

或者直接 script 标签引入。


\`\`\`html
<script src="https://unpkg.com/${packageName}"></script>
\`\`\`

## 使用

\`\`\`html
<${tagName}> </${tagName}>
\`\`\`


## API

### 属性

\`\`\`jsx
${props}
\`\`\`

### 默认属性

\`\`\`jsx
${defaultProps}
\`\`\`

### 事件

${Object.keys(eventMap).map(event => {
  return `* ${event}\n`
}).join('')}
`

fs.writeFileSync('./xx.md', cn)
console.log(props)
console.log(defaultProps)
console.log(Object.keys(eventMap))

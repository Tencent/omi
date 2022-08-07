//自动扫描 index.tsx 生成 readme
const fs = require('fs')
const path = require('path')

const content = fs.readFileSync('./src/index.tsx', 'utf-8')
const exampleContent = fs.readFileSync('./index.html', 'utf-8')
console.log(7, exampleContent)
console.log(8, exampleContent.match(/<o-chart[\s\S]+\/>/)[0])

const props = extract('interface ChartProps {', content).replace(
  'interface Props ',
  ''
)
console.log(11, props)

const defaultProps = extract('static defaultProps = {', content)
  .replace('static defaultProps = ', '')
  .replace(/  }/g, '}')
  .replace(/    /g, '  ')
console.log(17, defaultProps)
const eventContexts = content.match(
  new RegExp('this.fire\\([\\s\\S]*?[,|)]', 'g')
)
const package = require('../package.json')
const packageName = package.name
const name = packageName.split('/')[1]

const upperCaseName = name
  .split('-')
  .map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1)
  })
  .join('')
const tagName = 'o-' + name

//fire 附近打标标记 event.detail 类型？
let events, eventMap
if (eventContexts) {
  events = eventContexts.map((event) => {
    return event.replace("this.fire('", '').replace("',", '').replace("')", '')
  })
  eventMap = {}
  events.forEach((event) => {
    eventMap[event] = 1
  })
}

eval('var defaultPropsObj=' + defaultProps)
// 中文的注释
const cnContent = `## ${upperCaseName} ${package.docsExtend.cnName}
${package.docsExtend.cnDescription}
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
<${tagName}></${tagName}>
\`\`\`


## API

### 属性

\`\`\`tsx
${props}
\`\`\`

${defaultProps ? '### 默认属性\n' : ''}${defaultProps ? '```tsx\n' : ''}${
  defaultProps ? defaultProps : ''
}
${defaultProps ? '```\n' : ''}${eventMap ? '### 事件\n' : ''}${
  eventMap
    ? Object.keys(eventMap)
        .map((event) => {
          return `* ${event}\n`
        })
        .join('')
    : ''
}`

fs.writeFileSync(`../docs-src/src/docs/zh-cn/${name}.md`, cnContent)

const enContent = `## ${upperCaseName}

${package.description}

## Import

\`\`\`js
import '${packageName}'
\`\`\`

Or use script tag to ref it.


\`\`\`html
<script src="https://unpkg.com/${packageName}"></script>
\`\`\`

## Usage
\`\`\`html
${exampleContent.match(/<o-chart[\s\S]+\/>/)[0]}
\`\`\`

## API

### Props

\`\`\`tsx
${props}
\`\`\`

${defaultProps ? '### defaultProps\n\n' : ''}${defaultProps ? '```tsx\n' : ''}${
  defaultProps ? defaultProps : ''
}
${defaultProps ? '```\n' : ''}${eventMap ? '### Events\n\n' : ''}${
  eventMap
    ? Object.keys(eventMap)
        .map((event) => {
          return `* ${event}\n`
        })
        .join('')
    : ''
}`

fs.writeFileSync(`../docs-src/src/docs/en/${name}.md`, enContent)

fs.writeFileSync(path.join(__dirname, `../README.md`), enContent)

function extract(startWith, str) {
  const start = str.indexOf(startWith)
  if (start === -1) return ''
  let end = start + startWith.length
  let stackCount = 1
  while (end < str.length) {
    if (str[end] === '}') {
      if (stackCount === 1) {
        break
      } else {
        stackCount--
      }
    } else if (str[end] === '{') {
      stackCount++
    }

    end++
  }

  return str.substring(start, end + 1)
}

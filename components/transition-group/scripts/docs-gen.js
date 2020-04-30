//自动扫描 index.tsx 生成 readme
const fs = require('fs')

const content = fs.readFileSync('./src/index.tsx', 'utf-8')

const props = extract('interface Props {', content).replace('interface Props ', '')

const defaultProps = extract('static defaultProps = {', content).replace('static defaultProps = ', '').replace(/  }/g, '}').replace(/    /g, '  ')


const eventContexts = content.match(new RegExp('this.fire\\([\\s\\S]*?[,|)]', 'g'))
const package = require('../package.json')
const packageName = package.name
const name = packageName.split('/')[1]

const upperCaseName = name.split('-').map(item => {
  return item.charAt(0).toUpperCase() + item.slice(1)
}).join('')
const tagName = 'o-' + name

//fire 附近打标标记 event.detail 类型？
let events, eventMap
if (eventContexts) {

  events = eventContexts.map(event => {
    return event.replace('this.fire(\'', '').replace('\',', '').replace('\')', '')
  })
  eventMap = {}
  events.forEach(event => {
    eventMap[event] = 1
  })
}

const cnContent = `## ${upperCaseName} ${package.docsExtend.cnName}

${package.docsExtend.cnDescription}

<iframe height="${package.docsExtend.codepenHeight}" style="width: 100%;" scrolling="no" title="OMIU ${upperCaseName}" src="https://codepen.io/omijs/embed/${package.docsExtend.codepen}?height=${package.docsExtend.codepenHeight}&theme-id=default&default-tab=${package.docsExtend.codepenDefaultTab}" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/${package.docsExtend.codepen}'>OMIU Checkbox</a> by OMI
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
<${tagName}></${tagName}>
\`\`\`


## API

### 属性

\`\`\`tsx
${props}
\`\`\`

${defaultProps ? '### 默认属性\n' : ''}${defaultProps ? '\`\`\`tsx\n' : ''}${defaultProps ? defaultProps : ''}
${defaultProps ? '\`\`\`\n' : ''}${eventMap ? '### 事件\n' : ''}${eventMap ? Object.keys(eventMap).map(event => {
  return `* ${event}\n`
}).join('') : ''}`

fs.writeFileSync(`../docs-src/src/docs/zh-cn/${name}.md`, cnContent)



const enContent = `## ${upperCaseName}

${package.description}

<iframe height="${package.docsExtend.codepenHeight}" style="width: 100%;" scrolling="no" title="OMIU ${upperCaseName}" src="https://codepen.io/omijs/embed/${package.docsExtend.codepen}?height=${package.docsExtend.codepenHeight}&theme-id=default&default-tab=${package.docsExtend.codepenDefaultTab}" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/${package.docsExtend.codepen}'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

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
<${tagName}></${tagName}>
\`\`\`

## API

### Props

\`\`\`tsx
${props}
\`\`\`

${defaultProps ? '### 默认属性\n\n' : ''}${defaultProps ? '\`\`\`tsx\n' : ''}${defaultProps ? defaultProps : ''}
${defaultProps ? '\`\`\`\n' : ''}${eventMap ? '### Events\n\n' : ''}${eventMap ? Object.keys(eventMap).map(event => {
  return `* ${event}\n`
}).join('') : ''}`


fs.writeFileSync(`../docs-src/src/docs/en/${name}.md`, enContent)


fs.writeFileSync(`../${name}/README.md`, enContent.replace(/<iframe[\s\S]*?<\/iframe>/, `* [→ CodePen](https://codepen.io/omijs/pen/${package.docsExtend.codepen})`))
// console.log(props)
// console.log(defaultProps)
// console.log(Object.keys(eventMap))



function extract(startWith, str) {
  const start = str.indexOf(startWith)

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

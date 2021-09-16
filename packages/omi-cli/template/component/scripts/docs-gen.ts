// 自动扫描 index.tsx 生成 README
import fs from 'fs'
// package 是严格模式下的保留字，使用 pkg 替代
import pkg from '../package.json'
import { pascalCase, extract } from './utils'
import { generateAPIDocs, generateImportAndUsageDocs } from './docs'

const srcFile = './src/index.tsx'
const content = fs.readFileSync(srcFile, 'utf-8')

const propsStartWith = 'export type Attrs = {'
const props = extract(propsStartWith, content).replace(
  propsStartWith.slice(0, -1),
  ''
)

const defaultPropsStartWith = 'static defaultProps = {'
const defaultProps = extract('static defaultProps = {', content)
  .replace(defaultPropsStartWith.slice(0, -1), '')
  .replace(/  }/g, '}')
  .replace(/    /g, '  ')

const eventContexts = content.match(
  new RegExp('this.fire\\([\\s\\S]*?[,|)]', 'g')
)

const pkgName = pkg.name
const name = pkgName.split('/')[1]

const upperCaseName = pascalCase(name)
const tagName = 'o-' + name

// fire 附近打标标记 event.detail 类型？
let events: string[]
let eventMap:
  | {
      [key: string]: any
    }
  | undefined = undefined

if (eventContexts) {
  events = eventContexts.map((event) => {
    return event.replace("this.fire('", '').replace("',", '').replace("')", '')
  })
  eventMap = {}
  events.forEach((event) => {
    if (eventMap) {
      eventMap[event] = 1
    }
  })
}

const cnContent = `# ${upperCaseName} ${pkg.docsExtend.cnName}

${pkg.docsExtend.cnDescription}

<iframe height="${
  pkg.docsExtend.codepenHeight
}" style="width: 100%;" scrolling="no" title="OMIU ${upperCaseName}" src="https://codepen.io/omijs/embed/${
  pkg.docsExtend.codepen
}?height=${pkg.docsExtend.codepenHeight}&theme-id=default&default-tab=${
  pkg.docsExtend.codepenDefaultTab
}" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/${
    pkg.docsExtend.codepen
  }'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

${generateImportAndUsageDocs('zh', {
  pkgName,
  tagName
})}
${generateAPIDocs('zh', {
  props,
  defaultProps,
  eventMap
})}
`

// todo: write to docs
// fs.writeFileSync(`../docs-src/src/docs/zh-cn/${name}.md`, cnContent)
fs.writeFileSync('./README.zh.md', cnContent)

const enContent = `# ${upperCaseName}

${pkg.description}

<iframe height="${
  pkg.docsExtend.codepenHeight
}" style="width: 100%;" scrolling="no" title="OMIU ${upperCaseName}" src="https://codepen.io/omijs/embed/${
  pkg.docsExtend.codepen
}?height=${pkg.docsExtend.codepenHeight}&theme-id=default&default-tab=${
  pkg.docsExtend.codepenDefaultTab
}" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/${
    pkg.docsExtend.codepen
  }'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

${generateImportAndUsageDocs('en', {
  pkgName,
  tagName
})}
${generateAPIDocs('en', {
  props,
  defaultProps,
  eventMap
})}
`

// fs.writeFileSync(`../docs-src/src/docs/en/${name}.md`, enContent)

fs.writeFileSync(
  `./README.md`,
  enContent.replace(
    /<iframe[\s\S]*?<\/iframe>/,
    `- [→ CodePen](https://codepen.io/omijs/pen/${pkg.docsExtend.codepen})`
  )
)

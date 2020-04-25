//自动扫描 index.tsx 生成 readme
const fs = require('fs')

const content = fs.readFileSync('./src/index.tsx', 'utf-8')

const props = content.match(new RegExp('interface Props \\{[\\s\\S]*?}'))[0].replace('interface Props ', '')

const defaultProps = content.match(new RegExp('static defaultProps = \\{[\\s\\S]*?}'))[0].replace('static defaultProps = ', '').replace(/    /g, '  ').replace(/  }/g, ')')


const eventContexts = content.match(new RegExp('this.fire\\([\\s\\S]*?,', 'g'))

//fire 附近打标标记 event.detail 类型？
const events = eventContexts.map(event => {
  return event.replace('this.fire(\'', '').replace('\',', '')
})
const eventMap = {}
events.forEach(event => {
  eventMap[event] = 1
})

console.log(props)
console.log(defaultProps)
console.log(Object.keys(eventMap))

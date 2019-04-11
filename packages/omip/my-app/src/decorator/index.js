/**
 * 注意：
 * 1. 入口文件用@App,页面文件用@Page,组件用@Component
 * 2. 小程序编译过程只会对主代码块中的@App和@Page进行处理，所以不要在局部代码块中使用@App和@Page
 * 3. @App和@Page不能用其它别名替换,定义新的decorator的时候也不要使用App和Page当名字
 * 4. 一个文件中应该只能有一个@App或一个@Page或一个@Component
 */
import { define } from 'omi'

function kebabCase (str) {
  return str.replace(/([A-Z])/g, '-$1').substr(1).toLowerCase()
}

const Define = component => {
  if (typeof component === 'function') {
    define(kebabCase(component.name), component)
  } else {
    return (Element) => {
      define(kebabCase(Element.name), Element)
    }
  }
}

const App = Define
const Component = Define
const Page = Define

export {
  App,
  Page,
  Component
}

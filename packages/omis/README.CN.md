[English](./README.md) | 简体中文 

# Omis

> Functional Component + Store + Scoped Style in 3KB

* 函数式风格但非函数式编程 
* 结构-样式-行为分离
* hyperscript 视觉上更加友好
* 每个组件可以带有一个 store，去中心化
* 支持全局 store 共享数据，并且按需局部更新组件
* 每个组件 store 拥有 update 方法，执行该方法局部刷新组件

- [→ Omis 在线例子](https://codepen.io/collection/XjLaRo/)
- [→ 文档](https://tencent.github.io/omi/site/omis/cn.html)
- [→ Omisu 按钮例子](https://codepen.io/dntzhang-the-typescripter/pen/eqJNyy) & [→ Omisu 按钮源码](https://github.com/Tencent/omi/blob/master/packages/omisu/src/button/index.tsx#L8-L31)

## 快速入门

```bash
npm i omis
```

```jsx
import { render, h } from 'omis'

const Counter = (props, store) => {
  return (
    <div>
      <button onClick={store.sub}>-</button>
      <span>{store.count}</span>
      <button onClick={store.add}>+</button>
    </div>
  )
}

Counter.store = _ => {
  return {
    count: 1,
    add() {
      this.count++
      this.update()
    },
    sub() {
      this.count--
      this.update()
    }
  }
}

Counter.css = `
span{
  color: red;
}
`

render(<Counter />, 'body')
```

## 快速开始

```bash
$ npm i omi-cli -g     # install cli
$ omi init-s my-app    # init project
$ cd my-app            
$ npm start            # develop
$ npm run build        # release
```

> `npx omi-cli init-s my-app` 也是支持的(npm v5.2.0+).

## 贡献代码

### 开发

``` bash
npm start example-name
```

### 发布

``` bash
npm run build
```

### 测试

``` bash
npm run test
```

### Todo

* Web Components Supporting

## License

MIT 

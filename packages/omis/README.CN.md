# Omis

> Functional Component + Store + Scoped Style 

* 函数式风格但非函数式编程 
* 结构-样式-行为分离
* hyperscript 视觉上更加友好
* 每个组件可以带有一个 store，去中心化
* 每个组件的 store 可以依赖全局 store，中心化
* 每个组件 store 拥有 update 方法，执行该方法自定局部刷新组件

[→ Omis 在线例子](https://codepen.io/collection/XjLaRo/)

## 快速入门

```jsx
import { render } from 'omis'

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
    add(e) {
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

## 开发

``` bash
npm start example-name
```

## 发布

``` bash
npm run build
```

## Todo

* Web Components Supporting

## License

MIT 

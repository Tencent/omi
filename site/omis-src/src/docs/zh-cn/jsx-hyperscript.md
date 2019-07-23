## JSX 和 Hyperscript

JSX 和 Hyperscript 是目前为止开发体验最棒、语法噪音最少、表达能力最强且图灵完备的 UI 表达式，模板引擎不完备，模板字符串图灵完备但是语法噪音太大。即：

## Hello JSX

使用 JSX，可以在 JS 中书写闭合的 XML 标签来表达 DOM 结构等，比如:

```jsx
const element = <h1>Hello, world!</h1>
```

## 数据绑定

据绑定使用单括号将变量或表达式、或JS语句块包起来：

```jsx
<h1>{user.name}</h1>
```

Hyperscript 版本:

```js
h('h1', {}, user.name)
```

用在 Omis 里:

```jsx
const Comp = props => <h1>{props.name}</h1>
```

使用元素:

```jsx
<Comp name='omis' />
```

还可以写表达式:

```jsx
<h1>{user.age > 18 ? '成年' : '未成年'}<h1>
```

表达式里也可以嵌入 JSX：

```jsx
<h1>{ user.age > 18 ? <div>成年</div> : <div>未成年</div> }<h1>
```

上面的三元其实就是 if else，如果仅仅需要 if，可以：

```jsx
<h1>{ user.age > 18 && <div>成年</div> }<h1>
```

强大！

## 列表渲染

数据源:

```js
const arr = [{
  message: 'foo',
}, {
  message: 'bar'
}]
```

JSX 渲染:

```jsx
<ul>
  {arr.map(item =>
    <li>{item.message}</li>
  )}
</ul>
```

等同于:

```jsx
<ul>
  {
    arr.map(item => {
      return <li>{item.message}</li>
    })
  }
</ul>
```

如果是 `{}` 包裹，就需要 `return`。如果需要 index:

```jsx
<ul>
  {arr.map((item, index) =>
    <li>{index}: {item.message}</li>
  )}
</ul>
```

## 综合例子

这里举一个九九乘法表:

```jsx
import { render, h } from 'omis'

const MultiplicationTable = props =>
  <div>
    {props.numbers.map((a, indexA) =>
      <div>
        {
          props.numbers.map((b, indexB) => {
            return indexA <= indexB && <span>{a}*{b}={a * b} </span>
          })
        }
      </div>
    )}
  </div>


MultiplicationTable.css = `
span{
  display: inline-block;
  width: 68px;
}
`

render(<MultiplicationTable numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />, 'body')
```

结果展示:

![](https://github.com/Tencent/omi/raw/master/assets/99.jpg)

[→ 在线查看](https://codepen.io/dntzhang-the-typescripter/pen/qebEOq)

也可以使用 hyperscript 直接实现：

```js
const MultiplicationTable = props =>
  h('div', {}, props.numbers.map((a, indexA) =>
    h('div', {}, props.numbers.map((b, indexB) =>
      indexA <= indexB && h('span', {}, `${a}*${b}=${a * b}`)
    ))
  ))
```
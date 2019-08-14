## 多端统一框架 kbone 深度体验 - 支持 Omi、React、Vue 和原生JS

kbone 是小程序官方出的多端统一框架，市面上就很多跨端开发框架，但是 kbone 是最彻底的一款。因为:

> kbone 不仅可以开发小程序和 Web，而且可以使用**任意前端框架**开发小程序和 Web。

* [omi-kbone](https://github.com/Tencent/omi/tree/master/packages/omi-kbone)
* [vue-kbone](https://github.com/wechat-miniprogram/kbone)
* [react-kbone](https://github.com/Tencent/omi/tree/master/packages/react-kbone)

阅读本文你可以收获：

* Kbone 基础原理
* 使用 preact + kbone 开发小程序 Counter
* 使用 vue + kbone 开发小程序 Counter
* 使用 omis + kbone 开发小程序 TodoApp
* 使用 omis + kbone 开发小程序游戏贪吃蛇
* 使用 kbone 开发多页应用
* 领域驱动设计在前端的集成
* 理解 MVC、MVP、MVVM 模式
* 使用 DOM 编写小程序游戏（并非小游戏）
* 游戏主帧率和局部帧率控制

## Kbone 基础原理

打开 Kbone 官方编译出的小程序的 index.js，修改其中的代码：

```js
const mp = require('miniprogram-render')
const config = require('../../config')

function init(window, document) {
    require('../../common/vendors~index.js')(window, document);

    const ele = document.createElement('div')
    ele.innerHTML = 'Hello Kbone!'
    document.body.appendChild(ele)
}
...
```

运行效果如下:

<img src="../assets/hello-kbone.png"  width="300"/>


上面的代码运行在小程序里。可以窥见其一二：

* Kbone 实现了完整的 DOM/BOM 对象模型，即官方的 miniprogram-render
* Kbone 允许 react、omi 和 vue 的完整 runtime 嵌入在小程序中

还有看不见的，比如：

* Kbone 利用自定义组件渲染所有 DOM 节点
* 自定义组件可以自引用来描述完整 DOM 树

该自定义组件就是官方封装的 miniprogram-element：

```json
{
  "usingComponents": {
    "element": "miniprogram-element"
  }
}
```

```html
<element data-private-node-id="{{nodeId}}" data-private-page-id="{{pageId}}"></element>
````

pageId 和 nodeId 两个参数缺一不可，组件内部会根据传入的 pageId 找到对应的 window/document，然后根据 nodeId 找到对应的 dom 节点进行渲染。
上面说了，miniprogram-render 实现了轻量的 DOM 对象模型，所以不管是框架还是原生js执行之后，输出一些节点信息，也算是虚拟 DOM，比如嵌套的 childNodes。miniprogram-element 可以根据节点信息作为自定义组件的 data，并且遍历生产 WXML 组件的节点树。

<img src="../assets/kbone.png"  width="400"/>

其中 v-dom 相当于数据(这里可能有点绕，dom 作为 dom 渲染的数据，但事实就是如此)， mp-element 相当于模板，数据+模板完成渲染。其中前面三个步骤都是运行在小程序逻辑层(JSCore)当中，使用逻辑层自己模拟出来的 DOM/BOM API，也就是官方的 miniprogram-render。

<img src="../assets/mp.png"  width="500"/>

问：jsx 怎么生成 wxml 的？

再绕一次：因为 react 或者 omi 里的 jsx 会生成 v-dom，在浏览器里最后都会映射到 dom api 生成 dom 树和设置属性，然后在小程序当中，jsx 生成 v-dom 然后映射到自己模拟的 dom api，所以可以生成另外一份 v-dom（浏览器中是真实 dom），作为自定义 element 的数据进行 wxml 渲染。

## 实战 TodoApp

|                   |                       |
| ------------------------------- | ----------------------------------- |
| <img src="../assets/todo-app.jpg"  width="400"/> | <img src="../assets/todo-app2.jpg"  width="400"/> |



### 快速开始

```js
npm i omi-cli -g
omi init-kbone my-app
cd my-app
npm start        //开发小程序
npm run web      //开发 web
npm run build    //发布 web
```

> 也支持一条命令 `npx omi-cli init-kbone my-app` (npm v5.2.0+)


## 目录说明

```
├─ build
│  ├─ mp     //微信开发者工具指向的目录，用于生产环境
│  ├─ web    //web 编译出的文件，用于生产环境
├─ config
├─ public
├─ scripts
├─ src
│  ├─ assets
│  ├─ components    //存放所有组件
│  ├─ log.js        //入口文件，会 build 成  log.html
│  └─ index.js      //入口文件，会 build 成  index.html
```

定义结构：

```jsx
const Todo = (props, { clear, filter, textInput, inputText, todo, left, type, newTodo, done, toggle, deleteItem }) => {
  return (
    <div class="container">
      <div class="title">todos</div>
      <div class="form">
        <input class="new-todo" onInput={textInput} value={inputText} placeholder="下一步行动计划是？" autofocus=""></input>
        <button class="add-btn" onClick={newTodo}>确定</button>
      </div>

      <div class="todo-list">
        {todo.map(item => (
          (type === 'all' || (type === 'active' && !item.done) || (type === 'done' && item.done)) && <div class={`todo-item${item.done ? ' done' : ''}`}>
            <div class="toggle" data-id={item.id} onClick={toggle}></div>
            <text >{item.text} </text>
            <div class="delete" data-id={item.id} onClick={deleteItem}></div>
          </div>
        ))}
      </div>

      <TodoFooter onFilter={filter} onClear={clear} left={left} done={done} type={type} ></TodoFooter>
    </div>
  )
}
```

定义 store:

```jsx

Todo.store = _ => {
  return {

    todo: [{ text: '学习 Kbone', id: 0 }, { text: '学习 Omi', id: 1 }],
    id: 1,
    inputText: '',
    left: 2,
    type: 'all',
    done: 0,


    textInput(evt) {
      this.inputText = evt.target.value
    },

    toggle(evt) {
      for (let i = 0, len = this.todo.length; i < len; i++) {
        const item = this.todo[i]
        if (item.id === Number(evt.target.dataset.id)) {
          item.done = !item.done
          this.computeCount()
          _.update()
          break
        }
      }
    },

    computeCount() {
      this.left = 0
      this.done = 0
      for (let i = 0, len = this.todo.length; i < len; i++) {
        this.todo[i].done ? this.done++ : this.left++
      }
    },

    deleteItem(evt) {
      for (let i = 0, len = this.todo.length; i < len; i++) {
        const item = this.todo[i]
        if (item.id === Number(evt.target.dataset.id)) {
          this.todo.splice(i, 1)
          this.computeCount()
          _.update()
          break
        }
      }
    },

    newTodo() {
      if (this.inputText.trim() === '') {
        wx.showToast({
          title: '内容不能为空',
          icon: 'none',
          duration: 2000
        })

        return
      }

      this.todo.unshift({
        text: this.inputText,
        id: ++this.id,
        done: false,
        createTime: new Date()
      })
      this.computeCount()
      this.inputText = ''
      _.update()

    },

    filter(type) {
      //因为是自定义事件
      //注意这里的 this 指向，不能直接 this.type = type
      _.store.type = type
      _.update()
    },

    clear(evt) {
      //因为是自定义事件
      //注意这里的 this 指向
      const self = _.store
      wx.showModal({
        title: '提示',
        content: '确定清空已完成任务？',
        success: (res) => {
          if (res.confirm) {
            for (let i = 0, len = self.todo.length; i < len; i++) {
              const item = self.todo[i]
              if (item.done) {
                self.todo.splice(i, 1)
                len--
                i--
              }
            }
            self.done = 0
            _.update()

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })

    }

  }
}

```


抽取中 todo-footer 组件：

```jsx
import { h } from 'omis'
import './index.css'

const TodoFooter = ({ left, type, done }, { showAll, showActive, showDone, clearDone }) => {
  return <div class="footer">
    <div class="todo-count"><text class="strong">{left + ' '}items left</text> </div>
    <div class="filters">
      <div class='ib' onClick={showAll}>
        <text class={type === 'all' ? 'selected' : ''} >All</text>
      </div>
      <div class='ib' onClick={showActive}>
        <text class={type === 'active' ? 'selected' : ''} >Active</text>
      </div>
      <div class='ib' onClick={showDone}>
        <text class={type === 'done' ? 'selected' : ''} >Done</text>
      </div>
    </div>
    {done > 0 && <button class="clear-completed" onClick={clearDone}>Clear done</button>}
  </div>
}

TodoFooter.store = ({props})=> {
  return {
    showAll() {
      props.onFilter('all')
    },

    showActive() {
      props.onFilter('active')
    },

    showDone() {
      props.onFilter('done')
    },

    clearDone() {
      props.onClear()
    }
  }
}

export default TodoFooter
```

上面完全使用 omis 开发，由于不喜欢react hook的设计，但又喜欢带状态或者不带状态的函数式组件，所有才有了 omis。omis 的好处一大堆：

> Functional Component + Store + Scoped Style + Web Components in tiny size

* 函数式风格但非函数式编程 
* 结构-样式-行为分离
* 支持 web components
* hyperscript 视觉上更加友好
* 每个组件可以带有一个 store，去中心化
* 支持全局 store 共享数据，并且按需局部更新组件，中心化
* 每个组件 store 拥有 update 方法，执行该方法局部刷新组件

如果你对 omis 不熟悉，可以看 [→ omis 文档](https://tencent.github.io/omi/site/omis/cn.html)

[→ TodoApp 源码](https://github.com/Tencent/omi/tree/master/packages/omi-kbone)

下面使用 omis 开发一个复杂一点的游戏案例。

## 实战贪吃蛇

<img src="../assets/snake.jpg"  width="400"/>

参考和使用了部分 [react-tetris](https://chvin.github.io/react-tetris/) 的样式。

[→ 贪吃蛇源码](https://github.com/Tencent/omi/tree/master/packages/omi-kbone)


## 实战 preact Counter

## 实战 vue Counter


## 谁在使用 kbone？

<table>
	<tbody>
		<tr>
			<td><a target="_blank" href="https://developers.weixin.qq.com/community/develop/mixflow"><img width="200px"
						src="https://raw.githubusercontent.com/wechat-miniprogram/kbone/develop/docs/images/code1.jpg"></a></td>
			<td><a target="_blank" href="http://omijs.org"><img width="200px"
						src="https://github.com/Tencent/omi/raw/master/assets/omi-cloud.jpg"></a></td>
			<td width="92px"><a target="_blank" href="https://github.com/Tencent/omi/issues/new">告诉我们</a></td>
		
</table>

## 注意事项

* 不要使用 bindtap，使用 onClick
* 图片请使用 cdn 地址或者 base64
* 如果要兼容 web，请用 HTML 和 CSS 标签，比如用 div，不用 view，不用 rpx 单位等


## 总览

* Kbone 支持 Omi、React、Vue 和原生JS多端开发
* Taro 支持 react 多端开发，JSX 书写有约束
* Alita 支持 React Native 转微信小程序，JSX 书写无约束
* uni-app 支持 vue 多端开发
* mpvue 支持 vue 多端开发

未完待续..
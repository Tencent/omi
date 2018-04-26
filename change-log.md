# omi v1.8.1

* 修复 renderToString 的 bug

# omi v1.8.0

* 合并了 omix 和 omi 项目
* fix 事件丢失的 bug 
* 支持 jsx 方式的 Omi.reander

# omix v1.2.8

*  优化了组件的复用

# omix v1.2.8

*  fix Text 的 bug

# omix v1.2.7

* eslint fix

# omix v1.2.6

* fix 老的 IOS 9 和 10 下 style 为 readonly 的bug

# omix v1.2.5

* 代码精简

# omix v1.2.3

* 性能优化

# omix v1.2.2

* 解决 scoped style 相关问题

# omix v1.2.1

* 支持 store 系统，根节点注入 $store, 所有子节点都能共享。[例子](https://github.com/AlloyTeam/omix/tree/master/example/store)

# omix v1.2.0

* 使用 JSX 可以不用在写 Omi.tag(xx, xxx)
* 支持 在 JSX 中使用 JSON 格式的样式，或者数组。[例子](https://github.com/AlloyTeam/omix/blob/master/example/on/hello.js)

# omix v1.1.15

* 修复了事件 patch 之后没有移除的问题。

# omix v1.1.14

* 修复了 scoped attr 在组件更新之后没有移除的问题。

# omix v1.1.13

* 支持增量模式渲染

```
Omi.render(new App({  }, 'body', true))`
```

或者

```
Omi.render(new App({  }, 'body', {
    increment : true
}))`
```

# omix v1.1.12

* 解决新加的组件 scoped attr 相互污染的问题

# omix v1.1.11

* 通过`closeScopedStyle`可以关闭局部CSS: 如:

```
Omi.render(new App({ closeScopedStyle : true }, '#ctn'))
```

或者

```
<your-tag closeScopedStyle></your-tag>
```

# omix v1.1.10

* 支持直出的数据前后端共享变更 - 以前使用input存数据改成直接暴露在`window.__omiSsrData`下

# omix v1.1.9

* node 环境不会执行 Omi.render

# omix v1.1.8

* 支持直出的数据前后端共享
* Omi.render 支持配置 ssr 代表二次渲染

```js
Omi.render(component, renderTo, { ssr : true })
```

# omix v1.1.7

* 美化 ssr css 输出格式

# omix v1.1.6

* fix node 环境 document 报错
* fix ssr 下，同类组件的 css 重复合成的问题

# omix v1.1.5

* fix node 环境 window 报错

# omix v1.1.4

* 新增 babel-preset-omi ,不再使用 virtual-dom-loader。  omi-cli 已经同步更新~~
* `Omi.renderToString` 支持服务器端渲染局部CSS

# omix v1.1.3

* 新增一种 hyperscript 方式

```js
$.tagName(selector, attrs, child, child, child ...)
```

# omix v1.1.2

* 新增了 `Omi.renderToString` 用于服务器端渲染

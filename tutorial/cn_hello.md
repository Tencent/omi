<h2 id="Hello Omi">Hello Omi</h2>

[Omi框架](https://github.com/AlloyTeam/omi)的每个组件都继承自`Omi.Component`，本篇会去完成Omi的Component的基本锥形，让其能够渲染第一个组件。

## omi.js实现

```js
var Omi = {}
Omi._instanceId = 0
Omi.getInstanceId = function () {
    return Omi._instanceId++
}

Omi.render = function(component, renderTo){
    component.renderTo = typeof renderTo === "string" ? document.querySelector(renderTo) : renderTo
    component._render()
    return component
}

module.exports = Omi
```

* Omi.getInstanceId 用来给每个组件生成自增的ID
* Omi.render 用来把组件渲染到页面

## 基类Omi.Component实现

所有的组件都是继承自`Omi.Component`。

```js
import Omi from './omi.js'

class Component {
    constructor(data) {
        this.data = data || {}
        this.id = Omi.getInstanceId()
        this.HTML = null
        this.renderTo = null
    }

    _render() {
        this.HTML = this.render()
        this.renderTo.innerHTML = this.HTML
    }
}

export default Component
```

* Omi使用完全面向对象的方式去开发组件，这里约定好带有下划线的方法是用于内部实现调用，不建议Omi框架的使用者去调用。
* 其中，`_render`为私有方法用于内部实现调用，会去调用组件的真正render方法用于生成HTML，并且把生成的HTML插入到renderTo容器里面。
* 注意，这里目前没有引入dom diff，不管第几次渲染都是无脑设置innerHTML，复杂HTML结构对浏览器的开销很大，这里后续会引入diff。

## index.js整合

```js
import Omi from './omi.js'
import Component from './component.js'

Omi.Component = Component

window.Omi = Omi
module.exports = Omi
```

这里把Omi给直接暴露在window下，因为每个组件都生成了唯一的ID，后续实现事件作用域以及对象实例获取都要通过window下的Omi获取。

## 最后使用

实现完omi.js和component.js以及index.js之后，你就可以实现Hello Omi拉:

```js
import Omi from 'index.js'
// 或者使用webpack build之后的omi.js 
// import Omi from 'omi.js'

class Hello extends Omi.Component {
    constructor(data) {
        super(data)
    }

    render() {
        // 推荐使用 ES6 模板字符串
        // @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        return `
            <div>
                <h1>Hello, ${this.data.name}!</h1>
            </div>
  		`
    }
}

Omi.render(new Hello({ name : 'Omi' }), "#container")
```

## 引入mustachejs模板引擎

Omi支持任意模板引擎。可以看到，上面是通过拼接字符串的形式生成HTML，这里当然可以使用模板引擎。

修改一下index.js:

```js
import Omi from './omi.js'
import Mustache from './mustache.js'
import Component from './component.js'

Omi.template = Mustache.render
Omi.Component = Component

window.Omi = Omi
module.exports = Omi
```

这里把 `Mustache.render` 挂载在 `Omi.template` 下。再修改一下component.js:

```js
import Omi from './omi.js'

class Component {
    constructor(data) {
        this.data = data || {}
        this.id = Omi.getInstanceId()
        this.HTML = null
    }

    _render() {
        this.HTML = Omi.template(this.render(), this.data)
        this.renderTo.innerHTML = this.HTML
    }
}

export default Component
```

Omi.template（即Mustache.render）需要接受两个参数，第一个参数是模板，第二个参数是模板使用的数据。

现在，你便可以使用mustachejs模板引擎的语法了：

```js
class Hello extends Omi.Component {
    constructor(data) {
        super(data)
    }

    render() {
        return  `
            <div>
                <h1>Hello ,{{name}}!</h1>
            </div>
  		`
    }
}
```

从上面的代码可以看到，你完全可以重写Omi.template方法去使用任意模板引擎。重写Omi.template的话，建议使用omi.lite.js，因为omi.lite.js是不包含任何模板引擎的。那么怎么build出两个版本的omi？且看webpack里设置的多入口:

```js
entry: {
    omi: './src/index.js',
    'omi.lite': './src/index.lite.js'
},
output: {
    path: 'dist/',
    library: 'Omi',
    libraryTarget: 'umd',
    filename: '[name].js'
},
```

index.lite.js的代码如下：

```js
import Omi from './omi.js'
import Component from './component.js'

Omi.template = function(tpl, data) {
    return tpl
}

Omi.Component = Component

window.Omi = Omi
module.exports = Omi
```

可以看到Omi.template没有对tpl做任何处理直接返回，开发者可以重写该方法。

## 总结

到目前为止，已经实现了：

* 第一个组件的渲染
* 模板引擎的接入
* 多入口打包omi.js和omi.lite.js

下片，将介绍《Omi原理-局部CSS》，欢迎关注...

## 写在前面

[Omi框架](https://github.com/AlloyTeam/omi)可以通过在组件上声明 data-* 把属性传递给子节点。
Omi从设计之初，就是往标准的DOM标签的标准传递方式靠齐。比如：

* 下划线自动转驼峰， data-page-index传到子组件就变成this.data.pageIndex
* data-xx 传递到子节点全都变成字符串，如data-page-index="1"到子节点中this.data.pageIndex就是字符串"1"

这样会有什么局限性和问题？如：

* 无法传递JSON
* 无法传递number类型
* 无法传递bool类型

那么支持传递javascript表达式就能解决这些痛点。

废话不多说，来看神器的冒号。

## 冒号标记

看下面例子：

```js
import Hello from 'hello.js'

Omi.makeHTML('Hello', Hello);

class App extends Omi.Component {
  
    render() {
        return  `
        <div>
            <Hello :data-user="{ name : 'Dntzhang', favorite : 'Omi' }" />
        </div>
        `

    }
}

Omi.render(new App(),"#container")
```

在data-user前面加上冒号即:data-user，就代表传递的是js 表达式，够方便吧。

然后在Hello组件内就可以直接使用。

```js
class Hello extends Omi.Component {

    render() {
      return  `
      <div>
      	<h1>{{user.name}} love {{user.favorite}}.</h1>
      </div>
  		`
    }
}
```

你也可以在hello组件内打印出 this.data.user 试试。

## 传递其他类型

上面的例子展示了传递JSON，其他类型也支持。比如：

```js
 <Hello :data-age="18" />
```
```js
 <Hello :data-xxx="1+1*2/3" />
```
```js
 <Hello :data-is-girl="false" />
```
```js
 <Hello :data-array-test="[1,2,3]" />
```

## 复杂类型

最后给大家看个稍微一丁点复杂的案例:

```js
class Hello extends Omi.Component {
  
    handleClick(evt){
      alert( this.data.arrayTest[0].name)
    }
  
    render() {
      return  `
      <ul>
      {{#arrayTest}}
				<li onclick="handleClick">{{name}}</li>
      {{/arrayTest}}
      </ul>
  		`;

    }
}

Omi.makeHTML('Hello', Hello);

class App extends Omi.Component {
  
    render() {
        return  `
        <div>
            <Hello :data-array-test="[{name:'dntzhang'},{name:'omi'},{name:'AlloyTeam'}]" />
        </div>
        `;

    }
}

Omi.render(new App(),"#container"); 
```
当然，在子组件中，你也可以不使用 [mustache.js](https://github.com/janl/mustache.js)模板引擎的语法去遍历，使用ES6+的姿势去遍历。

```js
class Hello extends Omi.Component {
  
    render() {
      return  `
      <ul>
       ${this.data.arrayTest.map(item =>
        `<li>${item.name}</li>`
        ).join('')}
      </ul>
  		`;

    }
}
```
这也是为什么omi提供了两个版本，omi.js和omi.lite.js的原因。omi.lite.js不包含 [mustache.js](https://github.com/janl/mustache.js)模板引擎。

## 在线演示

* [http://alloyteam.github.io/omi/website/redirect.html?type=exp](http://alloyteam.github.io/omi/website/redirect.html?type=exp)
* [http://alloyteam.github.io/omi/website/redirect.html?type=exp_arr](http://alloyteam.github.io/omi/website/redirect.html?type=exp_arr)

## 相关

* Omi的Github地址[https://github.com/AlloyTeam/omi](https://github.com/AlloyTeam/omi)
* 如果想体验一下Omi框架，可以访问 [Omi Playground](http://alloyteam.github.io/omi/example/playground/)
* 如果想使用Omi框架或者开发完善Omi框架，可以访问 [Omi使用文档](https://github.com/AlloyTeam/omi/tree/master/docs#omi使用文档)
* 如果你想获得更佳的阅读体验，可以访问 [Docs Website](http://alloyteam.github.io/omi/website/docs.html)
* 如果你懒得搭建项目脚手架，可以试试 [omi-cli](https://github.com/AlloyTeam/omi/tree/master/cli)
* 如果你有Omi相关的问题可以 [New issue](https://github.com/AlloyTeam/omi/issues/new)
* 如果想更加方便的交流关于Omi的一切可以加入QQ的Omi交流群(256426170)

![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170208095745213-1049686133.png)
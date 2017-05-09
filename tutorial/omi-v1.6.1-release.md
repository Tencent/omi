# 精通Omi框架这篇足够(持续更新..)

[Omi框架](https://github.com/AlloyTeam/omi)目前最新版本为1.6.1，提供了渐进增强式的Web开发解决方案，内置完善的支持无限声明式嵌套的组件系统。

* 良好的兼容性 - 兼容IE8及IE8以上版本
* 超小的尺寸 - 7 kb (gzip) 虽然文件尺寸小
* 面向未来的架构体系 - 未来DOM很快，而且越来来快! 其实现在DOM已经足够快了:)
* ES6+ 和 ES5都可以 - Omi提供了ES6+和ES5的两种开发方案。你可以自有选择你喜爱的方式
* 局部CSS - HTML+ Scoped CSS + JS组成可复用的组件。不用担心组件的CSS会污染组件外的,Omi会帮你处理好一切
* 模板或指令系统可替换 - 默认使用soda指令系统，开发者可以重写Omi.template方法来使用任意模板引擎或者指令引擎
* 完全面向对象 - 函数式和面向对象各有优劣，Omi使用完全的面向对象的方式来构建Web程序。而且支持使用TypeScript来编写Omi程序
* 更自由的更新 - 每个组件都有update和updateSelf方法，自由选择你认为最佳的更新时机和最佳的更新方式。updateSelf不会更新子组件

![](http://images2015.cnblogs.com/blog/105416/201703/105416-20170329100339311-2102628084.png)

![](http://images2015.cnblogs.com/blog/105416/201703/105416-20170329100346326-1473759472.png)

* 完善丰富的插件和灵活的插件体系

* [omi-router](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-router) : Omi专属的官方Router插件.
* [omi-finger](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-finger) Omi的[AlloyFinger](https://github.com/AlloyTeam/AlloyFinger)插件，支持各种触摸事件和手势
* [omi-transform](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-transform) Omi的[transformjs](https://alloyteam.github.io/AlloyTouch/transformjs/)插件，快速方便地设置DOM的CSS3 Transform属性
* [omi-touch](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-touch) Omi的[AlloyTouch](https://github.com/AlloyTeam/AlloyTouch)插件，Omi项目的触摸运动解决方案（支持触摸滚动、旋转、翻页、选择等等）
* [omi-jquery-date-picker](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-jquery-date-picker) Omi的时间选择插件，支持各种时间或者时间区域选择

## 安装Omi

``` bash
npm install omi
```

你也可以通过cdn获取omi，并在HTML里声明script变迁:

``` html
<script src="https://unpkg.com/omi@1.6.0/dist/omi.min.js"></script>
```

## Hello Omi

```js
import Omi from 'omi';

class Hello extends Omi.Component {

    style () {
      return  `
          h1{
          	cursor:pointer;
          }`
    }
  
    handleClick(evt){
      alert(evt.target.innerHTML)
    }
  
    render() {
      return  `
      <div>
      	<h1 onclick="handleClick">Hello ,{{name}}!</h1>
      </div>`
    }
}

Omi.tag('hello', Hello)

class App extends Omi.Component {
    render() {
        return  `
        <div>
            <hello data-name="Omi"></hello> 
        </div>`
    }
}

Omi.render(new App(),"#container")
```

* 组件继承自`Omi.Component`，
* `render`返回的是组件HTML片段，一般带有指令或者模板语法
* `style`返回的是组件的CSS，是局部的，不会污染组件以外的
* 通过`Omi.tag('hello', Hello)`把组件变成可声明在其他组件中的标签，即:`<hello></hello> `
* 通过`data-name="Omi"`把传递给子组件hello，子组件直接在render里可以使用{{name}}来使用传递来的数据
* 通过`onclick="handleClick"`给HTML元素绑定事件，在handleClick回调中可以拿到event对象，即:`handleClick(evt){ }`

你也可以使用ES5的方式进行开发:

```js
var Hello =  Omi.create("hello", {
  
    style: function () {
        return "h1{ cursor:pointer }"
    },
  
    handleClick: function (evt) {
        alert(evt.target.innerHTML)
    },
  
    render: function () {
        return ' <div>\
                        <h1 onclick="handleClick">\
                            Hello ,{{name}}!\
                        </h1>\
                </div>'
    }
});

var App =  Omi.create("App", {
 
    render: function () {
        return '<div>\
                    <hello data-name="Omi"></hello>\
                </div>'
    }
  
});

Omi.render(new App(),'#container')
```

## 组件

[Omi框架](https://github.com/AlloyTeam/omi)完全基于组件体系设计，我们希望开发者可以像搭积木一样制作Web程序，一切皆是组件，组件也可以嵌套子组件形成新的组件，新的组件又可以当作子组件嵌套至任意组件形成新的组件...

![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170210093427338-1536910080.png)

## 简单组件

上面的Hello Omi的例子已经说明了组件大概，这里再使用Todo的例子来讲解Omi组件体系的使用。

先定义一个List组件用来展示列表:

```js
class List extends Omi.Component {
    render () {
        return `<ul>
                    <li o-repeat="item in items">{{item.text}}</li>
                </ul>`;
    }
}
```

* 使用`o-repeat="item in items"`来遍历传入的items，当然也可以拿到item的索引，通过`{{$index}}`就可以:

```js
<li o-repeat="item in items">{{$index}} - {{item}}</li>
```


怎么使用这个List？我们需要使用`Omi.tag`把List制作成可以声明式的标签，在render方法中就能直接使用该标签。如下所示：

```js
import List from './list.js';

Omi.tag('list', List);

class Todo extends Omi.Component {
    constructor(data) {
        super(data)
    }

    add (evt) {
        evt.preventDefault();
        this.data.items.push({text: this.data.text})
        this.data.text = ''
        this.update()
    }

    style () {
        return `
        h3 { color:red; }
        button{ color:green;}
        `;
    }

    handleChange(target){
        this.data.text = target.value;
    }

    render () {
        return `<div>
                    <h3>TODO</h3>
                    <list ::data-items="data.items" ></list>
                    <form onsubmit="add(event)" >
                        <input type="text" onchange="handleChange(this)"  value="{{text}}"  />
                        <button>Add #${this.data.items.length}</button>
                    </form>
                </div>`;
    }
}

Omi.render(new Todo({ items: [] ,text : '' }),"body");
```
 
注意看上面的这行代码`<list ::data-items="data.items" ></list>`。这样就把父组件的data.items传递给了子组件的data.items。这里解释下没有冒号，一个冒号和两个冒号:

* `data-*`   代表直接传递字符串
* `:data-*`  代表传递javascript表达式，比如`data-num="1"` 代表传递数字1而非字符串，`data-num="1+1"`可以传递2。
* `::data-*` 代表传递父组件的属性，比如上面的`::data-items="data.items"`就代表传递`this.data.items`给子组件


多个中划线会形成驼峰在子组件中访问。比如 `data-page-index` 在子组件中使用 `this.data.pageIndex` 访问。

这里需要特别强调的是，为了更加的自由和灵活度。Omi没有内置数据变更的自动更新，需要开发者自己调用update方法。
关于Omi组件通讯其实有4种方案，这个后续教程会专门来讲。

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=todo_nest" target="_blank">点击这里→在线试试</a>

未完待续...
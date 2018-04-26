# 精通 Omi 框架

《精通[Omi框架](https://github.com/AlloyTeam/omi)》书籍的免费电子版，有这一篇足够从入门到精通。

* [简介](#简介)
* [安装Omi](#安装-omi)
* [Hello Omi](#hello-omi)
* [介绍 JSX](#介绍-jsx)
* [组件与通讯](#组件与通讯)
    * [组件体系](#组件体系)
    * [父子通讯](#父子通讯)
    * [selfDataFirst](#selfdatafirst)
* [生命周期](#生命周期)
* [插槽](#插槽)  
* [表单](#表单)  
* [继承](#继承)  
* [获取DOM节点](#获取dom节点)  
* [插件体系](#插件体系)  
    * [Omi.extendPlugin](#omiextendplugin)
    * [关联instance](#关联instance)
    * [传递数据](#传递数据)
* [closeScopedStyle](#closescopedstyle)     
* [调试技巧](#调试技巧)  
* [Server Side Rendering](#server-side-rendering)  
* [Omi相关](#omi相关)  

## 简介
    
    Omi（读音 / [ˈomɪkɜ:s] /, 汉字类似于 欧米） 是一款开放现代化的组件化框架，故得名：Omi。
其代码已托管至Github地址: [https://github.com/AlloyTeam/omi](https://github.com/AlloyTeam/omi)

[Omi框架](https://github.com/AlloyTeam/omi) 概括起来包含下面优点和特性:

* 超迅捷的性能，经过测试, 居然是所有框架第一名, 不信可以看看[dbmon with omi](https://alloyteam.github.io/omi/example/perfs)。虽然排第一，但是发现还有许多优化空间！！
* 良好的兼容性 - 兼容 IE8,兼容各种手机平版移动 Web 程序
* 超小的尺寸 - 7 kb (gzip) 
* 支持 JSX
* 支持局部CSS - HTML+ Scoped CSS + JS组成可复用的组件。不用担心组件的CSS会污染组件外的
* 更自由的更新 - 每个组件都有 update 方法，自由选择你认为最佳的更新时机和最佳的更新方式
* 灵活的插件体系和丰富的插件生态
    * [omi-router](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-router) : Omi专属的官方Router插件.
    * [omi-finger](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-finger) Omi的[AlloyFinger](https://github.com/AlloyTeam/AlloyFinger)插件，支持各种触摸事件和手势
    * [omi-transform](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-transform) Omi的[transformjs](https://alloyteam.github.io/AlloyTouch/transformjs/)插件，快速方便地设置DOM的CSS3 Transform属性
    * [omi-touch](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-touch) Omi的[AlloyTouch](https://github.com/AlloyTeam/AlloyTouch)插件，Omi项目的触摸运动解决方案（支持触摸滚动、旋转、翻页、选择等等）
  

## 安装 Omi

``` bash
npm install omi
```

你也可以通过cdn获取omi，并在HTML里声明script变迁:

``` html
<script src="https://unpkg.com/omi@1.8.0/dist/omi.min.js"></script>
```

你也可以 [Omi Cli](https://github.com/AlloyTeam/omi-cli) 来初始化你的项目脚手架，它会帮你处理好一切构建相关的东西。

```js
npm install omi-cli -g      //安装CLI
omi init-x [project name]   //初始化项目 
cd your_project_name        //转到目录
npm start                   //开发
npm run build               //生成发布文件   
```

## Hello Omi

```js
import Omi from 'omi';

class Hello extends Omi.Component {
    render() {
        return <div> Hello <h1 style="display:inline-block;">{this.data.name}</h1>!</div>
    }
}

class App extends Omi.Component {
    install() {
        this.name = 'Omi'
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.name = 'Hello Omi'
        this.update()
    }

    style() {
        return `h3{
	            color:red;
	            cursor: pointer;
	        }`
    }

    render() {
        return <div>
            <Hello name={this.name}></Hello>
            <h3 onclick={this.handleClick}>Scoped css and event test! click me!</h3>
        </div>
    }
}

Omi.render(<App />, '#container')
```

* 组件继承自`Omi.Component`，
* `render`返回的是组件JSX 
* `style`返回的是组件的CSS，是局部的，不会污染组件以外的元素
* 通过`name={this.name}`把传递给子组件hello，子组件直接在render里可以使用{this.data.name}来使用传递来的数据
* 通过`onclick={this.handleClick}"`给HTML元素绑定事件，在handleClick回调中可以拿到event对象


## 介绍 JSX

我们来观察一下声明的这个变量：

```js
const element = <h1>Hello, world!</h1>;
```

这种看起来可能有些奇怪的标签语法既不是字符串也不是HTML.

它被称为 JSX, 一种 JavaScript 的语法扩展。JSX 乍看起来可能比较像是模版语言，但事实上它完全是在 JavaScript 内部实现的。

### 在 JSX 中使用表达式

 你可以任意地在 JSX 当中使用 [JavaScript 表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions)，在 JSX 当中的表达式要包含在大括号里。

 例如 `2 + 2`, `user.firstName`, 以及 `formatName(user)` 都是可以使用的。

```js{12}
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);


```

我们书写 JSX 的时候一般都会带上换行和缩进，这样可以增强代码的可读性。与此同时，我们同样推荐在 JSX 代码的外面扩上一个小括号，这样可以防止 [分号自动插入](http://stackoverflow.com/q/2846283) 的bug.

### JSX 本身其实也是一种表达式

在编译之后呢，JSX 其实会被转化为普通的 JavaScript 对象。

这也就意味着，你其实可以在 `if` 或者 `for` 语句里使用 JSX，将它赋值给变量，当作参数传入，作为返回值都可以：

```js{3,5}
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### JSX 属性

你可以使用引号来定义以字符串为值的属性：

```js
const element = <div tabIndex="0"></div>;
```

也可以使用大括号来定义以 JavaScript 表达式为值的属性：

```js
const element = <img src={user.avatarUrl}></img>;
```

切记你使用了大括号包裹的 JavaScript 表达式时就不要再到外面套引号了。JSX 会将引号当中的内容识别为字符串而不是表达式。

### JSX 嵌套

如果 JSX 标签是闭合式的，那么你需要在结尾处用 `/>`, 就好像 XML/HTML 一样：

```js
const element = <img src={user.avatarUrl} />;
```

JSX 标签同样可以相互嵌套：

```js
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

>**提醒:**
>
> Omi 里使用 JSX 更加宽松，你既可以使用 `class` 也可以使用 `className`。既可以使用 `onclick` 也可以使用 `onClick`。 


### JSX 代表 Objects

转义器 `babel-preset-omi` 会把 JSX 转换成一个名为 `Omi.x()` 的方法调用。

下面两种代码的作用是完全相同的：

```js
const element = (
  <h1 class="greeting">
    Hello, world!
  </h1>
);
```

```js
const element = Omi.x(
  'h1',
  {class: 'greeting'},
  ['Hello, world!']
);
```

这样的对象被称为 “Omi 元素”。它代表所有你在屏幕上看到的东西。Omi 通过读取这些对象来构建 DOM 并保持数据内容一致。

>**Tip:**
>
>如果你是在使用本地编辑器编写 JSX 代码的话，推荐你去装一个支持 JSX 高亮的插件，这样更方便之后的开发学习。

## JSX 例子

```
// JSX
<ul id="bestest-menu">
  {this.data.items.map( item =>
    <li class="item" {...attrs(item.id)}>{item.title}</li>
  )}
</ul>
```

```
// JSX
<MyList>{this.data.items.map(item => 
    <MyItem id={item.id} title={item.title} />
)}</MyList>
```

```
<MyComponent someProp={{x: 1, y: 2}}/>
```


## 组件与通讯

### 组件体系

[Omi框架](https://github.com/AlloyTeam/omi)完全基于组件体系设计，我们希望开发者可以像搭积木一样制作Web程序，一切皆是组件，组件也可以嵌套子组件形成新的组件，新的组件又可以当作子组件嵌套至任意组件形成新的组件...

![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170210093427338-1536910080.png)

上面的Hello Omi 的例子已经说明了组件大概，这里再使用Todo的例子来讲解 Omi 组件体系的使用。

先定义一个List组件用来展示列表:

```js
class TodoList extends Omi.Component {
    render() {
        return (
            <ul>
                {this.data.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}

```

* 使用`this.data.items.map`来遍历传入的items，在render方法中就能直接使用该标签。如下所示：

```js
class TodoApp extends Omi.Component {
    constructor(data) {
        super(data)
        this.data = {items: [{id: 1, text: 'Omi'}, {id: 2, text: 'AlloyTeam'}], text: ''}
    }

    handleSubmit(e) {
        e.preventDefault()
        this.data.items.push({id: this.data.items.length + 1, text: this.data.text})
        this.data.text = ''
        this.update()
    }

    handleChange(e) {
        this.data.text = e.target.value
    }

    render() {
        return <div>
            <h3>TODO</h3>
            <TodoList items={this.data.items}></TodoList>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input onChange={this.handleChange.bind(this)} value={this.data.text} />
                <button>{'Add #' + (this.data.items.length + 1)}</button>
            </form>
        </div>
    }
}

Omi.render(new TodoApp(), 'body')
```

### 父子通讯

```js
import Pagination from './pagination.js'
import Content from './content.js'

...
    handlePageChange(index) {
        this.content.goto(index + 1)
        // or get it by omi-id
        // Omi.get('content').goto(index+1)
        this.update()
    }

    render() {
        return <div>
            <h1>Pagination Example</h1>
            <Content omi-name="content" omi-id="content"></Content>
            <Pagination
                name="pagination"
                total={100}
                pageSize={10}
                numEdge={1}
                numDisplay={4}
                onPageChange={this.handlePageChange.bind(this)} ></Pagination>
        </div>
    }
...
```

* 通过`onPageChange={this.handlePageChange.bind(this)}`传递回调函数给子组件，子组件就可以执行注入的父组件中的方法 
* 在pagination组件内部可以通过`this.data.onPageChange` 来执行`this.handlePageChange`方法
* 可以从上面的例子看到，通过标记 `omi-name` 或者 `omi-id` 来获取组件的实例。标记`omi-id`是全局注册，在程序任何地方可以通过`Omi.get`拿到该对象的实例。


### selfDataFirst

使用Omi的时候，你会发现，在子组件内部修改父组件传递过来的data，就是修改 this.data 然后进行 this.update 会没有效果。如果你把 data 的属性赋给 this 下，render 方法里只用 this 下的属性，再进行 update 就能成功 update。比如:

```js
    install (){
        this.name = this.data.name 
    }

    changeName (newName){
        this.name = newName
        this.update()
    }
        
    render (){
        return <div>{this.name}<div>
    }
```

如果坚持要用 data 渲染，这里会有个权重问题。Omi的组件 selfDataFirst 默认是 false，也就是代码 父组件传递的属性的权重更高，如果你想要子组件 this.data 的权重更高，可以通过修改 selfDataFirst。如:

```js
<child-element selfDataFirst><child-element>
```

也可以在构造函数内修改如:

```js
class ChildElement extends Omi.Component {
    constructor(data) {
        super(data)
        this.data.selfDataFirst = true
    }
    ...
```

当然 selfDataFirst 的原理只是 Object.assign 的顺序不一样，Object.assign 只是浅拷贝，所以如果是引用类型的话，不管修改父组件传递的属性还是子组件自身的 `this.data` 都是可以修改成功的。最后贴上 Omi 相关的源码方便大家理解:

```js
if (cmi.data.selfDataFirst) {
    cmi.data = Object.assign({}, root.properties, cmi.data)
} else {
    cmi.data = Object.assign({}, cmi.data, root.properties)
}
```

## 生命周期

|name   |avatars   |company   | 
|---|---|---|
| constructor  | 构造函数 | new的时候 |
| install  | 初始化安装，这可以拿到用户传进的data进行处理 | 实例化 |
| installed    | 安装完成，HTML已经插入页面之后执行  |  实例化  |
| uninstall | 卸载组件。执行remove方法会触发该事件    |   销毁时 |
| beforeUpdate | 更新前     |   存在期 |
| afterUpdate | 更新后     |    存在期 |
| beforeRender | render函数执行之前     |    存在期和实例化 |

### 示意图

![lc](http://images2015.cnblogs.com/blog/105416/201703/105416-20170322083548924-1871234168.jpg)
       
### 举个例子

```js
class Timer extends Omi.Component {
    constructor(data) {
        super(data);
    }

    install () {
        this.data = {secondsElapsed: 0};
    }

    tick() {
        this.data.secondsElapsed++;
        this.update();
    }

    installed(){
        this.interval = setInterval(() => this.tick(), 1000);
    }

    uninstall() {
        clearInterval(this.interval);
    }


    style () {
        return `
        .num { color:red; }
        `;
    }

    render () {
        return <div>Seconds Elapsed:<span class="num"> {this.data.secondsElapsed}</span></div>
    }
}
```


## 插槽

```js
class NotesList extends Omi.Component {
    render() {
        return <ol>
            { this.data.children.map(function(child) {
                return <li>{child}</li>
            })}
        </ol>
    }
}



class App extends Omi.Component {
    render() {
        return (
        <NotesList a="a" class="sfds">
            <span>hello</span>
            <span>world</span>
        </NotesList>
        )
    }
}

Omi.render(new App(), 'body')
```

通过 `this.data.children` 可以读取到父节点传递过来任意标签。

## 表单

Omi让一些表单操控起来更加方便，特别是select！

### select标签

以前，我们需要像如下的方式选中一个选项：

```html
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

第三个option由于加上了selected，所有会被选中。这样带来的问题就是，开发者写的程序可能要操遍历每个option。而使用Omi，你只需要这样子：

```html
<select value="coconut">
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

这样就能达到同样的效果。比如你想选择第一项：

```html
<select value="grapefruit">
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

是不是非常方便？

###  举个例子

```js
class FormTest extends Omi.Component {
    constructor(data) {
        super(data);
       
    }

    handleChange(target){
      console.log(target.value)
      this.data.value = target.value;
    }

    handleSubmit(evt) {
      alert('Your favorite flavor is: ' + this.data.value);
      evt.preventDefault();
    }
  
    render () {
        return `
        <form onsubmit="handleSubmit(event)">
        <label>
          Pick your favorite La Croix flavor:
          <select value="{{value}}" onchange="handleChange(this)">
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>`;
    }
}

Omi.render(new FormTest({ value: 'mango' }),'#container');
```

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=form" target="_blank">点击这里→在线试试</a>


## 继承

通过继承机制，可以利用已有的数据类型来定义新的数据类型。所定义的新的数据类型不仅拥有新定义的成员，而且还同时拥有旧的成员。我们称已存在的用来派生新类的类为基类，又称为父类。由已存在的类派生出的新类称为派生类，又称为子类。

### 举个例子

```js
class Hello extends Omi.Component {
    constructor(data) {
        super(data);
    }
    
    render() {
       return  <div>Hello {this.data.name}!</div>
    }
}

class SubHello extends Hello {
    constructor(data) {
        super(data);
    }
}

Omi.render(new SubHello({ name : 'Omi' }),'#container');
```

使用 Omi ，组合或者继承都可以。

## 获取DOM节点

虽然绝大部分情况下，开发者不需要去查找获取DOM，但是还是有需要获取DOM的场景，所以Omi提供了方便获取DOM节点的方式。

### ref和refs

```js
class Hello extends Omi.Component {
    constructor(data) {
        super(data);
    }
    
    style () {
        return  `
            h1{
                cursor:pointer;
            }
         `;
    }
    
    handleClick(){
        alert(this.refs.abc.innerHTML);
    }
    
    render() {
        return  `
        <div>
            <h1 ref="abc" onclick="handleClick()">Hello ,{{name}}!</h1>
        </div>
        `;
    }
}

Omi.render(new Hello({ name : "Omi" }),"#container");
```

可以看到通过在HTML中标记ref为abc，那么就通过this.refs.abc访问到该DOM节点。

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=ref" target="_blank">点击这里→在线试试</a>

## 插件体系

[Omi](https://github.com/AlloyTeam/omi)是Web组件化框架，怎么又来了个插件的概念？

可以这么理解: Omi插件体系可以赋予dom元素一些能力，并且可以和组件的实例产生关联。

### omi-drag

且看这个例子:

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=plugin" target="_blank">点击这里→在线试试</a>

```js
import OmiDrag from './omi-drag.js';

OmiDrag.init();

class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render() {
        return <div>
	            <div omi-drag class="test">Drag Me</div>
	        </div>
    }

    style(){
       return `
        .test{
            width:100px;
            height:100px;
            color:white;
            line-height:90px;
            text-align:center;
            background-color:#00BFF3;
        }
        `
    }
}

Omi.render(new App(),"#container");
```

如上面的代码所示，通过在div上标记omi-drag，这个div就能够被用户使用鼠标拖拽。我们称omi-drag.js为omi插件。
是不是非常方便？那么这个omi-drag是怎么实现的？

## Omi.extendPlugin

核心方法: Omi.extendPlugin( pluginName, handler )

下面的代码就是展示了如何通过 Omi.extendPlugin 赋予dom拖拽的能力:

```js
;(function () {

    var OmiDrag = {};
    var Omi = typeof require === 'function'
        ? require('omi')
        : window.Omi;

    OmiDrag.init = function(){
        Omi.extendPlugin('omi-drag',function(dom, instance){
            dom.style.cursor='move';
            var isMouseDown = false,
                preX = null,
                preY = null,
                currentX = null,
                currentY = null,
                translateX = 0,
                translateY = 0;

            dom.addEventListener('mousedown',function(evt){
                isMouseDown = true;
                preX = evt.pageX;
                preY = evt.pageY;
                evt.stopPropagation();
            },false);

            window.addEventListener('mousemove',function(evt){
                if(isMouseDown){
                    currentX = evt.pageX;
                    currentY = evt.pageY;
                    if(preX != null){
                        translateX += currentX - preX;
                        translateY += currentY - preY;
                        dom.style.transform = 'translateX('+translateX+'px) translateY('+translateY+'px)';
                    }
                    preX = currentX;
                    preY = currentY;
                    evt.preventDefault();
                }
            },false);

            window.addEventListener('mouseup',function(){
                isMouseDown = false;
                preX = preY = currentX = currentY = null;
            },false);
        });
    }

    OmiDrag.destroy = function(){
        delete Omi.plugins['omi-drag'];
    };

    if (typeof exports == "object") {
        module.exports = OmiDrag;
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ return OmiDrag });
    } else {
        window.OmiDrag = OmiDrag;
    }

})();
```

方法: Omi.extendPlugin( pluginName, handler )

其中pluginName为插件的名称
其中handler为处理器。handler可以拿到标记了pluginName的dom以及dom所在的组件的实例，即 dom 和 instance。

通过 Omi.extendPlugin，可以赋予dom元素一些能力，也可以和组件的实例(instance)产生关联。
但是上面的例子没有和instance产生关联，我们接下来试试:

## 关联instance

我们想在组件里面能够监听到move并且执行回调。如下:

```js
...
...
moveHandler(){
    console.log('moving');
}

render() {
    return  <div>
	        <div omi-drag class="test">Drag Me</div>
	    </div>
}
...
```

主要被拖动过程中，moveHandler就不断地被执行。插件代码需要修改:

```js
...
window.addEventListener('mousemove',function(evt){
    if(isMouseDown){
        currentX = evt.pageX;
        currentY = evt.pageY;
        if(preX != null){
            translateX += currentX - preX;
            translateY += currentY - preY;
            dom.style.transform = 'translateX('+translateX+'px) translateY('+translateY+'px)';
        }
        preX = currentX;
        preY = currentY;
        evt.preventDefault();
        instance.moveHandler(evt);
    }
},false);
```

我们在里面增加了instance.moveHandler(evt);方法，用来执行组件实例上的moveHandler方法。
这样的话:就是组件的实例(instance)产生关联。但是还是有问题？如果标记了多个omi-drag 就会有问题！如:

```js
...
render() {
    return  <div>
	        <div omi-drag class="test">Drag Me</div>
	        <div omi-drag class="test">Drag Me</div>
	    </div>
}
...
```

通常我们系统每个omi-drag都能对应一个回调函数，如：

```js
...
...
moveHandlerA(){
    console.log('moving');
}

moveHandlerB(){
    console.log('moving');
}

render() {
    return  <div>
	        <div omi-drag class="test">Drag Me A</div>
	        <div omi-drag class="test">Drag Me B</div>
	    </div>
}
...
```

怎么办？怎么实现？有办法！通过dom传递数据给插件。

### 传递数据

先来看最后实现的效果:

```js
...
...
moveHandlerA(){
    console.log('moving');
}

moveHandlerB(){
    console.log('moving');
}

render() {
    return <div>
	        <div omi-drag class="test" dragMove="moveHandlerA" >Drag Me A</div>
	        <div omi-drag class="test" dragMove="moveHandlerB" >Drag Me B</div>
	    </div>
}
...
```

omi-drag修改的地方:

```js
...
var handlerName = dom.getAttribute('dragMove');

window.addEventListener('mousemove',function(evt){
    if(isMouseDown){
        currentX = evt.pageX;
        currentY = evt.pageY;
        if(preX != null){
            translateX += currentX - preX;
            translateY += currentY - preY;
            dom.style.transform = 'translateX('+translateX+'px) translateY('+translateY+'px)';
        }
        preX = currentX;
        preY = currentY;
        evt.preventDefault();
        instance[handlerName](evt);
    }
},false);
...
```

* 通过 var handlerName = dom.getAttribute('dragMove') 拿到dom上声明的dragMove
* 通过 instance[handlerName](evt) 去执行对应的方法

## closeScopedStyle

* 通过`closeScopedStyle`可以关闭局部CSS: 如:

```
Omi.render(new App({ closeScopedStyle : true }, '#ctn'))
```

或者

```
<your-tag closeScopedStyle></your-tag>
```


## 调试技巧

```js
console.log(Omi.instances)
```

所有的组件的实例都在`Omi.instances`数组里，简单吧！

## Server Side Rendering

``` js
let content = Omi.renderToString(new Root(data))
```

* content 为直出的 HTML + CSS + JS
* Root 为前后端共享的根节点
* data 为前后端共享的数据

## Omi相关

* [Omi 官网](http://www.omijs.org)
* [Omi Github](https://github.com/AlloyTeam/omi)
* [Omi REPL](https://alloyteam.github.io/omi/repl/)
* [Omi 文档](https://github.com/AlloyTeam/omi/blob/master/docs/)
* [Omi Cli](https://github.com/AlloyTeam/omi-cli)
* [New issue](https://github.com/AlloyTeam/omi/issues/new)

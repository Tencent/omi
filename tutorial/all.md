# 精通Omi框架

《精通[Omi框架](https://github.com/AlloyTeam/omi)》书籍的免费电子版，有这一篇足够从入门到精通。

* [简介](#简介)
* [安装Omi](#安装omi)
* [Hello Omi](#hello-omi)
* [组件](#组件)
* [组件通讯](#组件通讯)
    * [通讯概览](#通讯概览)
    * [子与父通讯](#子与父通讯)
    * [data-*通讯](#data-通讯)
    * [:data-*通讯](#data-通讯-1)
    * [::data-*通讯](#data-通讯-2)
    * [data通讯](#data通讯)
    * [group-data通讯](#group-data通讯)
    * [标记name](#标记name)
    * [标记omi-id](#标记omi-id)
    * [selfDataFirst](#selfdatafirst)
* [生命周期](#生命周期)
* [事件处理](#事件处理)
    * [内置事件](#内置事件)
    * [组件事件](#组件事件)
* [条件判断](#条件判断)
* [循环遍历](#循环遍历)  
* [插槽slot](#插槽slot)  
* [Store体系](#store体系)  
* [表单](#表单)  
* [继承](#继承)  
* [模板切换](#模板切换)  
* [获取DOM节点](#获取dom节点)  
* [插件体系](#插件体系)  
    * [Omi.extendPlugin](#omiextendplugin)
    * [关联instance](#关联instance)
    * [传递数据](#传递数据)
    * [更多插件](#更多插件)
* [指令详解](#指令详解)  
    * [{{expression}}](#expression)
    * [o-if](#o-if)
    * [o-repeat](#o-repeat)
    * [o-filter](#o-filter)
    * [o-html](#o-html)
    * [o-replace](#o-replace)
* [调试技巧](#调试技巧)  
* [Omi相关](#omi相关)  

## 简介
    
    Omi（读音 / [ˈomɪ] /, 汉字类似于 欧米） 是一款用于创建Web用户界面的组件化框架，开放并且现代，故得名：Omi。
其代码已托管至Github地址: [https://github.com/AlloyTeam/omi](https://github.com/AlloyTeam/omi)

[Omi框架](https://github.com/AlloyTeam/omi)目前最新版本为1.7.0，提供了渐进增强式的Web开发解决方案，内置完善的支持无限声明式嵌套的组件系统。概括起来包含下面优点和特性:

* 良好的兼容性 - 兼容IE8及IE8以上版本(要兼容IE8请使用omi.art.js),完美兼容各种手机平版移动Web程序
* 超小的尺寸 - 7 kb (gzip) 
* 面向未来的Web架构体系 - 未来DOM很快，而且越来来快! 其实现在DOM已经足够快了:)
* 不使用虚拟DOM的问题是跨平台渲染更麻烦，Omi未来将提供`omi-canvas`进行跨平台渲染
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
<script src="https://unpkg.com/omi@1.6.3/dist/omi.min.js"></script>
```

你也可以 [Omi Cli](https://github.com/AlloyTeam/omi-cli) 来初始化你的项目脚手架，它会帮你处理好一切构建相关的东西。

```js
npm install omi-cli -g     //安装CLI
omi init [project name]    //初始化项目 
cd your_project_name       //转到目录
npm start                  //开发
npm run dist               //生成发布文件   
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

特别强调，Omi.tag是全局注册，只要一个地方注册了，其他地方可以省去注册的代码。

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

特别需要注意的是每个组件必须要要闭合成一个节点，比如:

错误写法:

```
  render() {
    return `
        <div>a</div>
        <div>b</div>
    `
  }
```

正确写法:

```
  render() {
    return `
        <div>
            <div>a</div>
            <div>b</div>
        <div>`
  }
```

## 组件通讯

### 通讯概览

![](http://images2015.cnblogs.com/blog/105416/201705/105416-20170509130200394-716974903.jpg)

这一节主要是解释上面这张图。

[Omi框架](https://github.com/AlloyTeam/omi)组建间的通讯非常便利灵活，足够满足业务场景需要。因为有许多可选方案进行通讯:

* `on-*` 代表传递父组件向子组件注入的回调函数，比`on-page-change="pageChangeHandler"`
* `data-*`   代表直接传递字符串
* `:data-*`  代表传递javascript表达式，比如`data-num="1"` 代表传递数字1而非字符串，`data-num="1+1"`可以传递2。
* `::data-*` 代表传递父组件的属性，比如上面的`::data-items="data.items"`就代表传递`this.data.items`给子组件
* `data` 代表传递父组件的属性，比如`data="user"`代表传递`this.user`给子组件
* `:data` 代表传递javascript表达式，比如`data="{ name : 'dntzhang' , age : 18 }"`代表传递`{ name : 'dntzhang' , age : 18 }`给子组件
* `group-data` 代表传递父组件的数组一一映射到子组件


### 子与父通讯

通过on-*传递回调函数给子组件，子组件就可以执行注入的父组件中的方法，如; 

```js
...
handlePageChange () {

}

render () {
    return `<div>
                <h1>Pagination Example</h1>
                <content name="content" ></content>
                <pagination
                    name="pagination"
                    :data-total="100"
                    :data-page-size="10"
                    :data-num-edge="1"
                    :data-num-display="4"
                    on-page-change="handlePageChange" ></pagination>
            </div>`;
}
```

* 可以看到上面使用了`pagination`组件。里面声明了`on-page-change`来指向this.handlePageChange
* 在pagination组件内部可以通过`this.data.onPageChange` 来执行`this.handlePageChange`方法


### data-*通讯 

```js {36}
class Hello extends Omi.Component {
    constructor(data) {
      super(data);
    }
    
    render() {
      return  `
      <div>
      	<h1 onclick="handleClick(this, event)">Hello ,{{name}}!</h1>
      </div>
  		`;
    }
}

Omi.tag('hello', Hello);

class App extends Omi.Component {
    render() {
        return  `
        <div>
            <hello data-name="Omi" ></hello>
        </div>
        `;
    }
}

Omi.render(new App(),"#container");
```

一般data-*用来传递值类型，如string、number。值得注意的是，通过data-*接收到的数据类型都是string，需要自行转成number类型，或者使用`:data-*`来传递number。

### :data-*通讯 

* `:data-*`  代表传递javascript表达式，比如`data-num="1"` 代表传递数字1而非字符串，`data-num="1+1"`可以传递2。

### ::data-*通讯 

* `::data-*` 代表传递父组件的属性，比如上面的`::data-items="data.items"`就代表传递`this.data.items`给子组件

### data通讯 

如上面代码所示，通过 data-name="Omi"可以把name传递给子组件。下面的代码也可以达到同样的效果。

```js {4,10}
...
class App extends Omi.Component {
    constructor(data) {
      super(data);
      this.helloData = { name : 'Omi' };
    }
  
    render() {
        return  `
        <div>
            <hello data="helloData" ></hello>
        </div>
        `;
    }
}

Omi.render(new App(),"#container");
```

使用data声明，会去组件的instance（也就是this）下找对应的属性，this下可以挂载任意复杂的对象。所以这也就突破了data-*的局限性。

如果instance下面的某个属性下面的某个属性下面的某个数组的第一个元素的某个属性要作为data传递Hello怎么办？
没关系，data声明是支持复杂类型的，使用方式如下:

```js
...
class App extends Omi.Component {
    constructor(data) {
        super(data);
        this.complexData ={
            a:{
                b:{
                    c:[
                        {
                            e:[{
                                name:'ComplexData Support1'
                            },{
                                name:'ComplexData Support2'
                            }]
                        },
                        {
                            name: 'ComplexData Support3'
                        }
                    ]
                }
            }
        };
    }
  
    render() {
        return  `
        <div>
            <hello data="complexData.a.b.c[1]" ></hello>
        </div>
        `;
    }
}
...
```

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=data_complex" target="_blank">点击这里→data映射复杂数据</a>

### group-data通讯

group-data专门是为了给一组组件批量传递data而设计。

```js
import Hello from './hello.js';


Omi.makeHTML('Hello', Hello);

class App extends Omi.Component {
    constructor(data) {
        super(data);
        this.testData = [{name: 'Omi'}, {name: 'dntzhang'}, {name: 'AlloyTeam'}];
    }

    render() {
        return  `
        <div>
            <hello group-data="testData" ></hello>
            <hello group-data="testData" ></hello>
            <hello group-data="testData" ></hello>
        </div>
        `;

    }
}

Omi.render(new App(),"#container");
```

只需要在声明的子组件上标记group-data，就会去当前组件的instance（也就是this）下面找对应的属性，然后根据当前的位置，和对应数组的位置会一一对应起来。

运行结果如下：
![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170216110701535-1698390390.png)

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=group_data" target="_blank">点击这里→group-data</a>

同样group-data支持复杂数据类型的映射，需要注意的是，group-data映射的终点必须是一个数组:

```js
import Hello from './hello.js';


Omi.tag('hello', Hello);

class App extends Omi.Component {
    constructor(data) {
        super(data);
        this.complexData ={
            a:{
                b:{
                    c:[
                        {
                            e:[{
                                name:'ComplexData Support1'
                            },{
                                name:'ComplexData Support2'
                            }]
                        },
                        {
                            name: 'ComplexData Support3'
                        }
                    ]
                }
            }
        };
    }

    render() {
        return  `
        <div>
            <hello group-data="complexData.a.b.c[0].e" ></hello>
            <hello group-data="complexData.a.b.c[0].e" ></hello>
        </div>
        `;

    }
}

Omi.render(new App(),"#container");
```

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=group_data_complex" target="_blank">点击这里→group-data映射复杂数据</a>

### 标记name

```js {7}
...
class App extends Omi.Component {
    constructor(data) {
        super(data);
    }
    
    installed(){
        this.hello.data.name = "Omi";
        this.update()
    }
  
    render() {
        return  `
        <div>
            <hello name="hello" ></hello>
        </div>
        `;
    }
}

Omi.render(new App(),"#container");
```

### 标记omi-id

```js {7,14}
...
class App extends Omi.Component {
    constructor(data) {
        super(data);
    }
    
    installed(){
        Omi.get("hello").data.name = "Omi";
        this.update()
    }
  
    render() {
        return  `
        <div>
            <hello omi-id="hello" ></hello>
        </div>
        `;
    }
}

Omi.render(new App(),"#container");
```

通过在组件上声明`omi-id`，标记`omi-id`是全局注册，在程序任何地方可以通过`Omi.get`拿到该对象的实例。

### selfDataFirst

使用Omi的时候，你会发现，在子组件内部修改父组件传递过来的data，就是修改 this.data 然后进行 this.update 会没有效果。

这里会有个权重问题。Omi的组件 selfDataFirst 默认是 false，也就是代码 父组件传递的属性的权重更高，如果你想要子组件 this.data 的权重更高，可以通过修改 selfDataFirst。如:

```js
<child-element selfDataFirst><child-element>
```

也可以使用缺省模式:

```js
<child-element sdf><child-element>
```

也可以在构造函数内修改如:

```js
class ChildElement extends Omi.Component {
    constructor(data) {
        super(data)
        this.selfDataFirst = true
    }
    ...
```

当然 selfDataFirst 的原理只是 Object.assign 的顺序不一样，Object.assign 只是浅拷贝，所以如果是引用类型的话，不管修改父组件传递的属性还是子组件自身的 `this.data` 都是可以修改成功的。最后贴上 Omi 相关的源码方便大家理解:

```js
_mergeData(childStr) {
    if(this.selfDataFirst){
        this.data = Object.assign({},this._getDataset(childStr),this.data)
    }else{
        this.data = Object.assign({},this.data, this._getDataset(childStr))
    }
}
```

`_mergeData` 方法是Omi内部执行的一个私有方法，会在组件 `render` 之前由执行。 

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

## 示意图

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
        return `<div>Seconds Elapsed:<span class="num"> {{secondsElapsed}}</span></div>`;
    }
}
```

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=lifecycle" target="_blank">点击这里→在线试试</a>


## 事件处理

Omi的事件分内置事件和自定义事件。在内置事件处理方面巧妙地利用了浏览器自身的管线机制，可以通过event和this轻松拿到事件实例和触发该事件的元素。

### 内置事件

什么算内置事件？只要下面正则能匹配到就算内置事件。

```js
on(abort|blur|cancel|canplay|canplaythrough|change|click|close|contextmenu|cuechange|dblclick|drag|dragend|dragenter|dragleave|dragover|dragstart|drop|durationchange|emptied|ended|error|focus|input|invalid|keydown|keypress|keyup|load|loadeddata|loadedmetadata|loadstart|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup|mousewheel|pause|play|playing|progress|ratechange|reset|resize|scroll|seeked|seeking|select|show|stalled|submit|suspend|timeupdate|toggle|volumechange|waiting|autocomplete|autocompleteerror|beforecopy|beforecut|beforepaste|copy|cut|paste|search|selectstart|wheel|webkitfullscreenchange|webkitfullscreenerror|touchstart|touchmove|touchend|touchcancel|pointerdown|pointerup|pointercancel|pointermove|pointerover|pointerout|pointerenter|pointerleave)
```

内置事件怎么绑定？如下所示：

```js
class EventTest extends Omi.Component {
    constructor(data) {
        super(data);
    }

    handleClick(dom, evt){
        alert(dom.innerHTML);
    }

    render () {
        return `<div onclick="handleClick(this, event)">Hello, Omi!</div>`;
    }
}
```

### 组件事件

开发者自己定义的组件的事件，称为组件事件，组件事件必须以on-*的格式，不然Omi识别不到。这里拿分页作为例子：

```js
import Omi from '../../src/index.js';
import Pagination from './pagination.js';
import Content from './content.js';

Omi.tag('pagination', Pagination);
Omi.tag('content', Content);

class Main extends Omi.Component {
    constructor(data) {
        super(data);
    }

    installed(){
        this.content.goto(this.pagination.data.currentPage+1);
    }
    
    handlePageChange(index){
        this.content.goto(index+1);
    }

    render () {
        return `<div>
                    <h1>Pagination Example</h1>
                    <content name="content" ></content>
                    <pagination
                        name="pagination"
                        data-total="100"
                        data-page-size="10"
                        data-num-edge="1"
                        data-num-display="4"　　　　　
                        on-page-change="handlePageChange" ></pagination>
                </div>`;
    }
}

Omi.render( new Main(),'body');
```

如上面的`on-page-change`就是自定义事件，触发会执行handlePageChange。对应到子组件的`this.data.onPageChange`方法是在`Pagination`中执行：

```js
import Omi from 'omi';

class Pagination extends Omi.Component {
    ...
    ...
            linkTo: "#",
            prevText: "Prev",
            nextText: "Next",
            ellipseText: "...",
            prevShow: true,
            nextShow: true,
            onPageChange: function () { return false; }
        }, this.data);

        this.pageNum = Math.ceil(this.data.total / this.data.pageSize);
    }
    
    goto (index,evt) {
        evt.preventDefault();
        this.data.currentPage=index;
        this.data.onPageChange(index);
    }
    ...
    ...
}
```

### 相关地址

* [演示地址](http://alloyteam.github.io/omi/example/pagination/)
* [源码地址](https://github.com/AlloyTeam/omi/tree/master/example/pagination)

## 条件判断

我们经常需要根据不同的状态呈现不同的界面，比如有的用户是vip要显示vip的Logo。Omi有许多种方式满足你的要求。

### 方式一

```js
class ConditionTest extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render () {
        return `
                <div o-if="isVip">you are VIP.</div>
                <div o-if="!isVip">you are not VIP.</div>
                `;
    }
}
```

当然也可以利用`{{expression}}`:

```js
class ConditionTest extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render () {
        return `
                <div>you are {{isVip?'':'not'}} VIP.</div>
                `;
    }
}
```

类似于 JavaScript 表达式，Omi 表达式可以包含字母，操作符，变量，以上的omi.js的条件判断方式。

### 方式二

```js
class ConditionTest extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render () {
        if(this.data.isVip){
            return '<div>you are VIP.</div>';
        }else{
            return '<div>you are not VIP.</div>';
        }
    }
}
```

render就是提供了很好的可编程性，里面可以写任意js逻辑代码。对了，差点忘了，style方法里面也可以写js逻辑的。

```js
class ConditionTest extends Omi.Component {
    constructor(data) {
        super(data);
    }

    style (){
        if(this.data.isVip){
            return 'div{ color : red; }';
        }else{
            return 'div{ color : green; }';
        }
    }

    render () {
        if(this.data.isVip){
            return '<div>you are VIP.</div>';
        }else{
            return '<div>you are not VIP.</div>';
        }
    }
}
```

这里需要特别注意，如果同一个组件使用了多次，只会使用第一次生成的局部CSS。如果需要每次都生成不同的局部CSS，需要创建或者声明的时候标记scopedSelfCSS。即:

```html
<your-component scopedSelfCSS></your-component>
```

也支持下面的简写形式:

```html
<your-component ssc></your-component>
```

如果是javascript创建的时候:

```js
new YourComponent({ }, { scopedSelfCSS : true })
```

### 方式三

```js
class ConditionTest extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render() {
        return  `
            ${this.data.isVip
                ?"<div>you are VIP.</div>"
                :"<div>you are not VIP.</div>"
    		}
        `;
    }
}
```

当然可以使用${ }里面写javascript代码进行输出。

### 方式四

如果你使用的是omi.mustache.js，你可以使用下面的方式:

```js
class ConditionTest extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render () {
        return `{{#isVip}}
                    <div>you are VIP.</div>
                {{/isVip}}
                {{^isVip}}
                    <div>you are not VIP.</div>
                {{/isVip}}`;
    }
}
```

完全使用mustachejs的条件判断的语法。当然Omi不强制你使用mustachejs。你可以是omi.lite.js，然后重写Omi.template方法去使用任意你喜爱的模板引擎。

## 循环遍历

### 方式一

```js
class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render(){
        return `<div>
                    <div o-repeat="item in items" o-if="item.show">
                        {{$index}}- {{item.text}}
                    </div>
                </div>`
    }

}

Omi.render(new List({
    items: [
        { text: 'Omi', show: true },
        { text: 'dntzhang', show: true },
        { text: 'AlloyTeam'}
    ]
}),"body",true);
```

可以看到遍历的时候可以加上o-if进行条件判断用来过滤掉show不等于true的项。

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=list" target="_blank">点击这里→在线试试</a>

### 方式二

既然ES6+了，当然可以使用${ }以及Array的map方法: 

```js
class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render() {
        return `<div>
                    <ul>
                    ${this.data.items.map(item =>
                         `<li id="${item.id}">${item.text}</li>`
                    ).join('')}
                    </ul>
                </div>`;
    }
}

Omi.render(new List({
    items: [
        {id: 1, text: 'Omi'},
        {id: 2, text: 'dntzhang'},
        {id: 3, text: 'AlloyTeam'}
    ]
}),"body");
```

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=list2" target="_blank">点击这里→在线试试</a>

如果想在循环里加些判断呢？比如需要把id为偶数的隐藏起来:

```js
render() {
    return `<div>
                <ul>
                ${this.data.items.map(item =>
                    `<li style="display:${item.id%2===0?'none':'block'};" id="${item.id}">${item.text}</li>`
                ).join('')}
                </ul>
            </div>`;
}
```

所以模板字符串还是非常方便，随着ES继续发展下去，模板引擎估计会慢慢消失。所以omi提供了 omi.lite.js 版本不包含任何模板引擎。


### 方式三

```js
class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render () {
        return `<div>
                    <ul> 
                        {{#items}} 
                        <li id="{{id}}">{{text}}</li> 
                        {{/items}}
                    </ul>
                </div>`;
    }
}

Omi.render(new List({
    items: [
        {id: 1, text: 'Omi'},
        {id: 2, text: 'dntzhang'},
        {id: 3, text: 'AlloyTeam'}
    ]
}),"body");
```

mustache.js更详细的循环遍历使用可看[https://github.com/janl/mustache.js#non-empty-lists](https://github.com/janl/mustache.js#non-empty-lists)。 比如还支持：

* 如果items的每一项是字符串，可以直接**{{.}}**的方式来输出每一项
* 循环的时候调用定义好的函数

## 插槽slot

在hello组件中开槽:

```js
   render(){
        return `
        <div onclick="clickHandler">
            <div>Hello, {{name}}</div>
            <slot></slot>
            <slot></slot>
        </div>`
    }
```

在其他组件中插入:

```js
<hello data-name="Omi">
    <h1>slot 1</h1>
    <h1>slot 2</h1>
</hello>
```

当然，你也可以标记权重要插入到指定的凹槽:

```js
<hello data-name="Omi">
    <h1 slot-index="1">slot 1</h1>
    <h1 slot-index="0">slot 2</h1>
</hello>
```

slot-index越小权重越高。会order by一下，然后按顺序插入。

这里需要特别强调一下: Slots are placeholders inside your component that users can fill with their own markup.所以 slot 的本质其实就是传递 HTML 字符串(当然也可以包括 Omi 自定义组件字符串)，当 slot 里的 HTML 标签绑定事件，该事件要定义在子组件中。

```js
<hello data-name="Omi">
    <h1 slot-index="1" onclick="clickHandler" >slot 1</h1>
    <h1 slot-index="0">slot 2</h1>
</hello>
```

如上面的 clickHandler 需要定义在 hello 组件当中。


## Store体系

先说说Store系统是干什么的！为什么要造这样一个东西？能够给系统架构带来什么？

当我们组件之间，拥有共享的数据的时候，经常需要进行组件通讯。在Omi框架里，父组件传递数据给子组件非常方便：

* 通过在组件上声明 data-* 或者 :data-* 传递给子节点
* 通过在组件上声明 data 或者 :data 传递给子节点 （支持复杂数据类型的映射）
* 声明 group-data 把数组里的data传给一堆组件传递（支持复杂数据类型的映射）

注：上面带有冒号的是[传递javascript表达式](https://github.com/AlloyTeam/omi/blob/master/tutorial/js-expression.md)

通过声明onXxx="xxxx"可以让子组件内执行父组件的方法。具体的如下图所示：

![](http://images2015.cnblogs.com/blog/105416/201705/105416-20170509130200394-716974903.jpg)


如果还不明白的话，那...  我就直接上代码了：

```js
class Main extends Omi.Component {

    handlePageChange(index){
        this.content.goto(index+1)
        this.update()
    }

    render () {
        return `<div>
                    <h1>Pagination Example</h1>
                    <content name="content"></content>
                    <pagination
                        name="pagination"
                        :data-total="100"
                        :data-page-size="10"
                        :data-num-edge="1"
                        :data-num-display="4"
                        on-page-change="handlePageChange"></pagination>
                </div>`;
    }
}
```

上面的例子中，

* 父组件的render方法里，通过 data-✽ 传递数据给子组件 Pagination
* 通过`on-page-change="handlePageChange"`实现子组件与父组件通讯

详细代码可以点击： [分页例子地址](https://github.com/AlloyTeam/omi/tree/master/example/pagination)

当然你也可以使用event emitter / pubsub库在组件之间通讯，比如这个只有 200b 的超小库[mitt](https://github.com/developit/mitt) 。但是需要注意mitt兼容到IE9+，Omi兼容IE8。但是，使用event emitter / pubsub库会对组件代码进行入侵，所以非常不建议在基础非业务组件使用这类代码库。

虽然组件通讯非常方便，但是在真实的业务场景中，不仅仅是父子、爷孙、爷爷和堂兄、嫂子和堂弟...
onXxx="xxxx"就显得无能为力，力不从心了，各种数据传递、组件实例互操作、 emitter/pubsub或者循环依赖，让代码非常难看且难以维护。所以：

	Omi.Store是用来管理共享数据以及共享数据的逻辑 。
	
Omi Store使用足够简便，对架构入侵性极极极小(3个极代表比极小还要小)。下面一步一步从todo的例子看下Store体系怎么使用。
	
### 定义 Omi.Store

Omi.Store是基类，我们可以继承Omi.Store来定义自己的Store，比如下面的TodoStore。

```js
import Omi from 'omi'

class TodoStore extends Omi.Store {
    constructor(data , isReady) {
        super(isReady)

        this.data = Object.assign({
            items:[]
        },data)
    }

    add(value){
        this.data.items.push(value)
        this.update()
    }

    clear(){
        this.data.items.length = 0
        this.update()
    }
}

export default TodoStore
```

TodoStore定义了数据的基本格式和数据模型的逻辑。
比如 this.data 就是数据的基本格式：

```js
{
    items:[]
}
```

add和clear就是共享数据相关的逻辑。

值得注意的是，在add和clear方法里都有调用this.update();这个是用来更新组件的，this.update并不会更新所有组件。但是他到底会更新哪些组件呢？等讲到store的addView方法你就明白了。

### 创建 Omi.Store

通过 new 关键字来使用TodoStore对象的实例。

```js
let store = new TodoStore({ /* 初始化数据 */ ，/* 数据是否准备好 */  })
```

上面可以传入一些初始化配置信息，store里面便包含了整个应用程序共享的状态数据以及贡献数据逻辑方法(add,clear)。

当然，这些初始化配置信息可能是异步拉取的。所以，有两种方法解决异步拉取store配置的问题：

* 拉取数据，然后new TodoStore()，再Omi.render
* 先let store = new TodoStore(),再Omi.render,组件内部监听store.ready，拉取数据更改store的data信息，然后执行store.beReady()


### 根组件注入 store

为了让组件树能够使用到 store，可以通过Omi.render的第三个参数给根组件注入 store:

```js
Omi.render(new Todo(),'body',{
    store: store
});
```

当然ES2015已经允许你这样写了:

```js
Omi.render(new Todo(),'body',{
    store
});
```

两份代码同样的效果。

通过Omi.render注入之后，在组件树的**所有组件**都可以通过 this.$store 访问到 store。

### 利用 beforeRender

为什么要说beforeRender这个函数？ 因为通过beforeRender转换store的data到组件的data，这样store的数据和组件的数据就解耦开了。

beforeRender是生命周期的一部分。且看下面这张图:

![beforeRender](http://images2015.cnblogs.com/blog/105416/201703/105416-20170322083548924-1871234168.jpg)

不管是实例化或者存在期间，在render之前，会去执行beforeRender方法。所以可以利用该方法写store的data到组件data的转换逻辑。比如：

```js
import Omi from '../../src/index.js';
import List from './list.js';

Omi.tag('list', List);

class Todo extends Omi.Component {
    constructor(data) {
        super(data)
    }

    install(){
        this.$store.addView(this)
    }

    beforeRender(){
        this.data.length = this.$store.data.items.length
    }

    add (evt) {
        evt.preventDefault()
        let value = this.data.text
        this.data.text = ''
        this.$store.add(value)
    }

    style () {
        return `
        h3 { color:red; }
        button{ color:green;}
        `;
    }

    clear(){
        this.data.text = ''
        this.$store.clear()
    }

    handleChange(evt){
        this.data.text = evt.target.value
    }

    render () {
        return `<div>
                    <h3>TODO</h3>
                    <button onclick="clear">Clear</button>
                    <list name="list" data="$store.data"></list>
                    <form onsubmit="add" >
                        <input type="text" onchange="handleChange"  value="{{text}}"  />
                        <button>Add #{{length}}</button>
                    </form>

                </div>`;
    }
}

export default Todo;
```

为什么要去写beforeRender方法？因为render只会使用this.data去渲染页面而不会去使用this.$store.data，所以需要把数据转移到组件的this.data下。这样组件既能使用自身的data，也能使用全局放this.$store.data了，不会耦合在一起。

注意看上面的：

```js
    install(){
        this.$store.addView(this)
    }
```

通过 addView 可以让 store 和 view（也就是组件的实例） 关联起来，以后store执行update方法的时候，关联的view都会自动更新！

再看上面的子组件声明:

```js
<list name="list" data="$store.data"></list>
```

这样相当于把this.$store.data传递给了List组件。所以在List内部，就不再需要写beforeRender方法转换了。

```js
class List extends Omi.Component {
    render () {
        return ` <ul>  <li o-repeat="item in items">{{item}}</li></ul>`
    }
}
```

	这里需要特别强调，不需要把所有的数据提取到store里，只提取共享数据就好了，组件自身的数据还是放在组件自己进行管理。


### 异步Store数据

通常，在真实的业务需求中，数据并不是马上能够拿到。所以这里模拟的异步拉取的todo数据：

```js
let todoStore = new TodoStore()
setTimeout(()=>{
    todoStore.data.items = ["omi","store"];
    todoStore.beReady();
},2000)
```

上面的beReady就是代码已经准备就绪，在组件内部可以监听ready方法：

```js
class Todo extends Omi.Component {
    constructor(data) {
        super(data)
    }

    install(){
        this.$store.addView(this)
    }

    installed(){
        this.$store.ready(()=>this.$store.update())
    }
    
    add (evt) {
        evt.preventDefault()
        if(!this.$store.isReady){
            return
        }
        let value = this.data.text
        this.data.text = ''
        this.$store.add(value)
    }
```

可以看到上面的add方法可以通过this.$store.isReady获取组件store是否准备就绪。

你可以通过Omi.createStore快捷创建store。如:

```js
export default Omi.createStore({
    data: {
        items: ["omi", "store"]
    },
    methods: {
        add: function (value) {
            this.data.items.push(value)
            this.update()
        },

        clear: function () {
            this.data.items.length = 0
            this.update()
        }
    }
})
```

也支持省略Omi.createStore的形式创建store。如:

```js
export default {
    data: {
        items: ["omi", "store"]
    },
    methods: {
        install:function(){ },
        
        add: function (value) {
            this.data.items.push(value)
            this.update()
        },

        clear: function () {
            this.data.items.length = 0
            this.update()
        }
    }
}
```

你也可以定义install方法初始化一些属性，install方法在Omi内部会自动帮你执行。

### Omi Store update

Omi Store的update方法会更新所有关联的视图。
Omi Store体系以前通过addView进行视图收集，store进行update的时候会调用组件的update。

与此同时，Omi Store体系也新增了addSelfView的API。

* addView 收集该组件视图，store进行update的时候会调用组件的update
* addSelfView 收集该组件本身的视图，store进行update的时候会调用组件的updateSelf

当然，store内部会对视图进行合并，比如addView里面加进去的所有视图有父子关系的，会把子组件去掉。爷孙关系的会把孙组件去掉。addSelfView收集的组件在addView里已经收集的也去进行合并去重，等等一系列合并优化。

### 源码地址

* 更为详细的代码可以[点击这里](https://github.com/AlloyTeam/omi/tree/master/example/todo-store)

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
    
    style () {
        return  `
            div{
                cursor:pointer;
            }
         `;
    }
    
    handleClick(target, evt){
        alert(target.innerHTML);
    }
    
    render() {
       return  ' <div onclick="handleClick(this,event)">Hello {{name}}!</div>'
    }
}

class SubHello extends Hello {
    constructor(data) {
        super(data);
    }
}

Omi.render(new SubHello({ name : 'Omi' }),'#container');
```

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=inherit" target="_blank">点击这里→在线试试</a>

###  ES5下的继承

```js
var Hello =  Omi.create("hello",{
  render:function(){
    return  ' <div>Hello {{name}}!</div>'
  }
})

var SubHello =  Omi.create("sub-hello",Hello,{ });


Omi.render(new SubHello({ name : 'Omi' }),'#container');
```

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=inherit_es5" target="_blank">点击这里→在线试试</a>

## 模板切换

[Omi框架](https://github.com/AlloyTeam/omi)到目前为止有四种版本。

* omi.js 使用 [sodajs](https://github.com/AlloyTeam/sodajs) 为内置指令系统
* omi.art.js 使用 [art-template](https://github.com/aui/art-template) 为内置模版引擎
* omi.lite.js 不包含任何模板引擎
* omi.mustache.js 使用 [mustache.js](https://github.com/janl/mustache.js)为内置模版引擎

 [sodajs](https://github.com/AlloyTeam/sodajs)是我们团队高级工程师(dorsywang)的作品，服务员QQ群、兴趣部落等多个产品线，
 以良好的兼容性、卓越的性能、简便的语法、超小的尺寸以及强大的功能而深受同事们的喜爱。下面先来看看sodajs怎么使用。

Omi不强制开发者使用soda指令或者mustache.js模版引擎，你可以根据业务场景使用任意模板引擎或者不使用模板引擎。

那么怎么使用别的模板引擎？下面拿[ejs](https://github.com/tj/ejs)作为例子。

### 使用artTemplate

```js
Omi.template =  ejs.render
```
重写Omi.template方法，tpl为传入的模板，data为模板所需的数据，返回值为HTML。
重写完毕后就能在render使用ejs的语法，如：

```js
class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    style () {
        return `
        h1 { color:red; }
        li{ color:green;}
        `;
    }

    render () {
        return `<% if (names.length) { %>  
                  <ul>  
                    <% names.forEach(function(name){ %>  
                      <li foo='<%= name + "'" %>'><%= name %></li>  
                    <% }) %>  
                  </ul>  
                <% } %> `;
    }
}
```

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
        return  `
        <div>
            <div omi-drag class="test">Drag Me</div>
        </div>
        `;

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
    return  `
    <div>
        <div omi-drag class="test">Drag Me</div>
    </div>
    `;
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
    return  `
    <div>
        <div omi-drag class="test">Drag Me</div>
        <div omi-drag class="test">Drag Me</div>
    </div>
    `;
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
    return  `
    <div>
        <div omi-drag class="test">Drag Me A</div>
        <div omi-drag class="test">Drag Me B</div>
    </div>
    `;
}
...
```

怎么办？怎么实现？有办法！通过dom传递数据给插件。

## 传递数据

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
    return  `
    <div>
        <div omi-drag class="test" dragMove="moveHandlerA" >Drag Me A</div>
        <div omi-drag class="test" dragMove="moveHandlerB" >Drag Me B</div>
    </div>
    `;
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

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=plugin" target="_blank">点击这里→在线试试</a>

## 更多插件

* [omi-finger](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-finger) Omi的[AlloyFinger](https://github.com/AlloyTeam/AlloyFinger)插件，支持各种触摸事件和手势
* [omi-transform](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-transform) Omi的[transformjs](http://alloyteam.github.io/AlloyTouch/transformjs/)插件，快速方便地设置DOM的CSS3 Transform属性
* [omi-touch](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-touch) Omi的[AlloyTouch](https://github.com/AlloyTeam/AlloyTouch)插件，Omi项目的触摸运动解决方案（支持触摸滚动、旋转、翻页、选择等等）
* [omi-jquery-date-picker](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-jquery-date-picker) Omi的时间选择插件，支持各种时间或者时间区域选择

## 指令详解

### {{expression}}

``` js
    <div>Hello, {{name}}</div>
```

data:

``` js
{ name : 'Omi' }
``` 

result:
``` js
<div>Hello, Omi</div>
``` 

### o-if

``` html
<div o-if="show">I'm visible {{name}}!</div>
<div o-if="!show">I'm hidden!</div>
```
data:

``` js
 { name : 'Omi',show: true }
``` 

result:

``` html
<div>I'm visible Omi!</div>
``` 

### o-repeat

> o-repeat="item in array"

> o-repeat="item in object"

> o-repeat="item in array by index"

> o-repeat="item in object by key"

> o-repeat="(index, value) in array"

> o-repeat="(key, value) in object"

default index or key is $index

``` js
<ul>
    <li o-repeat="item in list" o-if="item.show">
        {{$index}} - {{item.name}}
    </li>
</ul>
``` 

data:

``` js
{
    list: [
        {name: "Hello" ,show: true},
        {name: "Omi" ,show: true},
        {name: "AlloyTeam"}
    ]
}
```

result:

``` html
<ul>
    <li> 
        0 - Hello 
    </li>
    <li> 
        1 - Omi 
    </li>
</ul>
```

当然这是支持嵌套的 o-repeat 用于遍历多维数组。

### o-filter

> Omi.template.filter(String filterName, Function func(input, args...))

> {{input|filte1:args1:args2...|filter2:args...}}

example: 

``` js
Omi.template.filter('shortTitle', function(input, length){
    return (input || '').substr(0, length);
});
```

``` js

<ul o-repeat="item in list">
    <li class="title">
        {{item.title|shortTitle:10}}
    </li>
</ul>
``` 

data:

```js
{ 
    list : [
        {title:'short'},
        {title:'i am too long!'}
    ] 
}
```


### o-html

```js
<div o-html="html"></div>
```

data:

```js
{ html : '<span style="color:red;">test o-html</span>' }
```

result:

``` html
<div o-html="html"><span style="color:red;">test o-replace</span></div>
```

### o-replace
replace this node with html

```js
var tpl = '<div o-replace="html"></div>'
```

data:

```js
{ html : '<span style="color:red;">test o-replace</span>' }
```

result:

``` html
<span style="color:red;">test o-replace</span>
```

div 标签讲被 html替换掉，而不是插入 div 里面。

### 其他指令

支持 o-checked 、 o-autofocus 等等任意指令用于注入或者移除checked和autofocus等。举个例子:

```html
<input type="checkbox" o-checked="{{ user_config_status ? 'checked' : '' }}" >
<input type="text" o-autofocus="{{ group_forbid===1 ? 'autofocus' : '' }}" >
```

超级方便！


## 调试技巧

```js
console.log(Omi.instances)
```

所有的组件的实例都在`Omi.instances`数组里，简单吧！

## Omi相关

* [Omi 官网](http://www.omijs.org)
* [Omi Github](https://github.com/AlloyTeam/omi)
* [Omi Playground](http://alloyteam.github.io/omi/example/playground/)
* [Omi 文档](https://github.com/AlloyTeam/omi/blob/master/tutorial/all.md)
* [Omi 教程](https://github.com/AlloyTeam/omi/tree/master/tutorial#omi-相关文章)
* [Omi Cli](https://github.com/AlloyTeam/omi-cli)
* [New issue](https://github.com/AlloyTeam/omi/issues/new)
* 如果想更加方便的交流关于Omi的一切可以加入QQ的Omi交流群(256426170)
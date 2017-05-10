# 精通Omi框架这篇足够(持续更新..)

* [简介](#简介)
* [安装Omi](#安装omi)
* [Hello Omi](#hello-omi)
* [组件](#组件)
* [组件通讯](#组件通讯)
    * [通讯概览](#通讯概览)
* [生命周期](#生命周期)
* [事件处理](#事件处理)
    * [内置事件](#内置事件)
    * [组件事件](#组件事件)
    
    
## 简介

[Omi框架](https://github.com/AlloyTeam/omi)目前最新版本为1.6.1，提供了渐进增强式的Web开发解决方案，内置完善的支持无限声明式嵌套的组件系统。概括起来包含下面优点和特性:

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


### on-*传递回调函数 

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

### 通过对象实例

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

### 通过omi-id

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

下面介绍mustache.js的方式和javascript遍历的方式。

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



未完待续...
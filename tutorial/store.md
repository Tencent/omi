## Omi框架Store体系的前世今生

先说说Store系统是干什么的！为什么要造这样一个东西？能够给系统架构带来什么？

当我们组件之间，拥有共享的数据的时候，经常需要进行组件通讯。在Omi框架里，父组件传递数据给子组件非常方便：

* 通过在组件上声明 data-* 或者 :data-* 传递给子节点
* 通过在组件上声明 data 或者 :data 传递给子节点 （支持复杂数据类型的映射）
* 声明 group-data 把数组里的data传给一堆组件传递（支持复杂数据类型的映射）

注：上面带有冒号的是[传递javascript表达式](https://github.com/AlloyTeam/omi/blob/master/tutorial/js-expression.md)

通过声明onXxx="xxxx"可以让子组件内执行父组件的方法。具体的如下图所示：

![](http://images2015.cnblogs.com/blog/105416/201703/105416-20170323100946955-1938506287.jpg)


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
                    <Content name="content" />
                    <Pagination
                        name="pagination"
                        :data-total="100"
                        :data-page-size="10"
                        :data-num-edge="1"
                        :data-num-display="4"　　　　　
                        onPageChange="handlePageChange" />
                </div>`;
    }
}
```

上面的例子中，

* 父组件的render方法里，通过 data-✽ 传递数据给子组件 Pagination
* 通过onPageChange="handlePageChange"实现子组件与父组件通讯

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
            items:[],
            length:0
        },data)

        this.data.length = this.data.items.length
    }

    add(value){
        this.data.items.push(value)
        this.data.length = this.data.items.length
        this.update()
    }

    clear(){
        this.data.items.length = 0
        this.data.length = 0
        this.update()
    }
}

export default TodoStore
```

TodoStore定义了数据的基本格式和数据模型的逻辑。
比如 this.data 就是数据的基本格式：

```js
{
    items:[],
    length:0
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

Omi.makeHTML('List', List);

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
                    <List name="list" data="$store.data" />
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
<List name="list" data="$store.data" />
```

这样相当于把this.$store.data传递给了List组件。所以在List内部，就不再需要写beforeRender方法转换了。

```js
class List extends Omi.Component {
    constructor(data) {
        super(data)
    }

    render () {
        return ` <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>`
    }
}
```

	这里需要特别强调，不需要把所有的数据提取到store里，只提取共享数据就好了，组件自身的数据还是放在组件自己进行管理。


## 异步数据

通常，在真实的业务需求中，数据并不是马上能够拿到。所以这里模拟的异步拉取的todo数据：

```js
let todoStore = new TodoStore()
setTimeout(()=>{
    todoStore.data.items = ["omi","store"];
    todoStore.data.length = todoStore.data.items.length
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

## 源码地址

* 更为详细的代码可以[点击这里](https://github.com/AlloyTeam/omi/tree/master/example/todo-store)
* 异步拉取的代码可以[点击这里](https://github.com/AlloyTeam/omi/tree/master/example/todo-store-async)

## 相关

* Omi官网[omijs.org](http://www.omijs.org)
* Omi的Github地址[https://github.com/AlloyTeam/omi](https://github.com/AlloyTeam/omi)
* 如果想体验一下Omi框架，可以访问 [Omi Playground](http://alloyteam.github.io/omi/example/playground/)
* 如果想使用Omi框架或者开发完善Omi框架，可以访问 [Omi使用文档](https://github.com/AlloyTeam/omi/tree/master/docs#omi使用文档)
* 如果你想获得更佳的阅读体验，可以访问 [Docs Website](http://alloyteam.github.io/omi/website/docs.html)
* 如果你懒得搭建项目脚手架，可以试试 [omi-cli](https://github.com/AlloyTeam/omi/tree/master/cli)
* 如果你有Omi相关的问题可以 [New issue](https://github.com/AlloyTeam/omi/issues/new)
* 如果想更加方便的交流关于Omi的一切可以加入QQ的Omi交流群(256426170)

![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170208095745213-1049686133.png)
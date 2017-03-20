## Store 体系

先说说Store系统是干什么的！

当我们组件之间，拥有共享的数据的时候，经常需要进行组件通讯。在Omi框架里，组件通讯非常方便：

* 通过在组件上声明 data-* 传递给子节点
* 通过在组件上声明 data 传递给子节点 （支持复杂数据类型的映射）
* 声明 group-data 把数组里的data传给一堆组件传递（支持复杂数据类型的映射）
* 完全面向对象，可以非常容易地拿到对象的实例，之后可以设置实例属性和调用实例的方法。比如(标记name、标记omi-id)

当然你也可以使用event emitter / pubsub库在组件之间通讯，比如这个只有 200b 的超小库[mitt](https://github.com/developit/mitt) 。但是需要注意mitt兼容到IE9+，Omi兼容IE8。

虽然组件通讯非常方便，但是各种数据传递、组件实例互操作或者循环依赖，让代码非常难看且难以维护。所以：

Omi.Store是为了让 组件通讯几乎绝迹 。虽然：

	Redux 的作者 Dan Abramov 说过：Flux 架构就像眼镜：您自会知道什么时候需要它。
	
但是，我不会告诉你

	Omi Store 系统就像眼镜：您自会知道什么时候需要它。
	
因为，Omi Store使用足够简便，对架构入侵性极极极小(3个极代表比极小还要小)，让数据、数据逻辑和UI展现彻底分离，所以我的观点是：

	如果使用Omi，请使用Omi.Store架构。
	
比如连这个[Todo例子](https://github.com/AlloyTeam/omi/tree/master/example/todo-store)都能使用Omi.Store架构。如果连复杂度都达不到Todo，那么Omi其实都没有必要使用，你可能只需要一个模板引擎便可。


### 定义 Omi.Store

Omi.Store是基类，我们可以继承Omi.Store来定义自己的Store，比如下面的TodoStore。

```js
import Omi from 'omi'

class TodoStore extends Omi.Store {
    constructor(data , isReady) {
        super(isReady)

        this.data = Object.assign({
            items:[],
            text:'',
            length:0
        },data)

        this.data.length = this.data.items.length
    }

    add(){
        this.data.items.push(this.data.text)
        this.data.text = ""
        this.data.length = this.data.items.length
        this.update()
    }

    updateText(text){
        this.data.text = text
    }

    clear(){
        this.data.items.length = 0
        this.data.length = 0
        this.data.text = ""
        this.update()
    }
}

export default TodoStore
```

TodoStore定义类数据的基本格式和数据模型的逻辑。
比如 this.data 就是数据的基本格式, 

```js
{
    items:[],
    text:'',
    length:0
}
```

add,updateText和clear就是数据模型的逻辑。

### 使用 Omi.Store

通过 new 关键字来使用TodoStore对象的实例。

```js
let store = new TodoStore({ /* 初始化配置 */ })
```

上面可以传入一些初始化配置信息，store里面便包含了整个应用程序共享的状态数据以及相关数据逻辑方法(add,updateText,clear)。

当然，这些初始化配置信息可能是异步拉取的。所以，有两种方法解决异步拉取store配置的问题：

* 先let store = new TodoStore(),再Omi.render,组件内部监听store.ready，拉取数据更改store的data信息，然后执行store.beReady()
* 拉取数据，然后new TodoStore()，再Omi.render

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

通过Omi.render注入之后，在组件树的所有组件都可以通过 this.$store 访问到 store。

### 简便的 storeToData

storeToData这个函数，是生命周期的一部分。且看下面这张图:

![storeToData](http://images2015.cnblogs.com/blog/105416/201703/105416-20170320163400955-825119056.png)

在render之前，会去执行storeToData方法。所以该方法里面，可以书写store的data到组件data的转换逻辑。比如：

```js
class List extends Omi.Component {
    storeToData(){
        this.data.items = this.$store.data.items
    }

    render () {
        return ` <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>`
    }
}
```

再比如todo使用length和text:

```js
import Omi from '../../src/index.js';
import List from './list.js';

Omi.makeHTML('List', List);

class Todo extends Omi.Component {

    install(){
        this.$store.ready(()=>this.update())
    }

    storeToData(){
        this.data.length = this.$store.data.items.length
        this.data.text = this.$store.text
    }

    add (evt) {
        evt.preventDefault();
        this.$store.add();
    }

    handleChange(target){
        this.$store.updateText(target.value);
    }

    render () {
        return `<div>
                    <h3>TODO</h3>
                    <List  name="list"  />
                    <form onsubmit="add(event)" >
                        <input type="text" onchange="handleChange(this)"  value="{{text}}"  />
                        <button>Add #{{length}}</button>
                    </form>
                </div>`;
    }
}

export default Todo;
```

为什么要去写storeToData方法？因为render只会使用this.data去渲染页面而不会去使用this.$store.data，所以需要把数据转移到组件的this.data下。这样组件既能使用自身的data，也能使用全局放this.$store.data了。

更为详细的代码可以[点击这里](https://github.com/AlloyTeam/omi/tree/master/example/todo-store)。
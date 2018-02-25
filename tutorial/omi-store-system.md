## Omix 框架 Store 体系

* 本文代码的例子[点击这里](https://github.com/AlloyTeam/omix/tree/master/example/store)
* 真实项目的例子[点击这里](https://github.com/AlloyTeam/omi-cli/tree/master/template/x/src/page/index)

先说说Store系统是干什么的！为什么要造这样一个东西？能够给系统架构带来什么？

当我们组件之间，拥有共享的数据的时候，经常需要进行组件通讯。在Omi框架里，父组件传递数据给子组件非常方便：

```js
 <Hello name={this.name} nameChange={this.changeHandler}></Hello>
```

在 Hello 组件内可以通过 data 获取到 name 和 nameChange。

```js
class Hello extends Omi.Component {
    clickHandler(){
        this.data.name = "aa"
        this.data.nameChange(this.data.name)
    }
    
    render() {
        return (
            <div onclick={this.clickHandler.bind(this)}> Hello
                <h1>{this.data.name}</h1>!
            </div>
            )
    }
}
```

虽然组件通讯非常方便，但是在真实的业务场景中，不仅仅是父子、爷孙、爷爷和堂兄、嫂子和堂弟...
通过在组件标签上传递就显得无能为力，力不从心了，各种数据传递、组件实例互操作、或者循环依赖，让代码非常难看且难以维护。所以：

	Omix Store 体系是用来管理程序所有数据以及数据的逻辑，顺便输出给 UI。

此话怎讲？所有数据？顺便输出给UI？对，就是这个意思。百分之99的软件的本质就是就是数据的流动，UI 只是辅助数据更友好地流动，更符合逻辑地流动。架构如下图所示:

![](./asset/store.png)

当然，使用 store 体系依然可以通过 组件 传递数据，但是大部分的数据通过 `this.$store` 取。上图是复杂场景下的系统架构，小的应用可能只有一个store就足够，比如下面的例子。
 
### 定义 Store

```js
class Store  {
    constructor(data,callbacks) {
        this.items = data.items
        this.text = data.text
        this.onAdd = callbacks.add || function(){}
    }

    add(text){
        this.items.push({id: this.items.length + 1, text: text})
        this.onAdd(text)
    }

    clear(){
        this.items.length = 0
    }
}

export default Store
```

### 定义组件

```js

class TodoList extends Omi.Component {
    render() {
        return (
            <ul>
                {this.$store.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}

class TodoApp extends Omi.Component {
    constructor(data) {
        super(data)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.$store.add(this.$store.text)
        this.$store.text = ''
    }

    handleChange(e) {
        this.$store.text = e.target.value
    }

    render() {
        return <div>
            <h3>TODO</h3>
            <TodoList></TodoList>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input onChange={this.handleChange.bind(this)} value={this.$store.text} />
                <button>{'Add #' + (this.$store.items.length )}</button>
            </form>
        </div>
    }
}

```

注意，这里也可以通过标签传递数据给 TodoList:

```
<TodoList items={this.$store.items}></TodoList>
```

在 TodoList 就可以使用 this.data.items 取到。


### 根组件注入 store

为了让组件树能够使用到 store，可以通过`Omi.render`的第三个参数给根组件注入 store:

```js
let app = new TodoApp()
let store = new Store({
    items: [
        {id: 1, text: 'Omi'},
        {id: 2, text: 'AlloyTeam'}
    ],
    text: ''
},{
    add: (text)=>{
        //这里可以注入动画特效或其他逻辑再进行app.update。灵活方便
        setTimeout(()=>{
            app.update()
        },1000)

    }
})



Omi.render(app, 'body', {
    store
})

```


## 源码地址

* 本文代码的例子[点击这里](https://github.com/AlloyTeam/omix/tree/master/example/store)
* 真实项目的例子[点击这里](https://github.com/AlloyTeam/omi-cli/tree/master/template/x/src/page/index)

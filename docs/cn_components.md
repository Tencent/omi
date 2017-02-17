<h2 id="组件">组件</h2>

[Omi框架](https://github.com/AlloyTeam/omi)完全基于组件体系设计，我们希望开发者可以像搭积木一样制作Web程序，一切皆是组件，组件也可以嵌套子组件形成新的组件，新的组件又可以当作子组件嵌套至任意组件形成新的组件...

![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170210093427338-1536910080.png)

### 简单组件

这里使用Todo的例子来讲解Omi组件体系的使用。

```js
class Todo extends Omi.Component {
    constructor(data) {
        super(data);
    }
    add (evt) {
        evt.preventDefault();
        this.data.items.push(this.data.text);
        this.data.text = '';
        this.update();
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
                    <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>
                    <form onsubmit="add(event)" >
                        <input type="text" onchange="handleChange(this)"  value="{{text}}"  />
                        <button>Add #{{items.length}}</button>
                    </form>
                </div>`;
    }
}

Omi.render(new Todo({ items: [] ,text : '' }),"body");
```

组件生成的HTML最终会插入到body中。上面的例子展示了Omi的部分特性:

- data传递: new Todo(data,..)的data可以直接提供给render方法里的模板
- 局部CSS: h3只对render里的h3生效，不会污染外面的h3；button也是同样的
- 声明式事件绑定: onchange调用的就是组件内的handleChange，this可以拿到当然的DOM元素,还可以拿到当前的event
- 需要手动调用update方法才能更新组件

这里需要特别强调的是，为了更加的自由和灵活度。Omi没有内置数据变更的自动更新，需要开发者自己调用update方法。
你也可以和[oba](https://github.com/dntzhang/oba)或者mobx一起使用来实现自动更新。

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=todo" target="_blank">点击这里→在线试试</a>

## 组件嵌套

如果页面超级简单的话，可以没有组件嵌套。但是绝大部分Web网页或者Web应用，需要嵌套定义的组件来完成所有的功能和展示。比如上面的Todo，我们也是可以抽取出List。
这样让程序易维护、可扩展、方便复用。如，我们抽取出List：

```js
class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render () {
        return `<ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>`;
    }
}
```

怎么使用这个List？我们需要使用Omi.makeHTML把List制作成可以声明式的标签，在render方法中就能直接使用该标签。如下所示：

```js
import List from './list.js';

Omi.makeHTML('List', List);

class Todo extends Omi.Component {
    constructor(data) {
        super(data);
        this.data.length = this.data.items.length;
        this.childrenData = [ { items : this.data.items } ];
    }

    add (evt) {
        evt.preventDefault();
        this.list.data.items.push(this.data.text);
        this.data.length = this.list.data.items.length;
        this.data.text = '';
        this.update();
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
                    <List omi-id="list" name="list" />
                    <form onsubmit="add(event)" >
                        <input type="text" onchange="handleChange(this)"  value="{{text}}"  />
                        <button>Add #{{length}}</button>
                    </form>
                </div>`;
    }
}
```

* 第3行，通过makeHTML方法把组件制作成可以在render中使用的标签。当然Omi.makeHTML('List', List);也可以写在List组件的代码下面。
* 第9行，通过设置this.childrenData可以把参数传递给子组件。this.childrenData是个数组，这样就支持多child的情况。
* 第36行，在render方法中使用List组件。其中name方法可以让你在代码里通过this快速方法到该组件的实例。omi-id可以让你通过Omi.mapping['list']快速访问到组件对象的实例。

需要注意的是，this.childrenData传递给子组件的data是一锤子买卖，data会被克隆到子组件。意思就是后续只能改变子组件实例的data属性再update才能改变页面。关于Omi组件通讯其实有4种方案，这个后续教程会专门来讲。

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=todo_nest" target="_blank">点击这里→在线试试</a>
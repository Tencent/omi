<h2 id="组件">组件</h2>

我们希望开发者可以像搭积木一样制作Web程序，所以一切皆组件。

### 简单组件

这里我们使用Todo的例子来讲解Omi组件体系的使用。

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
你也可以和[oba](https://github.com/kmdjs/oba)或者mobx一起使用来实现自动更新。

###  组件嵌套

几乎所有的Web网页或者Web应用，我们需要嵌套我们定义的组件来完成所有的功能和展示。比如上面的Todo，我们也是可以抽取出List。
这样有什么好处？易维护、可扩展、方便复用。如，我们抽取去List：

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

怎么使用这个List？

```js
import List from './list.js';

Omi.makeHTML(List);

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

* 第3行，通过makeHTML方法把组件制作成可以在render中使用的标签。当然Omi.makeHTML(List);也可以写在List组件的代码下面。
* 第9行，通过设置this.childrenData可以把参数传递给子组件。this.childrenData是个数组，这样就支持多child的情况。
* 第36行，在render方法中使用List组件。其中name方法可以让你在代码里通过this快速方法到该组件的实例。omi-id可以让你通过Omi.mapping['list']快速访问到组件对象的实例。

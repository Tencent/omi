## 循环遍历

下面介绍mustache.js的方式和javascript遍历的方式。

### 方式零

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

### 方式一

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

你将在页面看到如下效果:

![pv](http://images2015.cnblogs.com/blog/105416/201701/105416-20170122095724129-2059595233.png)

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
<h2 id="循环遍历">循环遍历</h2>

下面介绍mustache.js的方式和javascript遍历的方式。

### 方式一

```js
class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render () {
        return `<div>
                    <ul> {{#items}} <li id="{{id}}">{{text}}</li> {{/items}}</ul>
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

[[点击这里->在线试试]](http://alloyteam.github.io/omi/website/redirect.html?type=list)

### 方式二

```js
class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render() {
        return `<div>
                    <ul>
                    ` + this.data.items.map(item =>
                        '<li id="' + item.id + '">' + item.text + '</li>'
                    ).join("") + `
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

[[点击这里->在线试试]](http://alloyteam.github.io/omi/website/redirect.html?type=list2)
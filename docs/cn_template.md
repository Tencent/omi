<h2 id="模板切换">模板切换</h2>

Omi有三个版本。其中的omi.js和omi.lite.js属于Web端使用的版本。

* omi.js内置了[mustache.js](https://github.com/janl/mustache.js)作为模版引擎
* omi.lite.js不包含任何模版引擎

Omi不强制开发者使用mustache.js，你可以根据业务场景使用任意模板引擎或者不使用模板引擎。

那么怎么使用别的模板引擎？下面拿[artTemplate](https://github.com/aui/artTemplate)作为例子。

### 使用artTemplate

```js
Omi.template = function(tpl, data){
    return artTemplate.compile(tpl)(data);
}
```
重写Omi.template方法，tpl为传入的模板，data为模板所需的数据，返回值为HTML。
重写完毕后就能在render使用artTemplate的语法，如：

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
        return `<h1>{{title}}</h1>
                <ul>
                    {{each list as value i}}
                    <li>索引 {{i + 1}} ：{{value}}</li>
                    {{/each}}
                </ul>`;
    }
}
```

### 相关地址

* [演示地址](http://alloyteam.github.io/omi/example/artTemplate/)
* [源码地址](https://github.com/AlloyTeam/omi/tree/master/example/artTemplate)

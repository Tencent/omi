## 模板切换

[Omi框架](https://github.com/AlloyTeam/omi)到目前为止有三种版本。

* omi.js 使用 [sodajs](https://github.com/AlloyTeam/sodajs) 为内置指令系统
* omi.lite.js 不包含任何模板引擎
* omi.mustache.js 使用 [mustache.js](https://github.com/janl/mustache.js)为内置模版引擎

 [sodajs](https://github.com/AlloyTeam/sodajs)是我们团队高级工程师(dorsywang)的作品，服务员QQ群、兴趣部落等多个产品线，
 以良好的兼容性、卓越的性能、简便的语法、超小的尺寸以及强大的功能而深受同事们的喜爱。下面先来看看sodajs怎么使用。

Omi不强制开发者使用soda指令或者mustache.js模版引擎，你可以根据业务场景使用任意模板引擎或者不使用模板引擎。

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
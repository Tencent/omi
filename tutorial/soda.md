## Omi全新版本来袭 - 指令系统

[Omi框架](https://github.com/AlloyTeam/omi)到目前为止有三种版本。

* omi.js 使用 [sodajs](https://github.com/AlloyTeam/sodajs) 为内置模板引擎
* omi.lite.js 不包含任何模板引擎
* omi.mustache.js 使用 [mustache.js](https://github.com/janl/mustache.js)为内置模版引擎

 [sodajs](https://github.com/AlloyTeam/sodajs)是我们团队高级工程师(dorsywang)的作品，服务员QQ群、兴趣部落等多个产品线，
 以良好的兼容性、卓越的性能、简便的语法、超小的尺寸以及强大的功能而深受同事们的喜爱。下面先来看看sodajs怎么使用。

## sodajs语法

sodajs的指令默认是以`soda`开头。当然不是必须，今天更新了一版sodajs支持自定义前缀。

```
soda.prefix('o')
```

现在，下面所有的指令使用`o-`开头。

### simple

``` js
var tpl = '<div>Hello, {{name}}</div>'
document.body.innerHTML = soda(tpl,{ name : 'soda' })
```

### if

``` js
var tpl = '<div o-if="show">Hello, {{name}}</div>' +
            '<div o-if="!show">I\'m hidden!</div>'
document.body.innerHTML = soda(tpl,{ name : 'soda',show: true })
```

### repeat

> o-repeat="item in array"

> o-repeat="item in object"

> o-repeat="item in array by index"

> o-repeat="item in object by key"

> o-repeat="(index, value) in array"

> o-repeat="(key, value) in object"

default index or key is $index


``` js
var tpl = '\
<ul>\
    <li o-repeat="item in list" o-if="item.show">\
        {{item.name}}\
        {{$index}}\
    </li>\
</ul>'

var data = {
    list: [
        {name: "Hello" ,show: true},
        {name: "sodajs" ,show: true},
        {name: "AlloyTeam"}
    ]
};

document.body.innerHTML =  soda(tpl, data);
```

这里 item in array by index 中的by index有什么作用呢？当然有作用！因为当两层或者多层嵌套循环的时候，通过内层循环已经无法通过{{$index}} 访问到外层循环的索引，所以可以通过  by xxx 对 index进行重命名，这样就解决了多层嵌套循环访问索引的问题。

### expression

``` js
var tpl = '<div>Hello, {{count+1}}</div>'
document.body.innerHTML = soda(tpl,{ count : 1 })
```

### filter

> soda.filter(String filterName, Function func(input, args...))
> {{input|filte1:args1:args2...|filter2:args...}}

example: 

``` js
soda.filter('shortTitle', function(input, length){
    return (input || '').substr(0, length);
});

var tpl = '\
<ul o-repeat="item in list">\
    <li class="title">\
        {{item.title|shortTitle:10}}\
    </li>\
</ul>'


document.body.innerHTML = soda(tpl,{ list : [
    {title:'short'},
    {title:'i am too long!'}
] })
```

### html

```js
var tpl = '<div o-html="html"></div>'
document.body.innerHTML = soda(tpl,{ html : '<span style="color:red;">test soda-html</span>' })
```

## 新版omi.js


```js
class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render(){
        return `<ul>
                    <li o-repeat="item in items" o-if="item.show">
                        {{$index}}- {{item.text}}
                    </li>
                </ul>`
    }
}

Omi.render(new List({
    items: [
        { text: 'Omi', show: true},
        { text: 'dntzhang', show: true},
        { text: 'AlloyTeam'}
    ]
}),"body",true);
```

➜ [bind-html example](http://alloyteam.github.io/sodajs/pg/rd.html?type=bind-html)

## Omi相关

* Omi官网[omijs.org](http://www.omijs.org)
* Omi的Github地址[https://github.com/AlloyTeam/omi](https://github.com/AlloyTeam/omi)
* 如果想体验一下Omi框架，可以访问 [Omi Playground](http://alloyteam.github.io/omi/example/playground/)
* 如果想使用Omi框架或者开发完善Omi框架，可以访问 [Omi使用文档](https://github.com/AlloyTeam/omi/tree/master/docs#omi使用文档)
* 如果你想获得更佳的阅读体验，可以访问 [Docs Website](http://alloyteam.github.io/omi/website/docs.html)
* 如果你懒得搭建项目脚手架，可以试试 [omi-cli](https://github.com/AlloyTeam/omi/tree/master/cli)
* 如果你有Omi相关的问题可以 [New issue](https://github.com/AlloyTeam/omi/issues/new)
* 如果想更加方便的交流关于Omi的一切可以加入QQ的Omi交流群(256426170)
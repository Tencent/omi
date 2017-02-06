## 中文 | [English](./README_EN.md)

<p align="center">
  <a href ="##"><img alt="Omi" src="http://images2015.cnblogs.com/blog/105416/201701/105416-20170120114244046-622856943.png"></a>
</p>
<p align="center">
Open and modern framework for building user interfaces.
</p>
<p align="center">
  <a href="https://travis-ci.org/AlloyTeam/omi"><img src="https://travis-ci.org/AlloyTeam/omi.svg"></a>
</p>

---

* 如果想体验一下Omi框架，请[点击Omi Playground](http://alloyteam.github.io/omi/example/playground/)
* 如果想使用Omi框架，请阅读  [Omi使用文档](https://github.com/AlloyTeam/omi/tree/master/docs#omi使用文档)
* 如果想一起开发完善Omi框架，有更好的解决方案或者思路，请阅读  [从零一步步打造web组件化框架Omi](https://github.com/AlloyTeam/omi/tree/master/docs#从零一步步打造web组件化框架omi)
* 关于上面的两类文档，如果你想获得更佳的阅读体验，可以访问[http://alloyteam.github.io/omi](http://alloyteam.github.io/omi)
* 如果你懒得搭建项目脚手架，可以试试[Scaffolding for Omi](https://github.com/AlloyTeam/omi/tree/master/scaffolding)，npm安装omis便可
* 如果你有Omi相关的问题可以[New issue](https://github.com/AlloyTeam/omi/issues/new)
* 如果想更加方便的交流关于Omi的一切可以加入QQ的Omi交流群(256426170)

<img alt="Omi" src="http://alloyteam.github.io/omi/asset/omi_group.png">

## 通过npm安装 

``` js
npm install omi
```

## Hello World

```js
class Hello extends Omi.Component {
    constructor(data) {
        super(data);
    }
    style () {
        return  `
            h1{
                cursor:pointer;
            }
         `;
    }
    handleClick(target, evt){
        alert(target.innerHTML);
    }
    render() {
        return  `
        <div>
            <h1 onclick="handleClick(this, event)">Hello ,{{name}}!</h1>
        </div>
        `;

    }
}

Omi.render(new Hello({ name : "Omi" }),"body");
```

[[点击这里->在线试试]](http://alloyteam.github.io/omi/website/redirect.html?type=hello)

你可以使用Omi.makeHTML来生成组件标签用于嵌套。
```js
    Omi.makeHTML('Hello', Hello);
```
那么你就在其他组件中使用，并且通过data-*的方式可以给组件传参，如：
```js
  ...
  render() {
        return  `
        <div>
            <div>Test</div>
            <Hello data-name="Omi" />
        </div>
        `;
    }
    ...
```

[[点击这里->在线试试]](http://alloyteam.github.io/omi/website/redirect.html?type=hello_nest)

你可以使用 [webpack](https://webpack.github.io/) + [babel](http://babeljs.io/)，在webpack配置的module设置[babel-loader](https://github.com/babel/babel-loader)，立马就能使用ES6+来编写你的web程序。

 当然Omi没有抛弃ES5的用户，你可以使用ES5的方式编写Omi。[[点击这里试试ES5写Omi程序]](http://alloyteam.github.io/omi/website/redirect.html?type=hello_es5)

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
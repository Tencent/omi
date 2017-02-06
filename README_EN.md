## [﻿中文](https://github.com/AlloyTeam/omi) | English

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

* If you want to experience the Omi framework, please click [Omi Playground](http://alloyteam.github.io/omi/example/playground/)
* If you want to use the Omi framework,please read [the Omi documentation](https://github.com/AlloyTeam/omi/tree/master/docs#omi使用文档)
* If you want to develop and improve the Omi framework, there are better solutions or ideas, please read [develop the Omi framework step by step](https://github.com/AlloyTeam/omi/tree/master/docs#从零一步步打造web组件化框架omi)
* If you want to get a better reading experience of the above two categories of documents, you can visit[http://alloyteam.github.io/omi](http://alloyteam.github.io/omi)
* If you are too lazy to build a project scaffolding, you can try [Scaffolding for Omi](https://github.com/AlloyTeam/omi/tree/master/scaffolding)
* If you have Any problems，please [New issue](https://github.com/AlloyTeam/omi/issues/new)
* If you want to be more convenient on the exchange of all Omi can join the QQ Omi exchange group (256426170)

<img alt="Omi" src="http://alloyteam.github.io/omi/asset/omi_group.png">

## Install

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

[[Try it on Playground]](http://alloyteam.github.io/omi/website/redirect.html?type=hello)

You can use Omi.makeHTML to generate component tags for nesting.
```js
    Omi.makeHTML('Hello', Hello);
```
Then you can use it in other components, and pass parameter to the component through the data-* , such as:
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

[[Try it on Playground]](http://alloyteam.github.io/omi/website/redirect.html?type=hello_nest)

You can use [webpack](https://webpack.github.io/) + [babel](http://babeljs.io/)，configure the [babel-loader](https://github.com/babel/babel-loader) in  the module settings of webpack，then you can use ES6+ to write your web program.

Omi did not abandon the ES5 users, you can also use ES5 to write Omi.[[Try Omi-ES5 on Playground]](http://alloyteam.github.io/omi/website/redirect.html?type=hello_es5)

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
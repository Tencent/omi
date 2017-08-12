<p align="center">
  <a href="##Omi"><img src="http://images2015.cnblogs.com/blog/105416/201701/105416-20170120114244046-622856943.png" alt="Omi"></a>
</p>
<p align="center">
Open and modern framework for building user interfaces.
</p>
<p align="center">
  <a href="https://travis-ci.org/AlloyTeam/omi"><img src="https://travis-ci.org/AlloyTeam/omi.svg"></a>
  <a href="https://www.npmjs.com/package/omi"><img src="https://img.shields.io/npm/v/omi.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/omi"><img src="https://img.shields.io/npm/dm/omi.svg" alt="Download"></a>
  <a href="CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs"></a>
</p>

[中文README](README.zh-CN.md)

## Omi

* [Use Omix if your like JSX or hyperscript](https://github.com/AlloyTeam/omix) 
* [Omi Cli](https://github.com/AlloyTeam/omi-cli) and [Cli Usage](https://github.com/AlloyTeam/omi-cli#用户指南)
* [Omi Docs](https://github.com/AlloyTeam/omi/blob/master/tutorial/all.md)
* [Omi Playground](https://alloyteam.github.io/omi/example/playground/)
* [Omi Tutorial](https://github.com/AlloyTeam/omi/tree/master/tutorial)
* [New issue](https://github.com/AlloyTeam/omi/issues/new)
* If you want to be more convenient on the exchange of all Omi can join the QQ Omi exchange group (256426170)

## omi-cli

```bash
$ npm install omi-cli -g       # install cli
$ omi init your_project_name   # init project, you can also exec 'omi init' in an empty folder
$ cd your_project_name         # please ignore this command if you executed 'omi init' in an empty folder
$ npm start                    # develop
$ npm run dist                 # release
```

other cmd:

```bash
$ npm run ie    # debugging in ie8
```

## Features

* Super tiny size, 7 KB (gzip)
* Good compatibility, support IE8 (please import es5-shim or [es5-sham](//s.url.cn/qqun/xiaoqu/buluo/p/js/es5-sham-es5-sham.min.77c4325f.js) by yourself)
* Fully object-oriented component system
* Support Scoped CSS, reusable components are composed of HTML, Scoped CSS and JS
* More free updates, each component has a update method, free to choose the right time to update
* Template engines can be replaced, developers can override the Omi.template method to use any template engine
* Provides two development way ( ES6+ and ES5) for developers to choose freely

## Plugins

* [omi-router](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-router): Router for Omi.
* [omi-finger](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-finger): Omi /[AlloyFinger](https://github.com/AlloyTeam/AlloyFinger) integration.
* [omi-transform](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-transform): Omi /[transformjs](https://alloyteam.github.io/AlloyTouch/transformjs/) integration.
* [omi-touch](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-touch): Omi /[AlloyTouch](https://github.com/AlloyTeam/AlloyTouch) integration.
* [omi-jquery-date-picker](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-jquery-date-picker): Omi / JQuery Date Picker integration.

## Install

```bash
$ npm install omi
```

## Hello World

You can use [webpack](https://webpack.github.io/) + [babel](http://babeljs.io/), configure the [babel-loader](https://github.com/babel/babel-loader) in  the module settings of webpack, then you can use ES6+ to write your web program.

* [[Hello World ES6+ ->Try it on Playground]](http://alloyteam.github.io/omi/website/redirect.html?type=hello_nest)
* [[Hello World ES5  ->Try it on Playground]](http://alloyteam.github.io/omi/website/redirect.html?type=hello_es5)

if using 'omi.lite.js' (without [mustache.js](https://github.com/janl/mustache.js)), you can [use the ${this.data.name} way](http://alloyteam.github.io/omi/website/redirect.html?type=without_tpl)

## CDN

* [https://unpkg.com/omi@1.7.5/dist/omi.min.js](https://unpkg.com/omi@1.7.5/dist/omi.min.js)
* [https://unpkg.com/omi@1.7.5/dist/omi.js](https://unpkg.com/omi@1.7.5/dist/omi.js)
* [https://unpkg.com/omi@1.7.5/dist/omi.art.min.js](https://unpkg.com/omi@1.7.5/dist/omi.art.min.js)
* [https://unpkg.com/omi@1.7.5/dist/omi.art.js](https://unpkg.com/omi@1.7.5/dist/omi.art.js)
* [https://unpkg.com/omi@1.7.5/dist/omi.lite.min.js](https://unpkg.com/omi@1.7.5/dist/omi.lite.min.js)
* [https://unpkg.com/omi@1.7.5/dist/omi.lite.js](https://unpkg.com/omi@1.7.5/dist/omi.lite.js)
* [https://unpkg.com/omi@1.7.5/dist/omi.mustache.min.js](https://unpkg.com/omi@1.7.5/dist/omi.mustache.min.js)
* [https://unpkg.com/omi@1.7.5/dist/omi.mustache.js](https://unpkg.com/omi@1.7.5/dist/omi.mustache.js)

## Thanks

* [morphdom](https://github.com/patrick-steele-idem/morphdom) - Fast and lightweight DOM diffing/patching (no virtual DOM needed)
* [art-template](https://github.com/aui/art-template) - JS template engine with excellent performance
* [sodajs](https://github.com/AlloyTeam/sodajs) - Light weight but powerful template engine for JavaScript
* [mustache.js](https://github.com/janl/mustache.js) - Minimal templating with {{mustaches}} in JavaScript

## Contributors

[https://github.com/AlloyTeam/omi/graphs/contributors](https://github.com/AlloyTeam/omi/graphs/contributors)

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.

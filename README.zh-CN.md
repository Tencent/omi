<p align="center">
  <a href ="##"><img alt="Omi" src="http://images2015.cnblogs.com/blog/105416/201701/105416-20170120114244046-622856943.png"></a>
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

[English README](README.md)

## 中文

* [Omi 官网](http://www.omijs.org)
* [Omi Cli](https://github.com/AlloyTeam/omi-cli) 和 [Cli 指南](https://github.com/AlloyTeam/omi-cli#用户指南)
* [Omi Playground](http://alloyteam.github.io/omi/example/playground/)
* [Omi 文档](https://github.com/AlloyTeam/omi/blob/master/tutorial/all.md)
* [Omi 教程](https://github.com/AlloyTeam/omi/tree/master/tutorial#omi-相关文章)
* [New issue](https://github.com/AlloyTeam/omi/issues/new)
* 如果想更加方便的交流关于Omi的一切可以加入QQ的Omi交流群(256426170)

## 命令行

```bash
$ npm install omi-cli -g       # 安装cli
$ omi init your_project_name   # 初始化项目，你也可以在一个空的文件夹下执行 omi init
$ cd your_project_name         # 如果你是在空文件夹下执行的 omi init。请无视这条命令
$ npm start                    # 开发
$ npm run dist                 # 部署发布
```

当然omi-cli还有一个特殊命令:

```bash
$ npm run ie    # 用于生成未压缩js的发布包用来定位ie8的问题
```

## 特性

* 超小的尺寸，7 kb (gzip)
* 完全面向对象的组件体系
* 局部CSS，HTML+ Scoped CSS + JS组成可复用的组件
* 更自由的更新，每个组件都有update方法，自由选择时机进行更新
* 模板引擎可替换，开发者可以重写Omi.template方法来使用任意模板引擎
* 提供了ES6+和ES5的两种开发方案供开发者自由选择
* 良好的兼容性，支持IE8
    * omi.art.js和omi.lite.js以及omi.mustache.js兼容到IE8
    * omi.js 兼容到IE9
    * 兼容IE8请自行引用 es5-shim 或 [es5-sham](//s.url.cn/qqun/xiaoqu/buluo/p/js/es5-sham-es5-sham.min.77c4325f.js) 和 [console-polyfill](//s.url.cn/qqun/xiaoqu/buluo/p/js/console-polyfill.min.848060c4.js)）,比如:

```html
<!--[if lt IE 9]><script type="text/javascript" crossorigin="anonymous" src="//s.url.cn/qqun/xiaoqu/buluo/p/js/console-polyfill.min.848060c4.js"></script>
      <script type="text/javascript" crossorigin="anonymous" src="//s.url.cn/qqun/xiaoqu/buluo/p/js/es5-sham-es5-sham.min.77c4325f.js"></script><![endif]-->
```

## 插件

* [omi-router](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-router): Omi专属的官方Router插件.
* [omi-finger](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-finger): Omi的[AlloyFinger](https://github.com/AlloyTeam/AlloyFinger)插件，支持各种触摸事件和手势
* [omi-transform](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-transform): Omi的[transformjs](https://alloyteam.github.io/AlloyTouch/transformjs/)插件，快速方便地设置DOM的CSS3 Transform属性
* [omi-touch](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-touch): Omi的[AlloyTouch](https://github.com/AlloyTeam/AlloyTouch)插件，Omi项目的触摸运动解决方案（支持触摸滚动、旋转、翻页、选择等等）
* [omi-jquery-date-picker](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-jquery-date-picker): Omi的时间选择插件，支持各种时间或者时间区域选择

## 通过npm安装

```bash
$ npm install omi
```

## Hello World

你可以使用 [webpack](https://webpack.github.io/) + [babel](http://babeljs.io/)，在webpack配置的module设置[babel-loader](https://github.com/babel/babel-loader)，立马就能使用ES6+来编写你的web程序。

* [[Hello World ES6+ ->在线试试]](http://alloyteam.github.io/omi/website/redirect.html?type=hello_nest)
* [[Hello World ES5  ->在线试试]](http://alloyteam.github.io/omi/website/redirect.html?type=hello_es5)

如果使用omi.lite.js版本(不包含[mustache.js](https://github.com/janl/mustache.js)模板引擎)的话，也可以[使用 ${this.data.name} 的方式](http://alloyteam.github.io/omi/website/redirect.html?type=without_tpl)。

## CDN

* [https://unpkg.com/omi@1.7.5/dist/omi.min.js](https://unpkg.com/omi@1.7.5/dist/omi.min.js)
* [https://unpkg.com/omi@1.7.5/dist/omi.js](https://unpkg.com/omi@1.7.5/dist/omi.js)
* [https://unpkg.com/omi@1.7.5/dist/omi.art.min.js](https://unpkg.com/omi@1.7.5/dist/omi.art.min.js)
* [https://unpkg.com/omi@1.7.5/dist/omi.art.js](https://unpkg.com/omi@1.7.5/dist/omi.art.js)
* [https://unpkg.com/omi@1.7.5/dist/omi.lite.min.js](https://unpkg.com/omi@1.7.5/dist/omi.lite.min.js)
* [https://unpkg.com/omi@1.7.5/dist/omi.lite.js](https://unpkg.com/omi@1.7.5/dist/omi.lite.js)
* [https://unpkg.com/omi@1.7.5/dist/omi.mustache.min.js](https://unpkg.com/omi@1.7.5/dist/omi.mustache.min.js)
* [https://unpkg.com/omi@1.7.5/dist/omi.mustache.js](https://unpkg.com/omi@1.7.5/dist/omi.mustache.js)

## 感谢

* [morphdom](https://github.com/patrick-steele-idem/morphdom) - Fast and lightweight DOM diffing/patching (no virtual DOM needed)
* [art-template](https://github.com/aui/art-template) - JS template engine with excellent performance
* [sodajs](https://github.com/AlloyTeam/sodajs) - Light weight but powerful template engine for JavaScript
* [mustache.js](https://github.com/janl/mustache.js) - Minimal templating with {{mustaches}} in JavaScript

## Contributors

|name   |avatars   |company   |
|---|---|---|
|  [CodeFalling](https://github.com/CodeFalling) |  ![](https://avatars3.githubusercontent.com/u/5436704?v=3&s=60)  |  alibaba |
|  [abell123456](https://github.com/abell123456) |  ![](https://avatars1.githubusercontent.com/u/2232380?v=3&s=60)  |  alibaba |
|  [Aresn](https://github.com/icarusion) |  ![](https://avatars3.githubusercontent.com/u/5370542?v=3&s=60)  |  TalkingCoder |
|  [pasturn](https://github.com/pasturn) |  ![](https://avatars2.githubusercontent.com/u/6126885?v=3&s=60)  | Mars Holding  |
|  [vorshen](https://github.com/vorshen) | ![](https://avatars2.githubusercontent.com/u/10334783?v=3&s=60)  |  Tencent |
|  [xcatliu](https://github.com/xcatliu) |  ![](https://avatars3.githubusercontent.com/u/5453359?v=3&s=60)  |  Microsoft |
|  [dorsywang](https://github.com/dorsywang) |  ![](https://avatars3.githubusercontent.com/u/7475208?v=3&s=60)  |  Tencent |
|  [dntzhang](https://github.com/dntzhang) | ![](https://avatars2.githubusercontent.com/u/7917954?v=3&s=60)  |  Tencent |

# License

[MIT](http://opensource.org/licenses/MIT)

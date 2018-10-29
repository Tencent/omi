## Omi 生态发布

Omi 4.0 发布至今，收到了大量的意见和建议以及真刀真枪的PR，虽然现在接受 Omi 都是外国友人，但是随着 IE 市场份额的慢慢消失，可以遇见的未来，国人也会慢慢拥抱 Omi。Omi Team 经过一个星期的努力，终于完成了核心的生态的构建服务与海量的开发者，当然这只是一个起点，欢迎有任何需求给我们[开 Issues](https://github.com/Tencent/omi/issues/new), 我们对待你提的 issues 处理的速度会令你感到惊讶。 下面郑重介绍下最近一个星期我们的工作:


| **项目**                         | **描述**                           |
| ------------------------------- | ----------------------------------- |
| [omi-docs](https://github.com/Tencent/omi/blob/master/docs/main-concepts.cn.md)| Omi 官方文档 |
| [omi-devtools](https://github.com/f/omi-devtools)| 谷歌浏览器开发工具扩展|
| [omi-cli](https://github.com/Tencent/omi/tree/master/packages/omi-cli)| 项目脚手架工具，支持 Javascript 和 Typescript |
|[omi-i18n](https://github.com/i18next/omi-i18n)| Omi 国际化解决方案 |
| [omi-transform](https://github.com/Tencent/omi/tree/master/packages/omi-transform)|Omi 和 [css3transform](https://tencent.github.io/omi/packages/omi-transform/css3transform/) 完美结合. 让 css3 transform 在你的 Omi项目中变得超级简单.|
| [omi-page](https://github.com/Tencent/omi/tree/master/packages/omi-page) | 基于 [page.js](https://github.com/visionmedia/page.js) 的 Omi 路由|
| [omi-tap](https://github.com/Tencent/omi/tree/master/packages/omi-tap)| 让 Omi 项目轻松支持 tap 事件|
| [omi-finger](https://github.com/Tencent/omi/tree/master/packages/omi-finger)|Omi 官方手势库|
| [omi-mobx](https://github.com/Tencent/omi/tree/master/packages/omi-mobx)|Omi Mobx 适配器|
|[omi element ui(working)](https://github.com/Tencent/omi/tree/master/packages/omi-element-ui)|Omi 版本的 element-ui|
|[westore](https://github.com/dntzhang/westore)|小程序解决方案 westore，与 Omi 互相启发|

## 文档国际化

我们现在拥有了三个语言版本的开发文档:

| **语言**    | **快速入门**                       |**主要概念**  |
| 英语        | [English](https://github.com/Tencent/omi/blob/master/README.md)             |[English](https://github.com/Tencent/omi/blob/master/docs/main-concepts.md)  |
| 中文        | [简体中文](https://github.com/Tencent/omi/blob/master/README.CN.md)             |[简体中文](https://github.com/Tencent/omi/blob/master/docs/main-concepts.cn.md)  |
| 韩文        | [한국어](https://github.com/Tencent/omi/blob/master/README.KR.md)                     |[한국어](https://github.com/Tencent/omi/blob/master/docs/main-concepts.kr.md)  |

土耳其版本和日语版本的相关文档也正在紧急补齐当中。

## 开发者工具

使用 Omi 开发工具 可以非常简单地调试和管理你的 UI。不需要任何配置，你只要安装然后就能调试。

既然 Omi 使用了 Web Components 和 Shadow-DOM, 所以不需要像 React 和 Vue 一样安装其他元素面板，只需要使用 Chrome 自带的 Elements' sidebar 便可，它和 React and Vue 开发者工具一样强大。

![Omi DevTools](https://github.com/f/omi-devtools/raw/master/omi-devtools.gif)

工具由于[土耳其大神 F](https://github.com/f) 亲自操刀打造。你可以 [从 Chrome 应用商店安装](https://chrome.google.com/webstore/detail/omijs-devtools/pjgglfliglbhpcpalbpeloghnbceocmd/related)。

## omi-cli

### 安装

```bash
$ npm i omi-cli -g               # install cli
$ omi init your_project_name     # init project, you can also exec 'omi init' in an empty folder
$ cd your_project_name           # please ignore this command if you executed 'omi init' in an empty folder
$ npm start                      # develop
$ npm run build                  # release
```

目录说明:

```
├─ config
├─ public
├─ scripts
├─ src
│  ├─ assets
│  ├─ elements    //存放所有 custom elements
│  ├─ store       //存放所有页面的 store
│  ├─ admin.js    //入口文件，会 build 成  admin.html
│  └─ index.js    //入口文件，会 build 成  index.html
```

使用 TypeScript 模板(omi-cli v3.0.3+):

```bash
$ npm i omi-cli -g                  # install cli
$ omi init-ts your_project_name     # init project, you can also exec 'omi init-ts' in an empty folder
$ cd your_project_name              # please ignore this command if you executed 'omi init' in an empty folder
$ npm start                         # develop
$ npm run build                     # release
```

Cli 自动创建的项目脚手架是基于单页的 create-react-app 改造成多页的，有配置方面的问题可以查看 [create-react-app 用户指南](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)。

感谢 [xcatliu](https://github.com/xcatliu) 和 [uxu](https://github.com/pasturn) 为 omi-cli 做出的贡献。

## omi-i18n

你可以通过 `omi-i18n` 开速开发国际化的 Omi 项目:

```js
import { tag, WeElement } from "omi";
import { t } from "omi-i18n";

const catalog = {
  welcome: "Welcome to {{name}} using omi-i18n"
};

@tag("my-app")
class MyApp extends WeElement {
  render(props, data) {
    return (
      <i18n-provider locale="en" catalog={catalog}>
        <p slot="loading">
          <spinner-element />
        </p>
        <h1 class="app-title">{t("welcome", { name: data.name })}</h1>
      </i18n-provider>
    );
  }
}
```

## omi-transform

如果你使用过 [css3transform](https://tencent.github.io/omi/packages/omi-transform/css3transform/), 就知道制作页面动效是多么地惬意。现在，你再 Omi 项目里也可以使用上 css3transform 的优秀的特性并且拥有同样高效的性能:

```js
import { render, WeElement, tag } from "omi";
import "omi-transform";

@tag("my-app")
class MyApp extends WeElement {
  install() {
    this.data.rotateZ = 30
    this.linkRef = (e) => {
      this.animDiv = e
    }
  }


  installed() {
    setInterval(() => {
      // 慢
      // this.data.rotateZ += 2
      // this.update()

      //快，因为直接操作 dom
      this.animDiv.rotateZ += 2
      //同步 transform 给 data 防止任何 update
      this.data.rotateZ = this.animDiv.rotateZ
    }, 16)


  }
  render(props, data) {
    return (
      <css3-transform rotateZ={data.rotateZ} translateX={0} perspective={0} >
        <div ref={this.linkRef}>
          omi-transform
          </div>
      </css3-transform>
    )
  }
}

render(<my-app />, "body");
```

## 感谢

非常感谢各位为 Omi 生态的贡献:

* [土耳其的大神 F](https://github.com/f)
* [韩国的 validalias ](https://github.com/validalias)
* [腾讯的 xcatliu](https://github.com/xcatliu)
* [腾讯的 vorshen](https://github.com/vorshen)
* [腾讯的 uxu](https://github.com/pasturn)
* [腾讯的 ghostzhang](https://github.com/ghostzhang)
* [腾讯的 zhengbao](https://github.com/zhengbao)
* [中国的 1921622004](https://github.com/1921622004)
* [以色列的 benjamingr](https://github.com/benjamingr)
* [还有我 dntzhang](https://github.com/dntzhang)
 
 我们也会在今年年底举办 [Omi Conf 开发者大会](https://github.com/Tencent/omi/issues/62)，门票大概率免费，或者约等于免费用来过滤无效报名者。
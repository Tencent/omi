# Omim

Material Design for the Web, powered by Omi.

* [DOCS & REPL](https://tencent.github.io/omi/packages/omim/docs/build/index.html)
* [material.io web](https://material.io/develop/web/)

## Features

* Simple wrapper of [material-components-web](https://github.com/material-components/material-components-web)
* Render by Custom Elements of Web Components
* Any framework can use the components, such as Omi, React, Vue and Angular 

## CMD

Build component:

```bash
npm run build -- component-name
```

Build demo:

```bash
npm start demo-name
```

## Publish

```bash
npm publish --access public
```

## Contribution

To prevent duplication of development, PR submission fills in owner to lock the component.

为了防止重复开发，先 PR 提交填下 owner 锁定该组件。

| **Components**                         | **Owner**                    |
| ------------------------------- | ----------------------------------- |
| button | vorshen |
| icon | xcatliu |
| text-field | done |
| card | wscats |
| chip | hulei |
| dialog | zainchen |
| elevation | liulinboyi |
| image-list| lee |
| checkbox| lei |
| radio| lihengjun |
| select| lei |
| slider| done |
| switch| zhang |
| layout-grid| uxu |
| linear-progress| dnt |
| list| fangfang |
| menu| done|
| snackbar| dnt |
| tab | FAKER-A |
| tag | mtonhuang |
| top-app-bar| zainchen |
| typography| done |
| drawer | zainchen |
| badge | nsfuc |
| welcome to add a new element! |  |
| welcome to add a new element! |  |

Some [material packages](https://github.com/material-components/material-components-web/tree/master/packages) have not yet been released. Please wait for their release. Or pull the corresponding package from the branch to implement, without starting from scratch.

有些 [material packages](https://github.com/material-components/material-components-web/tree/master/packages) 尚未发布，请等待其发布后 omi 再去实现。或者从分支中拉去对应的 package 进行实现，不必从零开始实现。
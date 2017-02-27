# Omi命令行界面omi-cli发布

通常认为，命令行界面（CLI）没有图形用户界面（GUI）那么方便用户操作。但是CLI比GUI节约资源，在熟悉命令之后，CLI会比GUI更加高效地帮你完成想要的任务。

下面来介绍下[pasturn](https://github.com/pasturn)童鞋为Omi开发的CLI的两种使用姿势：

## 姿势一

```js
$ npm install omi-cli -g       //安装cli
$ omi init your_project_name   //初始化项目
$ cd your_project_name         //转到项目目录
$ npm run dev                  //开发
$ npm run dist                 //部署发布
```

## 姿势二

当我们在一个空文件夹的时候，可以执行下面的命令。

```js
$ npm install omi-cli -g       //安装cli
$ omi init                     //初始化项目
$ npm run dev                  //开发
$ npm run dist                 //部署发布
```

这里不用再去跳转目录了，当前目录就是项目的目录。

## 安装过程截图

安装omi-cli:

![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170227100545470-696026058.png)


安装初始化项目omi init:

![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170227100554891-1802174132.png)

上面的成功的界面。注意：初始化项目会自动安装相关的npm依赖包，所以时间较长，请耐心等待。
安装完成之后，在项目目录下你可以看到下面的目录结构：

![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170227100755845-465268116.png)

开发 npm run dev:

![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170227100601235-1477801934.png)

![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170227100608985-921528126.png)

如果，你看到了上面的界面，说明一切OK了。创建出来的项目主要基于 Gulp + Webpack + Babel + BrowserSync 进行开发和部署。Gulp用来串联整个流程，Webpack + Babel让你可以写ES6和打包，BrowserSync用来帮你刷浏览器，不用F5了。

## 后续

更多脚手架模板以及更多功能的命令正在开发中，如果有什么意见或者建议欢迎让我们知道。

## 相关

* Omi的Github地址[https://github.com/AlloyTeam/omi](https://github.com/AlloyTeam/omi)
* 如果想体验一下Omi框架，可以访问 [Omi Playground](http://alloyteam.github.io/omi/example/playground/)
* 如果想使用Omi框架或者开发完善Omi框架，可以访问 [Omi使用文档](https://github.com/AlloyTeam/omi/tree/master/docs#omi使用文档)
* 如果你想获得更佳的阅读体验，可以访问 [Docs Website](http://alloyteam.github.io/omi/website/docs.html)
* 如果你懒得搭建项目脚手架，可以试试 [omi-cli](https://github.com/AlloyTeam/omi/tree/master/cli)
* 如果你有Omi相关的问题可以 [New issue](https://github.com/AlloyTeam/omi/issues/new)
* 如果想更加方便的交流关于Omi的一切可以加入QQ的Omi交流群(256426170)

![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170208095745213-1049686133.png)
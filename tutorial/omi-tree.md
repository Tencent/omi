# Omi树组件omi-tree编写指南

[Omi框架](https://github.com/AlloyTeam/omi)能够以少量的代码声明式地编写可拖拽移动节点的树形组件。
通常树组件能够考验UI框架的健壮性，因为需要使用到UI框架的如下特性：

* 组件嵌套
* 组件传值
* 组件批量传值
* 组件依赖自身递归嵌套(nest-self)
* 子、孙或炎黄子孙访问根组件实例

下面来介绍下使用　omi-tree　的开发全过程。你也可以无视文章，先体验一把和直接编辑源码试一把：



## Omi相关

* Omi官网[omijs.org](http://www.omijs.org)
* Omi的Github地址[https://github.com/AlloyTeam/omi](https://github.com/AlloyTeam/omi)
* 如果想体验一下Omi框架，可以访问 [Omi Playground](http://alloyteam.github.io/omi/example/playground/)
* 如果想使用Omi框架或者开发完善Omi框架，可以访问 [Omi使用文档](https://github.com/AlloyTeam/omi/tree/master/docs#omi使用文档)
* 如果你想获得更佳的阅读体验，可以访问 [Docs Website](http://alloyteam.github.io/omi/website/docs.html)
* 如果你懒得搭建项目脚手架，可以试试 [omi-cli](https://github.com/AlloyTeam/omi/tree/master/cli)
* 如果你有Omi相关的问题可以 [New issue](https://github.com/AlloyTeam/omi/issues/new)
* 如果想更加方便的交流关于Omi的一切可以加入QQ的Omi交流群(256426170)

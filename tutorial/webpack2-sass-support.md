# omi-cli新版发布-升级webpack2和支持sass生成组件局部CSS

[omi-cli](https://github.com/AlloyTeam/omi/tree/master/cli)是[Omi](https://github.com/AlloyTeam/omi)的命令行工具。在v0.1.X以及之前版本中，生成出来的项目脚手架
是基于webpack1的。由于：

* webpack1不支持tree-shaking，webpack2 支持tree-shaking 
* webpack1不支持 sass-loader，webpack2 支持sass-loader

tree-shaking 作用是移除没有使用的代码有效的减小包体积
sass-loader 可以让你把sass转成css，在omi项目里可以把sass转成组件的局部CSS

所以，果断把omi-cli的项目模板升级为基于webpack2。感兴趣的同学可以立马尝试下。

```js
$ npm install omi-cli -g       //安装cli
$ omi init your_project_name   //初始化项目
$ cd your_project_name         //转到项目目录
$ npm run dev                  //开发
$ npm run dist                 //部署发布
```

## 采坑之路

在升级的过程中遇到了不少问题，这里记录一下。

### 问题1

![](http://images2015.cnblogs.com/blog/105416/201703/105416-20170316082316448-1429354256.jpg)


webpack2中，CommonsChunkPlugin不再支持上面的传参形式，必须传JSON形式。

### 问题2

![](http://images2015.cnblogs.com/blog/105416/201703/105416-20170316082330885-1671968338.jpg)


webpack2中，不在允许省略-loader的形式标记loader，如：

```js
 {test: /\.html$/, loader: "string"},
```

都要改成：

```js
 {test: /\.html$/, loader: "string-loader"},
```

### 问题3

![](http://images2015.cnblogs.com/blog/105416/201703/105416-20170316082340745-1920766716.jpg)


使用webpack-stream的同学可能会碰到上面这个错误。找了好久发现：

![](http://images2015.cnblogs.com/blog/105416/201703/105416-20170316082349604-1404731044.jpg)


在gulp里要修改下第二个参数，把 null 改成 require('webpack')。

## sass生成组件局部CSS

在传统的webpack项目脚手架中，都会包含css相关的三个loader：

```js
// webpack.config.js
module.exports = {
    ...
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
};
```

* sass-loader负责把sass编译成css
* css-loader负责把编出来的css转成CommonJS模块用于js里面进行require获取
* style-loader负责把css插入到页面的head里面

那么问题来了？Omi内部本身组件可以定义style方法，如：

```js
class Hello extends Omi.Component {
	   ...	
     style () {
      return  `
          h1{
          	cursor:pointer;
          }
      `;
    }
     ...
}
```

在Omi内部的管线里面，会把执行style方法，把返回的css转成局部css，然后插入到页面的head里面。所以和webpack三个loader里的管线有冲突！怎么解决？去掉一个loader便可！

```js
// webpack.config.js
module.exports = {
    ...
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
};
```

我们只需要能够在js里动态获取到编译好的css字符串，然后拼在style方法里便可！两个管线就打通了！具体代码：

```js
import Omi from 'omi';

const style = require('./index.scss');

class Header extends Omi.Component {
	...
    style () {
        return style.toString();
        `;
    }
	...
}

export default Header;
```

这里需要注意require到的style不是字符串对象，需要执行toString才能获取到css字符串。

## 相关

* Omi的Github地址[https://github.com/AlloyTeam/omi](https://github.com/AlloyTeam/omi)
* 如果想体验一下Omi框架，可以访问 [Omi Playground](http://alloyteam.github.io/omi/example/playground/)
* 如果想使用Omi框架或者开发完善Omi框架，可以访问 [Omi使用文档](https://github.com/AlloyTeam/omi/tree/master/docs#omi使用文档)
* 如果你想获得更佳的阅读体验，可以访问 [Docs Website](http://alloyteam.github.io/omi/website/docs.html)
* 如果你懒得搭建项目脚手架，可以试试 [omi-cli](https://github.com/AlloyTeam/omi/tree/master/cli)
* 如果你有Omi相关的问题可以 [New issue](https://github.com/AlloyTeam/omi/issues/new)
* 如果想更加方便的交流关于Omi的一切可以加入QQ的Omi交流群(256426170)

![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170208095745213-1049686133.png)
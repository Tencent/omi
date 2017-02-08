<h2 id="环境搭建">环境搭建</h2>

[Omi框架](https://github.com/AlloyTeam/omi)使用 Webpack + ES6 的方式去开发；使用karma+jasmine来作为Omi的测试工具。

## Karma介绍

Karma是一个基于Node.js的JavaScript测试执行过程管理工具（Test Runner）。该工具可用于测试所有主流Web浏览器，也可集成到CI（Continuous integration）工具，也可和其他代码编辑器一起使用。这个测试工具的一个强大特性就是，它可以监控(Watch)文件的变化，然后自行执行。但是集成到travis ci要把singleRun设置成true,让其只执行一遍。

## Jasmine介绍
Jasmine 是一款 JavaScript BDD（行为驱动开发）测试框架，它不依赖于其他任何 JavaScript 组件。它有干净清晰的语法，让您可以很简单的写出测试代码。

## 开发依赖包

在package.json中，有如下配置:

```js
  "devDependencies": {
    "babel-core": "^6.0.20",
    "babel-loader": "^6.0.1",
    "babel-preset-es2015": "^6.0.15",
    "node-libs-browser": "^0.5.3",
    "webpack": "^1.14.0",
    "jasmine-core": "^2.5.2",
    "karma": "^1.3.0",
    "karma-chrome-launcher": "^2.0.0",
    "karma-jasmine": "^1.1.0",
    "karma-webpack": "^1.8.1"
  }
```

* ES6+相关依赖有babel-core、babel-loader和babel-preset-es2015

在webpack.config.js中配置js文件使用babel-loader编译。
```js
loaders: [
    {
        loader: 'babel-loader',
        test: /\.js$/,
        query: {
            presets: 'es2015',
        }
    }
]
```

* webpack相关依赖有node-libs-browser和webpack
* 其余都是单元测试相关依赖

        注意，这里使用了karma-webpack。因为使用Omi框架支持ES6+和ES5,使用karma-webpack是为了在单元测试里面使用ES6+的import和Class等语法。

在karma.conf.js中配置webpack:

```js
    webpack: webpackConfig,
    webpackMiddleware:{
      noInfo:false
    },
    plugins: [
        'karma-webpack',
        'karma-jasmine',
        'karma-chrome-launcher'
    ]
```

具体配置看test目录下的[karma.conf.js](https://github.com/AlloyTeam/omi/blob/master/test/karma.conf.js)和[webpack.test.config.js](https://github.com/AlloyTeam/omi/blob/master/test/webpack.test.config.js)便可。

注意，karma.conf.js需要设置

```js
// if true, Karma captures browsers, runs the tests and exits
singleRun: true,
```

不然，travis ci脚本执行的时候不会中断导致执行超时异常。

## npm 脚本

```js
  "scripts": {
    "build": "webpack -w",
    "test": "karma start test/karma.conf.js",
    "hello": "webpack -w",
    "todo": "webpack -w"
  }
```

其中：
* npm run build : 生成dist目录的omi.js文件
* npm run test : 执行单元测试
* npm run hello : 编译hello的demo
* npm run todo : 编译todo的demo

在webpack.config.js中，会根据 process.env.npm_lifecycle_event去设置不同的入口文件。所以同样是执行webpack -w，执行结果可以不一样。

来看下build的相关webpack配置:

```js
if(ENV === 'build'){
    config = {
        entry: {
            omi: './src/index.js'
        },
        output: {
            path: 'dist/',
            library:'Omi',
            libraryTarget: 'umd',
            filename:  '[name].js'
        },
```

这里把libraryTarget设置成了umd，webpack会帮助我们build出umd的Omi。

如果是打包demo（npm run hello 和 npm run todo）的话，会进入下面的条件判断：

```js
else {
    config.entry = './example/' + ENV + '/main.js';
    config.output.path = './example/' + ENV + '/';
}
```

会去example下对应的目录查找main.js作为webpack入口文件。

这里可以看到，我们不仅用webpack build出Omi框架，也使用webpack build所有demo。
详细配置参考[webpack.config.js](https://github.com/AlloyTeam/omi/blob/master/webpack.config.js)的配置。

## 参考文档

* [http://www.cnblogs.com/cqhaibin/p/5867125.html](http://www.cnblogs.com/cqhaibin/p/5867125.html)
* [https://karma-runner.github.io/latest/intro/installation.html](https://karma-runner.github.io/latest/intro/installation.html)
* [https://karma-runner.github.io/latest/intro/configuration.html](https://karma-runner.github.io/latest/intro/configuration.html)


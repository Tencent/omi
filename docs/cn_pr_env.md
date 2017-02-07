<h2 id="环境搭建">环境搭建</h2>

我们使用 Webpack + ES6 的方式去开发Omi框架；使用karma+jasmine来作为Omi的测试工具。

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

具体配置看test目录下的karma.conf.js和webpack.test.config.js便可。

注意，karma.conf.js需要设置

```js
// if true, Karma captures browsers, runs the tests and exits
singleRun: true,
```

不然，travis ci脚本执行的时候不会中断导致执行异常。

### npm 脚本

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


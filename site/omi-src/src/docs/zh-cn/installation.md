## 安装  

直接下载并用 `<script>` 标签引入，Omi 会被注册为一个全局变量。

* [Omi 开发版本](https://unpkg.com/omi@latest/dist/omi.js)
* [Omi 压缩版本](https://unpkg.com/omi@latest/dist/omi.min.js)

也可以通过 npm 安装

```bash
npm i omi
```


## 命令行工具

Omi 提供了官方的 CLI，你不需要去学习怎么配置 webpack、babel 或者 TypeScript，CLI 帮你配置好了一切，且提供了各种模板满足不同的项目类型。

### 创建项目

```bash
$ npx omi-cli init my-app
$ cd my-app           
$ npm start           # develop
$ npm run build       # release
```


### 创建组件

```bash
$ npx omi-cli init-component my-component
$ cd my-app           
$ npm start           # develop
$ npm run build       # release
```

### 更新 cli 最新版本

```bash
$ npm i omi-cli -g 
```

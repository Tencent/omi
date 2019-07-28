## 安装  

直接下载并用 `<script>` 标签引入，Omis 会被注册为一个全局变量。

* [Omis 开发版本](https://unpkg.com/omis@latest/dist/omis.js)
* [Omis 压缩版本](https://unpkg.com/omis@latest/dist/omis.min.js)

也可以通过 npm 安装

```bash
npm i omis
```

## 命令行工具

Omis 提供了官方的 CLI，你不需要去学习怎么配置 webpack、babel或者 TypeScript，CLI 帮你配置好了一切，且提供了各种模板满足不同的项目类型。

```bash
$ npm i omi-cli -g     # install cli
$ omi init-s my-app      # init project
$ cd my-app            
$ npm start            # develop
$ npm run build        # release
```

> `npx omi-cli init-s my-app` 也是支持的(npm v5.2.0+).

目录描述:

```
├─ config
├─ public
├─ scripts
├─ src
│  ├─ assets
│  ├─ components    //Store all components
│  ├─ admin.js      //Entry js of compiler，will build to admin.html
│  └─ index.js      //Entry js of compiler，will build to index.html
```


### npm 脚本

```json
"scripts": {
    "start": "node scripts/start.js",
    "build": "PUBLIC_URL=. node scripts/build.js",
    "build-windows": "set PUBLIC_URL=.&& node scripts/build.js",
    "fix": "eslint src --fix"
}
```

你也可以设置 PUBLIC_URL, 比如：

```json
...
"build": "PUBLIC_URL=https://your.url.com/sub node scripts/build.js",
"build-windows": "set PUBLIC_URL=https://your.url.com/sub&& node scripts/build.js",
...
```

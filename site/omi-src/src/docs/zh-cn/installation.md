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

```bash
$ npm i omi-cli -g     # install cli
$ omi init my-app      # init project
$ cd my-app            
$ npm start            # develop
$ npm run build        # release
```

> `npx omi-cli init my-app` 也是支持的(npm v5.2.0+).

目录描述:

```
├─ config
├─ public
├─ scripts
├─ src
│  ├─ assets
│  ├─ elements    //Store all custom elements
│  ├─ store       //Store all this store of pages
│  ├─ admin.js    //Entry js of compiler，will build to admin.html
│  └─ index.js    //Entry js of compiler，will build to index.html
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



## 项目模板

| **Template Type**|  **Command**|  **Describe**|
| ------------ |  -----------|  ----------------- |
|Vite 模板(v3.5.1+)|`omi init-vite my-app`| Vite 基础模板|
|基础模板(v3.3.0+)|`omi init my-app`| 基础模板|
|Kbone Template|`omi init-kbone my-app`  | 使用 omi 开发小程序或者 Web|
|TypeScript 模板(omi-cli v3.3.0+)|`omi init-ts my-app`|使用 TypeScript 的模板|
|Mobile 模板|`omi init-weui my-app`| 使用 weui 和 omi-router 的模板|

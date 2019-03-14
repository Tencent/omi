## 安装  

直接下载并用 `<script>` 标签引入，Omi 会被注册为一个全局变量。

* [Omi 开发版本](https://unpkg.com/omi@latest/dist/omi.js)
* [Omi 压缩版本](https://unpkg.com/omi@latest/dist/omi.min.js)

也可以通过 npm 安装

```
npm i omi
```

如果需要兼容 IE8+，可以选择 omio，它拥有和 omi 几乎一样的 API，且 Omi 也会被注册为一个全局变量。

* [Omio 开发版本](https://unpkg.com/omio@latest/dist/omi.js)
* [Omio 压缩版本](https://unpkg.com/omi@latest/dist/omi.min.js)

或者

```
npm i omio
```

## CLI

Omi 提供了官方的 CLI，你不需要去学习怎么配置 webpack、babel或者 TypeScript，CLI 帮你配置好了一切，且提供了各种模板满足不同的项目类型。

```bash
$ npm i omi-cli -g     # install cli
$ omi init my-app      # init project
$ cd my-app            
$ npm start            # develop
$ npm run build        # release
```

> `npx omi-cli init my-app` is also supported(npm v5.2.0+).

Directory description:

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


### Scripts

```json
"scripts": {
    "start": "node scripts/start.js",
    "build": "PUBLIC_URL=. node scripts/build.js",
    "build-windows": "set PUBLIC_URL=.&& node scripts/build.js",
    "fix": "eslint src --fix"
}
```

You can set up the PUBLIC_URL, such as：

```json
...
"build": "PUBLIC_URL=https://your.url.com/sub node scripts/build.js",
"build-windows": "set PUBLIC_URL=https://your.url.com/sub&& node scripts/build.js",
...
```

### Switch omi and omio

Add or remove the alias config in package.json to switch omi and omio：

```js
 ...
 "alias": {
    "omi": "omio"
  }
  ...
```

## Project Template

| **Template Type**|  **Command**|  **Describe**|
| ------------ |  -----------|  ----------------- |
|Base Template(v3.3.0+)|`omi init my-app`| Basic omi or omio(IE8+) project template.|
|小程序模板(v3.3.5+)|`omi init-p my-app`| Omi 开发小程序 |
|Base Template with snapshoot|`omi init-snap my-app`| Basic omi or omio(IE8+) project template with snapshoot prerendering.|
|TypeScript Template(omi-cli v3.3.0+)|`omi init-ts my-app`|Basic template with typescript.|
|Mobile Template|`omi init-weui my-app`| Mobile web app template with weui and omi-router.|
|MVVM Template(omi-cli v3.0.22+)|`omi init-mvvm my-app`  |MVVM template.|

CLI's auto-created project scaffolding is based on a single-page create-react-app to be converted into a multi-page one, with configuration issues to see [create-react-app user guide](https://facebook.github.io/create-react-app/docs/getting-started)
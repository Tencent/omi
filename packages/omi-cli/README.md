## omi-cli

```bash
$ npm i omi-cli -g     # install cli
$ omi init my-app      # init project, you can also exec 'omi init' in an empty folder
$ cd my-app            # please ignore this command if you executed 'omi init' in an empty folder
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

## Project Template

| **Template Type**|  **Command**|  **Describe**|
| ------------ |  -----------|  ----------------- |
|Base Template(v3.3.0+)|`omi init my-app`| Basic omi or omio(IE8+) project template.|
|TypeScript Template(omi-cli v3.3.0+)|`omi init-ts my-app`|Basic template with typescript.|
|小程序模板(v3.3.5+)|`omi init-p my-app`| Omi 开发小程序 |
|基础模板(v3.3.9+)|`omi init-o my-app`| 支持 IE8 的基础模板，只是 build 的时候支持 IE8，开发调试请用 IE9|
|Base Template with snapshoot|`omi init-snap my-app`| Basic omi or omio(IE8+) project template with snapshoot prerendering.|
|Mobile Template|`omi init-weui my-app`| Mobile web app template with weui and omi-router.|
|omi-mp Template(omi-cli v3.0.13+)|`omi init-mp my-app`  |Developing web with mini program template.|
|MVVM Template(omi-cli v3.0.22+)|`omi init-mvvm my-app`  |MVVM template.|
<!-- |[SPA Template](https://tencent.github.io/omi/packages/omi-router/examples/spa/build/)(omi-cli v3.0.10+)|`omi init-spa my-app`|Single page application template with omi-router.| -->


## Switch omi, omio and reomi

Add or remove the alias config in package.json to switch omi and omio：

```js
"alias": {
  "omi": "omio"
}
```

Using reomi:

```js
"alias": {
  "omi": "reomi",
  "react": "reomi",
  "react-dom": "reomi"
}
```

# License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.

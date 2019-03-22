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
|小程序模板(v3.3.5+)|`omi init-p my-app`| Omi 开发小程序 |
|基础模板(v3.3.9+)|`omi init-o my-app`| 支持 IE8 的基础模板，只是 build 的时候支持 IE8，开发调试请用 IE9|
|Base Template with snapshoot|`omi init-snap my-app`| Basic omi or omio(IE8+) project template with snapshoot prerendering.|
|TypeScript Template(omi-cli v3.3.0+)|`omi init-ts my-app`|Basic template with typescript.|
|Mobile Template|`omi init-weui my-app`| Mobile web app template with weui and omi-router.|
|omi-mp Template(omi-cli v3.0.13+)|`omi init-mp my-app`  |Developing web with mini program template.|
|MVVM Template(omi-cli v3.0.22+)|`omi init-mvvm my-app`  |MVVM template.|
<!-- |[SPA Template](https://tencent.github.io/omi/packages/omi-router/examples/spa/build/)(omi-cli v3.0.10+)|`omi init-spa my-app`|Single page application template with omi-router.| -->

CLI's auto-created project scaffolding is based on a single-page create-react-app to be converted into a multi-page one, with configuration issues to see [create-react-app user guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)


About compiled website URL：

* [build env doc](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables#referencing-environment-variables-in-the-html)
* [build problem](https://stackoverflow.com/questions/42686149/create-react-app-build-with-public-url)

Such as in windows:

```json
"scripts": {
  "start": "node scripts/start.js",
  "_build": "node scripts/build.js",
  "build":"set PUBLIC_URL=https://fe.wxpay.oa.com/dv&& npm run _build"
}
```

In mac os:

```json
"scripts": {
    "start": "node scripts/start.js",
    "_build": "node scripts/build.js",
    "build":"PUBLIC_URL=https://fe.wxpay.oa.com/dv npm run _build",
    "fix": "eslint src --fix"
  },
```

# License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.

## Installation  

Simply download and include with `<script>`. Omi will be registered as a global variable.

* [Omi Development Version](https://unpkg.com/omi@latest/dist/omi.js)
* [Omi Production Version](https://unpkg.com/omi@latest/dist/omi.min.js)

Install via npm:

```
npm i omi
```


## CLI

Omi provides the official CLI. You don't need to learn how to configure webpack, Babel or TypeScript. CLI helps you configure everything and provides various templates for different project types.

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



## Project Template

| **Template Type**|  **Command**|  **Describe**|
| ------------ |  -----------|  ----------------- |
|Vite Template(v3.5.1+)|`omi init-vite my-app`| Basic omi template with vite.|
|Base Template(v3.3.0+)|`omi init my-app`| Basic omi or omio(IE8+) project template.|
|Kbone Template|`omi init-kbone my-app`  |Developing mini program or web using omi.|
|TypeScript Template(omi-cli v3.3.0+)|`omi init-ts my-app`|Basic template with typescript.|
|Mobile Template|`omi init-weui my-app`| Mobile web app template with weui and omi-router.|


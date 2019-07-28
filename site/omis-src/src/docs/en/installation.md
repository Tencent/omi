## Installation  

Simply download and include with `<script>`. Omis will be registered as a global variable.

* [Omis Development Version](https://unpkg.com/omis@latest/dist/omis.js)
* [Omis Production Version](https://unpkg.com/omis@latest/dist/omis.min.js)

Install via npm:

```
npm i omis
```

## CLI

Omis provides the official CLI. You don't need to learn how to configure webpack, Babel or TypeScript. CLI helps you configure everything and provides various templates for different project types.

```bash
$ npm i omi-cli -g     # install cli
$ omi init-s my-app      # init project
$ cd my-app            
$ npm start            # develop
$ npm run build        # release
```

> `npx omi-cli init-s my-app` is also supported(npm v5.2.0+).

Directory description:

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


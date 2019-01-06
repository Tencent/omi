## Develop

```bash
npm install
npm start
```

## Release

```bash
npm build
```

## Eslint + Prettier

``` bash
npm run fix
```

## Directory description

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

## Build

About compiled website URL：

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

If you only want to use relative addresses:

```
"build":"set PUBLIC_URL=.&& npm run _build"  //windows
"build":"PUBLIC_URL=. npm run _build",       //mac os
```

## Docs

Cli's auto-created project scaffolding is based on a single-page create-react-app to be converted into a multi-page one, with configuration issues to see [create-react-app user guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)

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

### New Project by Omi

```bash
$ npx omi-cli init my-app
$ cd my-app           
$ npm start           # develop
$ npm run build       # release
```


### New Component by Omi

```bash
$ npx omi-cli init-component my-component
$ cd my-app           
$ npm start           # develop
$ npm run build       # release
```

### Update to the latest version

```bash
$ npm i omi-cli -g 
```

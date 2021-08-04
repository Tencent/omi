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


### Scripts

```json
"scripts": {
  "start": "vite",
  "build": "tsc && vite build --base=./",
}
```

You can set up the PUBLIC_URL, such as：

```json
  "build": "tsc && vite build --base=https://your.url.com/sub ",
```



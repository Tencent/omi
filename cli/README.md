# omi-cli
The Omi command line utility.


### Installation
Prerequisites: Node.js (>=6.x), npm version 3+

```
$ npm install omi-cli -g
```

### Usage

```
$ omi init                  // in current directory
$ omi init [project name]   // in new directroy named project name
```
Example:
```
$ omi init app
```

omi-cli will run npm to install dependencies.


## Scaffolding

Using `Gulp + Webpack + Babel + BrowserSync` Scaffolding.

You can modify your project name，or modify the project detail by `npm init`.

### development

``` js
$ npm run dev
```

### build

``` js
$ npm run dist
```


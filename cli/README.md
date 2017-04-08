# omi-cli

CLI for scaffolding Omi.js projects.


## Installation
Prerequisites: Node.js (>=6.x), npm version 3+

```
$ npm install omi-cli -g
```

## Usage
initialize a new omi application `omi-app` :
```
$ omi init                          // in current directory
$ omi init [project name]           // in new directroy named project name
```
initialize a new omi project `omi-pr` :
```
$ omi init-pr                          // in current directory
$ omi init-pr [project name]           // in new directroy named project name
```
if you want to compile project for ssr, you can run:
```
$ omi pr
```
in your omi-pr project

## Example:
```
$ omi init app
$ omi init-pr project
$ omi pr
  .....
```

omi-cli will run npm command to install dependencies automatically. You could switch the mirror source with:
```
$ omi init app -m cnpm 
```
we support to shift from default to `npm`, `cnpm` or `taobao` mirror.


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


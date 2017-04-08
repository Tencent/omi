# omi-cli

CLI for scaffolding Omi.js projects.


## Installation
Prerequisites: Node.js (>=6.x), npm version 3+

```
$ npm install omi-cli -g
```

## Usage
initialize a new omi application :

```
$ omi init                          // in current directory
$ omi init [project name]           // in new directroy named project name
```

omi-cli will run npm command to install dependencies automatically. You could switch the mirror source with:

```
$ omi init app -m cnpm 
```

we support to shift from default to `npm`, `cnpm` or `taobao` mirror.


### Scaffolding

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

## omi pr

initialize a new `omi-pr` project :

```
$ omi init-pr                          // in current directory
$ omi init-pr [project name]           // in new directroy named project name
```

if you want to pre-render your project for speeding up your web page access times, you can run:

```
$ omi pr
```

in your omi-pr project.

That's all, have fun.
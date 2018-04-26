<p align="center">
  <a href="##Omi"><img src="http://images2015.cnblogs.com/blog/105416/201701/105416-20170120114244046-622856943.png" alt="Omi"></a>
</p>
<p align="center">
Open and modern framework for building user interfaces.
</p>
<p align="center">
  <a href="https://circleci.com/gh/AlloyTeam/omi/tree/master"><img src="https://img.shields.io/circleci/project/AlloyTeam/omi/master.svg" alt="Build Status"></a>
  <a href="https://www.npmjs.com/package/omi"><img src="https://img.shields.io/npm/v/omi.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/omi"><img src="https://img.shields.io/npm/dm/omi.svg" alt="Download"></a>
  <a href="CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs"></a>
</p>


* [中文文档](./docs/README.md)
* [Omi REPL](https://alloyteam.github.io/omi/repl/)
* [Change Log](https://github.com/AlloyTeam/omi/blob/master/change-log.md)

## Features

* Super fast, [click here!!!!](https://alloyteam.github.io/omi/example/perfs)
* Super tiny size, 7 KB (gzip)
* Good compatibility, support IE8
* Support Scoped CSS, reusable components are composed of HTML, Scoped CSS and JS
* More free updates, each component has a update method, free to choose the right time to update

## Hello Omi

``` js
class Hello extends Omi.Component {
    render() {
        return <div> Hello {this.data.name}!</div>
    }
}

class App extends Omi.Component {
    install() {
        this.name = 'Omi'
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.name = 'Hello Omi' 
        this.update()
    }

    style() {
        return `h3{
	            color:red;
	            cursor: pointer;
	        }`
    }

    render() {
        return <div>
	            <Hello name={this.name}></Hello>
	            <h3 onclick={this.handleClick}>Scoped css and event test! click me!</h3>
	        </div>
    }
}

Omi.render(<App />, '#container')
```

## Using Store System

```js
class Store  {
    constructor(data, callbacks) {
        this.name = data.name || ''
        this.onRename = callbacks.onRename || function(){}
    }

    rename(name){
        this.name = name
        this.onRename()
    }
}


class Hello extends Omi.Component {
    render() {
        return (
            //you can also use this.$store.name here. but using data if this is a pure component.
            <div> Hello <span>{this.data.name}</span>!</div>
        )
    }
}

class App extends Omi.Component {

    install(){
        this.rename = this.rename.bind(this)
    }

    rename(){
        this.$store.rename('Hello Omi')
    }

    render() {
        return (
            <div onclick={this.rename}>
                <Hello name={this.$store.name}></Hello>
            </div>
        )
    }
}

let app = new App()
let store = new Store({ name : 'Omi' } ,{
    onRename :()=>{
        app.update()
    }
})

Omi.render(app, 'body',{
    store
})
```

[→Try it online←](https://alloyteam.github.io/omi/repl/redirect.html)

## omi-cli

```bash
$ npm install omi-cli -g         # install cli
$ omi init your_project_name   # init project, you can also exec 'omi init' in an empty folder
$ cd your_project_name           # please ignore this command if you executed 'omi init' in an empty folder
$ npm start                      # develop
$ npm run dist                   # release
```


## Install

``` bash
npm install omi
```

or get it from CDN:

* [https://unpkg.com/omi@1.8.0/dist/omi.min.js](https://unpkg.com/omi@1.8.0/dist/omi.min.js)
* [https://unpkg.com/omi@1.8.0/dist/omi.js](https://unpkg.com/omi@1.8.0/dist/omi.js)


## Plugins

* [omi-tap](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-tap): Support tap event in your Omi project..
* [omi-router](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-router): Router for Omi.
* [omi-finger](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-finger): Omi /[AlloyFinger](https://github.com/AlloyTeam/AlloyFinger) integration.
* [omi-transform](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-transform): Omi /[transformjs](https://alloyteam.github.io/AlloyTouch/transformjs/) integration.
* [omi-touch](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-touch): Omi /[AlloyTouch](https://github.com/AlloyTeam/AlloyTouch) integration.

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.

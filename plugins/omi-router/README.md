## omi-router

## 安装

### CDN
可以直接通过Unpkg.com下载或引用cdn: [https://unpkg.com/omi-router/dist/omi-router.js](https://unpkg.com/omi-router/dist/omi-router.js)

```js
<script src="https://unpkg.com/omi/dist/omi.js"></script>
<script src="https://unpkg.com/omi-router/dist/omi-router.js"></script>
```

### NPM

```js
npm install omi-router
```


import Omi from 'omi'
import OmiRouter from 'omi-router'

如果使用全局的 script 标签，则无须如此import便可使用。

## 开始

先来看下HTML结构:

``` html
<h2>omi-router演示</h2>
<div id="links">

</div>
<div id="view">

</div>

<script src="bundler.js"></script>
```

在看下javascript代码:

```js
import Omi from 'omi'
import OmiRouter from '../../index.js'

import Home from './home.js'
import About from './about.js'
import User from './user.js'
import UserList from './user-list.js'

class App extends Omi.Component {

    install(){
        OmiRouter.init({
            routes : [
                { path: '/', component: Home },
                { path: '/about', component: About },
                { path: '/user-list', component: UserList },
                { path: '/user/:name/category/:category', component: User }
            ],
            renderTo:"#view"
        })

        Omi.render(new Home(),"#view")
    }

    style(){
       return `
        ul{
            border-bottom: 1px solid #ccc;
            padding-bottom:5px;
        }
        li{
            display:inline-block;
        }
        `
    }

    render() {
        return  `
        <ul>
            <li><a omi-router to="/" >Home</a></li>
            <li><a omi-router to="/about" >About</a></li>
            <li><a omi-router to="/user-list" >UserList</a></li>
        </ul>
        `
    }
}


Omi.render(new App(),"#links")
```

### 地址

* [在线演示地址](http://alloyteam.github.io/omi/plugins/omi-router/example/simple/)
* [源码地址](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-router/example/simple)

## License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
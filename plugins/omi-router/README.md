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

## 动态匹配

| 模式 | 匹配路径 | $route.params |
|---------|------|--------|
| /user/:name | /user/dntzhang | `{ username: 'dntzhang' }` |
| /user/:name/category/:category | /user/dntzhang/category/js | `{ username: 'dntzhang', category: js }` |

注意: $route 会被挂载在$store下，$store会在根组件中注入，在组件树中的任何组件都可以通过 `this.$store.$route.params` 访问hash传递的数据。 

### 举个例子

```js
import Omi from 'omi'

class User extends Omi.Component {

    beforeRender(){
        let params =  this.$store.$route.params
        this.data.name = params.name
        this.data.category = params.category
        this.info = this.queryInfo(this.data.name)
        this.data.age = this.info.age
        this.data.sex = this.info.sex
    }

    queryInfo(name) {
        this.mockData = {
            'yanagao': {age: 18, sex: 'female'},
            'vorshen': {age: 20, sex: 'male'},
            'dntzhang': {age: 22, sex: 'male'}
        }
        return this.mockData[name]
    }

    back(){
        history.back()
    }

    render() {
        return  `
      	<div >
      	    <button onclick="back">back</button>
      	    <ul>
      	        <li>name:{{name}}</li>
      	        <li>age:{{age}}</li>
      	        <li>sex:{{sex}}</li>
      	        <li>category:{{category}}</li>
      	    </ul>
      	</div>
  		`
    }
}


Omi.tag('User',User)

export default  User
```

### 地址

* [在线演示地址](http://alloyteam.github.io/omi/plugins/omi-router/example/simple/)
* [源码地址](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-router/example/simple)

## License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
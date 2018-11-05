[English](./README.md) | 简体中文 | [한국어](./README.KR.md)

# omi-router

omi-router是 [Omi](http://omijs.org) 专属的router插件，文件尺寸轻量，使用简便，功能强大。用于Omi制作Web单页应用的首选解决方案。

单页的好处也是非常明显:

* 无刷新加载页面内容
* 无刷新前进和后退页面
* 路由中的某个链接的传播和分享（别人看到的和你一样的状态）
* 转场动画（a标签跳转不仅要白屏，而且没有转场动画）
* 资源复用（单页中的许多资源一定是可以共用的，最典型的比如omi.js，如果不是单页的话，你需要加载多次）

好了，好处这么多，看看怎么安装使用吧~~

## 安装


### NPM

```js
npm install omi-router
```



## 开始


```js
//你可以在全局访问到 route
import 'omi-router'
import { define, WeElement, render } from 'omi'
import './about'
import './home'
import './user'
import './user-list'

define('my-app', class extends WeElement {
  static observe = true

  data = { tag: 'my-home' }
  install() {

    route('/', (info) => {
      this.data.tag = 'my-home'
    })

    route('/about', (info) => {
      this.data.tag = 'my-about'
    })

    route('/user-list', (info) => {
      this.data.tag = 'user-list'
    })

    route('/user/:name/category/:category', (info) => {
      this.data.tag = 'my-user'
    })

    route('*', function () {
      console.log('not found')
    })
  }

  render(props, data) {
    return (
      <div>
        <ul>
          <li><a href="#/" >Home</a></li>
          <li><a href="#/about" >About</a></li>
          <li><a href="#/user-list" >UserList</a></li>
        </ul>
        <div id="view">
          <data.tag />
        </div>
      </div>
    )
  }
})


render(<my-app />, "#container")
```

## 动态匹配

| 模式 | 匹配路径 | route.params |
|---------|------|--------|
| /user/:name | /user/dntzhang | `{ name: 'dntzhang' }` |
| /user/:name/category/:category | /user/dntzhang/category/js | `{ name: 'dntzhang', category: js }` |

在组件树中的任何组件都可以通过 `route.params` 访问hash传递的数据。 


### 地址

* [在线演示地址](https://tencent.github.io/omi/packages/omi-router/examples/simple/)
* [源码地址](https://github.com/Tencent/omi/tree/master/packages/omi-router/examples/simple)

## License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.

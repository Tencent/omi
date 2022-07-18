# omi-router

omi-router 是 [Omi](https://tencent.github.io/omi/) 专属的router插件，文件尺寸轻量，使用简便，功能强大。用于Omi制作Web单页应用的首选解决方案。

[→ DEMO](https://tencent.github.io/omi/packages/omi-router/examples/spa/build/)

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

  data = { tag: 'my-home' }

  install() {

    route('/', () => {
      this.data.tag = 'my-home'
      this.update()
    })

    route('/about', (evt) => {
      console.log(evt.query)
      this.data.tag = 'my-about'
      this.update()
    })

    route('/user-list', () => {
      this.data.tag = 'user-list'
      this.update()
    })

    route('/user/:name/category/:category', (evt) => {
      this.data.tag = 'my-user'
      this.data.params = evt.params
      this.update()
    })

    route('*', function () {
      console.log('not found')
    })

    route.before = (evt) => {
      console.log('before')
      //prevent route when return false
      //return false
    }

    route.after = (evt) => {
      console.log('after')
    }
  }

  onClick = () => {
    route.to('/user/vorshen/category/html')
  }

  render(props, data) {
    return (
      <div>
        <ul>
          <li><a href="#/" >Home</a></li>
          <li><a href="#/about" >About</a></li>
          <li><a href="#/user-list" >UserList</a></li>
          <li><a href="#/about?name=dntzhang&age=18" >About Dntzhang</a></li>
        </ul>
        <div id="view">
          <data.tag params={data.params} />
        </div>
        <div><button onClick={this.onClick}>Test route.to</button></div>
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
| /user/:name/category/:category | /user/dntzhang/category/js | `{ name: 'dntzhang', category: 'js' }` |

注意： 如果 hash 为空，会自动被识别为 `/`。

## 另一种携带查询参数方法

```html
<li><a href="#/about?name=dntzhang&age=18" >About</a></li>
```

```js
route('/about', (evt) => {
  //点击上面的标签会输出 { name: 'dntzhang', age : '18' } 
  console.log(evt.query)
})
```

## 携带 JSON Data

```js
route.to('/about',(evt) => {
  //{ a: 1 }
  console.log(evt.data)
})
route.to('/about', { a: 1 })
```

### 地址

* [在线演示地址](https://tencent.github.io/omi/packages/omi-router/demos/simple/)
* [源码地址](https://github.com/Tencent/omi/tree/master/packages/omi-router/demos/simple)

## License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.

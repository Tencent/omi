[English](./README.md) | [简体中文](./README.CN.md) | 한국어

# omi-router

omi-router는 [Omi](http://omijs.org)의 라우터 플러그인으로 파일크기가 작고 사용하기 쉬우며 매우 강력합니다. Omi의 단일페이지 (SPA: Single Page Application) 웹을 만드는데 사용되는 솔루션입니다.

[→ DEMO](https://tencent.github.io/omi/packages/omi-router/examples/spa/build/)

단일페이지의 장점은 매우 분명합니다:

* 페이지의 컨텐츠 로딩을 위해 페이지 새로고침할 필요 없음
* 이전/다음 페이지로 이동시 페이지 새로고침이 없음
* 페이지의 주소를 공유할 수 있음 (공유 받은 사람도 동일한 페이지를 보게됨)
* 페이지 전환시 빈공백 및 전환애니메이션이 없음
* 페이지의 리소스의 재사용성 (단일페이지이기 때문에 리소스를 공유함. 만약 멀티 페이지일경우 동일한 리소스를 여러번 로드해야함.）

이와 같이 많은 장점이 있습니다. 설치후 한번 사용해보죠.

## Install


### NPM

```js
npm install omi-router
```



## Usage

```js
//You can visit route in the global context.
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

    route('/', () => {
      this.data.tag = 'my-home'
    })

    route('/about', (evt) => {
      console.log(evt.query)
      this.data.tag = 'my-about'
    })

    route('/user-list', () => {
      this.data.tag = 'user-list'
    })

    route('/user/:name/category/:category', (evt) => {
      this.data.tag = 'my-user'
      this.data.params = evt.params
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

## 동적매치

| Rule | Path | route.params |
|---------|------|--------|
| /user/:name | /user/dntzhang | `{ name: 'dntzhang' }` |
| /user/:name/category/:category | /user/dntzhang/category/js | `{ name: 'dntzhang', category: 'js' }` |

## With Query Parameter

```html
<li><a href="#/about?name=dntzhang&age=18" >About</a></li>
```
```js
route('/about', (evt) => {
  //output { name: 'dntzhang', age : '18' } when click the a tag above
  console.log(evt.query)
})
```

### 레퍼런스

* [데모](https://tencent.github.io/omi/packages/omi-router/examples/simple/)
* [소스코드](https://github.com/Tencent/omi/tree/master/packages/omi-router/examples/simple)

## License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.

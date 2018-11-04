# omi-router

omi-router는 [Omi](http://omijs.org)의 라우터 플러그인으로 파일크기가 작고 사용하기 쉬우며 매우 강력합니다. Omi의 단일페이지 (SPA: Single Page Application) 웹을 만드는데 사용되는 솔루션입니다.

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



## Start


```js
import route from 'omi-router'
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

## 동적매치

| 양식 | 매칭주소 | route.params |
|---------|------|--------|
| /user/:name | /user/dntzhang | `{ name: 'dntzhang' }` |
| /user/:name/category/:category | /user/dntzhang/category/js | `{ name: 'dntzhang', category: js }` |

구성 요소 트리의 모든 구성 요소는 `route.params`를 통해 해시가 전달한 데이터에 엑세스할 수 있습니다.


### 레퍼런스

* [데모](https://tencent.github.io/omi/packages/omi-router/examples/simple/)
* [소스코드](https://github.com/Tencent/omi/tree/master/packages/omi-router/examples/simple)

## License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.

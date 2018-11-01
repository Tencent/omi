## Web Components 를 Native 에 렌더링 하는 방법

어떻게 Web Components를 Native에 렌더링할까요? [Omi Framework](https://github.com/Tencent/omi) 가 바로 하나의 예입니다. Omi는 [Web Components 기반](https://github.com/Tencent/omi#why-omi) 으로 디자인 되었습니다.


## 업계 현황

현재 Native에 렌더링 하는 두 가지 방식이 있습니다:

* Flutter
  * 고성능의 Skia 렌더링 엔진으로 GPU를 사용하여 직접 렌더링
  * Dart 언어를 사용하여 개발
* React Native, Weex, Taro, Hippy, Plato
  * Bridge 와 JSCore를 사용하여 렌더 명령어 전송
  * JavaScript 언어를 상요하여 개발
  * 각 JSCore 와 Native는 동일한 DOM 트리를 유지합니다.

Omi 는 두 번째 방법을 사용합니다. [→ omi-native](https://github.com/Tencent/omi/tree/master/packages/omi-native).

## 사전연구

왜냐하면 Web Components 는 `HTMLElement`를 기반으로 하기 때문에 Omi의 커스텀 엘리먼트가 `WeElement`를 상속하는 것을 볼수 있습니다:

```js
import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
    static observe = true
    
    data = {
      count: 1
    }

    sub = () => {
      this.data.count--
    }

    add = () => {
      this.data.count++
    }

    render() {
      return (
        <div>
          <button onClick={this.sub}>-</button>
          <span>{this.data.count}</span>
          <button onClick={this.add}>+</button>
        </div>
      )
    }
  })

render(<my-counter />, 'body')
```

Omi 소스코드를 통하여 `WeElement`가 `HTMLElement`로 부터 상속된것을 알 수 있습니다:

```js
class WeElement extends HTMLElement {
  ...
}
```

왜냐하면 JSCore에서 Native에 메세지를 보내기를 원하기 때문에 먼저 잘 동작하는지 확인을 해야 합니다. 그러나 JSCore에는 DOM 과 BOM이 없습니다. 물론 `HTMLElement`가 DOM에 속하기는 하지만 기본적으로 DOM 은 아닙니다. 그래서 Ommi는 JSCore에서 에러를 리포트 합니다. 그래서 이 문제에 대한 정답은 surface입니다.

## HTMLElement 시뮬레이션

브라우저 디자인：

* HTMLElement는 부모의 인터페이스(Element 와 GlobalEventHandlers) 를 상속합니다
* Element는 Node(appendChild, removeChild, insertBefore가 정의된)로 부터 상속됩니다
* Node 는 부모의 EventTarget 클래스로부터 프로퍼티를 상속받습니다.

그러나 우리는 브라우저가 실행하는 방법과 완벽히 동일하게 구현할 필요는 없습니다. 그리고 모든 API도 구현할 필요는 없습니다. 오직 `omi-native`만 구현하면 됩니다.

* Element
* HTMLElement
* Document

HTMLElement는 Element를 상속합니다. 어떤 API들이 구현이 필요한지 그리고 Omi 가 사용하는 DOM API 에 대한 소개입니다:

* HTMLElement
  * connectedCallback
  * disconnectedCallback
* Element
  * addEventListener
  * removeEventListener
  * removeAttribute
  * setAttribute
  * removeChild
  * appendChild
  * replaceChild
  * style
* Document
  * createElement

따라서 위의 API를 구현하면 Omi 프로젝트가 오류없이 JSCore에서 실행될 수 있지만 오류만 제공하는 것은 충분하지 않습니다. 명령을 앞뒤로 보내야 합니다.
명령어 전달의 의미는 DOM 트리를 Native로 유지하고 JSCore가 유지 관리하는 DOM 트리를 일관되게 만드는 것입니다. 명령 전송의 빈도는 시간 소요에 직접적으로 영향을 미치며 명령 전송 빈도가 낮을수록 좋습니다. 따라서 appendChild에 브릿지 통신을 주입할때 Child등을 제거할때의 플로우 원리는 다음과 같습니다:

* 실제 트리에 있는 DOM 에만 작업 명령을 보냅니다.

그래서 Node를 통해 노드에 붙어있는 `document.createElement`, `appendChild` 또는 `removeChild` 는 어떤 명령도 보내지 않습니다.

## Life cycle

Omi의 커스텀 엘리먼트의 Life cycle은 아래와 같습니다:

| Lifecycle method | When it gets called                          |
| ---------------- | -------------------------------------------- |
| `install`        | component가 DOM 에마운트 되기전                  |
| `installed`      | component가 DOM 에 마운트 된후                   |
| `uninstall`      | DOM에서 제거하기 전에                            |
| `beforeUpdate`   | 업데이트 전                                    |
| `afterUpdate`    | 업데이트 후                                    |
| `beforeRender`   | `render()` 메서드 호출 전                       |

어떻게 Omi의 Life cycle이 JSCore에서 정상적으로 작동하는지는 Omi의 WeElement를 통해 알수있습니다:

```js
  connectedCallback() {
    ...
    ...
    this.install()
    const shadowRoot = this.attachShadow({ mode: 'open' })

    this.css && shadowRoot.appendChild(cssToDom(this.css()))
    this.beforeRender()
    options.afterInstall && options.afterInstall(this)
    ...
    ...
    this.installed()
    this._isInstalled = true
  }

  disconnectedCallback() {
    this.uninstall()
    if (this.store) {
      for (let i = 0, len = this.store.instances.length; i < len; i++) {
        if (this.store.instances[i] === this) {
          this.store.instances.splice(i, 1)
          break
        }
      }
    }
  }
```

Omi의 Life cycle은 HTMLElement의 `connectedCallback` 과 `disconnectedCallback` 에 전적으로 의존합니다.

* connectedCallback 엘리먼트가 페이지에 추가되면 트리거 발생
* disconnectedCallback 엘리먼트가 페이지에서 제거되면 트리거 발생

`HTMLElement` 와 `Element` 모두 자체 구현되어 있기 때문에 `connectedCallback` 과 `disconnectedCallback`으로 실행 시기를 제어할 수 있습니다. 왜냐하면 엘리먼트가 DOM 트리에 추가되는 시기를 알수 있기 때문입니다. 예를들어 추가할때:

```js
  appendChild(node) {
    if (!node.parentNode) {
      linkParent(node, this)
      insertIndex(node, this.childNodes, this.childNodes.length, true)
      if(this.connectedCallback){
      this.connectedCallback()
    }
    ...
  }
```

제거할때：

```js
  removeChild(node) {
    if (node.parentNode) {
      removeIndex(node, this.childNodes, true)
      if(this.disconnectedCallback){
        this.disconnectedCallback()
      }
    }
    ...
  }
```

## 이벤트 바인딩

JS에서 이벤트 바인딩 함수의 호출은 context 정보를 포함하고 있기 때문에 클라이언트에게 전송할 수 없습니다. 그렇기 때문에 Native 엘리먼트의 id와 이벤트 바인딩 type 만 알려줄 필요가 있으며 클라이언트에 전송할 시 엘리먼트 id 와 이벤트 바인딩 type만 알려주면 됩니다.

```js
 addEventListener(type, handler) {
    if (!this.event[type]) {
      this.event[type] = handler
      this.ownerDocument.addEvent(this.ref, type)
    }
  }
```

[→ 소스코드 Fork](https://github.com/Tencent/omi/tree/master/packages/omi-native/src/native)

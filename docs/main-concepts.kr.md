[English](./main-concepts.md) | [简体中文](./main-concepts.cn.md) | 한국어

## Omi Docs

- [Omi Docs](#omi-docs)
  - [My First Element](#my-first-element)
  - [Props](#props)
  - [Event](#event)
  - [Custom Event](#custom-event)
  - [CSS](#css)
  - [Ref](#ref)
  - [Store](#store)
  - [Slot](#slot)
  - [SSR](#ssr)

### My First Element

```js
import { WeElement, tag, render } from 'omi'

@tag('my-first-element')
class MyFirstElement extends WeElement {
  render() {
    return (
      <h1>Hello, world!</h1>
    )
  }
}

render(<my-first-element></my-first-element>, 'body')
```

HTML 개발자 도구에서 렌더링 구조를 확인하세요:

![fe](../assets/first-element.jpg)

또한, 당신은 다음과 같이 다른 커스텀 엘리먼트(element)에서 `my-first-element`를 사용할 수 있습니다. : 

```js
import { WeElement, tag, render } from 'omi'
import './my-first-element'

@tag('other-element')
class OtherElement extends WeElement {
  render() {
    return (
      <div>
        <my-first-element></my-first-element>
      </div>
    )
  }
}
```

### Props

```js
import { WeElement, tag, render } from 'omi'

@tag('my-first-element')
class MyFirstElement extends WeElement {
  render(props) {
    return (
      <h1>Hello, {props.name}!</h1>
    )
  }
}

render(<my-first-element name="world"></my-first-element>, 'body')
```

당신은 또한 props를 통해 모든 유형의 데이터를 전송할 수 있습니다 :

```js
import { WeElement, tag, render } from 'omi'

@tag('my-first-element')
class MyFirstElement extends WeElement {
  render(props) {
    return (
      <h1>Hello, {props.myObj.name}!</h1>
    )
  }
}

render(<my-first-element my-obj={{ name: 'world' }}></my-first-element>, 'body')
```

위 코드의 `my-obj`는 camel-case로 myObj에 매핑됩니다. 그래서 props에 기본 값들을 선언하고 아래의 코드처럼 사용하시면 됩니다:

```js
import { WeElement, define, render } from 'omi'
 define('my-first-element', class extends WeElement {
  static props = {
    name: {
      value: 'Omi'
    },
    myAge: {
      value: 18
    }
  }
   render(props) {
    return (
      <h1>Hello, {props.name}! Age {props.myAge}</h1>
    )
  }
}
 render(<my-first-element name="world"></my-first-element>, 'body')
```

### Event

```js
class MyFirstElement extends WeElement {
  onClick = (evt) => {
    alert('Hello Omi!')
  }

  render() {
    return (
      <h1 onClick={this.onClick}>Hello, world!</h1>
    )
  }
}
```

### Custom Event

```js
@tag('my-first-element')
class MyFirstElement extends WeElement {
  onClick = (evt) => {
    this.fire('myevent', { name: 'abc' })
  }

  render(props) {
    return (
      <h1 onClick={this.onClick}>Hello, world!</h1>
    )
  }
}
```

그런 다음 커스텀 엘리먼트에 이벤트를 바인딩 합니다:

```js
<my-first-element onMyEvent={(evt) => { alert(evt.detail.name) }}></my-first-element>
```

`this.fire` 로 커스텀 이벤트를 실행할 수 있고, `evt.detail` 로 데이터를 가져올 수 있습니다.

### CSS

```js
@tag('my-first-element')
class MyFirstElement extends WeElement {
  css() {
    return `h1 { color: red; }`
  }

  render(props) {
    return (
      <h1>Hello, world!</h1>
    )
  }
}

render(<my-first-element onMyEvent={(evt) => { alert(evt.detail.name) }}></my-first-element>, 'body')
```

당신은 CSS를 동적으로 생성되게 할 수 있습니다:

```js
 css() {
    return `h1 { color: ${Math.random() > 0.5 ? "red" : "blue"}; }`
  }
```

당신은 또한 webpack의 [to-string-loader](https://www.npmjs.com/package/to-string-loader)을 사용하여 CSS, less와 sass를 다른 파일에 따로 작성할 수 있습니다：

```js
{
  test: /[\\|\/]_[\S]*\.scss$/,
  use: [
      'to-string-loader',
      'css-loader',
      'sass-loader'
  ]
}
```

그리고:

```js
import { tag, WeElement } from 'omi'
import style from '../style/_button.scss'

@tag('el-button', true)
class ElButton extends WeElement {

    css() {
        return style
    }
    ...
    ...
```

### Ref

```js
@tag('my-first-element')
class MyFirstElement extends WeElement {
  onClick = (evt) => {
    console.log(this.h1)
  }

  render(props) {
    return (
      <div>
        <h1 ref={e => { this.h1 = e }} onClick={this.onClick}>Hello, world!</h1>
      </div>
    )
  }
}

render(<my-first-element></my-first-element>, 'body')
```

엘리먼트의 속성으로 `ref={e => { this.anyNameYouWant = e }}` 를 추가하면, `this.anyNameYouWant` 을 통해 받을 수 있습니다.


### Store

```js
import { WeElement, tag, render } from 'omi'

@tag('my-first-element')
class MyFirstElement extends WeElement {
  //You must declare data here for view updating
  static get data() {
    return { name: null }
  }

  onClick = () => {
    //auto update the view
    this.store.data.name = 'abc'
  }

  render(props, data) {
    //data === this.store.data when using store system
    return (
      <h1 onClick={this.onClick}>Hello, {data.name}!</h1>
    )
  }
}

const store = {
  data: { name: 'Omi' }
}
render(<my-first-element name="world"></my-first-element>, 'body', store)
```

정적 데이터는 부분 뷰 업데이트를 위해 경로로 변환됩니다.:
```js
static get data() {
  return {
    a: null,
    b: null,
    c: { d: [] },
    e: []
  }
}

```

변환된 경：

```js
{
  a: true,
  b: true,
  'c.d':true,
  e: true
}
```

경로 변경 규칙 예시:

| proxy path | updatePath | Update |
| ---------- | ---------- | ------ |
| abc        | abc        | true   |
| abc[1]     | abc        | true   |
| abc.a      | abc        | true   |
| abc        | abc.a      | false  |
| abc        | abc[1]     | false  |
| abc        | abc[1].c   | false  |
| abc.b      | abc.b      | true   |

If you hit one condition above, you can update it.

Summary is as long as updatePath or updatePath sub nodes are updated.

우리는 store 시스템이 중앙 집중 방식으로 관리되고 있다는 것을 알수 있지 않나요? 그렇다면 특정 엘리먼트에서 이 부분을 분리시킬까요? 커스텀 엘리먼트에 static 변수 pure를 선언하고 true로 설정하면 가능합니다:

```js
static pure = true
```

Pure element! Store가 삽입되지 않을겁니다!

### Slot

웹 구성 요소 기술 집합의 HTML 요소 인 `<slot>` 은 별도의 DOM 트리를 만들고 함께 보여줄 수 있는 마크 업으로 당신이 웹 구성 요소를 채울 수 있게 해주는 placeholder입니다.

```jsx
import { tag, render, WeElement } from '../../src/omi'

@tag('hello-element')
class HelloElement extends WeElement {
  render() {
    return (
      <div onClick={this.onClick}>
        <p><slot name="my-text">My default text</slot></p>
      </div>
    )
  }
}

@tag('my-app')
class MyApp extends WeElement {
  render() {
    return (
      <div >
        <hello-element>
          <span slot="my-text">Let's have some different text!</span>
        </hello-element>
      </div>
    )
  }
}

render(<my-app></my-app>, 'body')
```

[→ Slot MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots#Adding_flexibility_with_slots)

### SSR

Recommended class libraries:

* https://github.com/skatejs/skatejs/tree/master/packages/ssr
* https://www.youtube.com/watch?v=yT-EsESAmgA

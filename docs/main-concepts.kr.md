[[English](./main-concepts.md) | [简体中文](./main-concepts.cn.md) | 한국어

## Omi Docs

- [Omi Docs](#omi-docs)
  - [My First Element](#my-first-element)
  - [Props](#props)
  - [Event](#event)
  - [Custom Event](#custom-event)
  - [CSS](#css)
  - [Lifecycle](#lifecycle)
  - [Ref](#ref)
  - [Store](#store)
  - [Slot](#slot)
  - [noSlot](#noslot)
  - [Observe](#observe)
  - [Tick and NextTick](#tick-and-nexttick)
  - [Use](#use)
  - [SSR](#ssr)

[→ Omi Simple Examples](https://github.com/Tencent/omi/tree/master/packages/omi/examples)

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
   static defaultProps = {
		name: 'Omi',
		myAge: 18
  }
  
  render(props) {
    return (
      <h1>Hello, {props.name}! Age {props.myAge}</h1>
    )
  }
})

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

### Lifecycle

| Lifecycle method | When it gets called                          |
| ---------------- | -------------------------------------------- |
| `install`        | before the component gets mounted to the DOM |
| `installed`      | after the component gets mounted to the DOM  |
| `uninstall`      | prior to removal from the DOM                |
| `beforeUpdate`   | before update                           |
| `afterUpdate`    | after update  (deprecated)                           |
| `updated`    | after update                             |
| `beforeRender`   | before `render()`                           |
| `receiveProps`   | parent element re-render will trigger it      |

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

  render(props, data, store) {
    return (
      <h1 onClick={this.onClick}>Hello, {store.data.name}!</h1>
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

## noSlot

Omi 플러그인 제작을 위해 noSlot은 매우 유용합니다. 이것은 불필요한 리얼 DOM을 HTML에 추가하지 않으며 Omi 엘리먼트에서 props.children을 통해 vdom을 취득할 수 있습니다.

```js
import { define, render, WeElement } from 'omi'

define('fancy-tabs', class extends WeElement {
  static noSlot = true

  render() {
    return [
      <div id="tabs">
        <slot id="tabsSlot" name="title" />
      </div>,
      <div id="panels">
        <slot id="panelsSlot" />
      </div>,
      <div>Show me only when noSlot is true!</div>
    ]
  }
})

define('my-app', class extends WeElement {
  render() {
    return (
      <div>
        <fancy-tabs>
          <button slot="title">Title</button>
          <button slot="title" selected>
            Title 2
          </button>
          <button slot="title">Title 3</button>
          <section>content panel 1</section>
          <section>content panel 2</section>
          <section>content panel 3</section>
        </fancy-tabs>
      </div>
    )
  }
})

render(<my-app />, 'body')
```

## Observe

### Omi Observe
observe를 사용해서 `store`가 필요 없는 element에 대한 반응형 뷰를 만들수 있습니다:

```js
define("my-app", class extends WeElement {
  static observe = true

  install() {
    this.data.name = "omi"
  }

  onClick = () => {
    this.data.name = "Omi V4.0"
  }

  render(props, data) {
    return (
      <div onClick={this.onClick}>
        <h1>Welcome to {data.name}</h1>
      </div>
    )
  }
})
```

만약 IE11과 호환하기를 원하시면 omi 의 observe 대신 `omi-mobx`를 사용하세요.

### Omi Mobx

```js
import { tag, WeElement } from "omi"
import { observe } from "omi-mobx"

@observe
@tag("my-app")
class MyApp extends WeElement {
  install() {
    this.data.name = "omi"
  }

  onClick = () => {
    this.data.name = "Omi V4.0"
  }

  render(props, data) {
    return (
      <div onClick={this.onClick}>
        <h1>Welcome to {data.name}</h1>
      </div>
    )
  }
}
```

### Tick and NextTick

observe 를 사용하면 data가 변경된후 view가 바로 업데이트 되지 않습니다. 만약 리얼 DOM 오브젝트를 취득하고 싶으면 tick과 nextTick을 사용하면 됩니다.

```js
import { render, WeElement, define, tick, nextTick } from 'omi'

define('todo-list', class extends WeElement {
  render(props) {
    return (
      <ul>
        {props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }
})

define('todo-app', class extends WeElement {
  static observe = true

  static get data() {
    return { items: [], text: '' }
  }
  install() {
    tick(() => {
      console.log('tick')
    })

    tick(() => {
      console.log('tick2')
    })
  }

  beforeRender() {
    nextTick(() => {
      console.log('nextTick')
    })

    // don't using tick in beforeRender or beforeUpdate or render or afterUpdate
    // tick(() => {
    //   console.log(Math.random())
    // })
  }

  installed() {
    console.log('installed')
  }

  render() {
    console.log('render')
    return (
      <div>
        <h3>TODO</h3>
        <todo-list items={this.data.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.data.text}
          />
          <button>Add #{this.data.items.length + 1}</button>
        </form>
      </div>
    )
  }

  handleChange = e => {
    this.data.text = e.target.value
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.data.text.trim().length) {
      return
    }
    this.data.items.push({
      text: this.data.text,
      id: Date.now()
    })
    this.data.text = ''
  }
})

render(<todo-app />, 'body')
```

`this.update`를 수동으로 호출해서 data가 업데이트 된 후의 DOM을 취득할 수 있습니다.

### Use

```js
import { define, render } from 'omi'

define('my-counter', function() {
  const [count, setCount] = this.use({
    data: 0,
    effect: function() {
      document.title = `The num is ${this.data}.`
    }
  })

  const [items, setItems] = this.use({
    data: [{ text: 'Omi' }],
    effect: function() {
      console.log(`The items count is ${this.data.length}.`)
    }
  })

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>

      <ul>
        {items.map(item => {
          return <li>{item.text}</li>
        })}
      </ul>
      <button onClick={() => setItems([...items, { text: 'new item' }])}>
        add
      </button>
      <button onClick={() => setItems([])}>empty</button>
    </div>
  )
})

render(<my-counter />, 'body')
```

### SSR

Recommended class libraries:

* https://github.com/skatejs/skatejs/tree/master/packages/ssr
* https://www.youtube.com/watch?v=yT-EsESAmgA

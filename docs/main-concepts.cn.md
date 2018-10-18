## Omi Docs

- [My First Element](#my-first-element)
- [Props](#props)
- [Event](#event)
- [Custom Event](#custom-event)
- [Ref](#ref)

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

在 HTML 开发者工具里看看渲染得到的结构:

![fe](../assets/first-element.jpg)

除了渲染到 body，你可以在其他任意自定义元素中使用 `my-first-element`。


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

你也可以传任意类型的数据给 props:

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

`my-obj` 将映射到 myObj，驼峰的方式。


### Event

```js
class MyFirstElement extends WeElement {
    onClick = (evt) => {
        alert('Hello Omi!')
    }

    render() {
        return (
            <h1 onClick={this.onClick}>Hello, wrold!</h1>
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

render(<my-first-element onMyEvent={(evt) => { alert(evt.detail.name) }}></my-first-element>, 'body')
```

Tirgger custom event by `this.fire` and get the data by  `evt.detail`. 

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

Get the element by `ref={e => { this.anyNameYouWant = e }}`
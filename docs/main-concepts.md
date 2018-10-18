English | [简体中文](./main-concepts.cn.md) 

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

Look at the rendering structure in the HTML developer tool:

![fe](../assets/first-element.jpg)

You can also use `my-first-element` in any other custom element. Such as:

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

You can also transmit any type of data to props:

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

The `my-obj` will map to myObj with camel-case.

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

Add `ref={e => { this.anyNameYouWant = e }}` to attrs of the element, then you can get it by `this.anyNameYouWant`.
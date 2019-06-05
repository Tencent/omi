# Omim

Cross-Frameworks components, powered by Material Design and [Omi](https://github.com/Tencent/omi).

* [DOCS & REPL](https://tencent.github.io/omi/packages/omim/docs/build/index.html)

![](./assets/pv4.jpeg)

## Features

* Render by Custom Elements of Web Components
* Any framework can use the components, such as Omi, React, Vue and Angular 
* Support both JSX and native HTML elements 
* Each element can be used independently
* Super easy to change theme colors, fonts and rounded corners
* Extended HTML capabilities, you can pass false attributes to elements through string `'0'` or string `'flase'`

## Usage

### Via script

```html
<script src="https://unpkg.com/omi"></script>
<script src="https://unpkg.com/@omim/core@latest/button/index.js"></script>

<m-button>I am button</m-button>
```

### Via npm

``` bash
npm install @omim/core
```

Then:

```js
import '@omim/core/button'
```

Then use the element in Omi, React, Vue or Angular:

``` html
<m-button>I am button</m-button>
```

It can also be used in pure js:

```js
var button = document.createElement('m-button')
button.innerHTML = 'I am button'
document.body.append(button)
button.addEventListener('click', function () {
  console.log('Clicked!')
})

//or
//document.body.innerHTML = '<m-button>I am button</m-button>'
```

## Change Theme

```js
document.body.style.setProperty('--mdc-theme-primary', 'red')
document.body.style.setProperty('--mdc-theme-secondary', 'blue')
document.body.style.setProperty('--mdc-shape-small-component-radius', '2px')
```

All the config:

```
--mdc-theme-primary: #0072d9;
--mdc-theme-secondary: #2170b8;
--mdc-theme-error: #f5222d;
--mdc-theme-surface: #ffffff;
--mdc-theme-on-primary: #ffffff;
--mdc-theme-on-secondary: #ffffff;
--mdc-theme-on-error: #ffffff;
--mdc-theme-on-surface: #000000;
--mdc-theme-background: #ffffff;
--mdc-shape-small-component-radius: 4px;
--mdc-shape-medium-component-radius: 4px;
--mdc-shape-large-component-radius: 0px;
--mdc-typography--font-family: Roboto, sans-serif;
```

## HTML Extention 

You can set boolean prop to false from markup by 0 or false string.

```js
define('my-element', class extends WeElement {
  static defaultProps = {
    show: true
  }

 static propTypes = {
    show: Boolean
  }

  render(props) {
    ...
    ...
  }
})
```

Use:

```html
<my-element show="false"></my-element>
```

or

```html
<my-element show="0"></my-element>
```

## Contribution

### CMD

Build component:

```bash
npm run build -- component-name
```

Build all components:

```bash
npm run build-all
```

Build demo:

```bash
npm start demo-name
```

Publish:

```bash
npm publish --access public
```

To prevent duplication of development, PR submission fills in owner to lock the component.

为了防止重复开发，先 PR 提交填下 owner 锁定该组件。

| **Components**                         | **Owner**                    |     **State**                    |
| ------------------------------- | ----------------------------------- |----------------------------------- |
| button | member |done |
| icon | member |done |
| text-field | member |done |
| card | wscats |done |
| chip | hulei |done |
| dialog | zainchen |done |
| elevation | liulinboyi |done |
| image-list| member |done |
| checkbox| member |done |
| radio| lihengjun |done |
| select| member |done |
| slider| member |done |
| switch| zainchen |done |
| layout-grid| member |done |
| linear-progress| member |done |
| list| zainchen |done |
| menu| member|done |
| snackbar| member |done |
| tab | FAKER-A |done |
| tag | mtonhuang |done |
| top-app-bar| zainchen |done |
| typography| member |done |
| drawer | zainchen |done |
| badge | member |done |
| fab | member |done |
| icon-button | member |done |
| toolbar | hulei |done |
| avatar | member |done |
| tree | member |done |
| table | member |done |
| nav | member |done |
| action-sheet | member |done |
| row | member |done |
| chart bar| member |done |
| chart line| member |done |
| chart scatter| member |done |
| chart pie| member |done |
| chart doughnut| member |done |
| chart radar| member |done |
| chart polar area| member |done |
| chart bubble| member |done |
| chart bar line| member |done |
| pagination| member |done |
| color-picker| member |done |
| input (lable,button)|  | |
| input-number |  | |
| input-table |  | |
| loading |  | |
| path-progress |  | |
| popover |  | |
| rate |  | |
| step |  | |
| toast |  | |
| autocomplete |  | |
| transfer list |  | |
| bottom nav |  | |
| paper |  | |
| accordion |  | |
| toggle buttons |  | |
| welcome to add a new element! |  |
| welcome to add a new element! |  |
| welcome to add a new element! |  |

## Todo

### TypeScript Auto Complete(todo)

```jsx
interface ButtonProps {
  href?: string,
  disabled?: boolean,
  type?: 'default' | 'primary' | 'danger',
  onClick?: (e: any) => void
}

const TAG = 'm-button'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [TAG]: Omi.Props & ButtonProps
    }
  }
}

@tag(TAG)
export default class Button extends WeElement<ButtonProps, {}> {
...
...
...
```

### Omim Page Templates(todo)

[Coming!](https://github.com/Tencent/omi/tree/master/packages/omim/templates)

### Bug?(todo)

```js
import Button from '@import/core/button'
```

The above code cannot register custom elements.


```js
import '@import/core/button'
```

The above code can register custom elements.

Why??


### Links

* [material.io docs](https://material.io/develop/web/components/buttons/) 
* [material.io demo](https://material-components.github.io/material-components-web-catalog/#/) 
* [material-theme-builder](https://material-theme-builder.glitch.me/)
* [material-components-web](https://github.com/material-components/material-components-web)
* [material-icons](https://material.io/tools/icons/?style=baseline)

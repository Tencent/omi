# Omim

Material Design for the Web, powered by [Omi](https://github.com/Tencent/omi).

* [DOCS & REPL](https://tencent.github.io/omi/packages/omim/docs/build/index.html)
* [material.io docs](https://material.io/develop/web/components/buttons/) & [material.io demo](https://material-components.github.io/material-components-web-catalog/#/) 

## Features

* Simple wrapper of [material-components-web](https://github.com/material-components/material-components-web)
* Render by Custom Elements of Web Components
* Any framework can use the components, such as Omi, React, Vue and Angular 
* Support both JSX and native HTML elements 
* Each element can be used independently

## Usage

### Via script

```html
<script src="https://unpkg.com/omi"></script>
<script src="https://unpkg.com/@omim/core@0.0.1/button/index.js"></script>

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


## Contribution

### CMD

Build component:

```bash
npm run build -- component-name
```

Build demo:

```bash
npm start demo-name
```

Publish:

```bash
npm publish --access public
```
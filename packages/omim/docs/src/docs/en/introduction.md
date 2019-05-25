# Omim

Cross-Frameworks components, powered by Material Design and [Omi](https://github.com/Tencent/omi).

![](https://tencent.github.io/omi/packages/omim/assets/pv4.jpeg?a=1)

## Features

* Simple wrapper of [material-components-web](https://github.com/material-components/material-components-web)
* Render by Custom Elements of Web Components
* Any framework can use the components, such as Omi, React, Vue and Angular 
* Support both JSX and native HTML elements 
* Each element can be used independently
* Super easy to change theme colors, fonts and rounded corners

## Usage

### Via script

```html
<m-button>I am button</m-button>

<script src="https://unpkg.com/omi"></script>
<script src="https://unpkg.com/@omim/core@latest/button/index.js"></script>
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

## Change Theme Color

```js
window.OmimThemePrimary =  'red'
window.OmimThemeSecondary =  'blue'
window.OmimThemeError =  'yellow'

import '@omim/core/button'
```

or

```html
<m-button>I am button</m-button>

<script src="https://unpkg.com/omi"></script>
<script>
  window.OmimThemePrimary =  'red'
  window.OmimThemeSecondary =  'blue'
  window.OmimThemeError =  'yellow'
</script>
<script src="https://unpkg.com/@omim/core@latest/button/index.js"></script>
```

[→ Click here for more configurations](https://github.com/Tencent/omi/blob/master/packages/omim/src/theme.ts)

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

## Links

* [material.io docs](https://material.io/develop/web/components/buttons/) 
* [material.io demo](https://material-components.github.io/material-components-web-catalog/#/) 
* [material-theme-builder](https://material-theme-builder.glitch.me/)

## omi-vueify

Bridge between omi and vue.

## Install

```js
npm i omi-reactify
```

## Usage

```ts
import { omiVueify } from 'omi-reactify';

const MyComponent = omiVueify('my-component');
```

Vue Template:

```html
  <MyComponent
    :name="name"
    :obj="obj"
    @hello="handleHelloEvent"
  >
    <p>{{name}}</p>
  </MyComponent>
```
## omi-vueify

Bridge between omi and vue.

## Install

```js
npm i omi-vueify
```

## Usage

```ts
import { omiVueify } from 'omi-vueify';

const MyComponent = omiVueify('my-component', {
  // 需要转发到 web components 的方法
  methodsNames: []
});
```

Vue Template:

```html
  <MyComponent
    :name="name"
    :obj="obj"
    @hello="handleHelloEvent"
  >
    <p>{{name}}</p>
    <template #foo>
      <div>foo slot内容</div>
    </template>
    <template #bar>
      <div>bar slot内容</div>
    </template>
  </MyComponent>
```
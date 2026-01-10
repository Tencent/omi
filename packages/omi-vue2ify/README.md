## omi-vue2ify

Bridge between omi and vue 2.7.

## Install

```js
npm i omi-vue2ify
```

## Usage

```ts
import { omiVue2ify } from 'omi-vue2ify';

const MyComponent = omiVue2ify('my-component', {
  // 需要转发到 web components 的方法
  methodNames: []
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
    <template v-slot:foo>
      <div>foo slot内容</div>
    </template>
    <template v-slot:bar>
      <div>bar slot内容</div>
    </template>
  </MyComponent>
```

## Features

- Props 传递：支持基本类型和对象类型的 props 传递
- 事件监听：支持 kebab-case 风格的事件监听
- Slots：支持默认 slot 和具名 slot
- 方法暴露：支持通过 methodNames 配置暴露 Web Component 的方法

## API

### omiVue2ify(tagName, options)

- `tagName`: Web Component 的标签名
- `options`: 配置选项
  - `methodNames`: 需要暴露的方法名数组

## Requirements

- Vue 2.7.x
- omi >= 7.7.8

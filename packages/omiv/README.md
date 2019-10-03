## Omiv

Observable store system for Vue apps.

## Usage 

```jsx
import { $ } from 'omiv'
import HelloWorld from './components/HelloWorld.vue'

export default $({
  name: 'app',
  components: {
    HelloWorld
  },
  store: new class {
    data = {
      count: 1
    };
    sub = () => {
      this.data.count--
    };
    add = () => {
      this.data.count++
    }
  }
})
```

HelloWrold.vue:

```html
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="store.sub">-</button>
    <span>{{state.count}}</span>
    <button @click="store.add">+</button>
  </div>
</template>

<script>
import { $ } from 'omiv'
export default $({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  useSelf: ['count']
  //or, use will update all the children components 
  //use: ['count']
})
</script>
```

## Differences to Vuex

Vuex:

```js
data.items[1] = 'x' // is NOT reactive
data.items.length = 2 // is NOT reactive
```

Omiv:

```js
data.items[1] = 'x' // is reactive
data.items.size(2)  // is reactive
```


## License

MIT © Tencent

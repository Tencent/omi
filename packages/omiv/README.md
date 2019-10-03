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
    <button @click="store.sub">-</button><span>{{state.count}}</span><button @click="store.add">+</button>
  </div>
</template>

<script>
import {$v} from 'omiv'
export default $v({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  //or use: ['count']
  useSelf: ['count']
})
</script>
```

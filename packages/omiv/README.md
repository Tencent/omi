## Omiv

1kb store system for Vue apps.

## Usage 

```jsx
import { $ } from 'omiv'
import HelloWorld from './components/HelloWorld.vue'

export default $({
  components: {
    HelloWorld
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

Store injection:

```jsx
import { render } from 'omiv'
import App from 'App.vue'

const store = new class {
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

render(App, '#app', store)
```

## Multi-store injection

Injecting multiple stores by `render` method:

```jsx
const cs = new class {
  data = {
    count: 1
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
}

const ns = new class {
  data = {
    name: 'omiv'
  }
  rename = () => {
    this.data.name = 'omiv + vue'
  }
}

render(App, '#app', { cs, ns })
```

App.vue:

```html
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue + Omiv App"/>
  </div>
</template>

<script>
import { $ } from './omiv/omiv'
import HelloWorld from './components/HelloWorld.vue'

export default $({
  components: {
    HelloWorld
  }
})
</script>
```

HelloWorld.vue:

```html
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="store.cs.sub">-</button>
    <span>{{state.cs.count}}</span>
    <button @click="store.cs.add">+</button>
  </div>
</template>

<script>
import { $ } from '../omiv/omiv'
export default $({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  useSelf: {
    cs: ['count']
  }
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

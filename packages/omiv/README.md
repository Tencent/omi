## Omiv

1kb store system for Vue apps.

## Usage 

```html
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue + Omiv App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>
```

HelloWrold.vue:

```html
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="$store.sub">-</button>
    <span>{{$state.count}}</span>
    <button @click="$store.add">+</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  useSelf: ['count']
  //or, use will update all the children components 
  //use: ['count']
}
</script>
```

Store injection:

```jsx
import Vue from 'vue'
import Omiv, { render } from 'omiv'
import App from './App.vue'

Vue.use(Omiv)

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

You can pass options to Vue through the fourth parameter:

```js
render(App, '#app', store, {
  router
})
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


HelloWorld.vue:

```html
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="$store.cs.sub">-</button>
    <span>{{$state.cs.count}}</span>
    <button @click="$store.cs.add">+</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  useSelf: {
    cs: ['count']
  }
}
</script>
```

## Computed

```js
render(App, '#app', new class {
  data = {
    count: 1
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
  //look here
  getDoubleCount = () => {
    return this.data.count * 2
  }
})
```

Bind `getDoubleCount` to template:

```html
<div>double: {{$store.getDoubleCount()}}</div>
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

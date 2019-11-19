<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="store.sub">-</button>
    <span>{{$store.data.count}}</span>
    <button @click="$store.add">+</button>
    <div>double: {{store.getDoubleCount()}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  useSelf: ['count']
}
</script>

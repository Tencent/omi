<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="$store.cs.sub">-</button>
    <span>{{$state.cs.count}}</span>
    <button @click="$store.cs.add">+</button>
    <div>double: {{$store.cs.getDoubleCount()}}</div>
    <span>{{$state.ns.name}}</span>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

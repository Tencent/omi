<template>
  <div id="app">
    <img alt="Vue logo"
      src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue + Omiv App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  store: new (class {
    data = {
      count: 1
    }
    logPlugin = true
    sub = () => {
      this.data.count--
    }
    add = () => {
      this.data.count++
    }
  })()
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

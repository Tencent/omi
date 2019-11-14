<template>
  <div id="app">
    <Child />
  </div>
</template>

<script>
import Child from './child-for-nest3.vue'

export default {
  components: {
    Child
  },
  store: new (class {
    data = {
      count: 1
    }
    sub = () => {
      this.data.count--
    }
    add = () => {
      this.data.count++
    }
  })()
}
</script>

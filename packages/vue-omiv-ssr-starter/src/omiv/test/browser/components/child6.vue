<template>
  <div id="app">
    <span class="count">{{ state.cs.count }}</span>
    <button @click="store.cs.add">Increment</button>
  </div>
</template>

<script>
import { $ } from '../../../src/omiv'

export default $({
  store: {
    cs: new (class {
      data = {
        count: 2
      }
      sub = () => {
        this.data.count--
      }
      add = () => {
        this.data.count++
      }
    })(),
    rs: new (class {
      data = {
        count: 2
      }
      sub = () => {
        this.data.count--
      }
      add = () => {
        this.data.count++
      }
    })()
  },
  use: {
    cs: ['count']
  }
})
</script>

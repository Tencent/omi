<template>
  <div id="app">
    <span class="count">{{ state.count }}</span>
    <button id="btn" @click="store.add">Increment</button>
  </div>
</template>

<script>
import { $ } from '../../../src/omiv' 

const cs = new class {
  data = {
    count: 2
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
}

export default $({
  store: cs,
  use: ['count']
})
</script>

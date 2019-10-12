<template>
  <div id="app">
    <span class="count">{{ state.cs.count }}</span>
    <button id="btn" @click="store.cs.sub">sub</button>
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

const rs = new class {
  data = {
    name: 'omiv'
  }
  rename = () => {
    this.data.name = 'omiv + vue'
  }
}

export default $({
  store: { cs, rs },
  use: {
    cs: ['count']
  }
})
</script>

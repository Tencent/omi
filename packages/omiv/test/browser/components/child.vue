<template>
  <div>
    <span class="count">{{ state.count }}</span>
    <button @click="store.add">Increment</button>
  </div>
</template>

<script>
import { $ } from '../../../src/omiv'


console.log(111111111111)
export default $({
  use: ['count']
})
</script>

<template>
  <div id="app">
    <span class="count">{{ $state.count }}</span>
    <button id="btn" @click="$store.add">Increment</button>
  </div>
</template>

<script>
import { $ } from '../../../src/omiv'


export default $({
  use: ['count']
})
</script>

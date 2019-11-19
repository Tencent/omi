<template>
  <div id="app">
    <span class="count">{{ $state.cs.count }}</span>
    <button id="btn"
      @click="$store.cs.sub">sub</button>
  </div>
</template>

<script>
import { $ } from '../../../src/omiv'

export default $({
  use: {
    cs: ['count']
  }
})
</script>

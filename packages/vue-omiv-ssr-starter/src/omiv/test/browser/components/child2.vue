<template>
  <div id="app">
    <span class="count">{{ $store.data.count }}</span>
    <button @click="$store.add">Increment</button>
  </div>
</template>

<script>
export default {
  use: ['count']
}
</script>

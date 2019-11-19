<template>
  <div id="app">
    <span class="count">{{ $state.count }}</span>
    <button @click="$store.add">Increment</button>
  </div>
</template>

<script>
export default {
  useSelf: ['count']
}
</script>

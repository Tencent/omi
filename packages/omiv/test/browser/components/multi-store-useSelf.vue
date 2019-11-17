<template>
  <div id="app">
    <span class="count">{{ $state.cs.count }}</span>
    <button id="btn"
      @click="$store.cs.sub">sub</button>
  </div>
</template>

<script>
export default {
  useSelf: {
    cs: ['count']
  }
}
</script>

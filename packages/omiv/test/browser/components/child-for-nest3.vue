<template>
  <div>
    <span class="count">{{ $state.count }}</span>
    <button @click="$store.add">Increment</button>
  </div>
</template>

<script>
export default {
  use: ['count']
}
</script>

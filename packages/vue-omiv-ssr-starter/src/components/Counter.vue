<template>
  <div>
    <button @click='$store.increment'>Increment +1</button>
    <button @click='$store.increment1'>Decrement push 1</button>
    <h3>Count is {{ $state.count }}</h3>
    <h3>Count is {{ $state.topics.length }}</h3>
  </div>
</template>

<script>
export default {
  useSelf: ["count", "topics"],
  mounted() {
    window.a = this.$state;
    window.store = this.$store;
  }
};
</script>
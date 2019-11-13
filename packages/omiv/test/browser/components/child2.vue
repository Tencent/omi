<template>
  <div id='app'>
    <span class="count">{{ $store.count }}</span>
    <button @click="$store.add">Increment</button>
  </div>
</template>


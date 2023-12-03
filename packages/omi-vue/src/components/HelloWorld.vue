<script setup>
import { ref } from 'vue'
import './my-counter'
import { WeButton } from 'omi-weui'

WeButton.define('we-button')

defineProps({
  msg: String,
})

const count = ref(0)

const change = (e) => {
  count.value = e.detail
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <my-counter @change="change" :count="count" />
  <p>
    【OMI Counter】 
  </p>

  <div class="card">
    <we-button @click="count++"> count is {{ count }} </we-button>
    <p>
     【OMI-WeUI Button】 
    </p>

    <we-button loading> 按钮 </we-button>

    <we-button size="medium" type="default"> 按钮 </we-button>

    <we-button size="mini" type="warn"> 按钮 </we-button>
  </div>

</template>

<style scoped>
we-button {
  margin: 10px;
}
</style>
<script setup lang="ts">
import { ref } from 'vue'
import { omiVueify } from '../../../../src/index';

const MyComponent = omiVueify('my-component', ['label'], ['click']);

defineProps<{ msg: string }>()

const count = ref(0)
const name = ref('Omi')

const handleClick = () => {
  console.log('hello');
  name.value = 'Omi' + Math.random();
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <MyComponent
      :name="name"
      @hello="handleClick"
    >按钮内容</MyComponent>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
../../../../index../../../../src/index
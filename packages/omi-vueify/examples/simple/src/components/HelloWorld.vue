<script setup lang="ts">
import { ref } from 'vue';
import { omiVueify } from '../../../../src/index';

const MyComponent = omiVueify('my-component');

defineProps<{ msg: string }>();

const count = ref(0);
const name = ref('Omi');
const obj = ref({
  age: 1,
});
const handleHelloEvent = () => {
  console.log('hello');
  name.value = 'Omi' + Math.random();

  obj.value = {
    age: Math.random(),
  };
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <MyComponent
    :name="name"
    :obj="obj"
    @hello="handleHelloEvent"
  >
    <p>{{name}}</p>
    <template #foo>
      <div>foo slot内容</div>
    </template>
    <template #bar>
      <div>bar slot内容</div>
    </template>
  </MyComponent>
  <div class="card">
    <button
      @click="count++"
      type="button"
    >count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank"
    >create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
    >Vue Docs Scaling up Guide</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
../../../../index../../../../src/index
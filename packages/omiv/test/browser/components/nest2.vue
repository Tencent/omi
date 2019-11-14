<template>
  <div id="app">
    <div>{{$state.count}}</div>
    <button id="btn" @click="$store.add"></button>
    <Child :title='$state.title' />
  </div>
</template>

<script>

import Child from './pure.vue'
import { $ } from '../../../src/omiv'

export default $({
	components: {
		Child
  },
  use: ['count']
})
</script>

<template>
  <div id="app">
    <Child />
  </div>
</template>

<script>

import Child from './child.vue'
import { $ } from '../../../src/omiv'
console.log(22222222222222)
const cs = new class {
  data = {
    count: 2
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
}

export default $({
	store: cs,
	components: {
		Child
	}
})
</script>

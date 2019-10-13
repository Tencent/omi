<template>
  <div id="app">
    <Child />
  </div>
</template>

<script>

import Child from './child.vue'
import { $ } from '../../../src/omiv'

export default $({
	components: {
		Child
	}
})
</script>

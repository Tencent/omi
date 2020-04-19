<template>
  <div id="app">

		<o-checkbox label="Label"></o-checkbox>
		<br />

		<o-checkbox checked label="checked"></o-checkbox>
		<br />

		<o-checkbox @change="onChange" indeterminate label="indeterminate"></o-checkbox>
		<br />

		<o-checkbox disabled label="disabled"></o-checkbox>
		<br />
		<o-checkbox disabled checked label="disabled checked"></o-checkbox>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//import '../../../src/index.js'
import '@omiu/checkbox'

export default {
  name: 'App',
  methods: {
    onChange(evt) {
      console.log(evt.detail)
    }
  },
  components: {
    //HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

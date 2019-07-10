<script>
import 'omim/icon-button'

export default {
  name: 'HelloWorld',
  data: function() {
    return {
      result: false
    }
  },
  methods: {
    myEvent: function(evt) {
      this.result = evt.detail.isOn
    }
  }
}
</script>

<template>
  <div class="component">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <p>The switch is {{result? 'on' : 'off'}}.</p>
    <m-icon-button color="red" icons="['favorite', 'favorite_border']" @change="myEvent"></m-icon-button>
  </div>
</template>


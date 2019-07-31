<script>
import { define, WeElement, html } from 'omi'

define('my-ele', class extends WeElement {
  static propTypes = {
    name: String
  }

  clickHandle = ()=>{
   
   this.fire('myEvent', true)

  }

  render(props) {
    return (
      html`<div onClick=${this.clickHandle}>Hello, ${props.name}! </div>`
    )
  }
})


export default {
  data: function() {
    return {
      result: false
    }
  },
  methods: {
    myEvent: function(evt) {
      console.log(evt.detail)
    }
  }
}
</script>


<template>
  <div>
    <my-ele name="Omi" @myEvent="myEvent" />
  </div>
</template>
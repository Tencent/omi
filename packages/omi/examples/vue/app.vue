<script>
import { define, WeElement, html } from 'omi'

define('my-ele', class extends WeElement {
  static propTypes = {
    name: String
  }

  clickHandle = ()=>{
   
  //  this.fire('myEvent')

    this.dispatchEvent(new CustomEvent('myEvent'), { detail: 111 })
  }

  render(props) {
    return (
      html`<div onClick=${this.clickHandle}>Hello, ${props.name}! </div>`
    )
  }
})

export default{

  methods:{
    myEvent(){
 console.log('abc')

    }
  }

}

</script>


<template>
  <div>
    <my-ele name="Omi" @myEvent="myEvent" />
  </div>
</template>
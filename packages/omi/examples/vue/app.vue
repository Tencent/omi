<script>
import { define, WeElement, html } from 'omi'

define('my-ele', class extends WeElement {
  static propTypes = {
    name: String,
    user: Object
  }

  clickHandle = ()=>{
    this.fire('MyEvent', 'abc')
  }

  render(props) {
    return (
      html`<div onClick=${this.clickHandle}>Hello, ${props.name}! ${props.user.name} ${props.user.age}! </div>
      `
    )
  }
})

export default {
  created(){
    Omi.$.user = { name:'Omi' ,age: 1 }
  },
  methods: {
    myEvent: function(evt) {
      //output abc
      console.log(evt.detail)

      Omi.$.user.age = 2
      this.$refs.myEle.update()
    }
  }
}
</script>

<template>
  <my-ele ref="myEle" name="Omi" user=":user" @MyEvent="myEvent" />
</template>
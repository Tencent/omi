
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  render(h){
    return (
       <div id="app">
        <div>abc</div>
        <img alt="Vue logo" src={require('./assets/logo.png')} />
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    )
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

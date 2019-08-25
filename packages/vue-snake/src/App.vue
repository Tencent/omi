
<script>
import Index from './components/index.vue'

export default {
  name: 'app',
  components: {
    Index
	},
  render(h){
    return (
       <div id="app">
        <Index msg="Welcome to Your Vue.js App" />
      </div>
    )
  }
}
</script>

<style>
body {
  background: #efcc19;
  padding: 0;
  margin: 0;
  font: 20rpx/1 HanHei SC, PingHei, PingFang SC, STHeitiSC-Light, Helvetica Neue, Helvetica, Arial, sans-serif;
  overflow: hidden;
  cursor: default;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "liga", "kern";
  direction: ltr;
  text-align: left
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
import Game from './game.vue'
import { $ } from 'omiv'

export default $({
  useSelf: ['paused'],
  render(h) {
    const {
      turnUp,
      turnDown,
      turnLeft,
      turnRight,
      toggleSpeed,
      reset,
      pauseOrPlay
    } = this.$store

    return (
      <div class="container">
        <h1>VUE SNAKE</h1>
        <Game></Game>
        <div class="ctrl">
				<div class="btn cm-btn cm-btn-dir up" onClick={turnUp}><i></i><em></em><span>Up</span></div>
				<div class="btn cm-btn cm-btn-dir down" onClick={turnDown}><i></i><em></em><span>Down</span></div>
				<div class="btn cm-btn cm-btn-dir left" onClick={turnLeft}><i></i><em></em><span >Left</span></div>
				<div class="btn cm-btn cm-btn-dir right" onClick={turnRight}><i></i><em></em><span >Right</span></div>
				<div class="btn cm-btn space" onClick={toggleSpeed}><i></i><span >加速/减速</span></div>
				<div class="btn reset small" onClick={reset}><i ></i><span >Reset</span></div>
				<div class="btn pp small" onClick={pauseOrPlay}><i></i><span >{this.$store.data.paused ? 'Play' : 'Pause'}</span></div>
			</div>
      </div>
    )
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.r {
  float: right;
}

.l {
  float: left;
}

.clear {
  clear: both;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

h1 {
  text-align: center;
}

.ctrl {
  width: 580px;
  height: 330px;
  margin: 20px auto 0;
  position: relative;
}

.btn {
  text-align: center;
  color: #111;
  position: absolute;
  white-space: nowrap;
  line-height: 1.6;
}

.btn.small {
  font-size: 16px;
}

.btn i {
  display: block;
  position: relative;
  border: 1px solid #000;
  border-radius: 50%;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
}

.btn i:after,
.btn i:before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  box-shadow: inset 0 5px 10px hsla(0, 0%, 100%, 0.8);
}

.btn i:after {
  box-shadow: inset 0 -5px 10px rgba(0, 0, 0, 0.8);
}

.btn i._23aw:before {
  box-shadow: inset 0 -3px 6px hsla(0, 0%, 100%, 0.6);
}

.btn i._23aw:after {
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.6);
}

.btn.cm-btn i {
  background: #5a65f1;
  background: -moz-linear-gradient(top, #6e77ef, #6e77ef);
}

.btn.pp i {
  background: #2dc421;
  background: -moz-linear-gradient(top, #4bc441, #4bc441);
}

.btn.reset i {
  background: #dd1a1a;
  background: -moz-linear-gradient(top, #dc3333, #dc3333);
}

.btn.space i {
  width: 160px;
  height: 160px;
}

.btn i:active {
  transform: scale(0.9);
}

.btn.cm-btn-dir i {
  width: 100px;
  height: 100px;
}

.btn.small i {
  width: 52px;
  height: 52px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}

.btn.small i:after,
.btn.small i:before {
  box-shadow: inset 0 3px 6px hsla(0, 0%, 100%, 0.8);
}

.btn.small i:after {
  box-shadow: inset 0 -3px 6px rgba(0, 0, 0, 0.8);
}

.btn.small i._23aw:before {
  box-shadow: inset 0 -1px 2px hsla(0, 0%, 100%, 0.6);
}

.btn.small i._23aw:after {
  box-shadow: inset 0 3px 3px rgba(0, 0, 0, 0.7);
}

.btn.cm-btn-dir em {
  display: block;
  width: 0;
  height: 0;
  border: 8px solid;
  border-color: transparent transparent #111;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -8px;
}

.up {
  top: 0px;
  left: 374px;
}

.up em {
  transform: translate(0px, 70px) scale(1, 2);
}

.up span {
  position: absolute;
  top: 5px;
  left: 102px;
}

.down {
  top: 180px;
  left: 374px;
}

.down em {
  transform: translate(0px, -71px) rotate(180deg) scale(1, 2);
}

.left {
  top: 90px;
  left: 284px;
}

.left em {
  transform: translate(60px, -12px) rotate(270deg) scale(1, 2);
}

.right {
  top: 90px;
  left: 464px;
}

.right em {
  transform: translate(-60px, -12px) rotate(90deg) scale(1, 2);
}

.space {
  top: 100px;
  left: 52px;
}

.reset {
  top: 0px;
  left: 156px;
}

.pp {
  top: 0px;
  left: 60px;
}
</style>

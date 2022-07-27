import './game-screen'
import { WeElement, h, tag } from 'omi'


@tag('snake-game')
export default class extends WeElement {

  static css = `
  .r {
    float: right
  }
  
  .l {
    float: left
  }
  
  .clear {
    clear: both
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none
  }
  
  h1{
    text-align: center
  }
  
  .ctrl {
    width: 362px;
    height: 175px;
    padding-top: 10px;
    margin: 0 auto;
    background: #efcc19
  }

  .ctrl-wrap {
    position: relative;
    left: 35px
  }
  
  .btn {
    text-align: center;
    color: #111;
    position: absolute;
    white-space: nowrap;
    line-height: 1.6
  }
  
  .btn.small {
    font-size: 8px
  }
  
  
  
  .btn i {
    display: block;
    position: relative;
    border: 1px solid #000;
    border-radius: 50%;
    box-shadow: 0 3px 3px rgba(0, 0, 0, .2)
  }
  
  .btn i:after,
  .btn i:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    box-shadow: inset 0 5px 10px hsla(0, 0%, 100%, .8)
  }
  
  .btn i:after {
    box-shadow: inset 0 -5px 10px rgba(0, 0, 0, .8)
  }
  
  .btn i._23aw:before {
    box-shadow: inset 0 -3px 6px hsla(0, 0%, 100%, .6)
  }
  
  .btn i._23aw:after {
    box-shadow: inset 0 5px 5px rgba(0, 0, 0, .6)
  }
  
  .btn.cm-btn i {
    background: #5a65f1;
    background: -moz-linear-gradient(top, #6e77ef, #6e77ef)
  }
  
  .btn.pp i {
    background: #2dc421;
    background: -moz-linear-gradient(top, #4bc441, #4bc441)
  }
  
  .btn.reset i {
    background: #dd1a1a;
    background: -moz-linear-gradient(top, #dc3333, #dc3333)
  }
  
  .btn.space i {
    width: 80px;
    height: 80px
  }
  
  
  .btn i:active {
    transform: scale(0.9);
  }
  
  
  .btn.cm-btn-dir i {
    width: 50px;
    height: 50px
  }
  
  .btn.small i {
    width: 26px;
    height: 26px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, .2)
  }
  
  .btn.small i:after,
  .btn.small i:before {
    box-shadow: inset 0 3px 6px hsla(0, 0%, 100%, .8)
  }
  
  .btn.small i:after {
    box-shadow: inset 0 -3px 6px rgba(0, 0, 0, .8)
  }
  
  .btn.small i._23aw:before {
    box-shadow: inset 0 -1px 2px hsla(0, 0%, 100%, .6)
  }
  
  .btn.small i._23aw:after {
    box-shadow: inset 0 3px 3px rgba(0, 0, 0, .7)
  }
  
  .btn.cm-btn-dir em {
    display: block;
    width: 0;
    height: 0;
    border: 4px solid;
    border-color: transparent transparent #111;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -9px 0 0 -4px
  }
  
  
  .up {
    top: 0px; 
    left: 187px;
  }
  
  .up em{
    transform: translate(0px, 35px) scale(1, 2);
  }
  
  
  .up span {
    position: absolute;
    top: 2.5px;
    left: 51px
  }
  
  .down{
    top: 90px; 
    left: 187px;
  }
  
  .down em{
    transform: translate(0px, -35px) rotate(180deg) scale(1, 2);
  }
  
  .left{
    top: 45px; 
    left: 142px;
  }
  
  .left em{
    transform: translate(30px, -6px) rotate(270deg) scale(1, 2);
  }
  
  .right{
    top: 45px; left: 232px;
  }
  
  .right em{
    transform: translate(-30px, -6px) rotate(90deg) scale(1, 2);
  }
  
  .space{
    top: 50px; 
    left: 26px;
  }
  
  .reset{
    top: 0px; 
    left: 78px;
  }
  
  .pp{
    top: 0px; 
    left: 30px;
  }
  
  `

  store

  install() {
    this.store.ui.index = this
  }

  render() {
    const { store } = this

    return (
      <div class="container">
        <game-screen></game-screen>

        <div class="ctrl">
          <div class="ctrl-wrap">
            <div class="btn cm-btn cm-btn-dir up" onClick={store.turnUp}><i></i><em></em><span>Up</span></div>
            <div class="btn cm-btn cm-btn-dir down" onClick={store.turnDown}><i></i><em></em><span>Down</span></div>
            <div class="btn cm-btn cm-btn-dir left" onClick={store.turnLeft}><i></i><em></em><span >Left</span></div>
            <div class="btn cm-btn cm-btn-dir right" onClick={store.turnRight}><i></i><em></em><span >Right</span></div>
            <div class="btn cm-btn space" onClick={store.toggleSpeed}><i></i><span >加速/减速</span></div>
            <div class="btn reset small" onClick={store.reset}><i ></i><span >Reset</span></div>
            <div class="btn pp small" onClick={store.pauseOrPlay}><i></i><span >{store.data.paused ? 'Play' : 'Pause'}</span></div>
          </div>
        </div>
      </div>
    )
  }
}


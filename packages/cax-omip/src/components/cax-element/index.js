import cax from './cax'
import { define, WeElement } from 'omi'
import './index.css'

define('cax-element', class extends WeElement {


  data = {
    width: 0,
    height: 0,
    id: 'caxCanvas' + cax.caxCanvasId++,
    index: cax.caxCanvasId - 1
  }


  getCaxCanvasId() {
    return this.data.id
  }

  touchStart = (evt) => {
    this.$scope.stage.touchStartHandler(evt)
    this.$scope.stage.touchStart && this.$scope.stage.touchStart(evt)
  }

  touchMove= (evt) => {
    this.$scope.stage.touchMoveHandler(evt)
    this.$scope.stage.touchMove && this.$scope.stage.touchMove(evt)
  }

  touchEnd= (evt) => {
    this.$scope.stage.touchEndHandler(evt)
    this.$scope.stage.touchEnd && this.$scope.stage.touchEnd(evt)
  }

  render(){
    return <canvas 
    class="cax-canvas"
    bindtouchstart={this.touchStart} 
    bindtouchmove={this.touchMove}
    bindtouchend={this.touchEnd} 
    canvas-id={id}
    style="width: {{width}}px; height: {{height}}px;">
    <slot></slot>
</canvas>
  }

})

import cax from './index'
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

  touchStart(evt) {
    this.stage.touchStartHandler(evt)
    this.stage.touchStart && this.stage.touchStart(evt)
  }

  touchMove(evt) {
    this.stage.touchMoveHandler(evt)
    this.stage.touchMove && this.stage.touchMove(evt)
  }

  touchEnd(evt) {
    this.stage.touchEndHandler(evt)
    this.stage.touchEnd && this.stage.touchEnd(evt)
  }

  render(){
    return <canvas 
    class="cax-canvas"
    bindtouchstart="touchStart" 
    bindtouchmove="touchMove" 
    bindtouchend="touchEnd" 
    canvas-id="{{ id }}" 
    style="border-top: 1px solid;border-bottom: 1px solid;width: {{width}}px; height: {{height}}px;">
    <slot></slot>
</canvas>
  }

})

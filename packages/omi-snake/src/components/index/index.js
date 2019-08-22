
import { define, WeElement } from 'omi'
import '../game'


define('my-index', class extends WeElement{

  static css = require('./_index.css')

  render(){
    const $ = this.store
    
    return (
      <div class="container">
        <my-game></my-game>
  
        <div class="ctrl" style="margin-top: 20px;">
          <div class="btn cm-btn cm-btn-dir" onClick={$.turnUp} style="top: 0px; left: 374px;"><i class=""></i><em style="transform: translate(0px, 63px) scale(1, 2);"></em><span class="_1zCL">Up</span></div>
          <div class="btn cm-btn cm-btn-dir" onClick={$.turnDown} style="top: 180px; left: 374px;"><i class=""></i><em style="transform: translate(0px, -71px) rotate(180deg) scale(1, 2);"></em><span class="">Down</span></div>
          <div class="btn cm-btn cm-btn-dir" onClick={$.turnLeft} style="top: 90px; left: 284px;"><i class=""></i><em style="transform: translate(60px, -12px) rotate(270deg) scale(1, 2);"></em><span class="">Left</span></div>
          <div class="btn cm-btn cm-btn-dir" onClick={$.turnRight} style="top: 90px; left: 464px;"><i class=""></i><em style="transform: translate(-60px, -12px) rotate(90deg) scale(1, 2);"></em><span class="">Right</span></div>
          <div class="btn cm-btn space" onClick={$.toggleSpeed} style="top: 100px; left: 52px;"><i class=""></i><span class="">加速/减速</span></div>
          <div class="btn dg small" onClick={$.reset} style="top: 0px; left: 156px;"><i class=""></i><span class="">Reset(R)</span></div>
          {/* <div class="btn RBZg small" style="top: 0px; left: 106px;"><i class=""></i><span class="">Sound(S)</span></div> */}
          <div class="btn RBZg small" onClick={$.pauseOrPlay} style="top: 0px; left: 60px;"><i class=""></i><span class="">Pause/Play</span></div>
        </div>
      </div>
    )
  }
})


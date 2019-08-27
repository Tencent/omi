
import { h } from 'preact'
import Game from '../game'
import './_index.css'

const Index = ({store}) => {
  const $ = store

  return (
    <div class="container">
      <h1>PREACT SNAKE</h1>

      <Game map={$.data.map} />

      <div class="ctrl">
        <div class="btn cm-btn cm-btn-dir up" onClick={$.turnUp}><i></i><em></em><span>Up</span></div>
        <div class="btn cm-btn cm-btn-dir down" onClick={$.turnDown}><i></i><em></em><span>Down</span></div>
        <div class="btn cm-btn cm-btn-dir left" onClick={$.turnLeft}><i></i><em></em><span >Left</span></div>
        <div class="btn cm-btn cm-btn-dir right" onClick={$.turnRight}><i></i><em></em><span >Right</span></div>
        <div class="btn cm-btn space" onClick={$.toggleSpeed}><i></i><span >加速/减速</span></div>
        <div class="btn reset small" onClick={$.reset}><i ></i><span >Reset</span></div>
        <div class="btn pp small" onClick={$.pauseOrPlay}><i></i><span >{$.data.paused ? 'Play' : 'Pause'}</span></div>
      </div>
    </div>
  )
}

export default Index

## Preact + Omis + Preact-CSS Snake Demo

![](https://github.com/Tencent/omi/raw/master/assets/snake.jpg)

## Main Code

```jsx
import * as Preact from 'preact'
import 'preact-css'
import Index from './components/index'
import './assets/index.css'
import store from './stores/index'
import { render } from 'omis'

render(Preact.render, <Index />, '#root', store)
```

```jsx
import * as Preact from 'preact'
import Game from '../game'

import { $ } from 'omis'
import { rpx } from '../../utils/css'


export default $({
  render() {
    const { store } = $
    const { paused } = store.data
    return <div className="container">
      <h1>Preact + Omis + Preact-CSS Snake Demo</h1>

      <Game></Game>

      <div className="ctrl">
        <div className="btn cm-btn cm-btn-dir up" onClick={store.turnUp}><i></i><em></em><span>Up</span></div>
        <div className="btn cm-btn cm-btn-dir down" onClick={store.turnDown}><i></i><em></em><span>Down</span></div>
        <div className="btn cm-btn cm-btn-dir left" onClick={store.turnLeft}><i></i><em></em><span >Left</span></div>
        <div className="btn cm-btn cm-btn-dir right" onClick={store.turnRight}><i></i><em></em><span >Right</span></div>
        <div className="btn cm-btn space" onClick={store.toggleSpeed}><i></i><span >Gear</span></div>
        <div className="btn reset small" onClick={store.reset}><i ></i><span >Reset</span></div>
        <div className="btn pp small" onClick={store.pauseOrPlay}><i></i><span >{paused ? 'Play' : 'Pause'}</span></div>
      </div>
    </div>
  },
  css: rpx(require('./_index.css')),
  useSelf: ['paused']
})
```

```jsx
import * as Preact from 'preact'
import { $ } from 'omis'
import { rpx } from '../../utils/css'

export default $({
  render() {
    const { map } = $.store.data
    return <div className="game">
      {map.map(row => {
        return <p>
          {row.map(col => {
            if (col) {
              return <b className='s'></b>
            }
            return <b></b>
          })}
        </p>
      })}
    </div>
  },
  css: rpx(require('./_index.css')),
  use: ['map']
})
```

## License

MIT 


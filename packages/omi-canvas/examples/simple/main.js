
import {render, define, WeElement} from 'omi'
import '../../src/index'

import omiUrl from './omi.jpg'

define('my-app', class extends WeElement {

  install() {

  }

  render() {
    return (
      <div>
        <h1>Omi</h1>
        <omi-canvas width={400} height={400}>
          <text text='Hello omi' />
          <bitmap src={omiUrl} />
        </omi-canvas>
      </div>
    )
  }
})

render(<my-app />, "body")

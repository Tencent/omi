
import { render, define, WeElement } from 'omi'
import '../../src/index'
import omiUrl from './omi.jpg'

define('my-app', class extends WeElement {
  static observe = true

  data = {
    scale: 0.5
  }

  css() {
    return `
        sprite.block{
          width: 100px;
          height: 100px;
          background-color: red;
          --sprite-x: 50;
          --sprite-y: 300px;
          --sprite-anchor: 0, 0.5;
        }`
  }

  onClick = (evt) => {
    // console.log(evt)
    this.data.scale = 0.5 + Math.random() * 0.1
  }

  render() {
    return (
      <div>
        <h1>Omi</h1>
        <omi-spritejs viewport={[600, 600]}>
          <layer id="fglayer">
            <group>
              <sprite class="block"></sprite>
              <sprite x={300} y={300} anchor={[0.5, 0.5]} textures={omiUrl}
                scale={this.data.scale}
                onClick={this.onClick}
              ></sprite>
            </group>
          </layer>
        </omi-spritejs>
      </div>
    )
  }
})

render(<my-app />, 'body')

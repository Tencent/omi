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
        div{
          width: 400px;
          height: 400px;
          text-align: center;
        }
        label {
          font-size: 3rem;
          --sprite-anchor: 0.5, 0.5;
          --sprite-bgcolor: #aaa;
        }
        sprite.block{
          width: 100px;
          height: 100px;
          background-color: red;
          --sprite-x: 100;
          --sprite-y: 400px;
          --sprite-anchor: 0, 0.5;
        }`
  }

  onClick = (evt) => {
    console.log(evt)
    this.data.scale = 0.5 + Math.random() * 0.1
  }

  render() {
    return (
      <div>
        <h1>Omi</h1>
        <omi-sprite viewport={[400, 400]} resolution="flex">
          <layer id="fglayer">
            <group>
              <label text="SpriteJS" y={100} x={400}></label>
              <sprite class="block"></sprite>
              <sprite x={400} y={400} anchor={[0.5, 0.5]} textures={omiUrl}
                scale={this.data.scale}
                onClick={this.onClick}
              ></sprite>
            </group>
          </layer>
        </omi-sprite>
      </div>
    )
  }
})

render(<my-app />, 'body')

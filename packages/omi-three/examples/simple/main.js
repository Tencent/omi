import { render, define, WeElement } from 'omi'
import '../../src/index.js'

define('my-app', class extends WeElement {

  cubeRotation = {
    x: 10,
    y: 10
  }

  onTick = () => {
    this.cubeRotation.x += 0.01;
    this.cubeRotation.y += 0.01;
    //this.update()
  }

  render() {
    return (
      <div>
        <h1>Omi-Three</h1>
        <omi-three
          onTick={this.onTick}
          width={window.innerWidth}
          height={window.innerHeight} >
          <perspective-camera
            id="camera"
            fov="75"
            aspect=":aspect"
            near="0.1"
            far="1000"
            z="5">
          </perspective-camera>
          <group alpha={0.5} y={270}>
            <mesh rotation={this.cubeRotation} id="cube">
              <box-geometry
                width="1"
                height="1"
                depth="1">
              </box-geometry >
              <base-material
                color="0x00ff00">
              </base-material>
            </mesh>
          </group>
        </omi-three>
      </div>
    )
  }
})

render(<my-app />, 'body')

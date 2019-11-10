import { render, define, WeElement } from 'omi'
import '../../src/index.js'

define('my-app', class extends WeElement {

  data = {
    scale: 0.5
  }

  onClick = (evt) => {
    this.data.scale = 0.5 + Math.random() * 0.1
  }

  installed(){
    console.log(this.cube)
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

  }

  render() {
    return (
      <div>
        <h1>Omi-Three</h1>
        <omi-three width={window.innerWidth} height={window.innerHeight} >
          <perspective-camera
            id="camera"
            fov="75"
            aspect=":aspect"
            near="0.1"
            far="1000"
            z="5">
          </perspective-camera>
          <group alpha={0.5} y={270}>
            <mesh  ref={_=>this.cube=_} id="cube">
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

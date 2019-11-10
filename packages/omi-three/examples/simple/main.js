import { render, define, WeElement } from 'omi'
import '../../src/index.js'
import omiLogo from './logo.png'

define('my-app', class extends WeElement {

  cubeRotation = {
    x: 10,
    y: 10
  }

  installed() {

    setInterval(() => {
      this.cubeRotation.x += 0.01;
      this.cubeRotation.y += 0.01;
      this.ot.update()
    }, 16)

  }

  render() {
    return (
      <div>
        <h1>Omi-Three</h1>
        <omi-three
          ref={_ => this.ot = _}
          width={window.innerWidth}
          height={window.innerHeight} >
          <perspective-camera
            fov={75}
            aspect={window.innerWidth / window.innerHeight}
            near={0.1}
            far={1000}
            z={5}>
          </perspective-camera>
          <group alpha={0.5} y={270}>
            <mesh rotation={this.cubeRotation}>
              <box-geometry
                width={1}
                height={1}
                depth={1}>
              </box-geometry >
              <phong-material
                color={0xffffff}
                map={omiLogo}
                >
              </phong-material>
            </mesh>
          </group>
        </omi-three>
      </div>
    )
  }
})

render(<my-app />, 'body')

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

      <omi-three ref={_ => this.ot = _}
        width={window.innerWidth}
        height={window.innerHeight} >

        <perspective-camera
          fov={75}
          aspect={window.innerWidth / window.innerHeight}
          near={0.1} far={1000} z={5}>
        </perspective-camera>

        <point-light
          color={0xffffff} intensity={1} distance={1000}
          position={{
            x: 110,
            y: 110,
            z: 110
          }}
          castShadow={true}>
        </point-light>

        <ambient-light color={0x404040}></ambient-light>

        <group alpha={0.5} y={270}>
          <mesh rotation={this.cubeRotation}>
            <box-geometry
              width={1} height={1} depth={1}>
            </box-geometry >
            <phong-material map={omiLogo}>
            </phong-material>
          </mesh>
        </group>

      </omi-three>

    )
  }
})

render(<my-app />, 'body')

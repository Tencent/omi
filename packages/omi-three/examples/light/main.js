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

        <point-light color={0xffffff} intensity={1} distance={100}>
        </point-light>
        <point-light color={0xff0040} intensity={2} distance={20}>
        </point-light>
        <point-light color={0x0040ff} intensity={2} distance={20}>
        </point-light>
        <point-light color={0x80ff80} intensity={2} distance={20}>
        </point-light>
        <point-light color={0xffaa00} intensity={2} distance={20}>
        </point-light>

        <ambient-light color={0x404040}></ambient-light>

        <text font={font} size={5} height={1} curveSegments={20}>OMIJS.ORG</text>

      </omi-three>

    )
  }
})

render(<my-app />, 'body')

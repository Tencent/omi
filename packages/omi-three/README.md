# Omi-Three

## Usage

```jsx
import { render, define, WeElement } from 'omi'
import 'omi-three'
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

        <point-light
          color={0xffffff}
          intensity={1}
          distance={1000}
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
              width={1}
              height={1}
              depth={1}>
            </box-geometry >
            <phong-material
              map={omiLogo}>
            </phong-material>
          </mesh>
        </group>

      </omi-three>

    )
  }
})

render(<my-app />, 'body')
```
<!-- 
Same as:

```html
<html>

<head>
  <title>My first three.js app</title>
  <style>
    body {
      margin: 0;
    }

    canvas {
      width: 100%;
      height: 100%
    }

  </style>
</head>

<body>
  <script src="https://unpkg.com/three@0.110.0/build/three.js"></script>
  <script>
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00
    });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

  </script>
</body>

</html>
``` -->

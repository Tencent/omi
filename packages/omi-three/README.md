# Omi-Three

```html
<script>
Omi.$.aspect = window.innerWidth / window.innerHeight
</script>
<o-perspective-camera
    id="camera"
    fov="75"  
    aspect=":aspect"
    near="0.1"  
    far="1000"
    z="5">
</o-perspective-camera>

<o-scene id="scene" >
  <o-mesh id="cube">
    <o-box-geometry 
      width="1" 
      height="1" 
      depth="1">
    </o-box-geometry >
    <o-base-material 
      color="0x00ff00">
    </o-base-material>
  <o-mesh>
</o-scene>
```

```js
import o3 from 'omi-three'

const cube = o3.query('#cube')
const scene = o3.query('#scene')
const camera = o3.query('#camera')

const animate = function () {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}
```

```html
<html>
	<head>
		<title>My first three.js app</title>
		<style>
			body { margin: 0; }
			canvas { width: 100%; height: 100% }
		</style>
	</head>
	<body>
		<script src="js/three.js"></script>
		<script>
			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();
		</script>
	</body>
</html>
```

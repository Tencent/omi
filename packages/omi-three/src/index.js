import { WeElement, define } from 'omi'
import * as THREE from 'three'
import ObjectPool from './object-pool'

define('omi-three', class extends WeElement {

  install() {

  }

  installed() {

    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas
    })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this._objectPool = new ObjectPool()
    render(this.renderer, this.props.children, this.scene, this._objectPool)
  }

  updated() {
    update(this.props.children, this.scene, this._objectPool)
  }

  render(props) {
    return (
      <canvas
        style={props.css}
        ref={e => { this.canvas = e }}
        width={props.width}
        height={props.height}>
      </canvas>
    )
  }
})


function render(renderer, children, scene, pool) {
  children.forEach(child => {
    const obj = pool.getObj(child.nodeName, child, scene)
    console.log(obj)
    obj && scene.add(obj)
  })


  //renderer.render(scene, scene.camera);

  animate(renderer, scene, scene.camera)
}

const animate = function (renderer, scene, camera) {

  requestAnimationFrame( ()=>{
    animate(renderer, scene, camera)
  } );



  renderer.render( scene, camera );
};



function update(children, scene, pool) {
  scene.empty()
  pool.reset()
  render(children, scene, pool)
}

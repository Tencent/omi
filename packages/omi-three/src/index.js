import { WeElement, define } from 'omi'
import * as THREE from 'three'
import ObjectPool from './object-pool'

define('omi-three', class extends WeElement {


  installed() {

    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas
    })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.pool = new ObjectPool()
    this.threeRender()

    const scene = this.scene
    var light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 10, 0);
    light.castShadow = true; // default false
    scene.add(light);

    var light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);
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

  threeRender() {
    this.props.children.forEach(child => {
      const obj = this.pool.getObj(child.nodeName, child, this.scene)
      obj && this.scene.add(obj)
    })

    this.renderer.render(this.scene, this.scene.camera)

  }


  update() {
    //this.scene.empty()
    this.pool.reset()
    this.threeRender(this.props.children, this.scene, this.pool)
  }
})


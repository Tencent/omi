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
    while (this.scene.children.length > 0) {
      this.scene.remove(this.scene.children[0]);
    }

    this.pool.reset()
    this.threeRender(this.props.children, this.scene, this.pool)
  }
})


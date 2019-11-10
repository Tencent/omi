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
    this._objectPool = new ObjectPool()
    this.threeRender( this.props.children, this.scene, this._objectPool)
  }

  updated() {
    this.threeUpdate(this.props.children, this.scene)
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

  threeRender(children, scene, pool) {
    children.forEach(child => {
      const obj = pool.getObj(child.nodeName, child, scene)
      obj && scene.add(obj)
    })

    this.animate()
  }

  animate(){
    this.fire('Tick')
    requestAnimationFrame( _=>this.animate() );
    this.renderer.render( this.scene, this.scene.camera );
  }

  threeUpdate(children, scene) {
    //this.scene.empty()
    this._objectPool.reset()
    this.threeRender(children, scene, this._objectPool)
  }

})


import { WeElement, define } from 'omi'
import cax from 'cax'
import ObjectPool from './object-pool'


define('omi-canvas', class extends WeElement {
  //static noSlot = true

  install() {

  }

  installed() {
    this.stage = new cax.Stage(this.canvas)
    this._objectPool = new ObjectPool()
    render(this.props.children, this.stage, this._objectPool)
  }

  afterUpdate() {
    update(this.props.children, this.stage, this._objectPool)
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


function render(children, stage, pool) {
  children.forEach(child => {
    stage.add(pool.getObj(child.nodeName, child, stage))
  })
  stage.update()
}


function update(children, stage, pool) {
  stage.empty()
  pool.reset()
  render(children, stage, pool)
}

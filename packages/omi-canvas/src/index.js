import { WeElement, define } from 'omi'
import cax from 'cax'

define('omi-canvas', class extends WeElement {
  static noSlot = true

  install() {

  }

  installed() {
    this.stage = new cax.Stage(this.canvas)
    const text = new cax.Text('Hello omi-canvas', {
      font: '20px Arial',
      color: '#ff7700',
      baseline: 'top'
    })
    this.stage.add(text)
    this.stage.update()
  }

  css() {
    return `canvas{ border: 1px solid #ccc; }`
  }

  render(props) {
    return (
      <canvas
        ref={e => { this.canvas = e }}
        width={props.width}
        height={props.height}>
      </canvas>
    )
  }
})

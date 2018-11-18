import { WeElement, define } from 'omi'
import cax from 'cax'

const caxProps = ['x', 'y', 'scaleX', 'scaleY', 'scale', 'rotation', 'skewX', 'skewY', 'originX', 'originY', 'alpha', 'compositeOperation', 'cursor', 'fixed', 'shadow']

define('omi-canvas', class extends WeElement {
  //static noSlot = true

  install() {

  }

  installed() {
    this.stage = new cax.Stage(this.canvas)
    render(this.props.children, this.stage)
  }

  afterUpdate(){
    //rerender
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


function render(children, stage) {
  children.forEach(child => {
    const attr = child.attributes
    switch (child.nodeName) {
      case 'text':
        const text = new cax.Text(attr.text, {
          font: attr.font,
          color: attr.color,
          baseline: attr.baseline
        })
        mix(attr, text)
        stage.add(text)
        break
      case 'bitmap':
        const bitmap = new cax.Bitmap(attr.src, () => {
          stage.update()
        })
        stage.add(bitmap)
        mix(attr, bitmap)
    }
  })

  stage.update()
}

function mix(attr, obj) {
  caxProps.forEach(prop => {
    if (attr.hasOwnProperty(prop)) {
      obj[prop] = attr[prop]
    }
  })

  Object.keys(attr).forEach(key => {
    if (key[0] == 'o' && key[1] == 'n') {
      const type = key.toLowerCase().substring(2)
      obj.on(type, attr[key])
    }
  })
}

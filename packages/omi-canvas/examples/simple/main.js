
import { render, define, WeElement } from 'omi'
import '../../src/index'
import omiUrl from './omi.jpg'

define('my-app', class extends WeElement {
  static observe = true

  data = {
    scale: 0.5
  }

  css() {
    return `
        div{
          text-align: center;
        }`
  }

  onClick = (evt) => {
    this.data.scale = 0.5 + Math.random() * 0.1
  }

  render() {
    return (
      <div>
        <h1>Omi</h1>
        <omi-canvas width={400} height={400} css='border: 1px solid #ccc;'>
          <text
            text='Hello omi-canvas'
            font='30px Segoe UI'
            color='#ff7700'
            baseline='top'
            x={80}
            y={100}
          />
          <bitmap
            onClick={this.onClick}
            src={omiUrl}
            cursor='pointer'
            scale={this.data.scale}
            x={130}
            y={140}
          />
          <group alpha={0.5} y={270}>
            <text
              text='I am in a group.'
              font='30px Segoe UI'
              color='#ff7700'
              baseline='top'
              x={80}
            />
          </group>
        </omi-canvas>
      </div>
    )
  }
})

render(<my-app />, 'body')

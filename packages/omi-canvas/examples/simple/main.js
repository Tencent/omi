
import { render, define, WeElement } from 'omi'
import '../../src/index'
import omiUrl from './omi.jpg'

define('my-app', class extends WeElement {

  css() {
    return `
        div{
          text-align: center;
        }`
  }

  onClick = (evt)=> {
    alert('Hello omi-canvas')
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
            scale={0.5}
            x={130}
            y={140}
          />
        </omi-canvas>
      </div>
    )
  }
})

render(<my-app />, 'body')

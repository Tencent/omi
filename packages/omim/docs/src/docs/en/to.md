## To 

Animate anything with m-to tag.

## Usage in Omi

```jsx
<m-to 
  from={{ number: 1 }} 
  to={{ number: 100 }} 
  duration={600}
  easing='bounce-in' 
  out={this.out} 
  delay={200}
  onProgress={this.onProgress}
  onBegin={this.onProgress}
  onEnd={this.onEnd}>
</m-to>
```

## API

### Props

```jsx
{
  from: object;
  to: object;
  duration: number;
  out: object;
  delay: number;
  //easing graphs http://tweenjs.github.io/tween.js/examples/03_graphs.html
  easing: "quadratic-in" | "quadratic-out" | "quadratic-in-out" | "cubic-in" | "cubic-out" | "cubic-in-out" | "quartic-in" | "quartic-out" | "quartic-in-out" | "quintic-in" | "quintic-out" | "quintic-in-out" | "sinusoidal-in" | "sinusoidal-out" | "sinusoidal-in-out" | "exponential-in" | "exponential-out" | "exponential-in-out" | "circular-in" | "circular-out" | "circular-in-out" | "elastic-in" | "elastic-out" | "elastic-in-out" | "back-in" | "back-out" | "back-in-out" | "bounce-in" | "bounce-out" | "bounce-in-out";
  start: boolean;
}
```

## Demo

```jsx
import { define, WeElement, render, h } from 'omi'
import 'omim/to'

define('my-app', class extends WeElement {

  number = 2

  from = this.number
  to = this.number
  out = {
    number: this.number
  }

  onInput = (e) => {
    this.to = Number(e.target.value)
    this.from = this.out.number
    this.number = this.to
    this.update()
  }

  onProgress = () => {
    this.update()
  }

  onClick = () => {
    this.start = true
    this.update()
  }

  start = false
  outs = [{ width: 10 }, { width: 10 }, { width: 10 }, { width: 10 }, { width: 10 }]

  render() {

    return (
      <div>
        <h3>Simple</h3>
        <input type='number' onInput={this.onInput} value={this.number} step={2}></input>
        <div>{this.out.number.toFixed(0)}</div>
        <div>{this.out.number.toFixed(0)}*{this.out.number.toFixed(0)}={(this.out.number * this.out.number).toFixed(0)}</div>
        <div style={{ width: this.out.number * 5 + 'px', background: 'red', height: '5px' }}></div>
        <m-to from={{ number: this.from }} easing='bounce-in' onProgress={this.onProgress} to={{ number: this.to }} out={this.out} duration={1000}>
        </m-to>

        <h3>Group</h3>

        {this.outs.map((item, index) =>
          <div style={{ marginTop: '5px', width: this.outs[index].width + 'px', background: 'red', height: '5px' }}></div>
        )}
        <button onClick={this.onClick}>Play</button>
        {this.outs.map((item, index) =>
          <m-to from={{ width: 10 }} start={this.start} easing="bounce-out" delay={100 * index} onProgress={this.onProgress} to={{ width: 200 }} out={this.outs[index]} duration={600}>
          </m-to>
        )}
      </div>
    )
  }
})

render(<my-app />, 'body')
```
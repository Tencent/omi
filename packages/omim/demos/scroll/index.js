import '../../src/scroll/index.tsx'
import { render, h, define, WeElement } from 'omi'

define('my-app', class extends WeElement {
  static css = `
  .touchArea{
    width:200px;
    height:300px;
    overflow: hidden;
  }
  `
  render() {
    return <div>
      <m-scroll min={-500} max={0} step={50} onEnd={this.onEnd}>
        <div class='touchArea'>
          <ul>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
            <li>Item5</li>
            <li>Item6</li>
            <li>Item7</li>
            <li>Item8</li>
            <li>Item9</li>
            <li>Item10</li>
            <li>Item11</li>
            <li>Item12</li>
            <li>Item13</li>
            <li>Item14</li>
            <li>Item15</li>
          </ul>
        </div>
      </m-scroll>

    </div>

  }
})


render(<my-app />, 'body')
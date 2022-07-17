@tag('my-app')
class MyApp extends WeElement {
  number = 2
  from = this.number
  to = this.number
  out = {
    number: this.number
  }
  start = false
  outs = [{ width: 10 }, { width: 10 }, { width: 10 }, { width: 10 }, { width: 10 }]

  onInput = (e) => {
    this.to = Number(e.target.value)
    this.from = this.out.number
    this.number = this.to
    this.update()
  }

  onProgress = () => {
    this.update()
  }

  play = () => {
    this.start = true
    this.update()
  }

  reset = () => {
    this.start = false
    this.outs.forEach((out, index) => {
      this[`$to${index}`].stop()
    })
    this.outs = [{ width: 10 }, { width: 10 }, { width: 10 }, { width: 10 }, { width: 10 }]
    this.update()
  }

  render() {
    return (
      <div>
        <h3>Simple</h3>
        <input type='number' onInput={this.onInput} value={this.number} step={2}></input>
        <div>{this.out.number.toFixed(0)}</div>
        <div>{this.out.number.toFixed(0)}*{this.out.number.toFixed(0)}={(this.out.number * this.out.number).toFixed(0)}</div>
        <div style={{ width: this.out.number * 5 + 'px', background: 'red', height: '5px' }}></div>
        <o-to from={{ number: this.from }} easing='bounce-in' onProgress={this.onProgress} to={{ number: this.to }} out={this.out} duration={1000}>
        </o-to>

        <h3>Group</h3>
        {this.outs.map((item, index) =>
          <div style={{ marginTop: '5px', width: this.outs[index].width + 'px', background: 'red', height: '5px' }}></div>
        )}
        <button onClick={this.play}>Play</button> <button onClick={this.reset}>Reset</button>
        {this.outs.map((item, index) =>
          <o-to ref={e => this[`$to${index}`] = e} from={{ width: 10 }} start={this.start} easing="bounce-out" delay={100 * index} onProgress={this.onProgress} to={{ width: 200 }} out={this.outs[index]} duration={600}>
          </o-to>
        )}
      </div>
    )
  }
}

render(<my-app />, 'body')
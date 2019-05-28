import { h, WeElement, tag } from 'omi'
import Chart from 'chart.js'

interface Props {
  data: object,
  options: object,
  width: number,
  height: number,
  horizontal?: string
}

class ChartBase extends WeElement<Props, {}> {
  chart: Chart
  canvas: HTMLCanvasElement

  receiveProps(props) {
    this.chart.data = props.data
    this.chart.options = props.options
    this.chart.update()
  }

  _refCanvas = (e) => { this.canvas = e }

  render(props) {
    return (
      <div style={{ width: props.width + 'px', height: props.height + 'px' }}>
        <canvas ref={this._refCanvas}>
        </canvas>
      </div>
    )
  }
}

@tag('c-bar')
class Bar extends ChartBase {
  chart: Chart
  canvas: HTMLCanvasElement
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: this.props.horizontal ? 'horizontalBar' : 'bar',
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('c-line')
class Line extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'line',
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('c-radar')
class Radar extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'radar',
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('c-scatter')
class Scatter extends ChartBase {
  installed() {
    this.chart = new Chart.Scatter(this.canvas.getContext('2d'), {
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('c-doughnut')
class Doughnut extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'doughnut',
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('c-pie')
class Pie extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'pie',
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('c-polar-area')
class PolarArea extends ChartBase {
  installed() {
    this.chart = new Chart.PolarArea(this.canvas.getContext('2d'), {
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('c-bubble')
class Bubble extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'bubble',
      data: this.props.data,
      options: this.props.options
    })
  }
}
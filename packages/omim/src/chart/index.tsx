import { h, WeElement, tag } from 'omi'
import Chart from 'chart.js'

class ChartBase extends WeElement<{},{}> {
  chart: any
  canvas: HTMLCanvasElement
  
  receiveProps(props) {
    this.chart.data = props.data
    this.chart.options = props.options
    this.chart.update()
  }

  render(props) {
    return (
      <div style={{ width: props.width + 'px', height: props.height + 'px' }}>
        <canvas ref={(e) => { this.canvas = e }}>
        </canvas>
      </div>
    )
  }
}

@tag('mc-bar')
class Bar extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: this.props.horizontal ? 'horizontalBar' : 'bar',
      data: this.props.data,
      options: this.props.options
    })
  }
}


//@ts-ignore
@tag('mc-line')
class Line extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'line',
      data: this.props.data,
      options: this.props.options
    })
  }
}


define('chart-radar', class extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'radar',
      data: this.props.data,
      options: this.props.options
    })
  }
})

define('chart-scatter', class extends ChartBase {
  installed() {
    this.chart = new Chart.Scatter(this.canvas.getContext('2d'), {
      data: this.props.data,
      options: this.props.options
    })
  }
})

define('chart-doughnut', class extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'doughnut',
      data: this.props.data,
      options: this.props.options
    })
  }
})

define('chart-pie', class extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'pie',
      data: this.props.data,
      options: this.props.options
    })
  }
})

define('chart-polar-area', class extends ChartBase {
  installed() {
    this.chart = new Chart.PolarArea(this.canvas.getContext('2d'), {
      data: this.props.data,
      options: this.props.options
    })
  }
})

define('chart-bubble', class extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'bubble',
      data: this.props.data,
      options: this.props.options
    })
  }
})


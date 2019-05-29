import { h, WeElement, tag } from 'omi'
import * as Chart from 'chart.js'

interface Props {
  data: object,
  options: object,
  width: number,
  height: number
}

class ChartBase extends WeElement<Props, {}> {
  chart: Chart
  canvas: HTMLCanvasElement

  receiveProps(props) {
    this.chart.data = props.data
    this.chart.options = props.options
    this.chart.update()
  }

  static propTypes = {
    data: Object,
    options: Object,
    width: Number,
    height: Number
  }

  update() {
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

@tag('m-bar')
class Bar extends ChartBase {
  chart: Chart
  canvas: HTMLCanvasElement
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      //@ts-ignore
      type: this.props.horizontal ? 'horizontalBar' : 'bar',
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('m-line')
class Line extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'line',
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('m-radar')
class Radar extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'radar',
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('m-scatter')
class Scatter extends ChartBase {
  installed() {
    this.chart = new Chart.Scatter(this.canvas.getContext('2d'), {
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('m-doughnut')
class Doughnut extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'doughnut',
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('m-pie')
class Pie extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'pie',
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('m-polar-area')
class PolarArea extends ChartBase {
  installed() {
    this.chart = new Chart.PolarArea(this.canvas.getContext('2d'), {
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('m-bubble')
class Bubble extends ChartBase {
  installed() {
    //@ts-ignore
    const exp = this.props.options.elements.point.radius
    //@ts-ignore
    this.props.options.elements.point.radius = (context) => {
      var $v = context.dataset.data[context.dataIndex].v
      var $w = context.chart.width;
      return (new Function('$v', '$w', 'return ' + exp))($v, $w)
    }
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'bubble',
      data: this.props.data,
      options: this.props.options
    })
  }
}
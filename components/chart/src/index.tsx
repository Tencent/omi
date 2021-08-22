import { h, WeElement, tag } from 'omi'
//https://www.chartjs.org/docs/next/getting-started/integration.html
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js'

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
)



interface Props {
  data: object,
  options: object,
  width: number,
  height: number
}

class ChartBase extends WeElement<Props> {
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

@tag('o-bar')
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

@tag('o-line')
class Line extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'line',
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('o-radar')
class Radar extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'radar',
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('o-scatter')
class Scatter extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'scatter',
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('o-doughnut')
class Doughnut extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'doughnut',
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('o-pie')
class Pie extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'pie',
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('o-polar-area')
class PolarArea extends ChartBase {
  installed() {
    this.chart = new Chart(this.canvas.getContext('2d'), {
      type: 'polarArea',
      data: this.props.data,
      options: this.props.options
    })
  }
}

@tag('o-bubble')
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

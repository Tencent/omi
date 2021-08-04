import { tag, h, WeElement } from 'omi'
import * as css from './index.scss'
//import '../../chart/src/index.tsx'

import '@omiu/chart'
export interface Props {
  color: string
  content: string | number
  describe: string
  labels: string[]
  data: number[],
  chartType: 'line' | 'bar'
}

@tag('o-chart-card')
export default class ChartCard extends WeElement<Props> {
  static css = css.default ? css.default : css

  static defaultProps = {
    color: 'black',
    chartType: 'line'
  }

  static propTypes = {
    color: String,
    labels: Array,
    data: Array,
    content: String,
    describe: String,
    chartType: String
  }

  chartData = {
    labels: null,
    datasets: [{
      // label: '# of Votes',
      data: null,
      segment: {
        borderColor: 'white',
      },


      barPercentage: 0.5,
      barThickness: 6,
      maxBarThickness: 8,
      minBarLength: 2,

      backgroundColor: [],
      borderColor: ['white', 'white', 'white', 'white', 'white', 'white'],
      borderWidth: 1
    }]
  }

  chartOptions = {
    plugins: {
      legend: {
        display: false
      }
    },
    //  https://www.chartjs.org/docs/latest/configuration/responsive.html
    // Note that in order for the above code to correctly resize the chart height, the maintainAspectRatio option must also be set to false. 
    maintainAspectRatio: false,
    scales: {
      yAxes: { display: false },
      xAxes: { display: false }
    }
  }

  render(props: Props) {


    props.labels.forEach(_ => {
      this.chartData.datasets[0].backgroundColor.push(props.color)
    })
    this.chartTagName = 'o-' + props.chartType
    this.chartData.labels = props.labels
    this.chartData.datasets[0].data = props.data
    return <div class="card text-white" style={{ backgroundColor: props.color }}>
      <div class="card-body card-body pb-0 d-flex justify-content-between align-items-start">
        <div>
          <div class="text-value-lg">{props.content}</div>
          <div class="nowrap">{props.describe}</div>
        </div>
        <div class="icon">
          <slot>ICON</slot>
        </div>
      </div>
      <div class="mt-3 mx-3" >
        <this.chartTagName css="canvas{width: 100% !important;}" ignoreAttrs={true} height="70" data={this.chartData} options={this.chartOptions}></this.chartTagName>

      </div>
    </div>

  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-chart-card': ChartCard
  }
}

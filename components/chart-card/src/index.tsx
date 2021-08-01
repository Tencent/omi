import { tag, h, WeElement } from 'omi'
import * as css from './index.scss'
//import '../../chart/src/index.tsx'

import '@omiu/chart'
export interface Props {

  backgroundColor: string
}

@tag('o-chart-card')
export default class ChartCard extends WeElement<Props> {
  static css = css.default ? css.default : css

  static defaultProps = {
    disabled: false,
    value: [],
    options: [],
    size: 'default',
    backgroundColor: 'black'
  }

  static propTypes = {
    disabled: Boolean,
    value: Array,
    options: Array,
    size: String
  }

  render(props: Props) {


    return <div class="card text-white" style={{ backgroundColor: props.backgroundColor }}>
      <div class="card-body card-body pb-0 d-flex justify-content-between align-items-start">
        <div>
          <div class="text-value-lg">9823</div>
          <div>Members online</div>
        </div>
        <div class="icon">
          <slot>ICON</slot>
        </div>
      </div>
      <div class="c-chart-wrapper mt-3 mx-3" style="height:70px;">

        <o-bar id="myBar" width="600" height="300" data="{
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }" options="{
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }"></o-bar>
        {/* <div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand">
          <div class=""></div></div><div class="chartjs-size-monitor-shrink">
            <div class=""></div></div>
        </div>
        <canvas class="chart chartjs-render-monitor" id="card-chart1" height="140" style="display: block; height: 70px; width: 315px;" width="630">

        </canvas>
        <div id="card-chart1-tooltip" class="c-chartjs-tooltip top bottom" style="opacity: 0; left: 44.3542px; top: 144.662px;">
          <div class="c-tooltip-header"><div class="c-tooltip-header-item">June</div></div><div class="c-tooltip-body">
            <div class="c-tooltip-body-item"><span class="c-tooltip-body-item-color" style="background-color: rgb(50, 31, 219);"></span>
              <span class="c-tooltip-body-item-label">My First dataset</span><span class="c-tooltip-body-item-value">55</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>

  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-cascader': ChartCard
  }
}

import { tag, Component } from 'omi'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, ToolboxComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

// 注册必须的组件
echarts.use([LineChart, GridComponent, TooltipComponent, ToolboxComponent, CanvasRenderer])

export function createLineChart(container: HTMLElement, option: echarts.EChartsCoreOption) {
  const chart = echarts.init(container)
  chart.setOption(option)
  return chart
}

@tag('admin-chart')
export class AdminChart extends Component {
  render() {
    return (
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div class="w-full h-40 border rounded" ref={(e) => (this.chartDivs[i] = e)}></div>
        ))}
      </div>
    )
  }

  chartDivs: Array<HTMLElement | null> = []
  charts: Array<echarts.ECharts | null> = []

  installed() {
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      grid: {
        x: 40, //默认是80px
        y: 20, //默认是60px
        x2: 20, //默认80px
        y2: 30, //默认60px
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [],
          type: 'line',
        },
      ],
    }

    this.chartDivs.forEach((div, i) => {
      if (div) {
        setTimeout(() => {
          option.series[0].data = Array.from({ length: 7 }).map((): number => {
            return this.random()
          }) as any
          this.charts[i] = createLineChart(div, option)
        }, i * 50)
      }
    })

    // Add a window resize event listener to update the chart dimensions
    window.addEventListener('resize', this.onWindowResize)
  }

  random(): number {
    return Math.floor(Math.random() * 1000)
  }

  onWindowResize = () => {
    this.charts.forEach((chart) => {
      if (chart) {
        chart.resize()
      }
    })
  }

  // Remove the event listener when the component is unmounted
  uninstall() {
    window.removeEventListener('resize', this.onWindowResize)
  }
}

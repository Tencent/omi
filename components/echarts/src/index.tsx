import { tag, h, WeElement, OmiProps } from 'omi'
import * as echarts from 'echarts'

export interface ChartProps {
  /**
   * echart的option
   */
  options: object
  /**
   * 是否可以resize
   */
  resizeAble?: boolean
  /**
   * 画布宽度
   */
  width: number
  /**
   * 画布高度
   */
  height: number
}

@tag('o-chart')
export default class Chart extends WeElement<ChartProps> {
  chartRef: HTMLDivElement | null | undefined

  static defaultProps = {
    options: {},
    resizeAble: false,
    width: 300,
    height: 300
  }

  static propTypes = {
    options: Object,
    resizeAble: Boolean,
    width: Number,
    height: Number
  }

  installed() {
    if (!this.chartRef) {
      return
    }
    const chartInstance = echarts.init(this.chartRef)
    chartInstance.setOption(this.props.options)
    if (this.props.resizeAble) {
      window.addEventListener('resize', () => {
        chartInstance.resize()
      })
    }
  }

  render(props: OmiProps<ChartProps>) {
    return (
      <div
        ref={(e) => (this.chartRef = e)}
        style={{ height: `${props.height}px`, width: `${props.height}px` }}
      ></div>
    )
  }
}

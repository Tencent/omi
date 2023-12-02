import { tag, Component, classNames, bind } from 'omi'
import { tailwind } from '@/tailwind'
import VChart from '@visactor/vchart'

@tag('o-chart')
export class Button extends Component {
  static css = [
    tailwind,
    `:host {
    display: block;
   
  }
  `,
  ]

  static defaultProps = {
    type: 'bar',
    data: [],

    label: {
      visible: true,
    },
    tooltip: {
      visible: true,
    },
  }

  installed() {
    const spec = {
      data: this.props.data,
      type: this.props.type,
      xField: this.props.xField,
      yField: this.props.yField,
      outerRadius: this.props.outerRadius,
      innerRadius: this.props.innerRadius,
      valueField: this.props.valueField,
      categoryField: this.props.categoryField,
      title: this.props.title,
      seriesField: this.props.seriesField,
      legends: this.props.legends,
      label: this.props.label,
      tooltip: this.props.tooltip,
    }

    // Create a vchart instance
    const vchart = new VChart(spec, { dom: this.rootElement })
    // Draw the chart
    vchart.renderAsync()
  }

  render(props) {
    return (
      <div
        style={{
          width: props.width + 'px',
          height: props.height + 'px',
        }}
      ></div>
    )
  }
}

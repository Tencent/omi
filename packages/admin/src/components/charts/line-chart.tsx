import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '../docs/admin-docs'
import '../components/code-demo'
import '../components/code-demo/container'

import '@omiu/chart'

interface Props { }

const tagName = 'line-chart'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}
@tag(tagName)
export default class extends WeElement<Props> {
  static css = [sheet.target]

  options = {
    responsive: true,
    title: {
      display: true,
      text: 'Omi-chart Line Chart'
    },
    tooltips: {
      mode: 'index',
      intersect: false
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
    }

  }

  data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, .4)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1
    }]
  }

  mdA =
    `
  \`\`\`html
<o-line id="myLine" width="560" height="300"
  data="{
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, .4)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1
    }]
  }"

  options="{
    responsive: true,
    title: {
      display: true,
      text: 'Omi-chart Line Chart'
    },
    tooltips: {
      mode: 'index',
      intersect: false
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
    }
  }">
</o-line>
  \`\`\`
  `

  installed() { }

  render() {

    return (
      <code-demo-container>
        <code-demo
          title="线状图"
          describe={'线状图显示'}
          code={this.mdA}
        >
          <div slot="demo" class={tw`px-3 py-5`}>
            <o-line id="myLine" width="560" height="300" data={this.data}
              options={this.options}>
            </o-line>
          </div>
        </code-demo>
      </code-demo-container>
    )
  }
}

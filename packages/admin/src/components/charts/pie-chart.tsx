import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '../docs/admin-docs'
import '../components/code-demo'
import '../components/code-demo/container'

import '@omiu/chart'

interface Props { }

const tagName = 'pie-chart'
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
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Omim Pie Chart'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }

  data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderColor: 'white',
      borderWidth: 1
    }]
  }

  mdA =
    `
  \`\`\`html
<o-pie id="myPie" width="300" height="300"
  data="{
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderColor: 'white',
      borderWidth: 1
    }]
  }"

  options="{
    responsive: true,
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Omim Pie Chart'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }">
</o-pie>
  \`\`\`
  `

  installed() { }

  render() {

    return (
      <code-demo-container>
        <code-demo
          title="饼图"
          describe={'饼图显示'}
          code={this.mdA}
        >
          <div slot="demo" class={tw`px-3 py-5`}>
            <o-pie id="myPie" width="300" height="300" data={this.data}
              options={this.options}>
            </o-pie>
          </div>
        </code-demo>
      </code-demo-container>
    )
  }
}

import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '../docs/admin-docs'
import '../components/code-demo'
import '../components/code-demo/container'

import '@omiu/chart'

interface Props { }

const tagName = 'scatter-chart'
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
    title: {
      display: true,
      text: 'Omim Scatter Chart'
    }
  }

  data = {
    datasets: [{
      label: 'My First dataset',
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, .2)',
      data: [{
        x: 50,
        y: 32
      }, {
        x: 22,
        y: 10
      }, {
        x: 80,
        y: 44
      }, {
        x: 22,
        y: 77
      }, {
        x: 3,
        y: 9
      }, {
        x: 44,
        y: 11
      }, {
        x: 12,
        y: 100
      }]
    }, {
      label: 'My Second dataset',
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, .2)',
      data: [{
        x: 20,
        y: 132
      }, {
        x: 32,
        y: 40
      }, {
        x: 80,
        y: 84
      }, {
        x: 32,
        y: 77
      }, {
        x: 13,
        y: 9
      }, {
        x: 24,
        y: 11
      }, {
        x: 12,
        y: 60
      }]
    }]
  }

  mdA =
    `
  \`\`\`html
<o-scatter id="myScatter" width="560" height="300" data=" {
  datasets: [{
      label: 'My First dataset',
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, .2)',
      data: [{
        x: 50,
        y: 32
      }, {
        x: 22,
        y: 10
      }, {
        x: 80,
        y: 44
      }, {
        x: 22,
        y: 77
      }, {
        x: 3,
        y: 9
      }, {
        x: 44,
        y: 11
      }, {
        x: 12,
        y: 100
      }]
    }, {
      label: 'My Second dataset',
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, .2)',
      data: [{
        x: 20,
        y: 132
      }, {
        x: 32,
        y: 40
      }, {
        x: 80,
        y: 84
      }, {
        x: 32,
        y: 77
      }, {
        x: 13,
        y: 9
      }, {
        x: 24,
        y: 11
      }, {
        x: 12,
        y: 60
      }]
    }]
  }"

  options="{
    title: {
      display: true,
      text: 'Omim Scatter Chart'
    }
  }">
</o-scatter>
  \`\`\`
  `

  installed() { }

  render() {

    return (
      <code-demo-container>
        <code-demo
          title="散点图"
          describe={'散点图显示'}
          code={this.mdA}
        >
          <div slot="demo" class={tw`px-3 py-5`}>
            <o-scatter id="myScatter" width="560" height="300" data={this.data}
              options={this.options}>
            </o-scatter>
          </div>
        </code-demo>
      </code-demo-container>
    )
  }
}

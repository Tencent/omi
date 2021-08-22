import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '../docs/admin-docs'
import '../components/code-demo'
import '../components/code-demo/container'

import '@omiu/chart'

interface Props { }

const tagName = 'bubble-chart'
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
        aspectRatio: 1,
        legend: false,
        tooltips: false,

        elements: {
            point: {
                borderColor: '#ccc',

                borderWidth: 1,

                hoverBackgroundColor: 'transparent',

                hoverBorderColor: 'red',

                hoverBorderWidth: 2,

                radius: '3 + Math.abs($v)/100 * $w/24'
            }
        }
    }

    data = {
        datasets: [{
            label: 'My First dataset',
            borderColor: 'rgb(55,99,132)',
            backgroundColor: 'transparent',
            data: [
                { x: 11, y: 44, v: 22 },
                { x: 77, y: 11, v: 11 },
                { x: 55, y: 22, v: 99 },
                { x: 44, y: 33, v: 34 },
                { x: 33, y: 9, v: 98 },
                { x: 20, y: 1, v: 1 },
                { x: 55, y: 3, v: 2 }
            ]
        }, {
            label: 'My Second dataset',
            borderColor: 'rgb(255,99,132)',
            backgroundColor: 'transparent',
            data: [
                { x: 18, y: 44, v: 22 },
                { x: 77, y: 21, v: 11 },
                { x: 55, y: 122, v: 99 },
                { x: 84, y: 3, v: 34 },
                { x: 33, y: 29, v: 98 },
                { x: 20, y: 111, v: 1 },
                { x: 55, y: 13, v: 2 }
            ]
        }]
    }

    mdA =
        `
  \`\`\`html
<o-bubble id="myChart" width="300" height="350"
  data="{
    datasets: [{
      label: 'My First dataset',
      borderColor: 'rgb(55,99,132)',
      backgroundColor: 'transparent',
      data: [
        { x: 11, y: 44, v: 22 },
        { x: 77, y: 11, v: 11 },
        { x: 55, y: 22, v: 99 },
        { x: 44, y: 33, v: 34 },
        { x: 33, y: 9, v: 98 },
        { x: 20, y: 1, v: 1 },
        { x: 55, y: 3, v: 2 }
      ]
      }, {
        label: 'My Second dataset',
        borderColor: 'rgb(255,99,132)',
        backgroundColor: 'transparent',
        data: [
        { x: 18, y: 44, v: 22 },
        { x: 77, y: 21, v: 11 },
        { x: 55, y: 122, v: 99 },
        { x: 84, y: 3, v: 34 },
        { x: 33, y: 29, v: 98 },
        { x: 20, y: 111, v: 1 },
        { x: 55, y: 13, v: 2 }
        ]
      }]
    }"

  options="{
    aspectRatio: 1,
    legend: false,
    tooltips: false,

    elements: {
      point: {
        borderColor: '#ccc',

        borderWidth: 1,

        hoverBackgroundColor: 'transparent',

        hoverBorderColor: 'red',

        hoverBorderWidth: 2,

        radius: '3 + Math.abs($v)/100 * $w/24'
      }
    }
  }">
</o-bubble>
  \`\`\`
  `

    installed() { }

    render() {

        return (
            <code-demo-container>
                <code-demo
                    title="气泡图"
                    describe={'气泡图显示'}
                    code={this.mdA}
                >
                    <div slot="demo" class={tw`px-3 py-5`}>
                        <o-bubble id="myChart" width="300" height="350" data={this.data}
                            options={this.options}>
                        </o-bubble>
                    </div>
                </code-demo>
            </code-demo-container>
        )
    }
}

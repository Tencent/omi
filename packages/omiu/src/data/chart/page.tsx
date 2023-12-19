import '@/site/code-showcase'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

import './index'

@tag('chart-page')
export class ButtonPage extends Component {
  static css = [
    tailwind,
    `
  o-button{ margin: 0.2em; }
  code-showcase{ margin-bottom: 2em; }
  `,
  ]

  render() {
    return (
      <div className="container my-12 !max-w-full mb-48">
        <h1 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
          VChart
        </h1>
        <p className="mb-3">Out-of-the-box multi-terminal charting library.</p>

        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Bar chart
          </h2>

          <code-showcase
            code={`<o-chart
  xField="month"
  yField="sales"
  data={{
    values: [
      { month: 'Monday', sales: 22 },
      { month: 'Tuesday', sales: 13 },
      { month: 'Wednesday', sales: 25 },
      { month: 'Thursday', sales: 29 },
      { month: 'Friday', sales: 38 },
    ],
  }}
></o-chart>`}
          >
            <o-chart
              xField="month"
              yField="sales"
              data={{
                values: [
                  { month: 'Monday', sales: 22 },
                  { month: 'Tuesday', sales: 13 },
                  { month: 'Wednesday', sales: 25 },
                  { month: 'Thursday', sales: 29 },
                  { month: 'Friday', sales: 38 },
                ],
              }}
            ></o-chart>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Width and height
          </h2>

          <code-showcase
            code={`<o-chart
  width={500}
  height={300}
  xField="month"
  yField="sales"
  data={{
    values: [
      { month: 'Monday', sales: 22 },
      { month: 'Tuesday', sales: 13 },
      { month: 'Wednesday', sales: 25 },
      { month: 'Thursday', sales: 29 },
      { month: 'Friday', sales: 38 },
    ],
  }}
></o-chart>`}
          >
            <o-chart
              width={500}
              height={300}
              xField="month"
              yField="sales"
              data={{
                values: [
                  { month: 'Monday', sales: 22 },
                  { month: 'Tuesday', sales: 13 },
                  { month: 'Wednesday', sales: 25 },
                  { month: 'Thursday', sales: 29 },
                  { month: 'Friday', sales: 38 },
                ],
              }}
            ></o-chart>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Grouped bar chart
          </h2>

          <code-showcase
            code={`<o-chart
  xField="month"
  yField="sales"
  seriesField="type"
  data={{
    values: [
      { type: 'food', month: 'Monday', sales: 22 },
      { type: 'food', month: 'Tuesday', sales: 13 },
      { type: 'food', month: 'Wednesday', sales: 25 },
      { type: 'food', month: 'Thursday', sales: 29 },
      { type: 'food', month: 'Friday', sales: 38 },
      { type: 'toy', month: 'Monday', sales: 12 },
      { type: 'toy', month: 'Tuesday', sales: 33 },
      { type: 'toy', month: 'Wednesday', sales: 15 },
      { type: 'toy', month: 'Thursday', sales: 69 },
      { type: 'toy', month: 'Friday', sales: 28 },
    ],
  }}
></o-chart>`}
          >
            <o-chart
              xField="month"
              yField="sales"
              seriesField="type"
              data={{
                values: [
                  { type: 'food', month: 'Monday', sales: 22 },
                  { type: 'food', month: 'Tuesday', sales: 13 },
                  { type: 'food', month: 'Wednesday', sales: 25 },
                  { type: 'food', month: 'Thursday', sales: 29 },
                  { type: 'food', month: 'Friday', sales: 38 },
                  { type: 'toy', month: 'Monday', sales: 12 },
                  { type: 'toy', month: 'Tuesday', sales: 33 },
                  { type: 'toy', month: 'Wednesday', sales: 15 },
                  { type: 'toy', month: 'Thursday', sales: 69 },
                  { type: 'toy', month: 'Friday', sales: 28 },
                ],
              }}
            ></o-chart>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Stacked bar chart
          </h2>

          <code-showcase
            code={`<o-chart
  xField={['month', 'type']}
  yField="sales"
  seriesField="type"
  data={{
    values: [
      { type: 'food', month: 'Monday', sales: 22 },
      { type: 'food', month: 'Tuesday', sales: 13 },
      { type: 'food', month: 'Wednesday', sales: 25 },
      { type: 'food', month: 'Thursday', sales: 29 },
      { type: 'food', month: 'Friday', sales: 38 },
      { type: 'toy', month: 'Monday', sales: 12 },
      { type: 'toy', month: 'Tuesday', sales: 33 },
      { type: 'toy', month: 'Wednesday', sales: 15 },
      { type: 'toy', month: 'Thursday', sales: 69 },
      { type: 'toy', month: 'Friday', sales: 28 },
    ],
  }}
></o-chart>`}
          >
            <o-chart
              xField={['month', 'type']}
              yField="sales"
              seriesField="type"
              data={{
                values: [
                  { type: 'food', month: 'Monday', sales: 22 },
                  { type: 'food', month: 'Tuesday', sales: 13 },
                  { type: 'food', month: 'Wednesday', sales: 25 },
                  { type: 'food', month: 'Thursday', sales: 29 },
                  { type: 'food', month: 'Friday', sales: 38 },
                  { type: 'toy', month: 'Monday', sales: 12 },
                  { type: 'toy', month: 'Tuesday', sales: 33 },
                  { type: 'toy', month: 'Wednesday', sales: 15 },
                  { type: 'toy', month: 'Thursday', sales: 69 },
                  { type: 'toy', month: 'Friday', sales: 28 },
                ],
              }}
            ></o-chart>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Line chart
          </h2>

          <code-showcase
            code={`<o-chart
  xField={['month', 'type']}
  yField="sales"
  seriesField="type"
  type="line"
  data={{
    values: [
      { type: 'food', month: 'Monday', sales: 22 },
      { type: 'food', month: 'Tuesday', sales: 13 },
      { type: 'food', month: 'Wednesday', sales: 25 },
      { type: 'food', month: 'Thursday', sales: 29 },
      { type: 'food', month: 'Friday', sales: 38 },
      { type: 'toy', month: 'Monday', sales: 12 },
      { type: 'toy', month: 'Tuesday', sales: 33 },
      { type: 'toy', month: 'Wednesday', sales: 15 },
      { type: 'toy', month: 'Thursday', sales: 69 },
      { type: 'toy', month: 'Friday', sales: 28 },
    ],
  }}
></o-chart>`}
          >
            <o-chart
              xField={['month', 'type']}
              yField="sales"
              seriesField="type"
              type="line"
              data={{
                values: [
                  { type: 'food', month: 'Monday', sales: 22 },
                  { type: 'food', month: 'Tuesday', sales: 13 },
                  { type: 'food', month: 'Wednesday', sales: 25 },
                  { type: 'food', month: 'Thursday', sales: 29 },
                  { type: 'food', month: 'Friday', sales: 38 },
                  { type: 'toy', month: 'Monday', sales: 12 },
                  { type: 'toy', month: 'Tuesday', sales: 33 },
                  { type: 'toy', month: 'Wednesday', sales: 15 },
                  { type: 'toy', month: 'Thursday', sales: 69 },
                  { type: 'toy', month: 'Friday', sales: 28 },
                ],
              }}
            ></o-chart>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Pie chart
          </h2>

          <code-showcase
            code={`<o-chart
  type="pie"
  outerRadius={0.8}
  valueField="value"
  categoryField="type"
  data={{
    values: [
      { type: 'oxygen', value: '46.60' },
      { type: 'silicon', value: '27.72' },
      { type: 'aluminum', value: '8.13' },
      { type: 'iron', value: '5' },
      { type: 'calcium', value: '3.63' },
      { type: 'sodium', value: '2.83' },
      { type: 'potassium', value: '2.59' },
      { type: 'others', value: '3.5' },
    ],
  }}
></o-chart>`}
          >
            <o-chart
              type="pie"
              outerRadius={0.8}
              valueField="value"
              categoryField="type"
              data={{
                values: [
                  { type: 'oxygen', value: '46.60' },
                  { type: 'silicon', value: '27.72' },
                  { type: 'aluminum', value: '8.13' },
                  { type: 'iron', value: '5' },
                  { type: 'calcium', value: '3.63' },
                  { type: 'sodium', value: '2.83' },
                  { type: 'potassium', value: '2.59' },
                  { type: 'others', value: '3.5' },
                ],
              }}
            ></o-chart>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Ring chart
          </h2>

          <code-showcase
            code={`<o-chart
  type="pie"
  outerRadius={0.8}
  innerRadius={0.5}
  valueField="value"
  categoryField="type"
  title={{
    visible: true,
    text: 'I am title',
  }}
  legends={{
    visible: true,
    orient: 'left',
  }}
  tooltip={{
    mark: {
      content: [
        {
          key: (datum) => datum['type'],
          value: (datum) => datum['value'] + '%',
        },
      ],
    },
  }}
  data={{
    values: [
      { type: 'oxygen', value: '46.60' },
      { type: 'silicon', value: '27.72' },
      { type: 'aluminum', value: '8.13' },
      { type: 'iron', value: '5' },
      { type: 'calcium', value: '3.63' },
      { type: 'sodium', value: '2.83' },
      { type: 'potassium', value: '2.59' },
      { type: 'others', value: '3.5' },
    ],
  }}
></o-chart>`}
          >
            <o-chart
              type="pie"
              outerRadius={0.8}
              innerRadius={0.5}
              valueField="value"
              categoryField="type"
              title={{
                visible: true,
                text: 'I am title',
              }}
              legends={{
                visible: true,
                orient: 'left',
              }}
              tooltip={{
                mark: {
                  content: [
                    {
                      key: (datum: { type: string; value: string }) => datum['type'],
                      value: (datum: { type: string; value: string }) => datum['value'] + '%',
                    },
                  ],
                },
              }}
              data={{
                values: [
                  { type: 'oxygen', value: '46.60' },
                  { type: 'silicon', value: '27.72' },
                  { type: 'aluminum', value: '8.13' },
                  { type: 'iron', value: '5' },
                  { type: 'calcium', value: '3.63' },
                  { type: 'sodium', value: '2.83' },
                  { type: 'potassium', value: '2.59' },
                  { type: 'others', value: '3.5' },
                ],
              }}
            ></o-chart>
          </code-showcase>
        </section>
      </div>
    )
  }
}

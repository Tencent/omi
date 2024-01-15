import '@/site/code-showcase'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

import './dropdown'

@tag('dropdown-page')
export class ButtonPage extends Component {
  static css = [
    tailwind,
    `
  o-dropdown{ margin: 0.2em; }
  code-showcase{ margin-bottom: 2em; }
  `,
  ]

  options = [
    {
      label: '中国',
      value: 'china',
      children: [
        {
          label: '广东省',
          value: 'guangdong',
          children: [
            {
              label: '广州市',
              value: 'guangzhou',
            },
            {
              label: '深圳市',
              value: 'shenzhen',
            },
          ],
        },
        {
          label: '浙江省',
          value: 'zhejiang',
          children: [
            {
              label: '杭州市',
              value: 'hangzhou',
            },
            {
              label: '宁波市',
              value: 'ningbo',
            },
          ],
        },
      ],
    },
    {
      label: '美国',
      value: 'usa',
      children: [
        {
          label: '加利福尼亚州',
          value: 'california',
          children: [
            {
              label: '洛杉矶',
              value: 'los_angeles',
            },
            {
              label: '旧金山',
              value: 'san_francisco',
            },
          ],
        },
        {
          label: '纽约州',
          value: 'new_york',
          children: [
            {
              label: '纽约市',
              value: 'new_york_city',
            },
            {
              label: '布法罗',
              value: 'buffalo',
            },
          ],
        },
      ],
    },
  ]

  render() {
    return (
      <div className="!max-w-full mb-48">
        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Basic example
          </h2>
          {/* <!-- Description --> */}
          <p className="mb-3">
            A dropdown component is a user interface element that displays a list of selectable options in a collapsible
            menu, allowing users to choose one option at a time.
          </p>

          <code-showcase
            code={`<o-dropdown
  onClick={(evt) => {
    console.log(evt.detail)
  }}
  color="dark"
  options={[
    {
      label: '中国',
      value: 'china',
      children: [
        {
          label: '广东省',
          value: 'guangdong',
          children: [
            {
              label: '广州市',
              value: 'guangzhou',
            },
            {
              label: '深圳市',
              value: 'shenzhen',
            },
          ],
        },
        {
          label: '浙江省',
          value: 'zhejiang',
          children: [
            {
              label: '杭州市',
              value: 'hangzhou',
            },
            {
              label: '宁波市',
              value: 'ningbo',
            },
          ],
        },
      ],
    },
    {
      label: '美国',
      value: 'usa',
      children: [
        {
          label: '加利福尼亚州',
          value: 'california',
          children: [
            {
              label: '洛杉矶',
              value: 'los_angeles',
            },
            {
              label: '旧金山',
              value: 'san_francisco',
            },
          ],
        },
        {
          label: '纽约州',
          value: 'new_york',
          children: [
            {
              label: '纽约市',
              value: 'new_york_city',
            },
            {
              label: '布法罗',
              value: 'buffalo',
            },
          ],
        },
      ],
    },
  ]}
>DropDown</o-dropdown>`}
          >
            <o-dropdown
              onClick={(evt) => {
                console.log(evt.detail)
              }}
              color="dark"
              options={[
                {
                  label: '中国',
                  value: 'china',
                  children: [
                    {
                      label: '广东省',
                      value: 'guangdong',
                      children: [
                        {
                          label: '广州市',
                          value: 'guangzhou',
                        },
                        {
                          label: '深圳市',
                          value: 'shenzhen',
                        },
                      ],
                    },
                    {
                      label: '浙江省',
                      value: 'zhejiang',
                      children: [
                        {
                          label: '杭州市',
                          value: 'hangzhou',
                        },
                        {
                          label: '宁波市',
                          value: 'ningbo',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: '美国',
                  value: 'usa',
                  children: [
                    {
                      label: '加利福尼亚州',
                      value: 'california',
                      children: [
                        {
                          label: '洛杉矶',
                          value: 'los_angeles',
                        },
                        {
                          label: '旧金山',
                          value: 'san_francisco',
                        },
                      ],
                    },
                    {
                      label: '纽约州',
                      value: 'new_york',
                      children: [
                        {
                          label: '纽约市',
                          value: 'new_york_city',
                        },
                        {
                          label: '布法罗',
                          value: 'buffalo',
                        },
                      ],
                    },
                  ],
                },
              ]}
            >
              DropDown
            </o-dropdown>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Colors
          </h2>
          <code-showcase code={``}>
            <div>
              <o-dropdown
                onClick={(evt) => {
                  console.log(evt.detail)
                }}
                color="primary"
                options={this.options}
              >
                DropDown
              </o-dropdown>
              <o-dropdown
                onClick={(evt) => {
                  console.log(evt.detail)
                }}
                color="secondary"
                options={this.options}
              >
                DropDown
              </o-dropdown>
              <o-dropdown
                onClick={(evt) => {
                  console.log(evt.detail)
                }}
                color="success"
                options={this.options}
              >
                DropDown
              </o-dropdown>
              <o-dropdown
                onClick={(evt) => {
                  console.log(evt.detail)
                }}
                color="info"
                options={this.options}
              >
                DropDown
              </o-dropdown>
              <o-dropdown
                onClick={(evt) => {
                  console.log(evt.detail)
                }}
                color="warning"
                options={this.options}
              >
                DropDown
              </o-dropdown>
              <o-dropdown
                onClick={(evt) => {
                  console.log(evt.detail)
                }}
                color="danger"
                options={this.options}
              >
                DropDown
              </o-dropdown>
              <o-dropdown
                onClick={(evt) => {
                  console.log(evt.detail)
                }}
                color="light"
                options={this.options}
              >
                DropDown
              </o-dropdown>
              <o-dropdown
                onClick={(evt) => {
                  console.log(evt.detail)
                }}
                color="dark"
                options={this.options}
              >
                DropDown
              </o-dropdown>
            </div>
          </code-showcase>
        </section>
      </div>
    )
  }
}

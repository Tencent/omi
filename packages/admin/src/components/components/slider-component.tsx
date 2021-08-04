import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/slider'
import '@omiu/input'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props {}

const tagName = 'slider-component'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = sheet.target

  mdA = `
  \`\`\`html
  <o-slider min="0" max="200" value="20"></o-slider>
  <o-slider min="0" max="200" value="20" second_value="80" range="double"></o-slider>
  \`\`\`
  `

  mdB = `
  \`\`\`html
  <o-slider
  orient="vertical"
  ...
  ></o-slider>

  <o-slider
  orient="vertical"
  range="double"
  ></o-slider>
  \`\`\`
  `

  mdC = `
  \`\`\`
  <code-demo
  >
    <div>
      <o-slider></o-slider>
      <o-input onchange={this.handleChange}></o-input>
    </div>
  </code-demo>
  \`\`\`
  `

  mdD = `
  \`\`\`html
  <o-slider
  disabled
  ...
></o-slider>
  \`\`\`
  `

  sliderValue: number = 0

  // handleInputChange = (evt) => {
  //   this.sliderValue = parseInt(evt.detail)
  //   console.log(this.sliderValue)
  //   this.updateSelf()
  // }

  handleSliderChange = (evt) => {
    this.sliderValue = evt.detail
    this.updateSelf()
  }

  render() {
    return (
      <div>
        <code-demo-container>
          <code-demo
            title="基础滑块"
            describe="支持单或双滑块"
            code={this.mdA}
            class={tw``}
          >
            <o-slider
              min="0"
              max="200"
              value="20"
              slot="demo"
              class={tw`p-5`}
            ></o-slider>
            <o-slider
              min="0"
              max="200"
              value="20"
              second_value="80"
              range="double"
              slot="demo"
              class={tw`p-5`}
            ></o-slider>
          </code-demo>
          <code-demo title="垂直" describe="支持使滑块垂直" code={this.mdB}>
            <div slot="demo">
              <o-slider
                orient="vertical"
                style={{ height: '500px', position: 'relative', top: '230px' }}
              ></o-slider>
              <o-slider
                orient="vertical"
                range="double"
                style={{ height: '500px', position: 'relative', top: '230px' }}
              ></o-slider>
            </div>
          </code-demo>
          <code-demo
            title="带输入框的滑块"
            describe="支持与o-input保持同步"
            code={this.mdC}
          >
            <div slot="demo" class={tw`flex p-5`}>
              <o-slider
                value={this.sliderValue}
                class={tw`w-4/5`}
                onchange={this.handleSliderChange}
              ></o-slider>
              <o-input
                class={tw`pl-5`}
                value={this.sliderValue}
                // oninput={this.handleInputChange}
              ></o-input>
            </div>
          </code-demo>
          <code-demo
            title="不可用"
            describe="支持使滑块处于不可用状态"
            code={this.mdD}
          >
            <o-slider
              disabled
              value="20"
              slot="demo"
              class={tw`p-5`}
            ></o-slider>
          </code-demo>
        </code-demo-container>
      </div>
    )
  }
}

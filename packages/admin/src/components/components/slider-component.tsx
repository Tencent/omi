import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/input'
import '@omiu/slider'
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
  <o-slider min="0" max="100" value="20"></o-slider>
  <o-slider min="0" max="100" value="20" second_value="80" range="double"></o-slider>
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
    //貌似还是有bug（update会触发其他code-demo里的slider的更新），继续改进。。。
    <div>
      <o-slider value={someValue} oninput={handleInputFunction}></o-slider>
      <o-input value={someValue} onchange={handleInputFunction}></o-input>
    </div>
    <div>
      <o-slider value={someValue} onchange={handleChangeFunction}></o-slider>
      <o-input value={someValue} onchange={handleChangeFunction}></o-input>
  </div>
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

  mdE = `
  \`\`\`html
  <o-slider
  tooltip
  ...
></o-slider>
  \`\`\`
  `

  mdF = `
  \`\`\`html
  <o-slider
  \\default a normal sized slider
  size="slim"
></o-slider>
<o-slider
  size="normal"
></o-slider>
<o-slider
  size="large"
></o-slider>
  \`\`\`
  `

  valueInput: number = 5
  valueChange: number = 5

  handleInput = (evt) => {
    this.valueInput = evt.detail
    this.updateSelf()
  }

  handleChange = (evt) => {
    this.valueChange = evt.detail
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
              max="100"
              value="20"
              slot="demo"
              class={tw`p-5`}
            ></o-slider>
            <o-slider
              min="0"
              max="100"
              value="20"
              second_value="80"
              range="double"
              slot="demo"
              class={tw`p-5`}
            ></o-slider>
          </code-demo>
          <code-demo title="垂直" describe="支持使滑块垂直" code={this.mdB}>
            <div
              slot="demo"
              style={{
                height: '800px'
              }}
            >
              <o-slider
                min="0"
                max="100"
                value="20"
                orient="vertical"
                style={{ position: 'relative', right: '30%', top: '45%' }}
              ></o-slider>
              <o-slider
                min="0"
                max="100"
                value="20"
                second_value="100"
                range="double"
                orient="vertical"
                style={{ position: 'relative', left: '30%', top: '37%' }}
              ></o-slider>
            </div>
          </code-demo>
          <code-demo
            title="带输入框的滑块"
            describe="支持与o-input保持同步"
            code={this.mdC}
          >
            <div slot="demo" class={tw`flex justify-evenly p-5 `}>
              <div>
                <o-slider
                  min="0"
                  max="100"
                  value={this.valueInput}
                  class={tw`w-4/5`}
                  oninput={this.handleInput}
                ></o-slider>
                <o-input
                  class={tw` w-1/2`}
                  value={this.valueInput}
                  oninput={this.handleInput}
                ></o-input>
              </div>
              <div>
                <o-slider
                  min="0"
                  max="100"
                  value={this.valueChange}
                  class={tw`w-4/5`}
                  onchange={this.handleChange}
                ></o-slider>
                <o-input
                  class={tw`w-1/2`}
                  value={this.valueChange}
                  oninput={this.handleChange}
                ></o-input>
              </div>
            </div>
          </code-demo>
          <code-demo
            title="不可用"
            describe="支持使滑块处于不可用状态"
            code={this.mdD}
          >
            <o-slider
              min="0"
              max="100"
              disabled
              value="20"
              slot="demo"
              class={tw`p-5`}
            ></o-slider>
          </code-demo>
          <code-demo title="ToolTip" describe="支持ToolTip" code={this.mdE}>
            <o-slider
              min="0"
              max="100"
              value="20"
              tooltip
              slot="demo"
              class={tw`mt-5 p-5`}
            ></o-slider>
            <o-slider
              min="0"
              max="100"
              value="20"
              second_value="100"
              range="double"
              tooltip
              slot="demo"
              class={tw`mt-5 p-5`}
            ></o-slider>
          </code-demo>
          <code-demo
            title={'不同大小'}
            describe={'支持三种预设样式，slim， normal， large'}
            code={this.mdF}
          >
            <o-slider
              min="0"
              max="100"
              value="20"
              size="slim"
              slot="demo"
              class={tw`p-5`}
            ></o-slider>
            <o-slider
              min="0"
              max="100"
              value="20"
              size="normal"
              slot="demo"
              class={tw`p-5`}
            ></o-slider>
            <o-slider
              min="0"
              max="100"
              value="20"
              second_value="100"
              size="large"
              slot="demo"
              class={tw`p-5`}
            ></o-slider>
          </code-demo>
        </code-demo-container>
      </div>
    )
  }
}

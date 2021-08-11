import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import  '@omiu/time-picker'

import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props {}

const tagName = 'time-picker-component'
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
<o-time-picker></o-time-picker>
\`\`\`
  `
  mdB = `
  \`\`\`html
  <o-time-picker size="mini"></o-time-picker>
  <o-time-picker size="small"></o-time-picker>
  <o-time-picker size="medium"></o-time-picker>
  \`\`\`
  `
  mdC = `
  \`\`\`html
  <o-time-picker  width="200px" ></o-time-picker> 
  \`\`\`
  `
  mdD = `
  \`\`\`html
  <o-time-picker  placeholder = "请选择时间" ></o-time-picker> 
  \`\`\`
  `
  mdE = `
  \`\`\`html
  <o-time-picker  defaultHour={1} defaultMinute={2} ></o-time-picker> 
  \`\`\`
  `
  mdF = `
  \`\`\`html
  <o-time-picker  enableSeconds="false"></o-time-picker> 
  \`\`\`
  `
  mdG = `
  \`\`\`html
  <o-time-picker  hourIncrement={2} minuteIncrement={5} ></o-time-picker> 
  \`\`\`
  `
  mdH = `
  \`\`\`html
  <o-time-picker  time_24hr="true" ></o-time-picker> 
  \`\`\`
  `

  installed() {}

  render() {
    const gridItem = tw`px-2 w-full md:w-6/12`

    return (
      <code-demo-container>
        <code-demo class={tw``} title="基本" describe="最简单的time-picker" code={this.mdA}>
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-time-picker></o-time-picker>
          </div>
        </code-demo>
        <code-demo class={tw``}  title="不同宽度" describe="支持传入 width 控制宽度" code={this.mdC}>
            <div slot="demo" class={tw`px-5 py-5`}>
            <o-time-picker  width="250px" > </o-time-picker> 
          </div>
        </code-demo>
        <code-demo class={tw``}  title="不同尺寸" describe="size可以设置为'medium'，'small'，'mini'" code={this.mdB}>
            <div slot="demo" class={tw`px-5 py-5`}>
            <o-time-picker size="mini" style="margin: auto 1px"></o-time-picker>
            <o-time-picker size="small" style="margin: auto 1px"></o-time-picker>
            <o-time-picker size="medium" style="margin: auto 1px"></o-time-picker>
          </div>
        </code-demo>
        <code-demo class={tw``} title="设置占位符" describe="支持传入 placeholder 控制占位符" code={this.mdD}>
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-time-picker  placeholder="请选择时间" ></o-time-picker> 
          </div>
        </code-demo>

        <code-demo class={tw``} title="设置默认时间" describe="支持传入 defaultHour、defaultMinute设置默认小时、分钟" code={this.mdE}>
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-time-picker  defaultHour={1} defaultMinute={2}></o-time-picker> 
          </div>
        </code-demo>

        <code-demo class={tw``} title="禁用秒" describe="支持传入 enableSeconds 禁用秒" code={this.mdF}>
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-time-picker  enableSeconds="false"></o-time-picker> 
          </div>
        </code-demo>
        
        <code-demo class={tw``} title="设置小时、分钟增量" describe="支持传入 hourIncrement、minuteIncrement 设置小时、分钟增量" code={this.mdG}>
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-time-picker  hourIncrement={2} minuteIncrement={1} ></o-time-picker> 
          </div>
        </code-demo>

        <code-demo class={tw``} title="设置24小时制" describe="支持传入 time_24hr 设置是否为24小时制" code={this.mdH}>
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-time-picker  time_24hr="true"  ></o-time-picker> 
          </div>
        </code-demo>

      </code-demo-container>
    )
  }
}

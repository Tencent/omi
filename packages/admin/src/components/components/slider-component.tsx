import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/slider'
import '../docs/admin-docs'
import './code-demo'

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
  
  \`\`\`
  `

  handleChange = (evt) => {
    console.log(evt.detail)
  }

  render() {
    return (
      <div>
        <h1>this is a placeholder for slider</h1>
        <code-demo
          title="slider title"
          describe="description for slider"
          code={this.mdA}
        >
          <div class={tw`p-5`}></div>
          <o-slider
            min="0"
            max="200"
            value="20"
            second_value="70"
            double_range
            slot="demo"
            onchange={this.handleChange}
          ></o-slider>
          <o-slider
            min="0"
            max="200"
            value="20"
            second_value="70"
            // double_range
            slot="demo"
            onchange={this.handleChange}
          ></o-slider>
        </code-demo>
      </div>
    )
  }
}

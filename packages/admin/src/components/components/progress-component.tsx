import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/progress'
import '../docs/admin-docs'
import './code-demo'
import Masonry from 'masonry-layout'

interface Props { }

const tagName = 'progress-component'
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
  <o-progress percent="40"></o-progress>
  <o-progress percent="60"></o-progress>
\`\`\`
  `
    mdB = `
  \`\`\`html
  <o-progress percent="50" width="150" stroke-width="8"></o-progress>
  <o-progress percent="50" width="150" stroke-width="16"></o-progress>
  <o-progress percent="50" width="200" stroke-width="16"></o-progress>
  \`\`\`
  `

    mdC = `
  \`\`\`html
  <o-progress percent="50" stroke-color="blue"></o-progress>
  <o-progress percent="50" stroke-color="orange"></o-progress>
  <o-progress percent="50" stroke-color="violet"></o-progress>

  <o-progress percent="50" stroke-color="blue" trail-color="gray"></o-progress>
  <o-progress percent="50" stroke-color="orange" trail-color="black"></o-progress>
  <o-progress percent="50" stroke-color="violet" trail-color="skyblue"></o-progress>

  <o-progress percent="50" text-color="blue"></o-progress>
  <o-progress percent="50" text-color="orange"></o-progress>
  <o-progress percent="50" text-color="violet"></o-progress>

  \`\`\`
  `
    mdD = `
  \`\`\`html
  <o-progress id="change"></o-progress>
  <script>
    const p = document.getElementById("change")
    let a = 0
    setInterval(() => {
      a += 10
      if (a > 100) a = 0
        p.setPercent(a)
      }
    }, 1000);
  </script>
  \`\`\`
  `
    changeTest: any
    install() {
        let a = 0
        setInterval(() => {
            a += 10
            if (a > 100) a = 0
            this.changeTest.setPercent(a)
        }, 1000);
    }

    installed() {
        new Masonry(this.grid, {
            // options...
            //https://masonry.desandro.com/options.html

        });

    }






    grid

    render() {

        const gridItem = tw`px-2 w-full md:w-6/12`
        return <div class={tw`px-4`}>

            <div ref={_ => this.grid = _} >

                <div class={tw`${gridItem}`}>
                    <code-demo class={tw``} title="基本" describe="最简单的 progress" code={this.mdA}>
                        <div slot="demo" class={tw`px-5 py-5`}>
                            <o-progress percent="40"></o-progress>
                            <o-progress percent="60" stroke-width="30"></o-progress>
                        </div>
                    </code-demo>
                </div>

                <div class={tw`${gridItem}`}>
                    <code-demo title="不同尺寸" describe="支持传入 width和stroke-width 控制大小" code={this.mdB}>
                        <div slot="demo" class={tw`px-5 py-5`}>
                            <o-progress percent="50" width="50" stroke-width="8"></o-progress>
                            <o-progress percent="50" width="50" stroke-width="16"></o-progress>
                            <o-progress percent="50" width="80" stroke-width="16"></o-progress>
                        </div>
                    </code-demo>
                </div>
        
                <div class={tw`${gridItem}`}>
                    <code-demo title="不同颜色" describe="支持传入 storke-color、trail-color和text-color 控制颜色" code={this.mdC}>
                        <div slot="demo" class={tw`px-5 py-5`}>
                            <o-progress percent="50" stroke-color="blue"></o-progress>
                            <o-progress percent="50" stroke-color="orange"></o-progress>
                            <o-progress percent="50" stroke-color="violet"></o-progress>

                            <o-progress percent="50" stroke-color="blue" trail-color="gray"></o-progress>
                            <o-progress percent="50" stroke-color="orange" trail-color="black"></o-progress>
                            <o-progress percent="50" stroke-color="violet" trail-color="skyblue"></o-progress>

                            <o-progress percent="50" text-color="blue"></o-progress>
                            <o-progress percent="50" text-color="orange"></o-progress>
                            <o-progress percent="50" text-color="violet"></o-progress>
                        </div>
                    </code-demo>
                </div>

                <div class={tw`${gridItem}`}>
                    <code-demo title="不同颜色和尺寸" describe="支持传入 size 和 color 控制大小颜色" code={this.mdD}>
                        <div slot="demo" class={tw`px-5 py-5`}>
                            <o-progress ref={e => { this.changeTest = e }} id="change"></o-progress>
                        </div>
                    </code-demo>
                </div>

            </div>
        </div>
    }
}

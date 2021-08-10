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
  <o-progress percent="50" width="200" stroke-width="8"></o-progress>
  <o-progress percent="50" width="300" stroke-width="16"></o-progress>
  <o-progress percent="50" width="400" stroke-width="24"></o-progress>
  \`\`\`
  `

    mdC = `
  \`\`\`html
  <o-progress percent="50" stroke-color="lightseagreen"></o-progress>
  <o-progress percent="50" trail-color="black"></o-progress>
  <o-progress percent="50" text-color = "red"></o-progress>

  \`\`\`
  `
    mdD = `
  \`\`\`html
  <o-progress percent="50" status="active"></o-progress>
  <o-progress percent="90" status="error"></o-progress>
  <o-progress percent="100" status="success"></o-progress>

  \`\`\`
  `
    mdE = `
  \`\`\`html
  <o-progress percent="50" status="error" show-info="false"></o-progress>
  <o-progress percent="50" status="success" show-info="false"></o-progress>

  \`\`\`
  `
    mdF = `
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
    mdG = `
  \`\`\`html
  <o-progress type="circle" percent="40"></o-progress>
  <o-progress type="circle" percent="60"></o-progress>

  \`\`\`
  `

    mdH = `
  \`\`\`html
  <o-progress type="circle" percent="50" stroke-width="16" stroke-color="lightseagreen"></o-progress>
  <o-progress type="circle" percent="60" width="150" stroke-color="lightseagreen"  trail-color="black"></o-progress>
  <o-progress type="circle" percent="70" width="150" stroke-width="16" stroke-color="lightseagreen"  trail-color="black" text-color="red"></o-progress>

  \`\`\`
  `
    mdI = `
  \`\`\`html
  <o-progress type="circle" percent="80" status="active"></o-progress>
  <o-progress type="circle" percent="90" status="error"></o-progress>
  <o-progress type="circle" percent="100" status="success"></o-progress>

  \`\`\`
  `
    mdJ = `
  \`\`\`html
  <o-progress type="circle" percent="70" status="error" show-info="false"></o-progress>
  <o-progress type="circle" percent="70" status="success" show-info="false"></o-progress>

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
                            <o-progress percent={40}></o-progress>
                            <o-progress percent={60}></o-progress>
                        </div>
                    </code-demo>
                </div>

                <div class={tw`${gridItem}`}>
                    <code-demo title="不同尺寸" describe="支持传入 width和stroke-width 控制大小，可以通过任意组合实现自定义" code={this.mdB}>
                        <div slot="demo" class={tw`px-5 py-5`}>
                            <o-progress percent={50} width={200} strokeWidth={8}></o-progress>
                            <o-progress percent={50} width={300} strokeWidth={16}></o-progress>
                            <o-progress percent={50} width={400} strokeWidth={24}></o-progress>
                        </div>
                    </code-demo>
                </div>
        
                <div class={tw`${gridItem}`}>
                    <code-demo title="不同颜色" describe="支持传入 storke-color、trail-color和text-color控制颜色，可以通过任意组合实现自定义" code={this.mdC}>
                        <div slot="demo" class={tw`px-5 py-5`}>
                            <o-progress percent={50} strokeColor="lightseagreen"></o-progress>
                            <o-progress percent={50} trailColor="black"></o-progress>
                            <o-progress percent={50} textColor = "red"></o-progress>
                        </div>
                    </code-demo>
                </div>

                <div class={tw`${gridItem}`}>
                    <code-demo title="不同状态" describe="支持传入status 控制状态（success/error/active）" code={this.mdD}>
                        <div slot="demo" class={tw`px-5 py-5`}>
                            <o-progress percent={50} status="active"></o-progress>
                            <o-progress percent={90} status="error"></o-progress>
                            <o-progress percent={100} status="success"></o-progress>
                        </div>
                    </code-demo>
                </div>

                <div class={tw`${gridItem}`}>
                    <code-demo title="显示与否" describe="支持传入showInfo 控制图标或者文字的显示" code={this.mdE}>
                        <div slot="demo" class={tw`px-5 py-5`}>
                            <o-progress percent={50} status="error" strokeWidth={8} showInfo={false}></o-progress>
                            <o-progress percent={50} status="success" strokeWidth={8} showInfo={false}></o-progress>
                        </div>
                    </code-demo>
                </div>

                <div class={tw`${gridItem}`}>
                    <code-demo title="动态效果" describe="支持动态改变（内部原生DOM元素的暴露更新方法），并拥有优先级顺序，也支持外部传入事件update" code={this.mdF}>
                        <div slot="demo" class={tw`px-5 py-5`}>
                            <o-progress ref={e => { this.changeTest = e }} id="change"></o-progress>
                            {/* <o-progress type="circle" ref={e => { this.changeTest = e }} id="change"></o-progress> */}
                        </div>
                    </code-demo>
                </div>

                <div class={tw`${gridItem}`}>
                    <code-demo class={tw``} title="环形进度条" describe="支持type选择circle来实现，默认为line(可外部传入dispaly展示)" code={this.mdG}>
                        <div slot="demo" class={tw`px-5 py-5`}>
                            <o-progress type="circle" percent={40} style="display:inline-block"></o-progress>
                            <o-progress type="circle" percent={60} style="display:inline-block"></o-progress>
                        </div>
                    </code-demo>
                </div>

                <div class={tw`${gridItem}`}>
                    <code-demo class={tw``} title="环形基本样式改变" describe="如同line一样支持颜色、大小改变" code={this.mdH}>
                        <div slot="demo" class={tw`px-5 py-5`}>
                            <o-progress type="circle" percent={50} strokeWidth={16} strokeColor="lightseagreen" style="display:inline-block"></o-progress>
                            <o-progress type="circle" percent={60} width={150} strokeColor="lightseagreen"  trailColor="black" style="display:inline-block"></o-progress>
                            <o-progress type="circle" percent={70} width={150} strokeWidth={16} strokeColor="lightseagreen"  trailColor="black" textColor="red" style="display:inline-block"></o-progress>
                        </div>
                    </code-demo>
                </div>

                <div class={tw`${gridItem}`}>
                    <code-demo class={tw``} title="环形状态改变" describe="如同line一样支持选择状态" code={this.mdI}>
                        <div slot="demo" class={tw`px-5 py-5`}>
                            <o-progress type="circle" percent={80} status="active" style="display:inline-block"></o-progress>
                            <o-progress type="circle" percent={90} status="error" style="display:inline-block"></o-progress>
                            <o-progress type="circle" percent={100} status="success" style="display:inline-block"></o-progress>
                        </div>
                    </code-demo>
                </div>

                <div class={tw`${gridItem}`}>
                    <code-demo class={tw``} title="环形显示与否" describe="支持设置show-info来控制文本的显示与否" code={this.mdJ}>
                        <div slot="demo" class={tw`px-5 py-5`}>
                            <o-progress type="circle" percent={70} status="error" showInfo={false} style="display:inline-block"></o-progress>
                            <o-progress type="circle" percent={70} status="success" showInfo={false} style="display:inline-block"></o-progress>
                        </div>
                    </code-demo>
                </div>


            </div>
        </div>
    }
}

import { WeElement, define, createRef } from "omi"
import '../common/index'
import '../../../../../src/skeleton/_example/base'
import '../../../../../src/skeleton/_example/advance'
import '../../../../../src/skeleton/_example/animation'
import '../../../../../src/skeleton/_example/delay'
import '../../../../../src/skeleton/_example/theme'
import * as marked from 'marked'

const docsHTML = marked.parse(`

## API
### Skeleton Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式 | N
animation | String | none | 动画效果，有「渐变加载动画」和「闪烁加载动画」两种。值为 'none' 则表示没有动画。可选项：gradient/flashed/none | N
delay | Number | 0 | 【开发中】延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒 | N
loading | Boolean | true | 是否为加载状态，如果是则显示骨架图，如果不是则显示加载完成的内容 | N
rowCol | Array | - | 高级设置，用于自定义行列数量、宽度高度、间距等。【示例一】，\`[1, 1, 2]\` 表示输出三行骨架图，第一行一列，第二行一列，第三行两列。【示例二】，\`[1, 1, { width: '100px' }]\` 表示自定义第三行的宽度为 \`100px\`。【示例三】，\`[1, 2, [{ width, height }, { width, height, marginLeft }]]\` 表示第三行有两列，且自定义宽度、高度、尺寸（圆形或方形使用）、间距、内容等。TS 类型：\`SkeletonRowCol\` \`type SkeletonRowCol = Array < Number \\| SkeletonRowColObj \\| Array < SkeletonRowColObj >>\` \`interface SkeletonRowColObj { width?: string; height?: string; size?: string; marginRight?: string; marginLeft?: string; margin?: string; content?: string \| TNode; type ?: 'rect' \| 'circle' \| 'text' }\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/skeleton/type.ts) | N
theme | String | text | 快捷定义骨架图风格，有基础、头像组合等，具体参看代码示例。可选项：text/avatar/paragraph/avatar-text/tab/article | N

`)

interface Props {
    tab: string
}

define(
    'page-skeleton',
    class extends WeElement<Props> {
        static defaultProps = {
            tab: 'demo',
        }

        tab = ['demo', 'api', 'design']
        tdDocHeader = createRef()
        tdDocTabs = createRef()

        static propTypes = {
            tab: String,
        }

        updateTab = (t: string) => {
            this.updateProps({
                tab: t,
            })
        }

        isShow(tabStr: string) {
            return this.props.tab === tabStr ? { display: 'block' } : { display: 'none' }
        }

        installed() {
            const tdDocTabsEl = this.tdDocTabs.current as HTMLElement
            tdDocTabsEl.onchange = ({ detail: currentTab }: CustomEvent) => {
                this.updateTab(currentTab)
            }
        }

        render() {
            return (
                <>
                    <td-doc-tabs ref={this.tdDocTabs} tab={this.props.tab} style="display:block"></td-doc-tabs>
                    <div style={this.isShow('demo')} name="DEMO">
                        <h3 id="基础骨架屏">
                            基础骨架屏 <a class="header-anchor" href="#基础骨架屏"></a>
                        </h3>
                        <p>最简单的骨架屏效果。</p>
                        <demo-wrapper>
                            <skeleton-base></skeleton-base>
                        </demo-wrapper>

                        <h3 id="带动画效果的骨架屏">
                            带动画效果的骨架屏 <a class="header-anchor" href="#带动画效果的骨架屏"></a>
                        </h3>
                        <p>提供渐变和闪烁两种动画效果。</p>
                        <demo-wrapper>
                            <skeleton-animation></skeleton-animation>
                        </demo-wrapper>

                        <h3 id="带延迟效果的骨架屏">
                            带延迟效果的骨架屏 <a class="header-anchor" href="#带延迟效果的骨架屏"></a>
                        </h3>
                        <p>设置最短延迟响应时间，低于响应时间的操作不显示加载状态。</p>
                        <demo-wrapper>
                            <skeleton-delay></skeleton-delay>
                        </demo-wrapper>

                        <h3 id="不同主题的骨架屏">
                            不同主题的骨架屏 <a class="header-anchor" href="#不同主题的骨架屏"></a>
                        </h3>
                        <p>可以通过'theme'属性快速定义不同主题风格的骨架屏。</p>
                        <demo-wrapper>
                            <skeleton-theme></skeleton-theme>
                        </demo-wrapper>

                        <h3 id="组合用法">
                            组合用法 <a class="header-anchor" href="#组合用法"></a>
                        </h3>
                        <p>包含图片、文字、按钮、输入框、头像、标签等多种元素组合在一起的占位效果。</p>
                        <demo-wrapper>
                            <skeleton-advance></skeleton-advance>
                        </demo-wrapper>
                    </div>
                    <div style={this.isShow('api')} name="API">
                        <div
                            style="margin-bottom:76px"
                            dangerouslySetInnerHTML={{
                                __html: docsHTML,
                            }}
                        ></div>
                    </div>
                    <div style={this.isShow('design')} name="DESIGN"></div>
                </>
            )
        }
    }
)
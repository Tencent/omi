import { WeElement, define, createRef } from "omi"
import '../common/index'
import '../../../../../src/badge/_example/base'
import '../../../../../src/badge/_example/color'
import '../../../../../src/badge/_example/custom'
import '../../../../../src/badge/_example/number'
import '../../../../../src/badge/_example/offset'
import '../../../../../src/badge/_example/shape'
import '../../../../../src/badge/_example/size'
import * as marked from 'marked'

const docsHTML = marked.parse(`

## API
### Badge Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式 | N
children | TNode | - | 徽标内容，同 content。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
color | String | - | 颜色 | N
content | TNode | - | 徽标内容。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
count | TNode | 0 | 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+。TS 类型：\`string \| number \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
dot | Boolean | false | 是否为红点 | N
maxCount | Number | 99 | 封顶的数字值 | N
offset | Array | - | 设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem']。TS 类型：\`Array < string \\| number >\` | N
shape | String | circle | 形状。可选项：circle/round | N
showZero | Boolean | false | 当数值为 0 时，是否展示徽标 | N
size | String | medium | 尺寸。可选项：small/medium | N

`)

interface Props {
    tab: string
}

define(
    'page-badge',
    class extends WeElement<Props> {
        /*dot : boolean = false
        showZero :boolean = false
        shape : 'circle'|'round' = 'circle'
        size : 'small'|'medium' = 'medium'*/

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
                        <h3 id="红点样式的徽标">
                            红点样式的徽标 <a class="header-anchor" href="#红点样式的徽标"></a>
                        </h3>
                        <p>仅显示为圆点的徽标，有图标时位于图标右上角，无图标时位于文字标题后侧。弱提示场景下，不显示数量，需要用户去手动点击查看进行消除。</p>
                        <demo-wrapper>
                            <badge-base></badge-base>
                        </demo-wrapper>

                        <h3 id="数字样式的徽标">
                            数字样式的徽标 <a class="header-anchor" href="#数字样式的徽标"></a>
                        </h3>
                        <p>含数字的徽标，适用于需要较强提醒的场景，直接提醒用户相关信息数量。</p>
                        <demo-wrapper>
                            <badge-number></badge-number>
                        </demo-wrapper>

                        <h3 id="自定样式的徽标">
                            自定样式的徽标 <a class="header-anchor" href="#自定样式的徽标"></a>
                        </h3>
                        <p>可对显示信息进行自定义配置，如展示为“热门hot” “最新new”等。</p>
                        <demo-wrapper>
                            <badge-custom></badge-custom>
                        </demo-wrapper>

                        <h3 id="不同尺寸的徽标">
                            不同尺寸的徽标 <a class="header-anchor" href="#不同尺寸的徽标"></a>
                        </h3>
                        <p>提供标准（默认）、小两种尺寸。</p>
                        <demo-wrapper>
                            <badge-size></badge-size>
                        </demo-wrapper>

                        <h3 id="不同形状的徽标">
                            不同形状的徽标 <a class="header-anchor" href="#不同形状的徽标"></a>
                        </h3>
                        <p>提供圆形和方形两种不同形状的徽标展示。</p>
                        <demo-wrapper>
                            <badge-shape></badge-shape>
                        </demo-wrapper>

                        <h3 id="控制徽标显示偏移位置">
                            控制徽标显示偏移位置 <a class="header-anchor" href="#控制徽标显示偏移位置"></a>
                        </h3>
                        <demo-wrapper>
                            <badge-offset></badge-offset>
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
    },
)
import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/tabs'
import '@omiu/icon/ac-unit-outlined'
import '@omiu/icon/accessible-rounded'
import '@omiu/icon/add-ic-call-rounded'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'tabs-component'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = [sheet.target, 'o-button{ margin: 4px }']


  installed() { }

  render() {
    // const gridItem = tw`px-2 w-full md:w-6/12`
    const gridStyle = { breakInside: 'avoid', padding: '0 0 0 0' }

    return (
      <code-demo-container>
        <code-demo
          title="基础选项卡"
          describe={'展示基础选项卡能力'}
          code={`
\`\`\`jsx
<o-tabs
  tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
          `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-tabs
              tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}
              activeIndex={0}>
            </o-tabs>
          </div>
        </code-demo>

        <code-demo
          title="卡片选项卡"
          describe="通过设置 type 为 card 来使用卡片样式的选项卡"
          code={`
\`\`\`jsx
<o-tabs
  type="card"
  tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
                    `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-tabs type="card" tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]} activeIndex={0}>
            </o-tabs>
          </div>
        </code-demo>

        <code-demo
          title="可增加项"
          describe="可通过 onAddIconClick 弹出命名框来添加 tab"
          code={`
\`\`\`jsx
<o-tabs
  addable
  onAddIconClick={this.onAddIconClick}
  tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
                              `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-tabs
              addable
              tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}
              activeIndex={0}>
            </o-tabs>

          </div>
        </code-demo>

        <code-demo
          title="可添加 card 选项卡"
          describe="可通过 onAddIconClick 弹出命名框来添加 tab"
          code={`
\`\`\`jsx
<o-tabs
  addable
  onAddIconClick={this.onAddIconClick}
  type="card"
  tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
                                        `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>

            <o-tabs
              addable
              type="card"
              tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}
              activeIndex={0}>
            </o-tabs>


          </div>
        </code-demo>


        <code-demo
          title="卡片化选项卡"
          describe={'通过设置 type 为 border-card 来使用卡片样式的选项卡'}
          code={`
\`\`\`jsx
<o-tabs
  type="border-card"
  tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
             `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-tabs
              type="border-card"
              tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}
              activeIndex={0}>
            </o-tabs>


          </div>
        </code-demo>



        <code-demo
          title="位置"
          describe={'可以通过 position 设置标签的位置'}
          code={`
\`\`\`jsx
<o-tabs
  position="right"
  tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
             `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-tabs
              position="right"
              tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}
              activeIndex={0}>
            </o-tabs>



          </div>
        </code-demo>



        <code-demo
          title="位置"
          describe={'可以通过 position 设置标签的位置'}
          code={`
\`\`\`jsx
<o-tabs
  position="left"
  tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
                       `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-tabs
              position="left"
              tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}
              activeIndex={0}>
            </o-tabs>
          </div>
        </code-demo>


        <code-demo
          title="底部 tab"
          describe={'可以通过 position 设置标签的位置'}
          code={`
\`\`\`jsx
<o-tabs
  type="border-card"
  position="bottom"
  tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
          `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-tabs
              type="border-card"
              position="bottom"
              tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}
              activeIndex={0}>
            </o-tabs>



          </div>
        </code-demo>


        <code-demo
          title="带 icon"
          describe={'通过在 tabs 的 item 里加入 icon 属性来设置 icon'}
          code={`
\`\`\`jsx
<o-tabs
  tabs={[
    { label: '用户管理', icon: 'accessible-rounded' },
    { label: '系统设置', icon: 'ac-unit-outlined' },
    { label: '权限管理中心', icon: 'accessible-rounded' }
  ]}
  activeIndex={0}>
</o-tabs>
\`\`\`
          `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-tabs
              tabs={[
                { label: '用户管理', icon: 'accessible-rounded' },
                { label: '系统设置', icon: 'ac-unit-outlined' },
                { label: '权限管理中心', icon: 'accessible-rounded' }
              ]}
              activeIndex={0}>
            </o-tabs>
          </div>
        </code-demo>

        <code-demo
          title="可关闭"
          describe={'通过 closable 属性控制'}
          code={`
\`\`\`jsx
<o-tabs
  closable
  tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
          `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-tabs
              closable
              tabs={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}
              activeIndex={0}>
            </o-tabs>
          </div>
        </code-demo>

        <code-demo
          title="可关闭且带有 icon"
          describe={'通过 closable 属性控制'}
          code={`
\`\`\`jsx
<o-tabs closable
  tabs={[
    { label: '用户管理', icon: 'accessible-rounded' },
    { label: '系统设置', icon: 'ac-unit-outlined' },
    { label: '权限管理中心', icon: 'accessible-rounded' }
  ]}
  activeIndex={0}>
</o-tabs>
\`\`\`
          `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>

            <o-tabs closable
              tabs={[
                { label: '用户管理', icon: 'accessible-rounded' },
                { label: '系统设置', icon: 'ac-unit-outlined' },
                { label: '权限管理中心', icon: 'accessible-rounded' }
              ]}
              activeIndex={0}>
            </o-tabs>

          </div>
        </code-demo>





      </code-demo-container>
    )
  }
}

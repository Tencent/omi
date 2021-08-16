import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/cascader'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props {}

const tagName = 'cascader-component'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = [sheet.target]

  installed() {}

  render() {
    // const gridItem = tw`px-2 w-full md:w-6/12`
    const gridStyle = {
      breakInside: 'avoid',
      padding: '0 0 0 0',
      overflow: 'visible'
    }

    const options = [
      {
        value: 'components',
        label: '组件',
        children: [
          {
            value: 'basic',
            label: '基础',
            children: [
              {
                value: 'input',
                label: '输入框'
              },
              {
                value: 'button',
                label: '按钮'
              },
              {
                value: 'card',
                label: '卡片'
              }
            ]
          },
          {
            value: 'form',
            label: '表单',
            children: [
              {
                value: 'select',
                label: '选择器'
              }
            ]
          },
          {
            value: 'advanced',
            label: '高级',
            children: [
              {
                value: 'tree',
                label: '树'
              },
              {
                value: 'cascader',
                label: '级联选择器'
              }
            ]
          }
        ]
      },
      {
        value: 'author',
        label: '作者',
        children: [
          {
            value: 'dntzhang',
            label: '当耐特'
          },
          {
            value: 'YunYouJun',
            label: '云游君'
          }
        ]
      },
      {
        value: 'disabled',
        label: '禁用',
        disabled: true
      }
    ]

    return (
      <code-demo-container>
        <code-demo
          title="级联选择器"
          describe={'根据选项树深度生成级联选择菜单'}
          code={`
\`\`\`js
// 可选项
const options = [
  {
    value: 'components',
    label: '组件',
    children: [
      {
        value: 'basic',
        label: '基础',
        children: [
          {
            value: 'input',
            label: '输入框'
          },
          {
            value: 'button',
            label: '按钮'
          },
          {
            value: 'card',
            label: '卡片'
          }
        ]
      },
      {
        value: 'form',
        label: '表单',
        children: [
          {
            value: 'select',
            label: '选择器'
          }
        ]
      },
      {
        value: 'advanced',
        label: '高级',
        children: [
          {
            value: 'tree',
            label: '树'
          },
          {
            value: 'cascader',
            label: '级联选择器'
          }
        ]
      }
    ]
  },
  {
    value: 'author',
    label: '作者',
    children: [
      {
        value: 'dntzhang',
        label: '当耐特'
      },
      {
        value: 'YunYouJun',
        label: '云游君'
      }
    ]
  },
  {
    value: 'disabled',
    label: '禁用',
    disabled: true
  }
]
\`\`\`

\`\`\`html
// jsx or tsx
<o-cascader options={options}></o-cascader>
\`\`\`
          `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-cascader options={options}></o-cascader>
          </div>
        </code-demo>

        <code-demo
          title="禁用"
          describe="禁用状态下的呈现"
          code={`
\`\`\`html
<o-cascader
  disabled
  value={['components', 'basic', 'card']}
  options={options}
></o-cascader>
\`\`\`
                    `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-cascader
              disabled
              value={['components', 'basic', 'card']}
              options={options}
            ></o-cascader>
          </div>
        </code-demo>

        <code-demo
          title="尺寸"
          describe={'支持 4 种尺寸大小'}
          code={`
\`\`\`html
<o-cascader options={options}></o-cascader>
<o-cascader size="medium" options={options}></o-cascader>
<o-cascader size="small" options={options}></o-cascader>
<o-cascader size="mini" options={options}></o-cascader>
\`\`\`
             `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-cascader options={options}></o-cascader>
            <br />
            <br />
            <o-cascader size="medium" options={options}></o-cascader>
            <br />
            <br />
            <o-cascader size="small" options={options}></o-cascader>
            <br />
            <br />
            <o-cascader size="mini" options={options}></o-cascader>
          </div>
        </code-demo>
      </code-demo-container>
    )
  }
}

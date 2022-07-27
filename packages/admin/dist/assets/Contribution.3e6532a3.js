var n=`## \u5982\u4F55\u5C06\u7EC4\u4EF6\u6DFB\u52A0\u81F3 Omi-Admin

## \u521B\u5EFA\u7EC4\u4EF6

\u5728 omi/package/admin/src/components \u76EE\u5F55\u4E0B\u521B\u5EFA name-component.tsx

\u4F7F\u7528\u76EE\u5F55\u4E0B\u7684 \`example-component.tsx\` \u8FDB\u884C\u4FEE\u6539\uFF0C\u6DFB\u52A0\u4F60\u7684\u7EC4\u4EF6\u5C55\u793A\u9875\u9762

\`\`\`js
import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

// \u5F15\u5165\u4F60\u7684\u7EC4\u4EF6
// TODO
// import '@omiu/name'

interface Props {}

// TODO
const tagName = 'name-component'
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

  // TODO
  mdA =
  \`
  \\\`\\\`\\\`html
  <div>example</div>
  \\\`\\\`\\\`
  \`

  installed() {}

  render() {

    return (
      <code-demo-container>
        <code-demo
          title="\u4F8B\u5B50"
          describe={'\u4E0D\u540C\u7C7B\u578B\u7684\u6807\u7B7E'}
          // TODO
          code={this.mdA}
        >
          <div slot="demo" class={tw\`px-5 py-5\`}>
              {/* TODO */}
            <div>example</div>
          </div>
        </code-demo>
      </code-demo-container>
    )
  }
}

\`\`\`

## \u56FD\u9645\u5316\u4E2D\u6DFB\u52A0\u7EC4\u4EF6

\u5728 \`omi/package/admin/locales/zh.yml\` \u53CA \`omi/package/admin/locales/en.yml\` \u4E2D\u52A0\u5165

\`\`\`js
// omi/package/admin/locales/en.yml
Name: 'example'
// omi/package/admin/locales/zh.yml
Name: '\u4F8B\u5B50'
\`\`\`

## \u5C06\u7EC4\u4EF6\u5C55\u793A\u9875\u52A0\u5165 Admin \u8DEF\u7531 (\u652F\u6301\u81EA\u52A8\u52A0\u5165\u4E86)

\u4FEE\u6539 components \u5BF9\u8C61 , \u6DFB\u52A0\u4F60\u7684\u7EC4\u4EF6\u540D

\`\`\`js
const components = [
  'button',
  'tabs',
  'slider',
  'loading',
  'toast',
  'card',
  'progress',
  'time-picker',
  'tag',
  'rate',
  //TODO
  'name'
]
\`\`\`

\`\`\`js
components.map((componentName: string) =>
  route(\`/\${componentName}-component\`, () => {
    //lazy load
    import(\`./components/components/\${componentName}-component.tsx\`).then(() =>
      rootEl.transitionTo(\`\${componentName}-component\`)
    )
  })
)
\`\`\`

## \u5411\u4FA7\u8FB9\u680F\u4E2D\u6DFB\u52A0\u5BFC\u822A

\u5728 /omi/packages/admin/src/nav-tree.ts \u4E2D\u52A0\u5165

\`\`\`js
{
    label: i18n.t('Name'),
    id: genId(),
    href: '#/name-component'
},
\`\`\`
`;export{n as default};

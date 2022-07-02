var n=`## How to add components to Omi-Admin

## Create your component

create name-component.tsx in omi/package/admin/src/components

use \`example-component.tsx\` to modify \uFF0Cand add your component presentation page

\`\`\`js
import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

// import your components
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
          title="example"
          describe={'example'}
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

## Add components in internationalization (i10n)

add them in \`omi/package/admin/locales/zh.yml\` and \`omi/package/admin/locales/en.yml\`

\`\`\`js
// omi/package/admin/locales/en.yml
Name: 'example'
// omi/package/admin/locales/zh.yml
Name: '\u4F8B\u5B50'
\`\`\`

## Add component display page to Admin route (supports automatic join)

Modify the Components object and add your component name

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

## Add navigation to the sidebar

add them in /omi/packages/admin/src/nav-tree.ts

\`\`\`js
{
    label: i18n.t('Name'),
    id: genId(),
    href: '#/name-component'
},
\`\`\`
`;export{n as default};

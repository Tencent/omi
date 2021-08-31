## 如何将组件添加至 Omi-Admin

## 创建组件

在 omi/package/admin/src/components 目录下创建 name-component.tsx

使用目录下的 `example-component.tsx` 进行修改，添加你的组件展示页面

```js
import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

// 引入你的组件
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
  `
  \`\`\`html
  <div>example</div>
  \`\`\`
  `

  installed() {}

  render() {

    return (
      <code-demo-container>
        <code-demo
          title="例子"
          describe={'不同类型的标签'}
          // TODO
          code={this.mdA}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
              {/* TODO */}
            <div>example</div>
          </div>
        </code-demo>
      </code-demo-container>
    )
  }
}

```

## 国际化中添加组件

在 `omi/package/admin/locales/zh.yml` 及 `omi/package/admin/locales/en.yml` 中加入

```js
// omi/package/admin/locales/en.yml
Name: 'example'
// omi/package/admin/locales/zh.yml
Name: '例子'
```

## 将组件展示页加入 Admin 路由 (支持自动加入了)

修改 components 对象 , 添加你的组件名

```js
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
```

```js
components.map((componentName: string) =>
  route(`/${componentName}-component`, () => {
    //lazy load
    import(`./components/components/${componentName}-component.tsx`).then(() =>
      rootEl.transitionTo(`${componentName}-component`)
    )
  })
)
```

## 向侧边栏中添加导航

在 /omi/packages/admin/src/nav-tree.ts 中加入

```js
{
    label: i18n.t('Name'),
    id: genId(),
    href: '#/name-component'
},
```

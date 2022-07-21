import { WeElement, render, h, tag } from 'omi'
import './index.css'
import { tw, sheet } from 'omi-twind'
import './docs/admin-docs'

interface MyAppProps {
  name: string
}

@tag('my-app')
export default class extends WeElement<MyAppProps> {
  static css = sheet.target

  abc: string

  onCountChanged = (evt: CustomEvent) => {
    console.log(evt.detail)
  }


  mdContent = `
English | [简体中文](./README.CN.md) 


## Omi -  Front End Cross-Frameworks Framework

> Omiu - Cross-Frameworks and [Cross-Themes](https://omi.cdn-go.cn/admin/latest/index.html#/docs/theme) UI Components powered by Omi

* [💯Omi Admin by Omiu](https://tencent.github.io/omi/packages/admin/dist/index.html)
* [💯国内加速访问 Omi Admin](https://omi.cdn-go.cn/admin/latest/index.html)
* [💯Omi Playground](https://tencent.github.io/omi/packages/playground/index.html)

Define cross-frameworks button element with typescript:

\`\`\`js
import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

interface Props {
  size?: 'medium' | 'small' | 'mini',
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
  plain?: boolean,
  round?: boolean,
  circle?: boolean,
  loading?: boolean,
  disabled?: boolean,
  icon?: string,
  autofocus?: boolean,
  nativeType?: 'button' | 'submit' | 'reset',
  block?: boolean
  text?: string
}

@tag('o-button')
export default class Button extends WeElement<Props>{
  static css = css

  static defaultProps = {
    plain: false,
    round: false,
    circle: false,
    loading: false,
    disabled: false,
    autofocus: false,
    nativeType: 'button',
    block: false
  }

  static propTypes = {
    size: String,
    type: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    icon: String,
    autofocus: Boolean,
    nativeType: String,
    block: Boolean,
    text: String
  }

  render(props) {
    return <button disabled={props.disabled} {...extractClass(props, 'o-button', {
      ['o-button-' + props.type]: props.type,
      ['o-button-' + props.size]: props.size,
      'is-plain': props.plain,
      'is-round': props.round,
      'is-circle': props.circle,
      'is-disabled': props.disabled,
      'is-block': props.block
    })} type={props.nativeType} >
      {props.loading && <i class='icon-loading'></i>}
      {props.text}
      <slot></slot>
    </button>
  }
}
\`\`\`


## Contributors

![](https://contrib.rocks/image?repo=Tencent/omi)

Any form of contribution is welcome. The above contributors have been officially released by Tencent.

We very much welcome developers to contribute to Tencent's open source, and we will also give them incentives to acknowledge and thank them. Here we provide an official description of Tencent's open source contribution. Specific contribution rules for each project are formulated by the project team. Developers can choose the appropriate project and participate according to the corresponding rules. The Tencent Project Management Committee will report regularly to qualified contributors and awards will be issued by the official contact.

## Core Maintainers

- [@dntzhang](https://github.com/dntzhang)
- [@Wscats](https://github.com/Wscats)
- [@LeeHyungGeun](https://github.com/LeeHyungGeun)
- [@xcatliu](https://github.com/xcatliu)
- [AlloyTeam](http://alloyteam.com/)

Please contact us for any questions. 


## License

MIT © Tencent
  
  `

  render(props) {
    return (
      <div>
        <header class={tw`bg-emerald-400 h-9 leading-9 text-white pl-1`}>
          <h1>OMI TUTORIAL</h1>
        </header>
        <div class={tw`flex`}>
          <div class={tw`flex-1 overflow-auto pl-8 pr-8`} style={{ height: 'calc(100vh - 36px)' }}>
            <admin-docs mdContent={this.mdContent}></admin-docs>
          </div>
          <div class={tw`flex-1 bg-gray-100`} style={{ height: 'calc(100vh - 36px)' }}>
            <div class={tw`bg-gray-100`} style="height:58%" >
            </div>
            <div class={tw`bg-red-100`} style="height:42%">
            </div>
          </div>
        </div>


      </div>
    )
  }
}

render(<my-app></my-app>, '#root', {
  // if using OMI to build the whole application, ignore the attributs of DOM and use props of virtual dom
  ignoreAttrs: true
})

import { WeElement, render, h, options, tag } from 'omi'

options.ignoreAttrs = true

import './hello-omi'
import './index.css'
import * as css from './_index.less'

import '@omiu/button'
import './components/admin-header'
import './components/admin-left-panel'
interface MyAppProps {
  name: string
}


@tag('my-app')
export default class extends WeElement<MyAppProps> {

  static css = css.default

  abc: string

  onAbc = (evt: CustomEvent) => {
    this.abc = ` by ${evt.detail.name}`
    this.update()
  }

  render(props) {
    return (
      <div class="app">
        <admin-header></admin-header>

        <admin-left-panel></admin-left-panel>
        {/* {this.abc}
        <hello-omi onAbc={this.onAbc} msg="Omi"></hello-omi>
        <o-button>button</o-button> */}

      </div>
    )
  }
}

render(<my-app name='Omi'></my-app>, '#root')

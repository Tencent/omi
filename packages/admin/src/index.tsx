import { WeElement, render, h, define, tag } from 'omi'
import './hello-omi'
import './index.css'
import * as css from './_index.less'

import '@omiu/button'
import './components/admin-header'

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
        {this.abc}
        <hello-omi onAbc={this.onAbc} msg="Omi"></hello-omi>
        <o-button>button</o-button>

      </div>
    )
  }
}

render(<my-app name='Omi'></my-app>, '#root')

import { WeElement, render, h, define, tag } from 'omi'
import './hello-omi'
import './index.css'
import * as css from './_index.less'
import logo from './logo.svg'

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
        <header class="app-header">
          <img
            src={logo}
            class="app-logo"
            alt="logo"
          />
          <h1 class="app-title">Welcome to {props.name}</h1>
        </header>
        {this.abc}
        <hello-omi onAbc={this.onAbc} msg="Omi"></hello-omi>

      </div>
    )
  }
}

render(<my-app name='Omi'></my-app>, '#root')

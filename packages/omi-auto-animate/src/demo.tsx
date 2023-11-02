import { render, signal, tag, Component, h } from 'omi'

import './index'

const show = signal(false)

@tag('my-app')
export class MyApp extends Component {
  render() {
    return (
      <>
        <buttton onClick={() => show.value = !show.value}>Toggle show</buttton>
        <div o-auto-animate >
          {show.value && <h2>Hello o-auto-animate!</h2>}
        </div>
      </>

    )
  }
}

render(<my-app />, document.body)
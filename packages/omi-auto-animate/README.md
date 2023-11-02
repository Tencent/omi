# omi-auto-animate

> Omi version of [formkit/auto-animate](https://github.com/formkit/auto-animate)

## Install

```bash
npm i omi-auto-animate
```


## Usage

```tsx
import { render, signal, tag, Component, h } from 'omi'

import 'omi-auto-animate'

const show = signal(false)

@tag('my-app')
export class MyApp extends Component {
  render() {
    return (
      <>
        <buttton onClick={() => show.value = !show.value}>Toggle show</buttton>
        <div o-auto-animate>
          {show.value && <h2>Hello o-auto-animate!</h2>}
        </div>
      </>
    )
  }
}

render(<my-app />, document.body)
```
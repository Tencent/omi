import '../../src/breadcrumb/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <m-breadcrumb split="/" items={[
      { text: 'Home' },
      { text: 'Helper' },
      { text: 'About' }
    ]}></m-breadcrumb>


    <m-breadcrumb  split="/" items={[
      { text: 'Home', href:'https://tencent.github.io/omi/', icon:'home' },
      { text: 'Helper', icon:'help' },
      { text: 'About', icon: 'people' }
    ]}></m-breadcrumb>
  </div>
  , 'body')


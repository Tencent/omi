import '../../src/chip/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <m-chip selected>
      Chip content1
    </m-chip>
    <m-chip>
      Chip content2
    </m-chip>

  </div>
  , 'body')


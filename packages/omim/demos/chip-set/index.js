import '../../src/chip-set/index.tsx'
import '../../src/chip/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <m-chip-set choice>
      <m-chip selected>
        Chip content1
      </m-chip>
      <m-chip>
        Chip content2
      </m-chip>
    </m-chip-set>
    <m-chip-set filter>
      <m-chip selected>
        Chip content1
      </m-chip>
      <m-chip>
        <div class="mdc-chip__checkmark" >
          <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
            <path class="mdc-chip__checkmark-path" fill="none" stroke="black"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>
        </div>
        Chip content2
      </m-chip>
    </m-chip-set>
  </div>
  , 'body')


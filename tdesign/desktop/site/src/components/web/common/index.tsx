import { WeElement, define, h, tag, createRef } from 'omi'
import css from "./base.css"
define(
    'demo-wrapper',
    class extends WeElement {
      static css = css
      render() {
        return (
          <>
            <div class="demo-wrapper">
              <slot></slot>
            </div>
          </>
        )
      }
    },
  )
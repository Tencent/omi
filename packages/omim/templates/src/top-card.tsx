import * as css from './_top-card.css'
import { define, WeElement, h } from 'omi'

define('top-card', class extends WeElement {
  static css = css

  render(props) {
    return <div class="card">
      <div class="icon">
        <svg viewBox="64 64 896 896" class="" data-icon="twitter" width="3em" height="3em" fill={props.color} aria-hidden="true" focusable="false"><path d={props.path}></path></svg>
      </div>

      <div class="text" style={{ background: props.color }}>
        <div class="info">{props.info}</div><span class="caption">{props.caption}</span>
      </div>
    </div>
  }
})

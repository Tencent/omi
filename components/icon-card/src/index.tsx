import * as css from './index.scss'
import { tag, WeElement, h } from 'omi'

@tag('o-icon-card')
export default class SimpleCard extends WeElement {
  static css = css.default

  static defaultProps = {
    viewBox: '64 64 896 896'
  }

  static propTypes = {
    color: String,
    path: String,
    info: String,
    caption: String,
    viewBox: String
  }

  render(props) {
    return <div class="card">
      <div class="icon">
        <svg viewBox={props.viewBox} class="" width="3em" height="3em" fill={props.color} aria-hidden="true" focusable="false"><path d={props.path}></path></svg>
      </div>

      <div class="text" style={{ background: props.color }}>
        <div class="info">{props.info}</div><span class="caption">{props.caption}</span>
      </div>
    </div>
  }
}
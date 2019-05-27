import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
}

interface Data {

}

@tag('m-card')
export default class Card extends WeElement<Props, Data>{
  static css = theme() + css

  static resetTheme() {
    this.css = theme() + css
  }
  
  static propTypes = {
    width: String,
    img: String,
    title: String,
    subTitle: String,
    content: String
  }

  render(props) {
    return (
      <div class="mdc-card" style={`width:${props.width||'640px;'}`}>
        <div class="mdc-card__primary-action  mdc-ripple-upgraded" tabindex="0">
          <div class="mdc-card__media mdc-card__media--16-9" style={`background-image: url(${props.img});`}>
          </div>
          <div class="mdc-card__primary">
            <h2 class="mdc-typography mdc-typography--headline6">{props.title}</h2>
            <h3 class="mdc-typography mdc-typography--subtitle2">{props.subTitle}</h3>
          </div>
          <div class="mdc-card__secondary mdc-typography mdc-typography--body2">
            {props.content}
          </div>
        </div>
      </div>
    )
  }
}

import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'

//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  masonry: boolean,
  list: object
}

interface Data {

}


@tag('image-list')
export default class ImageList extends WeElement<Props, Data>{
  static css = theme() + css

  static defaultProps = {

  }

  static propTypes = {
    masonry: Boolean,
    list: Object
  }

  render(props) {
    return (
      <ul {...extractClass(props, 'mdc-image-list', {
        'mdc-image-list--masonry': props.masonry
      })}>
        {props.list.map(item => <li class="mdc-image-list__item">
          {props.masonry ?
            <img class="mdc-image-list__image" src={item.src}></img> :
            <div class="mdc-image-list__image-aspect-container">
              <img class="mdc-image-list__image" src={item.src} />
            </div>}

          <div class="mdc-image-list__supporting">
            <span class="mdc-image-list__label">{item.label}</span>
          </div>
        </li>)}


      </ul>
    )
  }
}

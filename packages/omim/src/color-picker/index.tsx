import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
//@ts-ignore
import '../theme.ts'

import * as Pickr from '@simonwep/pickr';

interface Props {

}

interface Data {

}

@tag('m-color-picker')
export default class ColorPicker extends WeElement<Props, Data>{
  static css = css

  installed() {
    const pickr = Pickr.create({
      el: this.shadowRoot.querySelector('.m-color-picker'),
      inline: true,
      components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          hsva: true,
          // cmyk: true,
          input: true,
          // clear: true,
          // save: true
        }
      }
    });
  }

  render(props) {
    return <div><div {...extractClass(props, 'm-color-picker')}>

    </div></div>
  }
}

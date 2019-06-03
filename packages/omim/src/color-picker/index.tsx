import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
//@ts-ignore
import '../theme.ts'

import Pickr from './js/pickr.js'

interface Props {
  button?: boolean,
  preview?: boolean,
  opacity?: boolean,
  hue?: boolean,

  hex?: boolean,
  rgba?: boolean,
  hsla?: boolean,
  hsva?: boolean,
  input?: boolean,
  clear?: boolean,
  save?: boolean,
  cmyk?: boolean,

  default?: string,

  swatches?: string[],

  inline?: boolean,
  strings?: {
    save: string,  // Default for save button
    clear: string // Default for clear button
  }
}

interface Data {

}

@tag('m-color-picker')
export default class ColorPicker extends WeElement<Props, Data>{
  static css = css

  picker: Pickr

  static defaultProps = {
    button: true,
    preview: true,
    opacity: true,
    hue: true,

    hex: true,
    rgba: true,
    hsla: true,
    hsva: false,
    input: true,
    clear: true,
    save: true,
    cmyk: false,

    default: '#3365B7',

    swatches: [],
    inline: true,

    strings: {
      save: 'Save',  // Default for save button
      clear: 'Clear' // Default for clear button
    }
  }

  static propTypes = {
    button: Boolean,
    preview: Boolean,
    opacity: Boolean,
    hue: Boolean,

    hex: Boolean,
    rgba: Boolean,
    hsla: Boolean,
    hsva: Boolean,
    input: Boolean,
    clear: Boolean,
    save: Boolean,
    cmyk: Boolean,

    default: String,
    swatches: Array,
    inline: Boolean,

    strings: Object

  }

  installed() {
    const picker = Pickr.create({
      el: this.shadowRoot.querySelector('.picker'),
      inline: this.props.inline,
      default: this.props.default,
      useAsButton: !this.props.button,
      swatches: this.props.swatches,

      components: {

        // Main components
        preview: this.props.preview,
        opacity: this.props.opacity,
        hue: this.props.hue,

        // Input / output Options
        interaction: {
          hex: this.props.hex,
          rgba: this.props.rgba,
          hsla: this.props.hsla,
          hsva: this.props.hsva,
          cmyk: this.props.cmyk,
          input: this.props.input,
          clear: this.props.clear,
          save: this.props.save
        }
      },
      strings: this.props.strings
    })

    picker.on('init', (...args) => {
      this.picker.show()
      this.fire('init', args[0])
    }).on('save', (...args) => {
      this.fire('save', {
        color: args[0].toHEXA().toString(),
        colorObject: args[0]
      })
    }).on('change', (...args) => {
      this.fire('change', {
        color: args[0].toHEXA().toString(),
        colorObject: args[0]
      })
    }).on('swatchselect', (...args) => {
      this.fire('swatchselect', {
        color: args[0].toHEXA().toString(),
        colorObject: args[0]
      })
    })

    this.picker = picker
  }

  render(props) {
    return (
      <div {...extractClass(props, 'm-color-picker')}>
        <div class='picker'>

        </div>
      </div>
    )
  }
}

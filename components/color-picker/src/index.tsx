import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'


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
  },
  width?: string
}

@tag('o-color-picker')
export default class ColorPicker extends WeElement<Props>{
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

    default: '#07c160',

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

    strings: Object,

    width: String

  }

  installed() {
    const picker = Pickr.create({
      el: this.shadowRoot.querySelector('.picker'),
      inline: this.props.inline,
      default: this.props.default,
      useAsButton: !this.props.button,
      swatches: this.props.swatches,
      width: this.props.width,
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
      //this.picker.show()
      this.fire('init', args[0])
    }).on('save', (...args) => {
      if (!args[0]) {
        this.fire('clear')
      } else {
        this.fire('save', {
          color: args[0].toHEXA().toString(),
          colorObject: args[0]
        })
      }
    }).on('change', (...args) => {
      this.fire('change', {
        color: args[0].toHEXA().toString(),
        colorObject: args[0]
      })
    }).on('swatch-select', (...args) => {
      this.fire('swatch-select', {
        color: args[0].toHEXA().toString(),
        colorObject: args[0]
      })
    })

    this.picker = picker

  }

  setColor(color) {
    return this.picker.setColor(color)
  }

  render(props) {
    return (
      <div {...extractClass(props, 'o-color-picker')}>
        <div class='picker'>

        </div>
      </div>
    )
  }
}

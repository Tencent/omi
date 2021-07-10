import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import css from './admin-main-welcome.css'

interface Props { }

const tagName = 'admin-main-welcome'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = [sheet.target, css]


  render() {
    return (
      <div class={tw``}>
        <div class={tw`w-4/5 sm:w-96 m-auto pt-52`}>
          <svg
            version="1.1"
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <symbol id="text">
              <text x="2%" y="35%" class="text">
                Welcome to
              </text>
              <text x="69%" y="35%" class="text">
                Admin
              </text>
            </symbol>

            <symbol id="omi">
              <text x="46%" y="35%" class="text">
                OMI
              </text>
            </symbol>
            <g>
              <use xlink:href="#omi" class="use-omi"></use>
              <use xlink:href="#omi" class="use-omi"></use>
              <use xlink:href="#omi" class="use-omi"></use>
              <use xlink:href="#omi" class="use-omi"></use>
              <use xlink:href="#omi" class="use-omi"></use>
            </g>
            <g>
              <use xlink:href="#text" class="use-text"></use>
              <use xlink:href="#text" class="use-text"></use>
              <use xlink:href="#text" class="use-text"></use>
              <use xlink:href="#text" class="use-text"></use>
              <use xlink:href="#text" class="use-text"></use>
            </g>
          </svg>
        </div>
      </div>
    )
  }
}

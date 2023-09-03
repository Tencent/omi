import { h, tag, classNames, WeElement, createRef } from 'omi'
import circleAdapter from '../_common/js/loading/circle-adapter'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'
@tag('t-loading-gradient')
export default class GradientLoading extends WeElement {
  static css = css
  conicRef = createRef()
  static isLightDom = true
  useCircleAdapter = () => {
    const el = this.conicRef.current as HTMLElement
    circleAdapter(el)
  }

  installed() {
    this.useCircleAdapter()
  }
  render(props) {
    const gradientClass = TdClassNamePrefix('loading__gradient')
    return (
      <>
        <svg
          className={classNames(gradientClass, TdClassNamePrefix('icon-loading'))}
          viewBox="0 0 14 14"
          version="1.1"
          width="1em"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 7ZM2.32273 7C2.32273 4.41682 4.41682 2.32273 7 2.32273C9.58318 2.32273 11.6773 4.41682 11.6773 7C11.6773 9.58318 9.58318 11.6773 7 11.6773C4.41682 11.6773 2.32273 9.58318 2.32273 7Z"
            fill="url(#paint0_angular_101_97)"
          />
          <path
            d="M14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 7ZM2.32273 7C2.32273 4.41682 4.41682 2.32273 7 2.32273C9.58318 2.32273 11.6773 4.41682 11.6773 7C11.6773 9.58318 9.58318 11.6773 7 11.6773C4.41682 11.6773 2.32273 9.58318 2.32273 7Z"
            fill="url(#pattern0)"
          />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_101_97" transform="scale(0.0416667)" />
            </pattern>
            <radialGradient
              id="paint0_angular_101_97"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(7.01397 6.98603) scale(3.64671 3.66129)"
            >
              <stop stop-color="white" />
              <stop offset="0.625" stop-color="white" />
            </radialGradient>
            <image
              id="image0_101_97"
              width="24"
              height="24"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA8JJREFUSEtdU91qXUUU/tbM3uecpE2w0itfwZfwVQQRxAsRxJuCF4IXgiDYliLVKoIgIoKIiKJCH8JniI1JTGOak7N/Zsn3rZnTxAObvc/Mmu9vrbEv/njqXQKSGcz4duSckBLQcz0ZcoKeLvPb4s26ZOg701mee17bsAB79PtTNxazKEVhx7fAgGwB3GWSGPocDwVoXSJiL4QEOM8lA+zz307dLDa1sSVJSBkCIGBzQMVcC1I64fd1AhIawr09/JUEz6PgtxzUWAjeHEh9Jbi6HtE1cdVRjdwe/HLqhojFaJMuqrKcsQVcVHASLLqIicpbTDzfehVR177e/5kOPBpF68xNjYzGLnJC3/FdgXvDigS9YdGafG0IGHUIZRr2yU//KCItVOarjaVCEux0CYtFwrIDVgQnidxENKyj6uZe4ADs4x9JEFNEZn63YqruOsOSQL1hpwd2lwlLutCT0ImAIx1TGIMSLhIc9tEPJy6makmzXB2xB4s+Y5GB3YVhZ2XYW2XcWBpWdNNHlASncuVepzE1zA+/P1ZE/Omy1UsXlw9ywBhuLhNu7iS8cCNhfzeLkC5ihOMchTGXuHhEdNgH3x17+0Mbmt8rhepBJoHh1l7GS7c63N7v5KLdBV2o9mzPG8wd9v63R07Ywj+tMcbB9WhSnS7248W9hFde3sXt/ayxViyqjLoIwoMtzMDe++aI+/FzwD0K+OI3aUg+To6jsxmP/7zAybljnAtKAWaeFkIQETbOVYI7X/+t9SLAqGUBD/M3zY5hBi42Bcf/FhycTDg+n/FsUzDOsV+K/+981ctU3v3qUFMkgvYu0KHJIeXDFARn64LTZzPO1o71puBydBGIxAODbim0ObF3vjzUX1rlBovm2TG76z3Ohs1YsB5cqi8uC843jvVQMIzcby4C4yqJ0n770RPfxuPAVO3OzFfxODZjPJdjOKHySxJMAT5NdOvgGUbb8DQ4b3126FSreAjKaOq7zMBmoko2GQIe6KYSEnhg/TUXDq/Nl4M3Hz7R4IidRCWU0DoJ6WCcQu1QyegmviH1o0hqH6oDChXBG5/WiGo0LCZwTAd0mOqHqYhYjhgN1c9F6hVndd5SiDEH7PUHf6kH3OCCerCNKfoQoxqKOVWsmaYgjykKguJW33FOs/Ta/QMvvEytuZogFnAq2iTVZiq6AOV+c0lyTV8d7/iOqO3VewfqQVtsKqiAa2pgja2BbwkI4oZpjvjUXK21cSXB3QOPBkeT2/VXYSUJ4Hr5BBLq475UJzWeGBiqjyb/BygJ7AGB8azIAAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>
      </>
    )
  }
}

import { tag, WeElement, h, render, classNames } from 'omi'
import flatpickr from 'flatpickr'
import { DateLimit, DateOption, Hook, Options, ParsedOptions } from 'flatpickr/dist/types/options'
import { CustomLocale } from 'flatpickr/dist/types/locale'
import StyleLoader, { FlatpickrTheme } from './style';
import { Locale } from 'flatpickr/dist/types/locale'
//import '../../icon/esm/date-range'
import { Mandarin } from "flatpickr/dist/esm/l10n/zh"
import '../../input'

interface Props {
  size?:'medium' | 'small' | 'mini'
  width?: string
  length?: string,
  locale?: string,
  placeholder?: string
  altFormat?: string
  altInput?: boolean
  altInputClass?: string
  allowInput?: boolean
  clickOpens?: boolean,
  defaultHour?: number,
  defaultMinute?: number,
  defaultSeconds?: number,
  disable?: any[],
  disableMobile?: boolean,
  enable?: any[],
  enableTime?: boolean ,
  enableSeconds?: boolean,
  hourIncrement?: number,
  minuteIncrement?: number,
  inline?: boolean,
  nextArrow?: string,
  prevArrow?: string,
  noCalendar?: boolean,
  onChange?: Hook,
  onClose?: Hook,
  onOpen?: Hook,
  onReady?: Hook,
  onValueUpdate?: Hook,
  position?: string,
  static?: boolean,
  time_24hr?: boolean,
  wrap?: boolean,
  theme?: string,
  trigger?:string
}

@tag('o-time-picker')
export default class TimePicker extends WeElement<Props> {

  static defaultProps = {
    theme: 'light',
    size: 'small',
    width: 'auto',
    noCalendar:true,
    enableTime:true,
    enableSeconds:true,
  }

  static propTypes = {
    theme: String,
    size: String,
    width: String,
    noCalendar: Boolean,
    enableTime: Boolean,
    enableSeconds: Boolean,
  }

  onEnter = (evt) => {
    clearTimeout(this.timeout)
    this.isShow = !this.isShow
    this.update()
    evt.stopPropagation()
  }

  timeout

  onLeave = () => {
    this.timeout = setTimeout(() => {
      this.isShow = false
      this.update()
    }, 600)

  }

  onEnterPopover = (evt) => {
    clearTimeout(this.timeout)
    evt.stopPropagation()
  }

  onLeavePopover = () => {
    if (this.props.trigger !== 'click') {
      this.timeout = setTimeout(() => {
        this.isShow = false
        this.update()
      }, 600)
    }

  }


async installed(): Promise<void> {
    const styleLoader = new StyleLoader(this.props.theme as FlatpickrTheme)
    await styleLoader.initStyles()
    //const { locale, ...other } = this.props
    console.log('-----pros------',this.props)
    const {locale, position, ...other } = this.props


    flatpickr(this.shadowRoot.querySelector('o-input'), {
        locale: locale === 'zh' ? Mandarin : null,
        // noCalendar:true,
        // enableTime:true,
        // enableSeconds:true,
        ...other,
        
    })
}
    isShow = false

render(props) {
    return <div> 
        {console.log(props)}
        <o-input size={props.size} css={`.o-input input {
            width: ${props.width};
        }`} type="text" />
        </div>
    }
}

render(<o-time-picker defaultHour = "1"></o-time-picker>, '#root', {
    // if using OMI to build the whole application, ignore the attributs of DOM and use props of virtual dom
    ignoreAttrs: true
})



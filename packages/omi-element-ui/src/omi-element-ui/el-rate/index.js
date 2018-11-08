import { WeElement, tag, getHost } from 'omi'
import icon from '../style/global/_icon.scss'
import style from '../style/_rate.scss'

@tag('el-rate', true)
class ElRate extends WeElement {
  css() {
    let pCss = getHost(this).css
    return icon + style + ' ' + pCss()
  }

  install() {
    const defaultColors = ['#F7BA2A', '#F7BA2A', '#F7BA2A']
    const defaultIconClasses = ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on']
    const defaultTexts = ['极差', '失望', '一般', '满意', '惊喜']
    let { 
      max = 5, 
      value, 
      disabled, 
      voidColor = '#C6D1DE', 
      disabledVoidColor = '#EFF2F7',
      lowThreshold=2,
      highThreshold=4,
      voidIconClass= 'el-icon-star-off',
      disabledVoidIconClass= 'el-icon-star-on',
      showText = false,
      showScore = false,
      scoreTemplate = '{value}',
      iconClasses = defaultIconClasses,
      colors = defaultColors,
      textColor = '#1F2D3D',
      texts = defaultTexts
    } = this.props

    if (Object.prototype.toString.apply(colors) !== '[object Array]') {
      colors = defaultColors
    }
    if (Object.prototype.toString.apply(iconClasses) !== '[object Array]') {
      iconClasses = defaultIconClasses
    }

    this.data.max = max
    this.data.colors = colors
    this.data.rateDisabled = disabled || (this.elForm || {}).disabled
    this.data.value = value
    this.data.currentValue = value
    this.data.valueDecimal = value * 100 - Math.floor(value) * 100
    this.data.scoreTemplate = scoreTemplate
    this.data.textColor = textColor
    this.data.showText = showText
    this.data.showScore = showScore
    this.data.lowThreshold = lowThreshold
    this.data.highThreshold = highThreshold
    this.data.voidColor = voidColor
    this.data.disabledVoidColor = disabledVoidColor
    this.data.voidClass = voidIconClass
    this.data.disabledVoidIconClass = disabledVoidIconClass
    this.data.texts = texts
    this.data.colorMap = {
      lowColor: colors[0],
      mediumColor: colors[1],
      highColor: colors[2],
      voidColor: voidColor,
      disabledVoidColor: disabledVoidColor
    }
    this.data.classMap = {
      lowClass: iconClasses[0],
      mediumClass: iconClasses[1],
      highClass: iconClasses[2],
      voidClass: voidIconClass,
      disabledVoidClass: disabledVoidIconClass
    }
    
    this.data.allowHalf = this.props.allowHalf
    this.data.pointerAtLeftHalf = value !== Math.floor(value)
    this.data.items = []
    for (let i=0; i< max; i++) {
      this.data.items.push(i+1)
    }
  }
  
  getActiveClass = ()=> {
    return this.getValueFromMap(this.data.currentValue, this.data.classMap)
  }

  getValueFromMap(value, map) {
    let result = ''
    if (value <= this.data.lowThreshold) {
      result = map.lowColor || map.lowClass
    } else if (value >= this.data.highThreshold) {
      result = map.highColor || map.highClass
    } else {
      result = map.mediumColor || map.mediumClass
    }
    return result
  }

  getIconStyle = item => {
    const {rateDisabled, colorMap, currentValue } = this.data
    const voidColor = rateDisabled ? colorMap.disabledVoidColor : colorMap.voidColor
    return {
      color: item <= currentValue ? this.getValueFromMap(currentValue, colorMap) : voidColor
    }
  }

  setCurrentValue = (e, value) => {
    if (this.data.rateDisabled) {
      return
    }
    if (this.data.allowHalf) {
      let target = e.target
      if (target.className.indexOf('el-rate__item')>-1) {
        target = target.querySelector('.el-rate__icon')
      }
      if (target.className.indexOf('el-rate__decimal')>-1) {
        target = target.parentNode
      }
      this.data.pointerAtLeftHalf = e.offsetX * 2 <= target.clientWidth
      this.data.currentValue = this.data.pointerAtLeftHalf ? value - 0.5 : value
    } else {
      this.data.currentValue = value
    }
    this.data.hoverIndex = value

    this.update()
  }

  resetCurrentValue = ()=> {
    if (this.data.rateDisabled) {
      return
    }
    if (this.data.allowHalf) {
      this.data.pointerAtLeftHalf = this.data.value !== Math.floor(this.data.value)
    }
    console.log(this.props.value)
    this.data.currentValue = this.props.value
    this.data.hoverIndex = -1
    this.update()
  }

  selectValue = item => {
    if (this.data.rateDisabled) {
      return
    }
    if (this.data.allowHalf && this.data.pointerAtLeftHalf) {
      this.fire('input', this.data.currentValue)
      this.fire('change', this.data.currentValue)
    } else {
      this.fire('input', item)
      this.fire('change', item)
    }
  }

  showDecimalIcon = item => {
    let showWhenDisabled = this.data.rateDisabled && this.data.valueDecimal > 0 && item - 1 < this.data.value && item > this.data.value
    let showWhenAllowHalf = this.data.allowHalf &&
      this.data.pointerAtLeftHalf &&
      item - 0.5 <= this.data.currentValue &&
      item > this.data.currentValue
    return showWhenDisabled || showWhenAllowHalf
  }

  decimalStyle() {
    let width = ''
    if (this.data.rateDisabled) {
      width = `${ this.data.valueDecimal < 50 ? 0 : 50 }%`
    }
    if (this.data.allowHalf) {
      width = '50%'
    }
    return {
      color: this.getValueFromMap(this.data.currentValue, this.data.colorMap),
      width
    }
  }

  decimalIconClass() {
    return this.getValueFromMap(this.data.value, this.data.classMap)
  }

  getIconClasses = key=> {
    let result = []
    let i = 0
    let threshold = this.data.currentValue
    if (this.data.allowHalf && this.data.currentValue !== Math.floor(this.data.currentValue)) {
      threshold--
    }
    for (; i < threshold; i++) {
      result.push(this.getValueFromMap(this.data.currentValue, this.data.classMap))
    }
    for (; i < this.data.max; i++) {
      result.push(this.data.voidClass)
    }
    return result[key-1]
  }

  getText = ()=> {
    let text = ''
    if (this.data.showScore) {
      text = this.data.scoreTemplate.replace(/\{\s*value\s*\}/, this.data.rateDisabled ? this.props.value : this.data.currentValue)
    } else if (this.data.showText) {
      text = this.data.texts[Math.ceil(this.data.currentValue) - 1]
    }
    return text
  }

  render(props, data) {
    let {rateDisabled, currentValue, showText, showScore, textColor } = data
    return (
      <div
        class="el-rate"
        role="slider"
        aria-valuemin={currentValue}
        tabindex="0">
        {
          data.items.map((item, key)=> {
            let ic = item <=currentValue ? ' el-icon-star-on ' : ' el-icon-star-off '
            if (item === currentValue) {
              ic += ' hover'
            }
            return (
              <span key={key}
                class="el-rate__item"
                onMouseMove={(e)=>this.setCurrentValue(e, item)}
                onMouseLeave={this.resetCurrentValue}
                onClick={()=>this.selectValue(item)}
                style={{cursor: rateDisabled ? 'auto' : 'pointer'}}>
                <i class={"el-rate__icon " + this.getIconClasses(item)}
                  style={this.getIconStyle(item)} >
                  {
                      this.showDecimalIcon(item) ? 
                        <i
                          style={this.decimalStyle()}
                          class={"el-rate__decimal " + this.decimalIconClass()}>
                        </i>
                      : null
                  }
                </i>
              </span>
            )
          })
        }
        {
          showText || showScore ? <span class="el-rate__text" style={{color: textColor}}>{ this.getText() }</span> : null
        }
      </div>
    )
  }
}

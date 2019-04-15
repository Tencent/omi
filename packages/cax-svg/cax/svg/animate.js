import pathTransition from '../pasition/index'
import { toSVGString } from '../common/util'

export function animate(obj, option) {
  const valueList = option.values.split(';').filter(item => item.trim() !== '')
  let index = 0,
    count = 0,
    stage
  const len = valueList.length
  const duration = parseFloat(option.dur) / len * 1000
  function _animate() {
    const nextIndex = index + 1 === len ? 0 : index + 1
    if (index + 1 === len) count++
    pathTransition.animate({
      from: valueList[index],
      to: valueList[nextIndex],
      duration: duration,
      easing: function (v) { return v },
      begin: function () {
        stage = obj.stage
      },
      progress: function (shapes, percent) {
        obj.d = toSVGString(shapes)
        stage.update()
      },
      end: function (shapes) {
        index = nextIndex
        if (option.repeatCount === 'indefinite') {
          _animate()
        } else if (count < Number(option.repeatCount)) {
          _animate()
        }
      }
    })
  }

  if (obj.stage) {
    _animate()
  } else {
    obj.addedStage = () => {
      _animate()
    }
  }

}
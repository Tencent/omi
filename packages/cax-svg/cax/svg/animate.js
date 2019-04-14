import pathTransition from '../pasition/index'

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


function toSVGString(shapes) {
  return shapes.map(function (shape) {
    shape.forEach(function (point, idx) {
      if (!idx) {
        /*
         * 若是第一个点数组，那么对该点数组的处理是前面加M,然后前两个点后面加C
         * */
        point.splice(2, 0, "C");
        point.unshift("M");
      } else {
        /*
         * 除了第一个点数据外,所有的点数组的前两个点删除掉
         * */
        point.splice(0, 2, "C");
      }
    });
    return shape.map(function (point) {
      return point.join(" ");
    }).join("");
  }).join("")
};

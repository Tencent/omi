# Tencent Omio 배포 - IE8 과 모바일 브라우저 전면지원

Wechat Pay, Mobile QQ, Tencent TEG, Tencent IEG 등 많은 팀에서 여러 프로젝트와 내부 관리 시스템에서 Omi를 사용할수 있었습니다. 그리고 Omi가 많은 브라우저 와 환경을 지원하기위해 Omio를 개발하게 되었습니다. Omio는 Omi와 거의 똑같은 신택스로 사용할 수 있습니다.

> 구 브라우저와 호환 가능한 Omi의 버전 [→ Github](https://github.com/Tencent/omi/tree/master/packages/omio)

![](https://github.com/Tencent/omi/blob/master/assets/omio-ie.png)

---

## Usage

```bash
$ npm i omi-cli -g             
$ omi init-o my-app   
$ cd my-app           
$ npm start                     
$ npm run build               
```

### Omi와 다른점

Omio 의 사용 신택스는 Omi와 같습니다. 하지만, 여기에는 조금 다른 점이 있습니다:

* Omio 는 `staticCss`를 지원합니다, Omi는 지원하지 않습니다.

`css` 와 `staticCss` 메서드는 뭐가 다를까요? 예를들면:

``` js
render() {
  return (
    <div>
      <my-ele name={this.name}></my-ele>
      <my-ele name={this.name}></my-ele>
      <my-ele name={this.name}></my-ele>
    </div>
  )
}
```

`css` 메서드는 head 엘리먼트에 세번 렌더를 합니다. `staticCss`는 오직 한번만 렌더 합니다!
컴포넌트가 업데이트되면 `css` 메서드는 새로 렌더 합니다, 그러나 `staticCss`는 새로 렌더하지 않습니다.

* Omio 는 slot을 지원하지 않습니다. React 처럼 `props.children`을 대신 사용해주세요.
* Omio 는 store 를 주입합니다. 단, store path updating을 지원하지 않습니다.
* Omio 는 render array 를 지원하지 않습니다. 단, 이후에는 지원할 예정입니다.
* Omio 는 `fire`를 통한 커스텀이벤트 트리거를 지원하지 않습니다. 그러나 React와 같이 `props.xxx()` 를 사용하여 트리거할 수 있습니다. Omi는 `fire` 와 `props.xxx()` 두 방식 모두 지원합니다.


## Use in Omi Project

설치:

``` bash
npm i omio
```

Webpack Alias 설정

만약 Omi 프로젝트에 Omio를 사용하고 있으면 아래의 설정만 해주면 됩니다.
다른 코드 수정이 필요 없습니다:

```js
module.exports = {
  //...
  resolve: {
    alias: {
      omi: 'omio'
    }
  }
};
```

## IE 와 호환가능

### 첫번째 함정 - Pseudo 배열

IE의 querySelectorAll 에 array 관련 배열 메서드가 없습니다:
``` js
const codes = document.querySelectorAll('xxx')
// 실패합니다
codesArr.forEach(() => {

})
```

진짜 배열로 전환해야 합니다:

``` js
const codes = Array.prototype.slice.call(document.querySelectorAll('xxx'))
```

### 두번째 함정 - 정적속성이 없습니다.

이것은 Omi 의 코드입니다:

``` js
function define(name, ctor) {
  if (ctor.is === 'WeElement') {
    options.mapping[name] = ctor;
    if (ctor.data && !ctor.pure) {
      ctor.updatePath = getUpdatePath(ctor.data);
    }
  }
}
```

그러나 IE 에서는 if 조건의 코드를 입력할 수 없습니다. Omi 소스코드에는 정적속성이 있습니다:

``` js
class WeElement {
  static is = 'WeElement'

  constructor(props, store) {
    ...
  }
  ...
  ...
  render() { }
}
```

왜 정적속성을 잃어버리는걸까요? 추적해봅시다:

define 사용:

``` js
define('my-p', class extends WeElement {
  render(props) {
    return props.children[0]
  }
})
```

컴파일후코드:

``` js
define('my-p', function (_WeElement) {
  _inherits(_class, _WeElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, _WeElement.apply(this, arguments));
  }

  _class.prototype.render = function render$$1(props) {
    return props.children[0];
  };

  return _class;
}(WeElement));
```

문제는 바로 _inherits 프로세스 중에 `is` 가 손실되게 되었습니다!

``` js
function _inherits(subClass, superClass) {
  subClass.prototype = Object.create(superClass && superClass.prototype, { 
    constructor: { 
      value: subClass, 
      enumerable: false, 
      writable: true, 
      configurable: true 
    } 
  }); 
  if (superClass) {
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  } 
}
```

좋습니다. 컴파일되고 주입된 코드이기 때문에 추후에 순수함수의 구성요소 정의를 지원해야할 수도 있습니다:

```js
function define(name, ctor) {
  //if (ctor.is === 'WeElement') {
    options.mapping[name] = ctor;
    if (ctor.data && !ctor.pure) {
      ctor.updatePath = getUpdatePath(ctor.data);
    }
  //}
}
```

### 세번째 함정 - IE의 Object.assign 미지원

Omio 소스코드에서 Object.assign이 사용되었으므로 polyfill 사용이 필요합니다:

```js
if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
```

IE9는 ES5를 지원하고 Webpack은 ES5로 변환하기 때문에 [es5-shim](https://github.com/es-shims/es5-shim)를 추가할 필요가 없습니다.

### 네번째 함정 - Proxy 미지원

Omi는 데이터 변경을 모니터링할 필요가 있어 Proxy를 사용하기 때문에 다운그레이드 된 방법이 필요 합니다 - [obaa 라이브러리](https://github.com/Tencent/omi/tree/master/packages/obaa), 모든 객체에 대한 임의의 변경 모니터링.


#### obaa install

```js
npm install obaa
```

### Usage

observe object:

```js
var obj = { a: 1 };
obaa(obj, function (name, value , old) {
    console.log(name + "__" + value + "__" + old);
});
obj.a = 2; //a__2__1 
```

observe array:

```js
var arr = [1, 2, 3];
obaa(arr, function (name, value, old) {
    console.log(name + "__" + value+"__"+old);
});
arr.push(4);//Array-push__[1,2,3,4]__[1,2,3] 
arr[3] = 5;//3__5__4
```

observe class instance:

```js
var User = function (name, age) {
    this.name = name;
    this.age = age;
    //observe name only
    obaa(this, ["name"], function (name, value, oldValue) {
        console.log(name + "__" + value + "__" + oldValue);
    });
}
var user = new User("lisi", 25);
user.name = "wangwu";//name__wangwu__lisi 
user.age = 20; //nothing output
```

기타:

```js
arr.push(111) //trigger observe callback
//every method of array has a pureXXX function
arr.purePush(111) //don't trigger observe callback

arr.size(2) //trigger observe callback
arr.length = 2 //don't trigger observe callback

//if obj.c is undefined
obaa.set(obj, 'c', 3)
obj.c = 4 //trigger observe callback

//if obj.c is undefined
obj.c = 3
obj.c = 4 //don't trigger observe callback
```

### 다섯번째 함정 - MVVM 의 mappingjs 미지원

![](https://github.com/Tencent/omi/blob/master/assets/mappingjs.png)

mappingjs는 Proxy를 완전히 이용합니다. 그래서 데이터 mapping 프로세스중에 뷰가 자동으로 업데이트 됩니다. 
그러나 obaa로 변경한후, 배열 length 가 새 뷰에서 업데이트 되지 않는것으로 나타났고 배열의 증가가 업데이트 되지 않는 것으로 나타났습니다. mappingjs review 후 확인된 사항:

* mappingjs 는 array.length를 사용하여 배열의 길이를 변
경합니다.
* mappingjs 는 array[index]를 사용하여 요소를 추가합니다.

이것은 obaa에서 허용되지 않습니다. 그렇지 않으면 모니터링할 수 없습니다. obaa는 다음을 필요로 합니다:

* array.size(len)을 사용해서 배열의 길이 변경.
* array.push를 사용하여 요소 추가

따라서 [mappingjs-omio](https://github.com/Tencent/omi/blob/master/packages/omi-cli/template/o/src/utils/mapping-omio.js)가 있습니다. 이 경우, Omio는 실제 MVVM 라이브러리를 똑같이 사용할 수 있습니다.

## Omio 실제 사용

[md2site](https://tencent.github.io/omi/assets/md2site/) 완전히 Omio 사용해서 만듭니다, 가독성이 높고 호환성이 좋습니다.

![](https://github.com/Tencent/omi/blob/master/assets/ie9a.jpg)

![](https://github.com/Tencent/omi/blob/master/assets/ie9b.jpg)

![](https://github.com/Tencent/omi/blob/master/assets/mobile.jpg)

## Support IE8 

### 첫번째 함정 - 키워드를 key로 사용

```js
const map = {
  var: 'view',
  switch: 'switch'
}
```

이렇게 변경:

```js
const map = {
  'var': 'view',
  'switch': 'switch'
}
```

키워드는 JSON 의 关键字不能作为 JSON 的 key。

### 두번째 함정 - Object.assign polyfill 사용불가능

Object.assign polyfill 은 IE8에서 오류를 주는 `Object.defineProperty`를 사용하므로 Object.assign을 `object-assign`으로 대체하세요:

```js
'use strict'
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols
var hasOwnProperty = Object.prototype.hasOwnProperty
var propIsEnumerable = Object.prototype.propertyIsEnumerable

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined')
  }

  return Object(val)
}

export function assign(target, source) {
  var from
  var to = toObject(target)
  var symbols

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s])

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key]
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from)
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]]
        }
      }
    }
  }

  return to
}
```

### 세번째 함정 - Object.create 사용불가능

polyfill을 사용하고 아래 코드를 주석처리 하십시오! 왜냐하면 두 매개변수를 전달하면 polyfill을 사용할 수 없습니다!

```js
if (typeof Object.create !== 'function') {
  Object.create = function(proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
      throw new TypeError('Object prototype may only be an Object: ' + proto)
    } else if (proto === null) {
      throw new Error(
        "This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument."
      )
    }

    // if (typeof propertiesObject != 'undefined') {
    //     throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
    // }

    function F() {}
    F.prototype = proto

    return new F()
  }
}
```

### 네번째 함정 - 노드 설정 속성

```
//ie8 error
try {
  out[ATTR_KEY] = true
} catch (e) {}
```

직접 try catch 로 감싸서 테스트는 정상적인 사용에 영향을 미치지 않습니다.

### 다섯번째 함정 - addEventListener 와 removeEventListener

MDN의 polyfill이 여기에 직접 사용되며 다른 polyfill은 모두 함정이 있습니다!

```js
if (!Element.prototype.addEventListener) {
  var oListeners = {};
  function runListeners(oEvent) {
    if (!oEvent) { oEvent = window.event; }
    for (var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type]; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) {
        for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) { oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent); }
        break;
      }
    }
  }
  Element.prototype.addEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (oListeners.hasOwnProperty(sEventType)) {
      var oEvtListeners = oListeners[sEventType];
      for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
        if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
      }
      if (nElIdx === -1) {
        oEvtListeners.aEls.push(this);
        oEvtListeners.aEvts.push([fListener]);
        this["on" + sEventType] = runListeners;
      } else {
        var aElListeners = oEvtListeners.aEvts[nElIdx];
        if (this["on" + sEventType] !== runListeners) {
          aElListeners.splice(0);
          this["on" + sEventType] = runListeners;
        }
        for (var iLstId = 0; iLstId < aElListeners.length; iLstId++) {
          if (aElListeners[iLstId] === fListener) { return; }
        }
        aElListeners.push(fListener);
      }
    } else {
      oListeners[sEventType] = { aEls: [this], aEvts: [[fListener]] };
      this["on" + sEventType] = runListeners;
    }
  };
  Element.prototype.removeEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (!oListeners.hasOwnProperty(sEventType)) { return; }
    var oEvtListeners = oListeners[sEventType];
    for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
    }
    if (nElIdx === -1) { return; }
    for (var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx]; iLstId < aElListeners.length; iLstId++) {
      if (aElListeners[iLstId] === fListener) { aElListeners.splice(iLstId, 1); }
    }
  };
}
```

### 여섯번째 함정 - string trim 미지원

```js
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
  }
}
```

### 일곱번째 함정 - 데이터 모니터링

```js
import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
  // ie8는 observe 사용 불가능
  // static observe = true

  data = {
    count: 1
  }

  sub = () => {
    this.data.count--
    // 수동 update
    this.update()
  }

  add = () => {
    this.data.count++
    // 수동 update
    this.update()
  }

  render() {
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{this.data.count}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
})

render(<my-counter />, 'body')
```

만약 IE8과 호환할 필요가 없다면 데이터 리스너에 대해 `static observe = true`를 사용하여 뷰를 자동으로 업데이트 할 수 있습니다.

### 여덟번째 함정 - ES5 Shim

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-shim.min.js"></script>
```

## 사용합시다

[→ Omi Github](https://github.com/Tencent/omi/tree/master/packages/omio)
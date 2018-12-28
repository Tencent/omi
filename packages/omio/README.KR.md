한국어 | [English](./README.md) | [简体中文](./README.CN.md) 

# Omio

> Omio 는 Omi의 구 브라우저(IE8+ 와 모바일브라우저) 지원 버전입니다.

---

## Usage

```bash
$ npm i omi-cli -g             
$ omi init-o my-app   
$ cd my-app           
$ npm start                     
$ npm run build               
```

## Omi와 다른점

Omio 의 사용 신택스는 Omi와 같습니다. 하지만, 여기에는 조금 다른 점이 있습니다:

* Omio 는 slot을 지원하지 않습니다. React 처럼 `props.children`을 대신 사용해주세요.
* Omio는 store path 업데이트를 지원하지 않습니다.


## Use in Omi project

``` bash
npm i omio
```

### Webpack Alias

만약 기존 Omi 프로젝트에서 Omio를 사용한다면, 기존 코드는 수정할 필요 없이 설정(configuration) 만 수정하면 됩니다:

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

## Support IE8

```js
import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
  // ie8는 observe를 사용할 수 없습니다
  // static observe = true

  data = {
    count: 1
  }

  sub = () => {
    this.data.count--
    // observe를 지원하지 않기 때문에 this.update를 수동으로 호출해야 합니다.
    this.update()
  }

  add = () => {
    this.data.count++
    // observe를 지원하지 않기 때문에 this.updqte를 수동으로 호출해야 합니다.
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

만약 당신이 IE9 와 IE9+ 부터 지원한다면 `static observe = true`를 사용할 수 있습니다.

## 관련문서

* [Omio는 IE8과 호환됩니다](https://github.com/Tencent/omi/blob/master/tutorial/omio.kr.md)

## License

[MIT](https://github.com/Tencent/omi/blob/master/LICENSE) © [dntzhang](https://github.com/dntzhang)

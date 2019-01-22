## Omiu 

Omiu is the official UI component library of Omi, based on Omio(IE8+) and compatible with Omi, using the design style of Wechat 7.0.

## Colors

|  **Color**  | **Meaning**  |
| ------------- |:-------------:|
| #07C160  | Noble Vigorous Green | 
| #171717  | Steady Elegant Black |   
| #FEFEFE  | Transcendent White |   
| #F95050  | Temperament Eye-catching Red |   
| #ECECEC  | Lost Indifferent Gray |   


## Use it immediately

```
npm i omi-cli -g             
omi init my-app   
cd my-app           
npm start                     
npm run build    
```

> `npx omi-cli init my-app` is also supported(npm v5.2.0+).

## Use it in existing project

```js
npm i omiu
```

```js
import { WeElement, define, render } from 'omi'
import 'omiu/button'

define('my-app', class extends WeElement {
  onClick = () => {
    console.log('Hello omiu!');
  }

  render() {
    return (
      <o-button onClick={this.onClick}>I am button.</o-button>
    )
  }
})

render(<my-app />, 'body')
```

Because other components such as dist `omiu / button `published are written by E6 +, you need to set JS under node modules to run normally after Babel or TS compilation. Or import all:

```js
import 'omiu/dist/omiu.js'
```

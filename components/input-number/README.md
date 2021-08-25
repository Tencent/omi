# InputNumber

InputNumber

## Import

```js
import '@omiu/input-number'
```

Or use script input-number to ref it.

```html
<script src="https://unpkg.com/@omiu/input-number"></script>
```

## Usage

```html
<o-input-number></o-input-number>

```
## API

### Props

```tsx
  /**
   * 值
   */
  value?: string,
  /**
   * 尺寸
   */
  size?: 'medium' | 'small' | 'mini',
  /**
   * 布局风格
   */
  style?:'justify'| 'right' |'left',
  /**
   * 布局风格
   */
  disabled?:boolean,
  /**
   * 步长
   */
  step?:number,
  /**
   * 严格步长
   */
  strictly?:boolean,
  /**
   * 最大值
  */
  max?:number,
  /**
   * 最小值
  */
  min?:number,
  /**
   * 精度
  */
  precision?:number
```
## Install

```bash
npm i
```

## Dev

```bash
cd components/input-number
npm start
```

## Release

```bash
npm run build
```

# Cascader

Cascader

## Import

```js
import '@omiu/cascader'
```

Or use script tag to ref it.

```html
<script src="https://unpkg.com/@omiu/cascader"></script>
```

## Usage

```html
<o-cascader></o-cascader>
```

## API

### Props

```tsx
interface CascaderOption {
  value: string
  label: string
  /**
   * 是否禁用
   */
  disabled: boolean
  children?: CascaderOption[]
}

export interface CascaderProps {
  /**
   * 当前值（从父到子应当是一个数组）
   */
  value: string[]
  /**
   * 选项列表
   */
  options: CascaderOption[]
  /**
   * 尺寸 Todo
   */
  size?: 'default' | 'medium' | 'small' | 'mini'
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 选项被点击后的回调函数
   */
  onOptionClick?: (item: any, index: any, evt: any) => void
}
```

### 默认属性

```tsx
{
  value: []
}
```

## Dev

尝试使用 vite 构建

```bash
cd components/cascader
yarn
# 开发预览
yarn dev
# 构建（目录位于 dist）
yarn build
# 构建 demo
yarn build:demo
# 构建 scss
yarn build:scss
```

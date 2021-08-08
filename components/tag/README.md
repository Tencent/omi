# tag

tag

## Import

```js
import '@omiu/tag'
```

Or use script tag to ref it.

```html
<script src="https://unpkg.com/@omiu/tag"></script>
```

## Usage

```html
<o-tag></o-tag>
```

## API

### Props

```tsx
export interface TagProps {
  /**
   * 类型
   */
  type?: 'success' | 'info' | 'warning' | 'danger'
  /**
   * 是否可关闭
   */
  closable?: boolean
  /**
   * 背景色
   */
  color?: string
  /**
   * 尺寸
   */
  size?: 'default' | 'medium' | 'small' | 'mini'
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 点击 Tag 时触发的事件
   */
  onClick?: (e: MouseEvent) => void
  /**
   * 关闭 Tag 时触发的事件
   */
  onClose?: (e: MouseEvent) => void
}
```

### 默认属性

```tsx
TagProps = {
  disabled: false,
  size: 'default',
  closable: false
}
```

## Dev

```bash
cd components/tag
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

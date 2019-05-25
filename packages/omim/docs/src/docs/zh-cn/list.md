## List

列表是文本或图像的连续垂直索引。

## 使用

```html
<m-list
  onChange="onChange(event)"
  css="
    .mdc-list,.mdc-list-group {
      max-width: 600px;
      border: 1px solid rgba(0,0,0,.1);
    }
  ">
  <item text='Inbox'>
    <graphic><m-icon-button icon='inbox'></m-icon-button></graphic>
  </item>
  <item activated='true' text='Star'>
    <graphic><m-icon-button icon='star'></m-icon-button></graphic>
  </item>
  <item text='Send'>
    <graphic><m-icon-button icon='send'></m-icon-button></graphic>
  </item>
  <item text='Drafts'>
    <graphic><m-icon-button icon='drafts'></m-icon-button></graphic>
  </item>
</m-list>
```

## Omi 中使用

JSX:

```jsx
<m-list onChange={this.onChange} css={this.css}>
  <item graphic={<m-icon-button icons={['bookmark_border', 'inbox']}></m-icon-button>}>Inbox</item>
  <item activated graphic={<m-icon-button icons={['check_circle_outline', 'star']}></m-icon-button>}>Star</item>
  <item graphic={<m-icon-button icons={['search', 'send']}></m-icon-button>}>Send</item>
  <item graphic={<m-icon-button icons={['settings', 'drafts']}></m-icon-button>}>Drafts</item>
</m-list>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| **m-list 属性** | -- | -- | -- |
| group | boolean | -- | 使用列表组 |
| disabled | boolean | -- | 禁用 |
| dense | boolean | -- | 紧凑高度 |
| avatar | boolean | -- | 中等高度 |
| two-line | boolean | -- | 两倍行距高度 |
| **item 属性** | -- | -- | -- |
| divider | boolean | -- | 分割线 |
| padded | boolean | -- | 左右两边不填充分割线 |
| inset | boolean | -- | 头像处不填充分割线 |
| disabled | boolean | -- | 禁用 |
| selected | element | -- | 选中 |
| activated | boolean | -- | 一直选中 |
| graphic | element | -- | 最左边内容 |
| text | string | -- | 中间文本 |
| primary-text | string | -- | 中间上方文本 |
| secondary-text | string | -- | 中间下方文本 |
| meta | element | -- | 最右边内容 |

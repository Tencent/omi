## List

Lists are continuous, vertical indexes of text or images.

## Usage

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

## Usage in Omi

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
| **m-list attribute** | -- | -- | -- |
| group | boolean | -- | Using list groups |
| disabled | boolean | -- | Disabled |
| dense | boolean | -- | Compact height |
| avatar | boolean | -- | Medium height |
| two-line | boolean | -- | Double line height |
| **item attribute** | -- | -- | -- |
| divider | boolean | -- | Dividing line |
| padded | boolean | -- | The left and right sides are not filled with dividing lines |
| inset | boolean | -- | The avatar is not filled with dividing lines |
| disabled | boolean | -- | Disabled |
| selected | element | -- | Selected |
| activated | boolean | -- | Always selected |
| graphic | element | -- | Leftmost content |
| text | string | -- | Intermediate text |
| primary-text | string | -- | Upper middle text |
| secondary-text | string | -- | Secondary text |
| meta | element | -- | Rightmost content |

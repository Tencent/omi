## Menu

A menu displays a list of choices on a temporary surface. They appear when users interact with a button, action, or other control.

## Usage

```html
<m-menu anchor id="menu" onSelected="onSelected()" list="[
  { text: 'A Menu Item' },
  { text: 'A Disabled Menu Item', disabled: true },
  { text: 'Another Menu Item' }
]">
</m-menu>
```

## Used in Omi

JSX:

```jsx
<m-menu anchor show={this.show} onSelected={this.onSelected} list={[
  { text: 'A Menu Item' },
  { text: 'A Disabled Menu Item', disabled: true },
  { text: 'Another Menu Item' }
]}></m-menu>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| show | boolean | -- | Show menu or not |
| list | object | -- | List the content |
| anchor | boolean | -- | Automatically determines the parent element |
| onSelected | function | -- | Select the trigger |

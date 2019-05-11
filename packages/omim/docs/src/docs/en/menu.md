## Menu

A menu displays a list of choices on a temporary surface. They appear when users interact with a button, action, or other control.

## Usage

```jsx
<m-menu anchor id="menu" onSelected="onSelected()" list="[
  { text: 'A Menu Item' },
  { text: 'A Disabled Menu Item', disabled: true },
  { text: 'Another Menu Item' }
]">
</m-menu>
```

## API

### Props

```jsx
{
  show?: boolean,
  list: object,
  anchor: boolean
}
```
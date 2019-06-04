## Drawer

The Navigation Drawer is used to organize access to destinations and other functionality on an app.

## Usage

```html
 <m-drawer
  show
  position="left">
  <m-list
    single-selection
    css="ul{
      width:200px;
      height:100vh;
      border: 1px solid rgba(0,0,0,.1);
      background:#fff;
    }"
    items="...">
  </m-list>
</m-drawer>
```

## Usage in Omi

JSX:

```jsx
<m-drawer
  show={this.show}
  position='left'
  onClose={this.onClose}>
  <m-list
    singleSelection
    css={`ul{
      width:200px;
      height:100vh;
      border: 1px solid rgba(0,0,0,.1);
      background:#fff;
    }`}
    items={this.items}
    onItemClick={this.onItemClick}>
  </m-list>
</m-drawer>
```

## API

### Props

```jsx
{
  position?: 'left' | 'right' | 'top' | 'bottom',
  show?: boolean
}
```
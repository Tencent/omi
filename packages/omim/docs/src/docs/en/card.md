## Card

Card contain content and actions about a single subject.

## Usage

```html
<m-card width='350px' title='Our Changing Planet' sub-title='by Kurt Wagner' content='Visit ten places on our planet that are undergoing the biggest changes today.'
  img='https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg' buttons="['READ', 'BOOKMARK']"
  icons="['wifi', ['favorite', 'favorite_border'], 'share']" id="myCart">
</m-card>
```


## API

### Props

```jsx
{
  width?: string,
  img?: string,
  title: string,
  subTitle?: string,
  content: string,
  buttons?: object,
  icons?: object
}
```

### Event

```jsx
{
  onButtonAction?: function,
  onIconAction?: function
}
```
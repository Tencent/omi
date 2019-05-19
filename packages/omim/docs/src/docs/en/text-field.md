## TextField 

User's input box, enter some content for submission to the server.

## Usage

```html
<m-text-field label='Label' helper-text='helper text' ></m-text-field>

<m-text-field
  helper-text='Helper Text'
  icon-right
  path='M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z'
  label='Label2'
  css='
    .mdc-text-field {
      width:200px;
    }
  '
></m-text-field>
```

## Used in Omi

JSX:

```jsx
<m-text-field label='Label1' helperText='Helper Text' />

<m-text-field
  helperText='Helper Text'
  iconRight
  path='M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z'
  label='Label2'
  css={`
    .mdc-text-field { 
        width:200px;
    }
  `}
/>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| full-width | boolean | -- | Use the parent element width |
| textarea | boolean | -- | Multi-line input, and the mouse can be dragged to set the size of the input box |
| outlined | boolean | -- | Add a border to the input box |
| no-label | boolean | -- | The input box has no default label |
| show-helper | boolean | true | Display help text |
| helper-text | string | -- | Help text |
| icon-right | boolean | -- | The icon is on the right |
| counter | boolean | -- | Record the number of input characters, match min-length, max-length be used together |
| path | string | -- | icon path |
| paths | string | -- | Many icons path |
| label | string | -- | Label defaults |
| required | boolean | -- | Checks if the input box is empty |
| pattern | string | -- | Input value limitation and detection |
| min-length | number | -- | Input character minimum length, match counter be used together |
| max-length | number | -- | Input character maximum length, match counter be used together |
| min | number | -- |  |
| max | number | -- |  |
| step | number | -- |  |
| rows | number | -- | The height of the multi-line input box, is n times the height of the line |
| cols | number | -- |  The width of the multiline input box. The numeric value represents the width of n characters |
| value | string | -- | Default input value |
| disabled | boolean | -- | Input box prohibit |

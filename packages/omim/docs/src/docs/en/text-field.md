## TextField 

User's input box, enter some content for submission to the server.

## Usage

```html
<m-text-field label='Label' helper-text='helper text' ></m-text-field>
```


## API

### Props

```jsx
{
    fullWidth: boolean;
    textarea: boolean;
    outlined: boolean;
    noLabel: boolean;
    showHelper: boolean;
    helperText: string;
    iconRight: boolean;
    counter: boolean;
    label: string;
    required: boolean;
    pattern: string;
    minLength: number;
    maxLength: number;
    min: number;
    max: number;
    step: number;
    rows: number;
    cols: number;
    value: string;
    disabled: boolean;
    useNativeValidation: boolean;
    valid: boolean;
    helperTextContent: string;
    leadingIconAriaLabel: string;
    trailingIconAriaLabel: string;
    leadingIconContent: string;
    trailingIconContent: string;
}
```
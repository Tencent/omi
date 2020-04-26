## Explanation 

If you are familiar with TypeScript, you can easily understand these parts of the document:

* Props
* defaultProps
* Events

Now, let me show you some examples.

## Props

> All properties, types, and optional values

```tsx
{
  //size of component
  size?: 'medium' | 'small' | 'mini';
  //text color in the button
  color: string;
  plain?: boolean;
}
```

* Attribute name before `:`, 'type or optional value after `:`
* The `|` separator represents an optional default value
* Notes represent descriptions of properties
* Representative with `?` is not required

## defaultProps 

> Represents the default value of the property

```tsx
{
  size: 'medium' 
}
```

Not all properties need to have default values.

## Events

> The events supported by the component belong to `CustomEvent` ，Therefore, the data passed by the component to the event listener can be obtained from `event.detail`.

* change -  triggered by text change, `event.detail` type declaration:
```tsx
{
  value: string
}
```

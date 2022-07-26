# Transfer
穿梭框

## Import

```js
import '@omiu/transfer'
```

Or use script tag to ref it.

```html
<script src="https://unpkg.com/@omiu/transfer"></script>
```

## Usage

```html
<o-transfer></o-transfer>
```

## API

### Props

```tsx
{
  data: Array<Object>,
  value: Array<Number>,
  titles: Array<Object>,
}

//data
{
  key: Number, //唯一标识符
  table: String, //显示出来的值
  disable: Boolean //是否可被选
}
```


### Default Props

```tsx
    
{ 
  data: [],
  value: [],
  titles: ["列表1", "列表2"],
}
    
```

### Events


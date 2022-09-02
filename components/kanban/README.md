# Kanban

Description for component.

- [→ CodePen](https://codepen.io/omijs/pen/)

## Import

```js
import '@omiu/o-kanban'
```

Or use script tag to ref it.

```html
<script src="https://unpkg.com/@omiu/counter_to_be_replace"></script>
```

## Usage

```html
<o-kanban></o-kanban>
```

## API

### Props

```tsx
{
  dataSource: T[];
  title?:string;
  renderItem?:renderItemType;
  onEnd:(data:T[])=>void;

  isLimited?:boolean;//是否固定高度，改为滚动 未实装
  height?:string;
  width?:string;
}
```

### dataSource

```tsx
CardType{
  id?:number;
  title?:string;
}
DataType{
  id?:number;
  title?:string;
  cards:CardType[];
}
dataSource:DataType[];
```

### Default Props

```tsx
{
  
}
```

### Events

- onEnd

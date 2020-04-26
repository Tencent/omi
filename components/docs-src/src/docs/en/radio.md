## Radio  

Used to select one of several options.

<iframe height="315" style="width: 100%;" scrolling="no" title="OMIU Radio" src="https://codepen.io/omijs/embed/GRpjapr?height=315&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/GRpjapr'>OMIU Radio</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Import

```js
import '@omiu/radio'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/radio"></script>
```

## Usage

```html
<o-radio name="sex" value="0">Man</o-radio>
<o-radio name="sex" value="1">Women</o-radio>
<script>
  document.querySelectorAll("o-radio[name='sex']").forEach(function(radio){
    radio.addEventListener('change', function(evt){
      console.log(evt.detail)
    })
  })
</script>
```


## API

### Props

```tsx
{
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  value: string;
  name?: string;
}
```

## Events

* change
